
//  sharpConvert.js: Convert an image file into Deep Zoom format
//     Brian Capouch 13 December 2015
//     This version prompts for names of image file and tiles base
//       if the user does not provide them via the CL
//     Output: .dzi file and directory of tile images
//

// Set up functionality
var sharp    = require('sharp'),
    prompt   = require('prompt'),
    optimist = require('optimist');

// Set overrides from command line
prompt.override = optimist.argv;

// Get ready to talk to the user
prompt.start();

// Get input from user (or use argv values provide via override)
prompt.get(['filename', 'dziname'], function (err, result) {
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('Filename: ' + result.filename);
  console.log('Dziname: ' + result.dziname);
  var infile  = result.filename,
      dzibase = result.dziname + '.dzi';

// Perform conversion
sharp(infile).tile(256).toFile(dzibase, function(err, info) {
  });
});

function onErr(err) {
  console.log(err);
  return 1;
}
