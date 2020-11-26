//1
const readline = require('readline');

//メイン処理
let endFlg = 0;
const main = async () => {
    let promptInt;
    let digits = 0;
    promptInt = await prompt('正の整数値:');
    while(promptInt > 1){
        digits++;
        promptInt /= 10;
    }
    console.log(`その数は${digits}桁です。`);
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