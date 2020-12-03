//9.正の整数を返却する、0と負の値は再入力

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    let x;
    do{
        let n = await returnPlusInteger();

        console.log('逆から読むと');
        process.stdout.write(`${String(n).split("").reverse().join("")}です。`);
        console.log('');
        do{
            x = await prompt(`もう一度？ Yes...1 / No...0:`);
        }while(x != 0 && x != 1);
    }while(x == 1);
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


//正の整数値を読み込んで返却
const returnPlusInteger = async() => {
    let x = 0;
    do{
        x = await prompt(`正の整数値：`);
    }while(x <= 0);

    return x
}


// 起動
(async () => {
    await main();
})();