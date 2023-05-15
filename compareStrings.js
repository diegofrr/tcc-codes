const correct_texts = require('./assets/correctTexts.json');
const data01 = require('./assets/data01.json');
const data02 = require('./assets/data02.json');

const levenshtein = require('./levenshtein-distance');

// data01.forEach((text, index) => {
//     const distance = levenshtein(text, correct_texts[index]);
//     console.log(`${index} ` + distance);
//     console.log(distance >= 3 ? `${data01[index]}\n${correct_texts[index]}` : '');
// })

// data02.forEach((text, index) => {
//     const distance = levenshtein(text, correct_texts[index]);
//     console.log(distance);
// })

const list = []

for (i in correct_texts) {
    const text = correct_texts[i];
    const text1 = data01[i];
    const text2 = data02[i];

    const dist_1 = levenshtein(text1, text);
    const dist_2 = levenshtein(text2, text);

    const imgId = Number(i) + 1;
    console.log(`${imgId} ${dist_2} ${dist_1}`)
    list.push(dist_2, dist_1)
    // console.log(Number(i) + 1)
}

// console.log(list.length)