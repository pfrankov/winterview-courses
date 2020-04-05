const { execSync } = require("child_process");
const glob = require("glob");

const path = require("path");

// options is optional
glob.sync("src/**/_processCodeToImage/*").forEach((filePath) => {
  console.log(filePath);
  execSync(`yarn run carbon-now ${filePath} --config carbon-config.json -t ${path.basename(filePath, path.extname(filePath))} -l ${path.join(path.dirname(filePath), '..', 'codeImages')} -h`);
});

/*
for (let i=0; i < 3; i++) {
  exec("ls -la", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  })
}
*/
