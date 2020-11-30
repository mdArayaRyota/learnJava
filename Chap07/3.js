//3.medメソッドを作成

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    //入力
    let a = await prompt(`整数a：`);
    let b = await prompt(`整数b：`);
    let c = await prompt(`整数c：`);

    console.log(`中央値は${med(a, b, c)}です。`);
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


const med = (a, b, c) => {
    if(a >= b){
        if(b >= c){
            return b;
        }else if(a <= c){
            return a;
        }else{
            return c;
        }
    }else if(a > c){
        return a;
    }else if(b > c){
        return c;
    }else{
        return b;
    }
}