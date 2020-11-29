//18.配列同士の積 4*3 * 3*4

const readline = require('readline');

//メイン処理
const main = async () => {

    let a = [];
    let b = [];
    let c = [];

    //配列a
    console.log('行列aの要素の値を入力せよ。');
    for(let i = 0; i < 4; i++){
        a[i] = [];
        for(let j = 0; j < 3; j++){
            do{
                a[i][j] = await prompt(`a[${i}][${j}] ：`);
            }while(a[i][j] == '');
        }
    }

    //配列b
    console.log('行列bの要素の値を入力せよ。');
    for(let i = 0; i < 3; i++){
        b[i] = [];
        for(let j = 0; j < 4; j++){
            do{
                b[i][j] = await prompt(`b[${i}][${j}] ：`);
            }while(b[i][j] == '');
        }
    }

    //配列c
    for(let i = 0; i < 4; i++){
        c[i] = [];
        for(let j = 0; j < 4; j++){
            c[i][j] = 0;
            for(let k = 0; k < 3; k++){
                c[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 4; j++){
            process.stdout.write(`${spacePadding(c[i][j], 5)}`);
        }
        console.log('');
    }
};

//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return answer;
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

// スペース埋め
const spacePadding = (val, len) => {
    for(let i = 0; i < len; i++){
        val = " " + val;
    }
    return val.slice((-1) * len);
}