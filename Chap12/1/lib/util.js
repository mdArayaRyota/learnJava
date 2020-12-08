export class Car{
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
    #purchaseDay; //購入日
    constructor(name, number, width, height, length, tankage, fuel, sfc, purchaseDay){
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
        this.#purchaseDay = new Day(purchaseDay);
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
    getPurchaseDay(){
        return this.#purchaseDay;
    }
    publicSpec(){
        console.log(`名    前：${this.#name}`);
        console.log(`ナンバー：${this.#number}`);
        console.log(`車    幅：${this.#width}`);
        console.log(`車    長：${this.#height}`);
        console.log(`タンク  ：${this.#tankage}`);
        console.log(`燃    費：${this.#fuel}`);
    }
    putSpec(){
        console.log(`名    前：${this.#name}mm`);
        console.log(`車    幅：${this.#width}mm`);
        console.log(`車    幅：${this.#length}mm`);
        console.log(`車    長：${this.#height}mm`);
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

export class ExCar extends Car{
    #totalMileage; //総走行距離
    constructor(name, width, height, length, fuel, purchaseDay){
        super(name, width, height, length, fuel, purchaseDay);
        this.#totalMileage = 0.0;
    }
    getTotalMileage(){
        return this.#totalMileage;
    }
    putSpec(){
        super.putSpec();
        console.log(`総走行距離：${this.#totalMileage}km`);
    }
    move(dx, dy){
        let dist = Math.sqrt(dx * dx + dy * dy); //移動距離

        if(!super.move(dx, dy)){
            return false;
        }else{
            this.#totalMileage += dist;
            return true;
        }
    }
}


export class Day{
    #year;
    #month;
    #date;
    constructor(year = 1, month = 1, date = 1){
        this.#year = year;
        this.#month = month;
        this.#date = date;
    }
    getYear(){
        return this.#year;
    }
    getMonth(){
        return this.#month;
    }
    getDate(){
        return this.#date;
    }
    setYear(year){
        this.#year += year;
    }
    setMonth(month){
        this.#month += month;
    }
    setDate(date){
        this.#date += date;
    }
    set(year, month, date){
        this.#year += year;
        this.#month += month;
        this.#date += date;
    }
    dayOfWeek(){
        let y = this.#year;
        let m = this.#month;
        //0:日,1:月,2:火,3:水,4:木,5:金,6:土
        if(m == 1 || m == 2){
            y--;
            m += 12;
        }
        return Math.floor((y + y /4 -y /100 + y /400 + (13 * m + 8) / 5 + this.#date) % 7);
    }
    equalTo(d){
        return this.#year == d.getYear() && this.#month == d.getMonth() && this.#date == d.getDate();
    }
    toString(){
        let wd = [ "日", "月", "火", "水", "木", "金", "土"];
        return (`${(this.#year)}年${(this.#month)}月${(this.#date)}日(${wd[this.dayOfWeek()]})`);

    }
}

export class CarTester{
    static main(){
        let test = new Car('taro', 'no', 100, 20, 5, '10kl', 10, 0.8);
        test.publicSpec();
        test.refuel(4);
    }
}

