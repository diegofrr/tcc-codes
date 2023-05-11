const fs = require('fs');

const folderPath = './01/';

const images = fs.readdirSync(folderPath).filter(file => {
    return file.endsWith('.gif')
        || file.endsWith('.webp')
        || file.endsWith('.jpg')
        || file.endsWith('.png')
        || file.endsWith('.jpeg');
});

let newImageName = '';

images.forEach((image, index) => {
    if (index < 9) {
        newImageName = `0${index + 1}.jpg`;
    } else {
        newImageName = `${index + 1}.jpg`;
    }

    fs.renameSync(`${folderPath}${image}`, `${folderPath}${newImageName}`);

});

