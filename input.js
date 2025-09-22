const fs = require('fs');
const readline = require('readline');

const filePath = 'output.txt';

// fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error('ファイルの読み込み中にエラーが発生しました:', err);
// }else{
//         console.log('ファイルの内容:', data);
// }});

const fileStream = fs.createReadStream(filePath, 'utf8');

let count = 0;

const rl = readline.createInterface({
    input: fileStream,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    count++;
    console.log(`行 ${count}: ${line}`);
});

rl.on('close', () => {
    console.log('ファイルの読み込みが完了しました。');
});