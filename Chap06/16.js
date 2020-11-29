//16.英単語学習プログラム 曜日を乱数表示、同一問題繰り返さない。

const readline = require('readline');

//メイン処理
const main = async () => {
    const dayJapanese = ["日", "月", "火", "水", "木", "金", "土"];
    const dayEnglish = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    console.log('英語の曜日名を小文字で入力してください。');

    let retry = 0;
    let last = -1;
    //同じ曜日が続かないようにする処理
    do{
        let day;
        do{
            day = randomInteger(7);
        }while(day == last);
        last = day;

        let action;
        while(true){
            let dayInput =  await prompt(`${dayJapanese[day]}曜日：`);
            if(dayInput == dayEnglish[day])break;
            console.log('違います。');
            do{
                action =  await prompt(`どうしますか？  1..再入力/ 0..正解を見る：`);

            }while(action != 0 && action != 1);
            if(action == 0) console.log(`${dayJapanese[day]}曜日は${dayEnglish[day]}です。`)
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