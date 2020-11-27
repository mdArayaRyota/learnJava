//23.*を並べてn段のピラミッドを作る

const readline = require('readline');

//メイン処理
const main = async () => {
    console.log('ピラミッドを表示します。');
    let steps = await prompt('段数は：');
    for(let i = 1; i <= steps; i++){
        for(let j = 1; j <= steps - i; j++){
            process.stdout.write(' ');
        }
        for(let j = 1; j <= 2 * i - 1; j++){
            process.stdout.write(`${i % 10}`);
        }
        console.log('');
    }

};

//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return parseInt(answer);
};

//標準入力
const question = (question) => {
    const readlineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        readlineInterface.question(question, (answer) => {
            resolve(answer);
            readlineInterface.close();
        });
    });
};

// 起動
(async () => {
    await main();
})();