const fs = require('fs');

fs.writeFile('Welcome.txt', 'Hello Node.', function(err){
    if (err)
        console.log(err);
    else
        console.log('File created successfully.');
});