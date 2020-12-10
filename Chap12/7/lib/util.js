export class Account{
    #name;
    #no;
    #balance;
    #openDay;
    constructor(n, num, z, d){
        this.#name = n;
        this.#no = num;
        this.#balance = z;
        this.#openDay = new Day(d.getYear(), d.getMonth(), d.getDate());
    }

    getName(){
        return this.#name;
    }
    getNo(){
        return this.#no;
    }
    //普通預金
    getBalance(){
        return this.#balance;
    }
    getOpenDay(){
        return new Day(this.#openDay.getYear(), this.#openDay.getMonth(), this.#openDay.getDate());
    }
    deposit(k){
        this.#balance += k;
    }
    withdraw(k){
        this.#balance -= k;
    }
    toString(){
        return (`${this.#name}, ${this.#no}, ${this.#balance}`);
    }
}

export class TimeAccount extends Account{
    #timeBalance; //預金残高(定期預金)
    constructor(name, no, balance, openDay, timeBalance){
        super(name, no, balance, openDay);
        this.#timeBalance = timeBalance;
    }
    //定期預金
    getTimeBalance(){
        return this.#timeBalance;
    }
    //定期預金を解約して全額を普通預金に移す
    cancel(){
        this.#timeBalance = 0;
    }
}

export class AccountCompare{
    static compBalance(a, b){
        //instanceofメソッドで変数が型の下位クラスであればtrue
        //定期預金のクラスのインスタンスならtrue
        //普通預金のクラスのインスタンスならfalse
        let totalBalanceA
            = a instanceof TimeAccount ? (a.getBalance() + a. getTimeBalance()) : a.getBalance();
        let totalBalanceB
            = b instanceof TimeAccount ? (b.getBalance() + b. getTimeBalance()) : b.getBalance();
        if(totalBalanceA > totalBalanceB){
            return 1;
        }else if(totalBalanceA < totalBalanceB){
            return -1;
        }else{
            return 0;
        }
    }
    static main(args){
        let adachi = new Account('足立幸一', '123456', 500, new Day(2020, 12, 1));
        let nakata = new TimeAccount('仲田慎二', '654321', 300, new Day(2000, 4, 4), 400);
        console.log('足立くんと仲田くんの預金残高の比較結果です。');

        switch (this.compBalance(adachi, nakata)){
            case 0: console.log('二人の預金残高は同じ。'); break;
            case 1: console.log(`${adachi.getName()}の方が預金残高が多い。`); break;
            case -1: console.log(`${nakata.getName()}の方が預金残高が多い。`); break;
        }
    }
}

export class AccountTester1{
    static main(){
        let d = new Day(2020, 12, 1);
        let suzuki = new Account('鈴木一郎', '125768', 100, d);
        let p = suzuki.getOpenDay();
        console.log(`口座開設日：   ${p}`);

        p.set(1999, 12, 31);
        let q = suzuki.getOpenDay();
        console.log(`口座開設日：   ${q}`);
    }
}

export class AccountTester2{
    static async main(){
        console.log('口座情報を入力せよ。');
        let name = await prompt('名  義：');
        let no = await prompt('番  号：');
        let balance = await prompt('残  高：');
        let y = await prompt('開設年：');
        let m = await prompt('開設月：');
        let d = await prompt('開設日：');

        let a = new Account(name, no, balance, new Day(y, m, d));

        console.log(`口座基本情報：${a}`);
        console.log(`開設日：${a.getOpenDay()}`);
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

