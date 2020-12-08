import readline from 'readline';
//入力処理
const prompt = async (msg) => {
    const answer = await question(msg);
    return parseFloat(answer);
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

export class MathMethods{
    static async main(){
        let x = await prompt('実数:');
        console.log(`絶対値：${Math.abs(x)}`);
        console.log(`平方根：${Math.sqrt(x)}`);
        console.log(`面 積：${Math.PI * x ** 2}`);
    }
}