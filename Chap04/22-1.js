//22.*を並べてn段の直角三角形を作る

const readline = require('readline');

//メイン処理
const main = async () => {
    console.log('左下直角の二等辺三角形を表示します。');
    let steps = await prompt('段数は：');
    for(let i = 0; i < steps; i++){
        for(let j = 0; j < steps; j++){
            if(i >= j){
                process.stdout.write('*');
            }
        }
        console.log('');
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

// 起動
(async () => {
    await main();
})();