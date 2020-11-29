//14.要素を逆順にする

const readline = require('readline');

//メイン処理
const main = async () => {

    let elementCount;
    do{
        elementCount = await prompt('要素数:');
    }while(elementCount < 1);

    //配列に詰め込む
    let elements = new Array(elementCount);
    let elementsReverse = new Array(elementCount);
    for(let i = 0; i < elementCount; i++){
        elements[i] = await prompt(`a[${i}] = `);
    }

    console.log('aの全要素を逆順にbにコピーしました。');
    for(let i = 0; i < elementCount; i++){
        elementsReverse[elementCount - i - 1] = elements[i];
    }

    for(let i = 0; i < elementCount; i++){
        console.log(`b[${i}] = ${elementsReverse[i]}`);
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

//ランダムな整数生成
const randomInteger = (elementCount) =>{
    return Math.floor( Math.random() * elementCount);
}

// 起動
(async () => {
    await main();
})();