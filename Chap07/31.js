//31.絶対値を返すメソッド

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    //入力
    let d = await prompt('double型の値：');
    console.log(`dの絶対値は${absolute(d)}です。`);


};

//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return parseFloat(answer);
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

const absolute = (d) => {
    return d >= 0 ? d : -d;
}


// 起動
(async () => {
    await main();
})();