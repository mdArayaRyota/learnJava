//21.クラス数と人数、全員の点数を読み込みクラスと全体の合計点と平均点を求める。

const readline = require('readline');

//メイン処理
const main = async () => {

    let classNumber = 0; //クラス数
    let ninzuArray = []; //人数を格納
    let classPointArray = []; //点数をクラス毎に格納

    //クラス数入力
    do{
        classNumber = await prompt(`クラス数：`);
    }while(classNumber == '' || classNumber <= 0);
    console.log('');

    //各クラスの入力
    for(let i = 0; i < classNumber; i++){
        let ninzu = 0;
        classPointArray[i] = [];
        //クラスの人数
        do{
            ninzu = await prompt(`${i + 1}組の人数：`);
        }while(ninzu == '' || ninzu < 0);
        ninzuArray[i] = parseInt(ninzu);

        //点数入力
        for(let j = 0; j < ninzuArray[i]; j++){
            classPointArray[i][j] = [];
            do{
                point = await prompt(`${i + 1}組${j + 1}の点数：`);
            }while(point == '' || point < 0);
            classPointArray[i][j] = point;
        }
        console.log('');
    }
    console.log(classPointArray);

    //表示
    console.log(' 組 |   合計     平均');
    console.log('----|----------------');
    let total = 0;
    let totalAverage = 0;
    let ninzu = 0;
    for(let i = 0; i < classNumber; i++){
        let classSum = 0;
        let classAverage = 0;
        for(let j = 0; j < ninzuArray[i]; j++){
            classSum += parseInt(classPointArray[i][j]);
        }
        total += classSum;
        ninzu += ninzuArray[i];
        classAverage = (classSum / parseInt(ninzuArray[i])).toFixed(1);
        process.stdout.write(`${spacePadding(i+1, 2)}組| ${spacePadding(classSum, 6)}   ${spacePadding(classAverage, 6)}`);
        console.log('');
    }
    totalAverage = (total / ninzu).toFixed(1);
    console.log('----|----------------');
    process.stdout.write(` 計 | ${spacePadding(total, 6)}   ${spacePadding(totalAverage, 6)}`);
    console.log('');

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