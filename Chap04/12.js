//12
const readline = require('readline');

//メイン処理
const main = async () => {
    let promptInt;
    promptInt = await prompt('正の整数値:');
    if(promptInt >= 1){
        for(let i=0; 0 <= promptInt; i++){
            console.log(promptInt);
            promptInt--;
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