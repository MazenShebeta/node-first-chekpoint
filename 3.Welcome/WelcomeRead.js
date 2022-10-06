fs = require('fs');

fs.readFile('Welcome.txt', function(err, data){
    if(err)
    console.log(err)
    else{
        console.log(data.toString());
    }
});