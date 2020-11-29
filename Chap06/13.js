//13.要素の並びをランダムにシャッフルする

const readline = require('readline');

//メイン処理
const main = async () => {

    let elementCount;
    do{
        elementCount = await prompt('要素数:');
    }while(elementCount < 1);

    //配列に詰め込む
    let elements = new Array(elementCount);
    for(let i = 0; i < elementCount; i++){
        elements[i] = await prompt(`a[${i}] = `);
    }

    for(let i = 0; i < elementCount * 2; i++){
        let randomKey1 = randomInteger(elementCount);
        let randomKey2 = randomInteger(elementCount);
        let temporary = elements[randomKey1];
        elements[randomKey1] = elements[randomKey2];
        elements[randomKey2] = temporary;
    }

    console.log('要素をかき混ぜました。');
    for(let i = 0; i < elementCount; i++){
        console.log(`a[${i}] = ${elements[i]}`);
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