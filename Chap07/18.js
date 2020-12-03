//18.配列aから要素a[idx]を削除するメソッドaryRmv

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    let num = 0;
    do{
        num = await prompt('要素数：');
    }while(num <= 0);

    let a = new Array(num);

    for(let i = 0; i < num; i ++){
        a[i] = await prompt(`a[${i}]: `);
    }
    let idx = await prompt('削除する要素のインデックス：');

    console.log('before', a);
    aryRmv(a, idx);
    console.log('after', a);

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

//削除メソッド
const aryRmv = (array, idx) => {
    if(idx >= 0 && idx <= array.length){
        for(let i = idx; i < array.length - 1; i++){
            array[i] = array[i + 1];
        }
    }
}

// 起動
(async () => {
    await main();
})();