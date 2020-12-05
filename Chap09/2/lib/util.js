import readline, { clearScreenDown } from 'readline';
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

export class Coordinate{
    #x = 0.0;
    #y = 0.0;
    constructor(x, y){
        this.#x = x || 0.0;
        this.#y = y || 0.0;
    }

    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
    }

    setX(x){
        this.#x = x;
    }
    setY(y){
        this.#y = y;
    }

    set(x, y){
        this.#x = x;
        this.#y = y;
    }
}
//2次元座標クラスCoordinate ver1
//インスタンスへの参照をコピーすると参照先が同じクラス型の変数ができる
export class CoordinateTester1{
    static async main(args){

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
            console.log('座標Pを入力せよ。');
            let x = await prompt('X座標:');
            let y = await prompt('Y座標:');
            let p = new Coordinate(x, y);
            console.log(`p = (${p.getX()}, ${p.getY()})`);
            let q = Coordinate;
            q = p;
            q.set(9.9 , 9.9);
            console.log(`p = (${p.getX()}, ${p.getY()})`);
            console.log(`q = (${q.getX()}, ${q.getY()})`);

    }
}
//等価性の判定
export class CoordinateTester2{
    static compCoordinate(c1, c2){
        return c1.getX() == c2.getX() && c1.getY() == c2.getY();
    }

    static async main(args){


        console.log('座標pを入力せよ。');
        let x = await prompt('X座標:');
        let y = await prompt('Y座標:');
        let p = new Coordinate(x, y);
        console.log(`p = (${p.getX()}, ${p.getY()})`);

        console.log('qをpと同じ座標として作りました。');
        let q = Coordinate;
        q = p;
        console.log(`q = (${q.getX()}, ${q.getY()})`);
        // //参照先が同じだと trueになる
        console.log(`${(p == q) ? 'p == q です。' : 'p != q です。'}`);

        let c1 = new Coordinate();
        let c2 = new Coordinate(1.1, 2.2);
        console.log(`c1 = (${c1.getX()}, ${c1.getY()})`);
        console.log(`c2 = (${c2.getX()}, ${c2.getY()})`);

        let a = Coordinate;
        a = new Array(3);

        for(let i = 0; i < a.length; i++){
            a[i] = new Coordinate();
        }
        for(let i = 0; i < a.length; i++){
            console.log(`a[${i}] = (${a[i].getX()}, ${a[i].getY()})`);
        }
    }
}

export class CoordinateTester3{
    static async main(){
        let n = await prompt('座標は何個:');
        let a = Coordinate;
        a = new Array(parseInt(n));

        for(let i = 0; i < a.length; i++){
            a[i] = new Coordinate(5.5, 7.7);
        }
        for(let i = 0; i < a.length; i++){
            console.log(`a[${i}] = (${a[i].getX()}, ${a[i].getY()})`);
        }
    }
}