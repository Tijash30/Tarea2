const fs = require("fs");
fs.readFile("arch1.txt", (err, data) => {
    if (!err) {
        console.log('data: ' + data);
    } else {
        console.log(err);
    }
});