var sharp = require('sharp');

var prompt = require('prompt');

prompt.start();

prompt.get(['filename', 'dziname'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('Filename: ' + result.filename);
  console.log('Dziname: ' + result.dziname);
  var infile = result.filename,
    dzibase = result.dziname + '.dzi';
  sharp(infile).tile(256).toFile(dzibase, function(err, info) {
  });    
});

function onErr(err) {
  console.log(err);
  return 1;
}


//sharp(infile).tile(256).toFile(outfile, function(err, info) {
  // The output.dzi file is the XML format Deep Zoom definition
  // The output_files directory contains 256x256 pixel tiles grouped by zoom level
//});
