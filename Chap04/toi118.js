//toi118.入力した面積になる縦と横の長さの組み合わせ表示

const readline = require('readline');

//メイン処理
const main = async () => {

    const a = await prompt('面積：');

    for(let i = 1; i < a; i++){
        if(i * i > a)break;
        if(a % i != 0)continue;
        console.log(`縦 ${i} * 横 ${a / i}`);
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