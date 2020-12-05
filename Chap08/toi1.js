//toi1
class Member{
    #name;
    #no;
    #age;
    constructor(name, no, age){
        this.#name = name;
        this.#no = no;
        this.#age = age;
    }
    getNo(){
        return this.#no;
    }

    setNo(no){
        this.#no = no;
    }

    print(){
        console.log(`No.${this.#no}:${this.#name}(${this.#age})`);
    }

}
let takaoka = new Member('高岡', 75, 55);
let nango = new Member('南郷', 35, 65);

nango.setNo(80);
console.log(`会員番号：${nango.getNo()}`);
nango.print();