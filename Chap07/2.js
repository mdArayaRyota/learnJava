//2.minメソッドを作成

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    //入力
    let a = await prompt(`整数a：`);
    let b = await prompt(`整数b：`);
    let c = await prompt(`整数c：`);

    console.log(`最小値は${min(a, b, c)}です。`);
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


const min = (a, b, c) => {
    let min = a;
    if(min > b)min = b;
    if(min > c)min = c;
    return min;
}