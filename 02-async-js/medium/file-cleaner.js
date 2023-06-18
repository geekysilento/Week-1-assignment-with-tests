const fs = require('fs');

function fileCleaner(str) {
  var array = str.split(" ");
  var i = array.length;
  while (i >= 0) {
    if (array[i] === "") {
      array.splice(i, 1);
    }
    i--;
  }
  var out = array.join(" ");
  
  fs.writeFile('medium/file1.txt',out,function(err) {
    if (err) {
      console.log(err);
      return;
    }
  
    console.log('File has been written successfully.');
  });
}

fs.readFile('medium/file1.txt', 'utf8', function(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  fileCleaner(data);
});
