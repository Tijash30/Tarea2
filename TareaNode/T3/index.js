const fs = require("fs");
fs.writeFile("hola.txt", "Hello world!", (err)=>{
    if (err) 
        return console.log(err);
});