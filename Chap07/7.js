//7.直角三角形を表示する。文字cをn個表示する目処っそと、*をn個連続表示するメソッドを作る。

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {
    console.log('直角三角形の二等辺三角形を表示します。');
    let n;
    do{
        n = await prompt(`段数は：`);
    }while(n == '' || n < 0);

    for(let i = 1; i <= n; i++){
        putStars(i);
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

const putChars = (c, n) => {
    while(n-- > 0){
        process.stdout.write(c);
    }
}
const putStars = (n) => {
    putChars('*', n);
}