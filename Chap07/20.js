//20.配列aの要素a[idx]にxを挿入するメソッドaryInsを作成
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
    let insertIndex = await prompt('挿入する要素のインデックス：');
    let insertNum = await prompt('挿入する値：');

    //aryRmv(元array, 削除開始index, 削除数)
    aryIns(a, insertIndex, insertNum);
    console.log(a);
    for(let i = 0; i < num; i++){
        console.log(`a[${i}] = ${a[i]}`);
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

const aryIns = (a, insertIndex, insertNum) => {
    if(insertIndex >= 0 && insertIndex <a.length){
        for(let i = a.length - 1; i > insertIndex; i --){
            a[i] = a[i -1];
        }
        a[insertIndex] = insertNum;
    }
}



// 起動
(async () => {
    await main();
})();