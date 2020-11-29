//9.double型の全要素の合計と平均を表示する

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

    //合計
    let total = 0;
    points.forEach(point => {
        total += point;
    });
    //平均
    let average = total / elementCount;

    console.log(`全要素の合計は${total}です。`);
    console.log(`全要素の平均は${average}です。`);

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


// 起動
(async () => {
    await main();
})();