//20.何月か入力してそれに対応した季節を表示する

const readline = require('readline');

//メイン処理
const main = async () => {
    let endFlg = 0;
    while(endFlg == 0){
        let month;
        let retry;

        //正の整数(1〜12)以外の入力だった場合ループ
        while(endFlg == 0){
            month = await prompt('何月ですか:');
            if(month >= 1 && month <= 12){
                endFlg = 1;
            }
        }
        // do{
        //     month = await prompt('何月ですか:');
        // }while(month < 1 || month > 12);

        //季節表示処理
        if(month >= 3 && month <= 5){
            console.log('それは春です。');
        }else if(month >= 6 && month <= 8){
            console.log('それは夏です。');
        }else if(month >= 9 && month <= 11){
            console.log('それは秋です。');
        }else{
            console.log('それは冬です。');
        }
        //再度実行するか確認
        retry = await prompt('もう一度？ 1..Yes / 0..No: ');
        if(retry == 0){
            endFlg = 1;
        }else{
            endFlg = 0;
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