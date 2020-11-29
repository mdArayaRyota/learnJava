//toi95〜 月を表す英単語学習プログラム
//12門ランダムに出題し正解数を表示する。

const readline = require('readline');

//メイン処理
const main = async () => {
    const monthStoring = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];
    console.log('英語の月名を入力してください。');
    console.log('なお、先頭は大文字で、2文字目以降は小文字とします。');

    let order = new Array(12);
    for(let i = 0; i < order.length; i++){
        order[i] = i;
    }
    for(let i = 0; i < 24; i++){
        let idx1 = randomInteger(12);
        let idx2 = randomInteger(12);
        let t = order[idx1];
        order[idx1] = order[idx2];
        order[idx2] = t;
    }

    //正解数
    let correct = 0;
    for(let i = 0; i < 12; i++){
        let month = order[i];
        console.log(`${i + 1}問目!`)
        do{
            s = await prompt(`${month + 1}月：`);
        }while(s == '');

        if(s == monthStoring[month]){
            console.log('正解です。');
            correct++;
        }else{
            console.log('違います。');
        }
        console.log('');
    }
    console.log(`12門中 ${correct}門正解でした。`);


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