//32.1次元配列と2次元配列を表示するメソッド

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {


    // let num;
    // do{
    //     num = await prompt('1次元配列の要素数：');
    // }while(num <= 0);
    // let x = new Array(num).fill(0);
    // for(let i = 0; i < num; i++){
    //     x[i] = await prompt(`x[${i}]:`);
    // }

    let height = 0;
    do{
        height = await prompt('行列の行数：');
    }while(height <= 0);

    let y = new Array(height).fill(0);
    let width = 0;
    for(let i = 0; i < height; i++){
        do{
            width = await prompt('行列の列数：');
        }while(width <= 0);
        y[i] = new Array(width).fill(0);
    }
    for(let i = 0; i < y.length; i++){
        for(let j = 0; j < y[i].length; j++){
            y[i][j] = await prompt(`y[${i}][${j}]:`);
        }
    }
    console.log(y);

    //表示
    //console.log('1次元配列x');
    //printArray1(x);
    console.log('2次元配列y');
    printArray2(y);

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

//printArray
const printArray1 = (x) => {
    for(let i = 0; i < x.length - 1; i++){
        process.stdout.write(`${x[i]} `);
    }
    process.stdout.write(`${x.length - 1}`);
    console.log('');
}
//printArray
const printArray2 = (y) => {
    let a = y;
    let width = a[0].length;
    let max = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i].length > max)max = a[i];
    }
    let maxWidth;
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a[i].length; j++){
            let value = a[i][j];
            width[i][j] = (value < 0) ? 1 : 0;
            do{
                width[i][j]++;
                value /= 10;
            }while(value != 0);

            if(width[i][j] > maxWidth[j])maxWidth[j] = width[i][j];
        }
    }
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a[i].length - 1; j++){
            process.stdout.write(`${a[i][j]}`);
            for(let k = 0; k <= maxWidth[j] - width[i][j]; k++){
                process.stdout.write(' ');
            }
            //console.log(`${a[i]a[i].length - 1}`);
        }
    }
}



// 起動
(async () => {
    await main();
})();