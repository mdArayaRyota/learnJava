//19.6人の生徒の国語と数学の点数を読み込み、科目毎の平均点と生徒毎の平均点を表示

const readline = require('readline');

//メイン処理
const main = async () => {

    let lineCount = 0; //行数
    let columnCount = 0; //列数
    let columns = []; //行ごとの列数を格納
    let c = [];

    console.log('凸凹な２次元配列を作ります。');
    //行数を入力
    do{
        lineCount = await prompt(`行数：`);
    }while(lineCount == '' || lineCount <= 0);

    for(let i = 0; i < lineCount; i++){
        //列数を入力
        do{
            columnCount = await prompt(`列数：`);
            }while(columnCount == '');
            columns[i] = parseInt(columnCount);
    }
    console.log('');
    console.log('各要素の値を入力せよ。');
    for(let i = 0; i < lineCount; i++){
        c[i] = [];
        for(let j = 0; j < columns[i]; j++){
            do{
                c[i][j] = await prompt(`c[${i}][${j}] ：`);
                }while(c[i][j] == '');
        }
    }
    console.log('配列cの各要素の値は次のようになっています。');
    for(let i = 0; i < lineCount; i++){
        for(let j = 0; j < columns[i]; j++){
            let element = c[i][j];
            process.stdout.write(`${spacePadding(element, 4)}`);
        }
        console.log('');
    }

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

// 起動
(async () => {
    await main();
})();

// スペース埋め
const spacePadding = (val, len) => {
    for(let i = 0; i < len; i++){
        val = " " + val;
    }
    return val.slice((-1) * len);
}