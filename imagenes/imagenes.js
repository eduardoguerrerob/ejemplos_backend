const coolImages = require("cool-images");
const fs = require('fs');
const moment = require('moment');

console.log(coolImages.one());

const images = coolImages.many(600, 800, 10);

images.forEach((url) => console.log(url));

// log

let timelog = moment(new Date()).format('YYYY/MM/DD h:mm:ss a');

fs.appendFile('logFile.txt', `${timelog}\n`, 'utf8', (err) => {
    if (err)
        console.log(err)
})

images.forEach((url) => {
    fs.appendFile('logFile.txt', `${url}\n`, 'utf8', (err) => {
        if (err)
            console.log(err)
    })
});

