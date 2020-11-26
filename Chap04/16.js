//16
const readline = require('readline');

//メイン処理
const main = async () => {
    let promptInt;
    let height = await prompt('身長:');
    let weight = await prompt('体重:');
    let interval = await prompt('何cmごと:');

    
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