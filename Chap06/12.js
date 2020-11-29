//12.全要素を1〜10の乱数で埋め尽くす。要素が異なる値になるようにする。

const readline = require('readline');

//メイン処理
const main = async () => {

    let elementCount;
    do{
        elementCount = await prompt('要素数:');
    }while(elementCount < 1 || elementCount > 10);

    let points = new Array(elementCount);

    //配列に乱数を代入
    for(let i = 0; i < elementCount; i++){
        let j;
        //ダブリがあったらbreakし、内側のfor文を抜ける。j<iが成立するためdo whileで再度乱数取得
        //ダブリがなければ内側のfor文を抜けて、j<iが成立しないためdo whileを抜ける。外側のfor文の続き
        do{
            j = 0;
            points[i] = randomInteger();
            for( ; j < i; j++){
                if(points[j] == points[i]) break;
            }
        }while(j < i);
    }

    //表示
    for(let i = 0; i < elementCount; i++){
        console.log(`a[${i}] = ${points[i]}`);
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

//ランダムな整数生成
const randomInteger = () =>{
    return Math.floor( Math.random()*10);
}

// 起動
(async () => {
    await main();
})();