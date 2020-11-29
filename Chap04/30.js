//30.数当てゲーム。制限回数6回、失敗したら答えを表示する。

const readline = require('readline');

//メイン処理
const main = async () => {
    let i;
    let correctAnswer = 0;
    //回答権利
    const MAX_ANSWER_NUM = 6;
    let answerNum = MAX_ANSWER_NUM;
    //ランダム数を設定
    const randomInt = randomInteger();
    console.log('数当てゲーム開始！！');
    console.log('0〜99の数を当ててください。');

    for(i = 1; i <= MAX_ANSWER_NUM; i++) {
        //回答
        const answer = await prompt(`残り${answerNum--}回。いくつかな：`);

        //判定
        if(randomInt > answer){
            console.log('もっと大きな数だよ。');
        }else if(randomInt < answer){
            console.log('もっと小さな数だよ。');
        }else{
            console.log(`${i}回で当たりましたね。`);
            correctAnswer = 1;
            break;
        }
    }
    if(correctAnswer == 0)console.log(`残念。正解は${randomInt}でした。`);

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