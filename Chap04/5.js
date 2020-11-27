//5 入力した正の整数値から0までのカウントダウンを表示。

const readline = require('readline');

//メイン処理
let endFlg = 0;
const main = async () => {
    let promptInt;
    //入力値が正の整数でなければループ
    while (endFlg == 0) {
    promptInt = await prompt('正の整数値:');
        if(promptInt > 0){
            endFlg = 1;
        }
    }
    //promptIntが0になるまで繰り返す
    while(promptInt >= 0){
        console.log(`${promptInt--}`);
    }
    console.log('');
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