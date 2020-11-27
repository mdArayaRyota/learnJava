//24.正の整数値を読み込み素数かどうかチェック

const readline = require('readline');

//メイン処理
const main = async () => {
    let promptInt;
    let i;
    //2以上の整数でなければループ
    do{
        promptInt = await prompt('2以上の整数値：');
    }while(promptInt < 2);

    //2〜promptInt-1で割り切れるか確認
    for(i = 2; i < promptInt; i++){
        if(promptInt % i == 0){
            break;
        }
    }
    //最後まで割り切れなかったら素数
    if(i == promptInt){
        console.log('それは素数です。');
    }else{
        console.log('それは素数ではありません。');
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