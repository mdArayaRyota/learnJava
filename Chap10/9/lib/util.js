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

export class Point2D{
    static #counter = 0;
    static #day;
    #x;
    #y;
    constructor(x = 0, y = 0){
        let dt = new Date();
        Point2D.#day = dt.getDate();
        if(++Point2D.#counter == Point2D.#day){
            process.stdout.write(`当たり！`);
            process.stdout.write(`今日${Point2D.#counter}個目の座標が生成されました。`);
        }
        this.#x = x;
        this.#y = y;
    }
    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
    }
    static getCounter(){
        return Point2D.#counter;
    }
    toString(){
        return (`${this.#x} , ${this.#y}`);
    }
}

export class Point2DTester{
    static async main(args){
        for(let i = 0; i < 36; i++){
            let p1 = new Point2D();
            console.log(`${i} (${p1.toString()})`);
        }
    }
}