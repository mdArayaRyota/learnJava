
//15.配列aの全要素んも合計を求めるメソッド

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    let num = 0;
    do{
        num = await prompt('要素数：');
    }while(num <= 0);

    let x = new Array(num);

    for(let i = 0; i < x.length; i ++){
        x[i] = await prompt(`x[${i}]: `);
    }
    console.log(`全要素の合計は${sum(x)}です。`);

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

//合計を求める
const sum = (num) =>{
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i];
    }
    return sum;
}



// 起動
(async () => {
    await main();
})();