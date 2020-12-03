//30.minメソッド 多重定義オーバーロード

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    //入力
    let x = await prompt('xの値：');
    let y = await prompt('yの値：');
    let z = await prompt('zの値：');
    let num = 0;
    do{
        num = await prompt('配列aの要素数：');
    }while(num <= 0);
    let a = new Array(num).fill(0);
    for(let i = 0; i < a.length; i++){
        a[i] = await prompt(`a[${i}]:`);
    }

    //2値の最小値
    console.log(`x, yの最小値は${min(x, y)}です。`);
    //3値の最小値
    console.log(`x, y, zの最小値は${min(x, y, z)}です。`);
    //配列の最小値
    console.log(`x, y, zの最小値は${min(a)}です。`);

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

//min
const min = (...args) => {
    let min;
    switch(args.length){
        case 1:
            min = args[0][0];
            for(let i = 1; i < args[0].length; i++){
                if(min > args[0][i])min = args[0][i];
            }
            return min;
        case 2:
            return args[0] < args[1] ? args[0] : args[1];
        case 3:
            min = args[0];
            if(args[1] < min)min = args[1];
            if(args[2] < min)min = args[2];
            return min;
    }
}


// 起動
(async () => {
    await main();
})();