const { execSync } = require("child_process");
const glob = require("glob");

const path = require("path");
const fs = require("fs");

const args = process.argv.slice(2);
const course = args[0];
if (!course) {
  throw new Error('No course specified');
}

glob.sync(`src/courses/${course}/**/_processCodeToImage/*`).forEach((filePath) => {
  console.log(filePath);
  const directory = path.join(path.dirname(filePath), '..', 'codeImages');
  fs.mkdir(directory, { recursive: true }, (err) => {
    if (err) throw err;
  });
  execSync(`yarn run carbon-now ${path.resolve(filePath)} --config carbon-config.json -t ${path.basename(filePath, path.extname(filePath))} -l ${directory} -h`);
});