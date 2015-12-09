
//  sharpConvert.js: Convert an image file into Deep Zoom format
//     Brian Capouch 9 December 2015
//     This version prompts for names of image file and tiles base
//     Output: .dzi file and directory of tile images
//

// To-do: allow command-line input of values

// Set up functionality
var sharp = require('sharp'),
  prompt = require('prompt'),
  optimist = require('optimist');

  // Set overrides from command line
  prompt.override = optimist.argv;

// Get ready to talk to the user
prompt.start();

prompt.get(['filename', 'dziname'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('Filename: ' + result.filename);
  console.log('Dziname: ' + result.dziname);
  var infile = result.filename,
    dzibase = result.dziname + '.dzi';

  // Perform conversion
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
