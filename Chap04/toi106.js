//toi106(動作確認未)

const readline = require('readline');

//メイン処理
const main = async () => {

    const n = await prompt('何個*を表示する。：');
    const w = await prompt('横は何個まで表示する。：');

    let p = n / w;
    let q = n % w;

    for(let i = 1; i <= p; i++){
        for(let j = 1; j <= w; j++){
            console.log('+');
            console.log('');
        }
        if(i % 3 == 0 && (i < p || q != 0)){
            console.log('');
        }
    }
    for(let i = 1; i <= q; i++){
        console.log('+');
    }
    if(q != 0)console.log('');

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