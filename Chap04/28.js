//28.キーボードから整数値を読み込み合計と平均を求める。負の数は除外する。

const readline = require('readline');

//メイン処理
const main = async () => {
    let count = 0;
    let total = 0;
    let average = 0;
    let countScore = 0;
    console.log('整数を加算しますか。');
    //入力値
    do{
        count = await prompt('何個加算しますか:');
    }while(count < 1);
    //件数に応じて入力させる
    for(i = 0; i < count; i++){
        let score = await prompt('整数：');
        if(score < 0){
            console.log('負の数は加算しません。');
        }else{
            total += score;
            countScore++;
        }
    }
    if(i == 0){
        average = total;
    }else{
        average = total / countScore;
    }
    console.log(`合計は${total}です。`);
    console.log(`平均は${Math.floor(average)}です。`);
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