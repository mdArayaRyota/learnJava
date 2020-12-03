//25.配列aから要素a[idx]を削除するメソッド
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

    //(元array, 削除開始index, 削除数)
    aryRmvOfN(a, idx, n);
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
const aryRmvOfN = (a, idx, n) => {
    if(n < 0 || idx < 0 || idx > a.length) return a.concat();

    if(idx + n > a.length){
        n = a.length - idx;
    }
    let c = new Array(a.length - n);
    let i = 0;
    for(; i < idx; i++){
        c[i] = a[i];
    }
    for(; i < a.length - n; i++){
        c[i] = a[i + n];
        return c;
    }
}

// 起動
(async () => {
    await main();
})();