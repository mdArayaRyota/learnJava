//7.人数と点数をキーボードから入力し、合計、平均、最高、最低点を表示

const readline = require('readline');

//メイン処理
const main = async () => {

    do{
        studentCount = await prompt('人数:');
    }while(studentCount < 1);
    let scores = new Array(studentCount);
    let total = 0;
    let average = 0;

    //生徒数だけ配列に代入
    for(let i = 0; i < studentCount; i++){
        let score = await prompt(`${i}番目の点数：`);
        scores[i] = score;
        total += score;
    }
    average = total / studentCount;

    //最高点と最低点
    let maxScore = scores[0];
    let minScore = scores[0];
    for(let i = 1; i < studentCount; i++){
        if(scores[i] > maxScore) maxScore = scores[i];
        if(scores[i] < minScore) minScore = scores[i];
    }

    console.log(`合計点は${total}点です。`);
    console.log(`平均点は${average}点です。`);
    console.log(`最高点は${maxScore}点です。`);
    console.log(`最低点は${minScore}点です。`);

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


// 起動
(async () => {
    await main();
})();