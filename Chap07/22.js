//22.配列xと同じ配列を生成するメソッド
//

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    //配列xの要素数を入力
    let numX = 0;

    do{
        numX = await prompt('要素数：');
    }while(numX <= 0);
    let aryX = new Array(numX);

    for(let i = 0; i < numX; i ++){
        aryX[i] = await prompt(`a[${i}]: `);
    }
    console.log('配列xの複製yを作りました。');
    let y = aryClone(aryX);
    for(let i = 0; i < y.length; i++){
        console.log(`y[${i}] = ${y[i]}`);
    }

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

const aryClone = (x) => {
    let c = new Array(x.length);
    for(let i = 0; i < x.length; i++){
        c[i] = x[i];
    }
    return c;
}



// 起動
(async () => {
    await main();
})();