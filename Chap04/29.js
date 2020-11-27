//29.整数値を読み込み合計を求める。1グループ5個まで整数を入力できる。88888入力でグループ変更。99999入力で後続の処理を終了して合計を表示する。

const readline = require('readline');

//メイン処理
const main = async () => {
    let total = 0;
    console.log('整数を加算します。');
    //10グループ
    Outer:for(let i = 1; i <= 10; i++){
        console.log(`第${i}グループ`);
        for(let j = 0; j < 5; j++){
            let score = await prompt('整数：');
            if(score == 99999){
                break Outer;
            }else if(score == 88888){
                continue Outer;
            }
            total += score;
        }
    }
    console.log('');
    console.log(`合計は${total}です。`);

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