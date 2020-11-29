//6.要素数を読み込み、要素数が5の配列の要素に5,4,3,2,1で初期化して表示

const readline = require('readline');

//メイン処理
const main = async () => {

    //要素数入力
    let elementCount;
    do{
        elementCount = await prompt('要素数:');
    }while(elementCount < 1);
    let array = new Array(elementCount);

    //要素数だけ入力値を配列に代入
    for(let i = 0; i < elementCount; i++){
        let elementCount = await prompt(`a[${i}] = `);
        array[i] = elementCount;
    }

    process.stdout.write('a = {');

    //末尾の要素を残し表示
    if(elementCount >= 2){
        for(let i = 0; i < elementCount - 1; i++){
            process.stdout.write(`${array[i]}, `);
        }
    }
    //末尾の要素を表示
    if(elementCount >= 1) process.stdout.write(`${array[elementCount - 1]}`);
    process.stdout.write('}');
    console.log('');

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