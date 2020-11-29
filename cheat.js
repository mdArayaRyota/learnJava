

const readline = require('readline');

//メイン処理
const main = async () => {

    //乱数
    const randomInt = randomInteger();

    //入力
    let promptInt = await prompt('入力:');

    //改行なし 数値不可
    process.stdout.write('*');


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

//ランダムな整数生成
const randomInteger = () =>{
    return Math.floor( Math.random()*100);
}

// 起動
(async () => {
    await main();
})();