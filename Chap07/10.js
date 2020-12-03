//10.4つの問題をランダムに出題する３桁の整数の暗算トレーニング

//-----------------------------------------------------------------------------------------------
//キーボード入力
const readline = require('readline');

//メイン処理
const main = async () => {

    let end = 0;
    console.log("暗算トレーニング！！");
    do{
        let x = random(900, 999);
        let y = random(900, 999);
        let z = random(900, 999);
        let pattern = random(0, 3);

        let kotae;
        switch(pattern){
            case 0 : kotae = x + y + z; break;
            case 1 : kotae = x + y - z; break;
            case 2 : kotae = x - y + z; break;
            default : kotae = x - y - z; break;
        }
        while(true){
            let k = await prompt(`${x} ${((pattern < 2) ? "+" : "-")} ${y} ${((pattern % 2 == 0) ? "+" : "-")} ${z} = `);
            if(k == kotae) break;
            console.log('違いますよ！！');
        }
    }while(await confirmRetry() != 0);
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

//ランダム
const random = (min, max) => {
    if(max <= min){
        return min;
    }else{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

//続行確認
const confirmRetry = async() => {
    let cont;
    do{
        cont = await prompt(`もう一度？<Yes...1/No...0>: `);
        console.log('');
    }while(cont != 0 && cont != 1);
    return cont == 1;
}



// 起動
(async () => {
    await main();
})();