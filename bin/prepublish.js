var globby = require('globby');
var rimraf = require('rimraf');

const version = () => JSON.parse(fs.readFileSync('./package.json')).version;


globby(['*', '!package.json', '!.git', '!README.md', '!hooks', '!deploy/'+version])
  .then(function then(paths) {
    paths.map(function map(item) {
      rimraf.sync(item);
    });
  });