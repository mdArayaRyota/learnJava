//toi121.入力値に対してどのような実行結果となるか

const readline = require('readline');

//メイン処理
const main = async () => {

    const x = await prompt('xの値は：');

    abc:for(let i = 1; i < 3; i++){
        process.stdout.write('A');
        xyz:for(let j = 1; j < 2; j++){
            let t = i + j;
            if(t == x + 1) continue abc;
            if(t == x + 2) break abc;
            if(t == x + 3) continue xyz;
            if(t == x + 4) break xyz;
            process.stdout.write('B');
        }
    }
    console.log('');
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

//ランダムな整数生成
const randomInteger = () =>{
    return Math.floor( Math.random()*100);
}

// 起動
(async () => {
    await main();
})();