export class ScanStringRev{
    static async main(){
        let s = await prompt('文字列：');
        process.stdout.write('逆から読むと');
        for(let i = s.length - 1; i >= 0; i--){
            process.stdout.write(s[i]);
        }
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
