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
    #purchaseDay; //購入日
    constructor(name, width, height, length, fuel, purchaseDay){
        this.#name = name;
        this.#width = width;
        this.#height = height;
        this.#length = length;
        this.#fuel = fuel;
        this.#x = 0;
        this.#y = 0;
        this.#purchaseDay = new Day(purchaseDay.getYear(), purchaseDay.getMonth(), purchaseDay.getDate());
    }
    getX(){
        return this.#x;
    }
    getY(){
        return this.#y;
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
        console.log(`名    前：${this.#name}`);
        console.log(`車    幅：${this.#width}mm`);
        console.log(`車    長：${this.#height}mm`);
        console.log(`車    高：${this.#length}mm`);
    }

    move(dx, dy){
        //移動距離
        let dist = Math.sqrt(dx * dx + dy + dy);

        if(dist > this.#fuel){
            //燃料不足
            return false;
        }else{
            //移動距離の分燃料が減る
            this.#fuel -= dist;
            this.#x += dx;
            this.#y += dy;
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
        console.log(`総走行距離：${this.#totalMileage.toFixed(2)}km`);
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


export class CarTester1{
    static main(){
        let car1 = new Car('W140', 1885, 1490, 5220, 95.0, new Day(2020, 12, 12));
        let car2 = new ExCar('W221', 1845, 1490, 5205, 90.0, new Day(2020, 12, 24));

        let x = Car;
        x = car1;
        x = car2;
        console.log(`xの購 入 日：${x.getPurchaseDay()}`);

        let y = ExCar;
        y = car1; //走行距離を持たないインスタンス
        y = car2;
        console.log(`yの購 入 日：${y.getPurchaseDay()}`);
        console.log(`yの総走行距離：${y.getTotalMileage().toFixed(1)}`);
    }
}

export class CarTester2{
    static main(){
        let car1 = new ExCar('W221', 1845, 1490, 5205, 90.0, new Day(2020, 12, 12));
        car1.putSpec();
    }
}


export class CarTester3{
    static main(){
        let car1 = Car;
        car1 = new ExCar('W221', 1845, 1490, 5205, 90.0, new Day(2020, 12, 12));
        //car1 = Car;//インスタンスの型がCar→ExCarになるためgetTotalMileageが動作する
        car1.move(10, 10);
        console.log(`総走行距離：${car1.getTotalMileage()}`);
        //console.log(`総走行距離：${(ExCar(car1)).getTotalMileage()}`);
    }
}

export class ExCarTester1{
    static main(args){
        let myCar = new ExCar('W221', 1845, 1490, 5205, 90.0, new Day(2020, 12, 10));
        console.log(`現在位置：(${myCar.getX().toFixed(2)}, ${myCar.getY().toFixed(2)})`);
        console.log(`残り燃料：${myCar.getFuel()}リットル`);
        console.log(`購 入 日：${myCar.getPurchaseDay()}`);

    }
}


export class ExCarTester2{
    static main(){
        let myCar = Car;
        myCar = new ExCar('W221', 1845, 1490, 5205, 90.0, new Day(2020, 12, 10));
        myCar.putSpec();
    }
}
