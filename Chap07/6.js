//6.季節を表示するメソッド

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {
    let month;
    do{
        month = await prompt(`何月ですか(1〜12)：`);
    }while(month < 1 || month > 12);
    process.stdout.write('その月の季節は');
    printSeason(month);
    process.stdout.write('です。');
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

// 起動
(async () => {
    await main();
})();

const printSeason = (month) => {
    switch(month){
        case 3: case 4: case 5: process.stdout.write('春'); break;
        case 6: case 7: case 8: process.stdout.write('夏'); break;
        case 9: case 10: case 11: process.stdout.write('秋'); break;
        case 12: case 1: case 2: process.stdout.write('冬'); break;
    }
}