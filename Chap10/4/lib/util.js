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
    static #counter = 0;
    #id;
    constructor(){
        this.#id = ++Id.#counter;
    }
    getId(){
        return this.#id;
    }
    static getMaxId(){
        return Id.#counter;
    }
}
export class IdSubClass extends Id{

}

export class IdTester{
    static main(args){
        let a = new Id();
        let b = new Id();

        console.log(`aの識別番号：${a.getId()}`);
        console.log(`bの識別番号：${b.getId()}`);

        console.log(`Id.counter = ${Id.getMaxId()}`);
        //console.log(`a.counter = ${a.getMaxId()}`); //インスタンスからは呼ばれない
        //console.log(`b.counter = ${b.getMaxId()}`); //インスタンスからは呼ばれない

        console.log(`a.counter = ${IdSubClass.getMaxId()}`); //サブクラスで定義されてる

    }
}

export class ExId{
    static #counter = 0;
    static #step = 1;
    #id;
    constructor(){
        this.#id = ExId.#counter += ExId.#step;
    }
    getId(){
        return this.#id;
    }
    static getStep(){
        return this.#step;
    }
    static setStep(s){
        this.#step = ((s >= 1)? s : 1);
        return this.#step;
    }
    static getMaxId(){
        return this.#counter;
    }
}

export class ExIdTester{
    static main(){
        let a = new ExId();
        let b = new ExId();
        let c = new ExId();
        ExId.setStep(4);
        let d = new ExId();
        let e = new ExId();
        let f = new ExId();

        console.log(`aの識別番号: ${a.getId()}`);
        console.log(`bの識別番号: ${b.getId()}`);
        console.log(`cの識別番号: ${c.getId()}`);
        console.log(`dの識別番号: ${d.getId()}`);
        console.log(`eの識別番号: ${e.getId()}`);
        console.log(`fの識別番号: ${f.getId()}`);

        let max = ExId.getMaxId();
        let step = ExId.getStep();

        console.log(`最後に与えた識別番号 = ${max}`);
        console.log(`次回に与える識別番号 = ${max + step}`);
    }
}