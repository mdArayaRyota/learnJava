export class SearchString{
    static async main(){
        let s1 = await prompt('文字列s1：');
        let s2 = await prompt('文字列s2：');

        //s1の中にs2が含まれてなかったら-1,含まれてたら開始インデックスが格納される
        let idx = s1.indexOf(s2);
        console.log(s1);
        if(idx == -1){
            console.log("s1の中にs2は含まれていません。");
        }else{
            for(let i = 0; i < idx; i++){
                process.stdout.write(' ');
            }
        }
        process.stdout.write(s2);
        console.log('');
    }
}



import readline from 'readline';

//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return (answer);
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

function toHex(v) {
    return (('0000' + v.toString(16).toUpperCase()).substr(-4));
}