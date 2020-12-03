//19.配列aから要素a[idx]を削除するメソッドaryRmv
//

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
    let idx = await prompt('削除する開始インデックス：');
    let n = await prompt('削除する要素の個数：');

    //aryRmv(元array, 削除開始index, 削除数)
    aryRmvN(a, idx, n);
    console.log(a);

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

//aryRmv(元array, 削除開始index, 削除数)
const aryRmvN = (array, idx, n) => {
    if(idx >= 0 && idx <= array.length && n < array.length){
        let idx2 = idx + n -1;
        if(idx2 > array.length -n -1)idx2 = array.length -n -1;
        for(let i = idx; i <= idx2; i++){
            array[i] = array[i + n];
        }
    }
}

// 起動
(async () => {
    await main();
})();