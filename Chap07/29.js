//29.2次元配列aと同じ配列(要素数が同じですべての要素の値が同じ配列)を生成して返却するメソッド

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    let height = 0;
    do{
        height = await prompt('行列の行数：');
    }while(height <= 0);
    let width = 0;
    do{
        width = await prompt('行列の列数：');
    }while(width <= 0);

    let a;
    let x = aryInit(a, width, height);
    let b;
    let y = aryInit(b, width, height);

    for(let i = 0; i < x.length; i++){
        for(let j = 0; j < x[i].length; j++){
            x[i][j] = await prompt(`a[${i}][${j}]:`);
        }
    }
    y = aryClone(x, y);
    console.log('行列a');
    printMatrix(x);
    console.log('行列aの複製');
    printMatrix(y);

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

//配列初期化
const aryInit = (ary, width, height) =>{
    ary = [...Array(width)].map(() => Array(height).fill(0));
    return ary;
}

//クローン
const aryClone = (x, y) => {
    for(let i = 0; i < x.length; i++){
        for(let j = 0; j < x[i].length; j++){
            y[i][j] = x[i][j];
        }
    }
    return y;
}
//ログ出力
const printMatrix = (m) => {
    for(let i = 0; i < m.length; i++){
        for(let j = 0; j < m[i].length; j++){
            process.stdout.write(`${m[i][j]}    `);
        }
        console.log('');
    }
    console.log('');
}


// 起動
(async () => {
    await main();
})();