//toi115(動作確認未)

const readline = require('readline');

//メイン処理
const main = async () => {

    const height = await prompt('何行：');
    const width = await prompt('何列');

    for(let i = 1; i <= height; i++){
        for(let j = 1; j <= width; j++){
            console.log((i + j -1) % 10);
        }
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

//ランダムな整数生成
const randomInteger = () =>{
    return Math.floor( Math.random()*100);
}

// 起動
(async () => {
    await main();
})();