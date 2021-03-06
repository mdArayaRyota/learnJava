//21.配列aと配列bの全要素を交換するaryExchange
//

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    let 


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

const aryExchange = (a, b) => {
    let n = a.length < b.length ? a.length : b.length;
    for(let i = 0; i < n; i++){
        let temp = a[i];
        a[i] = b[i];
        b[i] = temp;
    }
}



// 起動
(async () => {
    await main();
})();