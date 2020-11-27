//1.読み込んだ値の符号を判定して表示する

const readline = require('readline');

//メイン処理
let endFlg = 0;
const main = async () => {
    while (endFlg == 0) {
        const answer1 = await prompt('整数値:');
        if(answer1 > 0){
            console.log('その値は正です。');
        }else if(answer1 < 0 ){
            console.log('その値は負です。');
        }else{
            console.log('その値は0です。');
        }
        const retry = await prompt('もう一度？ 1..Yes / 0..No: ');
        if(retry == 0){
            endFlg = 1;
        }else{
            console.log('');
        }
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