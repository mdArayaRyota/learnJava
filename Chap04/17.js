//16
const readline = require('readline');

//メイン処理
const main = async () => {
    let displayCount = await prompt('何個*を表示しますか:');
    if(displayCount > 0){
        for(let i = 0; i < displayCount; i ++){
            process.stdout.write('*');
            //iの値が4,14,19のときに改行する
            if(i % 5 == 4){
                process.stdout.write('*');
                console.log('');
            }
        }
        //displayCountが5の倍数でなければ、*に改行付いてないので付ける
        if(displayCount % 5 != 0){
            console.log('');
        }
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