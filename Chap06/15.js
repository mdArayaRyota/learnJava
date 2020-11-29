//15.英単語学習プログラム

const readline = require('readline');

//メイン処理
const main = async () => {
    const monthStoring = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    console.log('英語の月名を入力してください。');
    console.log('なお、先頭は大文字で、2文字目以降は小文字とします。');

    let retry = 0;
    let last = -1;
    //同じ月が続かないようにする処理
    do{
        let month;
        do{
            month = randomInteger(12);
        }while(month == last);
        last = month;

        while(true){
            let monthInput =  await prompt(`${month + 1}月：`);
            if(monthInput == monthStoring[month])break;
            console.log('違います。');
        }
        retry =  await prompt(`正解です。もう一度？  1..Yes/ 0..No：`);
    }while(retry == 1);

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

//ランダムな整数生成
const randomInteger = (elementCount) =>{
    return Math.floor( Math.random() * elementCount);
}

// 起動
(async () => {
    await main();
})();