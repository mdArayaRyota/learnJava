//19.6人の生徒の国語と数学の点数を読み込み、科目毎の平均点と生徒毎の平均点を表示

const readline = require('readline');

//メイン処理
const main = async () => {

    const studentNumber = 6;
    let scores = [];
    scores[0] = [];
    scores[1] = [];
    let studentSum = [];
    let subjectSum = [];

    //入力と格納
    console.log('6人の国語、数学の点数を入力せよ。');
    for(let i = 0; i < studentNumber; i++){
        studentSum[i] = [];
        subjectSum[i] = [0];
        do{
            scores[0][i] = await prompt(`${i + 1}番・・・国語：`);
        }while(scores[0][i] < 0 || scores[0][i] > 100 || scores[0][i] == '');
        scores[0][i] = parseInt(scores[0][i]);

        do{
            scores[1][i] = await prompt(`         数学：`);
        }while(scores[1][i] < 0 || scores[1][i] > 100 || scores[1][i] == '');
        scores[1][i] = parseInt(scores[1][i]);

        //生徒の合計 国語＋数学
        studentSum[i] = scores[0][i] + scores[1][i];
        //全生徒の国語の合計
        subjectSum[0] = scores[0][i] + parseInt(subjectSum[0]);
        //全生徒の数学の合計
        subjectSum[1] = scores[1][i] + parseInt(subjectSum[1]);
    }

    //表示
    console.log('No.  国語  数学  平均');
    for(let i = 0; i < studentNumber; i++){
        let kokugo = scores[0][i];
        let sugaku = scores[1][i];
        let average = studentSum[i] / 2;
        process.stdout.write(`${spacePadding(i + 1, 3)}   ${spacePadding(kokugo, 3)}   ${spacePadding(sugaku, 3)}   ${spacePadding(average, 4)}`);
        console.log('');
    }
    //科目平均
    let kokugoAverage = subjectSum[0] / studentNumber;
    let sugakuAverage = subjectSum[1] / studentNumber;
    process.stdout.write(`平均  ${kokugoAverage.toFixed(1)}  ${sugakuAverage.toFixed(1)}`);
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