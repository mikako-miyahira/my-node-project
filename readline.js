const rl = require('readline-sync');

function getInput() {
    const input = rl.question('数値を入力してください（終了するには "exit" と入力）: ');
    const number = parseInt(input, 10);

    if(isNaN(number)) {
        console.log('有効な数値を入力してください。');
        getInput();
        return;
    }
    let sum = 0;
    for(let i = 1; i <= number; i++) {
        sum += i;
    }
    console.log(`1から${number}までの合計は: ${sum}`);
}
getInput();

if(rl.keyInYN('もう一度試しますか？')) {
    console.log('もう一度試します。');
} else {
    console.log('終了します。');
};

const list = ['リンゴ', 'バナナ', 'オレンジ'];
const index = rl.keyInSelect(list, '好きな果物を選んでください: ');
console.log(`あなたの選んだ果物: ${list[index]}`);