import { count, countReset } from 'console';
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


export class Human{
    static #counter = 0;
    #name;
    #height;
    #weight;
    #id;
    constructor(name, height, weight){
        this.#name = name;
        this.#height = height;
        this.#weight = weight;
        this.#id = ++Human.#counter;
    }
    getName(){
        return this.#name;
    }
    getHeight(){
        return this.#height;
    }
    getWeight(){
        return this.#weight;
    }
    gainWeight(w){
        this.#weight += w; //太る
    }
    reduceWeight(w){
        this.#weight -= w; //痩せる
    }
    getId(){
        return this.#id;
    }
    putData(){
        console.log(`名前：${this.#name}`);
        console.log(`身長：${this.#height}cm`);
        console.log(`体重：${this.#weight}kg`);
    }
}

export class HumanTester{
    static main(){
        let suzuki = new Human('鈴木二郎', 170, 60);
        let takada = new Human('高田龍一', 166, 72);
        suzuki.putData();
        console.log(`番号：${suzuki.getId()}`);
        takada.putData();
        console.log(`番号：${takada.getId()}`);
    }
}

export class Id{
    static counter = 0;
    #id;
    constructor(){
        this.#id = ++Id.counter;
    }
    getId(){
        return this.#id;
    }
}
export class IdTester{
    static main(args){
        let a = new Id();
        let b = new Id();

        console.log(`aの識別番号：${a.getId()}`);
        console.log(`bの識別番号：${b.getId()}`);

        console.log(`Id.counter = ${Id.counter}`);
        console.log(`a.counter = ${a.counter}`); //インスタンスからは呼ばれない
        console.log(`b.counter = ${b.counter}`); //インスタンスからは呼ばれない
    }
}