const fs = require('fs');

const init_file = './assets/data01.txt';
const data_json = './assets/data.json'

// fs.readFile(init_file, 'utf-8', (err, data) => {
//     if (err) throw err;

//     const lines = data.split('\n');
//     const list = lines.map(line => line.substring(4).trim());

//     const conteudo = JSON.stringify(list);

//     fs.writeFile(data_json, conteudo, 'utf-8', (err) => {
//         if (err) throw err;

//     });
// });

const data = require('./assets/data.json');

data.forEach(linha => console.log(linha))