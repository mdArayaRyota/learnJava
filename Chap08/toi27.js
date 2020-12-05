//toi27
class Abc{
    #a;
    #b;
    #c;
    constructor(a, b, c){
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    getSum(){
        return this.#a + this.#b + this.#c;
    }
    print(){
        process.stdout.write(` ${this.#a}, ${this.#b}, ${this.#c}`);
        console.log('');
    }
}

let x = new Abc(1, 2, 3);
let y = new Abc(2, 4, 6);

let xsum = x.getSum();
let ysum = y.getSum();

process.stdout.write('x    :');
x.print();
console.log(`xsum : ${xsum}`);
console.log('');
process.stdout.write('y    :');
y.print();
console.log(`ysum : ${ysum}`);