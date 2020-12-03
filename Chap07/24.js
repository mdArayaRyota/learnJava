//24.配列aから要素a[idx]を削除するメソッド
//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');
//メイン処理
const main = async () => {
    let num = 0;
    do{
        num = await prompt('要素数：');
    }while(num <= 0);
    let aryX = new Array(num);
    for(let i = 0; i < num; i ++){
        aryX[i] = await prompt(`x[${i}]: `);
    }
    let idx = await prompt('削除する要素のインデックス：');
    let aryY = aryRmvOf(aryX, idx);
    for(let i = 0; i < aryY.length; i++){
        console.log(`y[${i}] ${aryY[i]}`);
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
//削除メソッド
const aryRmvOf = (arrayX, idx) => {
    if(idx < 0 || idx >= arrayX.length - 1)return arrayX.concat();
    let arrayY = new Array(arrayX.length - 1);
    let i = 0;
    for(i; i < idx; i++){
        arrayY[i] = arrayX[i];
    }
    for(i; i < arrayY.length; i++){
        arrayY[i] = arrayX[i + 1];
    }
    return arrayY;
}
// 起動
(async () => {
    await main();
})();