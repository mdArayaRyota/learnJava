//16
const readline = require('readline');

//メイン処理
const main = async () => {
    let promptInt = await prompt('整数値:');
    let count = 0;
    if(promptInt > 0){
        for(let i = 1; i <= promptInt; i ++){
            if(promptInt % i == 0){
                process.stdout.write(`${i} `);
                count++;
            }
        }
        console.log('');
        console.log(`約数は${count}個です。`);
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