//3.数あてゲーム

const readline = require('readline');

//メイン処理
const main = async () => {
    let endFlg = 0;
    const randomInt = await randomInteger();
    while (endFlg == 0) {
        const answer = await prompt('いくつかな:');
        if(randomInt > answer){
            console.log('もっと大きな値だよ。');
        }else if(randomInt < answer){
            console.log('もっと小さな値だよ。');
        }else{
            console.log('正解だよ。');
            endFlg = 1;
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

//ランダムな整数生成
const randomInteger = () =>{
    return Math.floor( Math.random()*100);
}

// 起動
(async () => {
    await main();
})();