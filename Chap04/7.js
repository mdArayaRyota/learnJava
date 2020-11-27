//7 入力した値の個数*を表示する(1未満であれば改行しない)

const readline = require('readline');

//メイン処理
let endFlg = 0;
const main = async () => {
    let promptInt;
    promptInt = await prompt('何個*を表示しますか:');
    if(promptInt > 0){
        while(promptInt > 0){
            process.stdout.write('*');
            promptInt--;
        }
        console.log('');
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