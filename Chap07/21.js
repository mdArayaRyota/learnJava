//21.配列aと配列bの全要素を交換するaryExchange
//

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    //配列aの要素数を入力
    let numA = 0;
    let ary = new Array(2);

    do{
        numA = await prompt('配列aの要素数：');
    }while(numA <= 0);
    let aryA = new Array(numA);

    for(let i = 0; i < numA; i ++){
        aryA[i] = await prompt(`a[${i}]: `);
    }

    //配列bの要素数を入力
    let numB = 0;
    do{
        numB = await prompt('配列bの要素数：');
    }while(numB <= 0);
    let aryB = new Array(numB);

    for(let i = 0; i < numB; i ++){
        aryB[i] = await prompt(`b[${i}]: `);
    }

    aryExchange(aryA, aryB);

    console.log('配列aとbの全要素を交換しました。');
    ary[0] = aryA;
    ary[1] = aryB;
    for(let i = 0; i < 2; i++){
        for(let j = 0; j < ary[i][j]; j++){
            console.log(`a[${j}] = ${ary[i][j]}`);
        }
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