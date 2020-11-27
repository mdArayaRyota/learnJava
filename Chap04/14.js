//14 1からnまでの和を求める

const readline = require('readline');

//メイン処理
const main = async () => {
    let promptInt;
    console.log('1からnまでの和を求めます。');
    promptInt = await prompt('正の整数値:');
    promptInt = parseInt(promptInt);
    if(promptInt >= 1){
        let val = 0;
        for(let i=0; 0 < promptInt; i++){
            val = val + promptInt;
            promptInt--;
        }
        console.log(`1から${promptInt}までの和は${val}です。`);
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