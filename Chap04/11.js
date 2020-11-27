//11 入力した分だけ*を表示する

const readline = require('readline');

//メイン処理
const main = async () => {
    let promptInt;
    promptInt = await prompt('何個*を表示しますか:');
    if(promptInt >= 1){
        for(let i=0; i < promptInt; i++){
            process.stdout.write('*');
        }
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