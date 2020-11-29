//8.配列から任意の値を持つ要素を探す。同一のものがある場合は先頭の要素。

const readline = require('readline');

//メイン処理
const main = async () => {

    let elementCount;
    do{
        elementCount = await prompt('要素数:');
    }while(elementCount < 1);

    let points = new Array(elementCount);

    //配列に代入
    for(let i = 0; i < elementCount; i++){
        let point = await prompt(`a[${i}] = `);
        points[i] = point;
    }

    //探す
    let findingNumber = await prompt('探す数値:');
    let i;
    for(i = 0; i < elementCount; i++){
        if(points[i] == findingNumber) break;
    }

    //表示
    if(i < elementCount){
        console.log(`それはa[${i}]にあります。`);
    }else{
        console.log('それはありません。');
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


// 起動
(async () => {
    await main();
})();