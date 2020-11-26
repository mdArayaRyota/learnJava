const readline = require('readline');

//メイン処理
let endFlg = 0;
const main = async () => {
    let a = await prompt('整数A:');
    let b = await prompt('整数B:');

    a = parseInt(a);
    b = parseInt(b);

    if(a > b){
        let c = a;
        a = b;
        b = c;
    }
    while (a <= b) {
        process.stdout.write(`${a},`);
        a = a + 1;
    }
};

//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return answer;
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