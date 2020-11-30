//8.a以上b以下の乱数を生成するメソッドを作成。

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {
    console.log('乱数を生成します。');
    let min;
    let max;
    min = await prompt(`下限値：`);
    max = await prompt(`上限値：`);
    console.log(`生成した乱数は${random(min, max)}です。`);

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

//ランダム
const random = (min, max) => {
    if(max <= min){
        return min;
    }else{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
