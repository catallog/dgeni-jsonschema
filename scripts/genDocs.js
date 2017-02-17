const path = require('canonical-path');
const Dgeni = require('dgeni');
const glob = require("glob");
const fs = require('fs');

function runDgeniConfig(config){
  try {
    cpath = path.resolve(__dirname, '..', config);
    var dgeni = new Dgeni([require(cpath)]);
    return dgeni.generate();
  } catch(x) {
    console.log(x.stack);
    throw x;
  }
  return false;
}

function removeFile(filePath){
  fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log('[DELETED] ' + filePath);
  });
}

function clean(){
  glob("tests/**/*-generated.json", function (er, files) {
    files.map(removeFile);
  });
}

function generate(){
  glob("tests/**/dgeni-conf.js", function (er, files) {
    files.map(runDgeniConfig);
  });
}

function run(){
  clean();
  generate();
}

module.exports = run();
