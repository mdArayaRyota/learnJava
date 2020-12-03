//27.行列xとyの和を求めてzに格納するメソッド

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    let a = [ [1, 2, 3], [4, 5, 6]];
    let b = [ [6, 3, 4], [5, 1, 2]];
    let c = [];
    c[0] = new Array(3).fill(0);
    c[1] = new Array(3).fill(0);


    if(addMatrix(a, b, c)){
        console.log('行列a');
        printMatrix(a);
        console.log('行列b');
        printMatrix(b);
        console.log('行列c');
        printMatrix(c);
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

//行列xと行列yの和
const addMatrix = (x, y, z) => {
    if(x[0].length != y[0].length || y[0].length != z[0].length) return false;
    for(let i = 0; i < x.length; i ++){
        if(x[i].length != y[i].length || y[i].length != z[i].length) return false;
    }
    for(let i = 0; i < x.length; i++){
        for(let j = 0; j < x[0].length; j++){
            z[i][j] = x[i][j] + y[i][j];
        }
    }
    return true;
}
//ログ出力
const printMatrix = (m) => {
    for(let i = 0; i < m.length; i++){
        for(let j = 0; j < m[i].length; j++){
            process.stdout.write(`${m[i][j]}    `);
        }
        console.log('');
    }
}


// 起動
(async () => {
    await main();
})();