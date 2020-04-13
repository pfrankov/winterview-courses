const fs = require("fs");
const glob = require("glob");
const remark = require('remark');
const remarkParser = require('remark-parse');
const visit = require('unist-util-visit');
const toString = require("mdast-util-to-string");

const path = require("path");

remarkParser.Parser.prototype.inlineTokenizers['var'] = function (eat, value, silent) {
  const match = /^\{\{(\S+)}}/.exec(value);

  if (match) {
    if (silent) {
      return true;
    }

    return eat(match[0])({
      type: 'var',
      variable: match[1],
    })
  }
};

remarkParser.Parser.prototype.inlineTokenizers['var'].notInLink = true;

remarkParser.Parser.prototype.inlineTokenizers['var'].locator = function (value, fromIndex) {
  return value.indexOf('{{', fromIndex);
};

const methods = remarkParser.Parser.prototype.inlineMethods;

// Run it just before `text`.
methods.splice(methods.indexOf('text'), 0, 'var');

glob.sync("src/**/_processMdToHTML/*").forEach((filePath) => {

  remark().use((options) => {
    return (tree, file) => {
      // tree.children.forEach(x => {
      //   console.log(x);
      // });
      visit(tree, 'strong', function (node) {
        node.type = "html";
        node.value = `<b>${toString(node)}</b>`;
      });

      visit(tree, 'emphasis', function (node) {
        node.type = "html";
        node.value = `<i>${toString(node)}</i>`;
      });

      visit(tree, 'inlineCode', function (node) {
        node.type = "html";
        node.value = `<code>${toString(node)}</code>`;
      });

      visit(tree, 'code', function (node) {
        node.type = "html";
        node.value = `<pre>${toString(node)}</pre>`;
      });

      visit(tree, 'heading', function (node) {
        node.type = "html";
        node.value = `<b>${toString(node)}</b>`;
      });

      visit(tree, 'list', function (node) {
        node.type = "html";

        node.children.forEach((li, i) => {
          li.type = "html";

          const newLine = node.children.length - 1 === i ? '' : '\n' ;

          if (node.ordered) {
            li.value = `${i + node.start}. ${toString(li)}${newLine}`;
          } else {
            li.value = `- ${toString(li)}${newLine}`;
          }
        });
        node.value = toString(node);
      });

      visit(tree, 'link', function (node) {
        node.type = "html";
        node.value = `<a href="${node.url}">${toString(node)}</a>`;
      });

      visit(tree, 'var', function (node) {
        node.type = "html";
        node.value = '${' + node.variable + '}';
        file.data.variables = file.data.variables || [];
        file.data.variables.push(node.variable);
      });
    }
  }).process(fs.readFileSync(filePath).toString(), (err, file) => {
    let args = file.data.variables && file.data.variables.join(', ') || '';
    if (args) {
      args = `{ ${args} }`;
    }

    const fileContent = `module.exports = (${args}) => \`${file.toString()}\`;`;

    const directory = path.join(path.dirname(filePath), '..', 'html');
    fs.mkdir(directory, { recursive: true }, (err) => {
      if (err) throw err;
    });
    fs.writeFileSync(path.join(directory, path.basename(filePath, path.extname(filePath)) + '.js'), fileContent);
  });
});
