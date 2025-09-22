const fs = require('fs');
const rl = require('readline-sync');

// const data = rl.question('ファイル名を入力してください: ');

// fs.writeFile('data.txt', data, (err) => {
//     if (err) {
//         console.error('ファイルの書き込み中にエラーが発生しました:', err);
//         return;
//     }else {
//         console.log('ファイルが正常に書き込まれました。');
//     }
// });

const outputFile = 'output.txt';

let keepRunning = true;

while (keepRunning) {
    const userInput = rl.question('> ');

    if(userInput === '') {
        keepRunning = false;
    } else {
        fs.appendFile(outputFile, userInput + '\n', (err) => {
            if (err) {
                console.error('ファイルの書き込み中にエラーが発生しました:', err);
            }
    });
} }
console.log(`入力内容が ${outputFile} に保存されました。`);