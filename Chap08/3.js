//3.
class Car{
    #name;
    #number;
    #width;
    #height;
    #length;
    #x;
    #y;
    #tankage;
    #fuel;
    #sfc;
    constructor(name, number, width, height, length, tankage, fuel, sfc){
        this.#name = name;
        this.#number = number;
        this.#width = width;
        this.#height = height;
        this.#length = length;
        this.#tankage = tankage;
        this.#fuel = fuel;
        this.#sfc = sfc;
        this.#x = 0;
        this.#y = 0;
    }
    getX(){
        return x;
    }
    getY(){
        return y;
    }
    getFuel(){
        return this.#fuel;
    }
    publicSpec(){
        console.log(`名    前：${this.#name}`);
        console.log(`ナンバー：${this.#number}`);
        console.log(`車    幅：${this.#width}`);
        console.log(`車    長：${this.#height}`);
        console.log(`タンク  ：${this.#tankage}`);
        console.log(`燃    費：${this.#fuel}`);
    }

    move(dx, dy){
        //移動距離
        let dist = Math.sqrt(dx * dx + dy + dy);
        //移動に必要な燃料
        let f = dist / sfc;

        if(f > this.#fuel){
            //燃料不足
            return fuel;
        }else{
            //移動距離の分燃料が減る
            this.#fuel -= f;
            x += dx;
            y += dy;
            return true;
        }
    }

    refuel(df){
        if(df > 0){
            this.#fuel +=df;
            if(this.#fuel > this.#tankage){
                this.#fuel = this.#tankage;
            }
        }
    }

}
let test = new Car('taro', 'no', 100, 20, 5, '10kl', 10, 0.8);
test.publicSpec();
test.refuel(4);