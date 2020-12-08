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

export class MinMax{
    static min(a, b){
        return a > b ? b : a;
    }
    static min(a, b, c){
        let min = a;
        if(min > b)min = b;
        if(min > c)min = c;
        return min;
    }
    static minArray(a){
        let min = a[0];
        for(let i = 1; i < a.length; i++){
            if(min > a[i])min = a[i];
        }
        return min;
    }
    static minIndexArray(a){
        //最小値計算
        let min = this.minArray(a);
        console.log('min',min);
        let count = 0;
        for(let i = 0; i < a.length; i++){
            if(min == a[i]){
                count++;
            }
        }
        console.log(count);
        let c = [];
        for(let i = 0; i < a.length; i++){
            if(a[i] == min){
                c[--count] = i;
            }
        }
        return c;

    }
    static max(a, b){
        return a < b ? b : a;
    }
    static max(a, b, c){
        let max = a;
        if(max < b)max = b;
        if(max < c)max = c;
        return max;
    }
    static maxArray(a){
        let max = a[0];
        for(let i = 1; i < a.length; i++){
            if(max < a[i])max = a[i];
        }
        return max;
    }
    static maxIndexArray(a){
        //最大値計算
        let max = this.maxArray(a);
        console.log('max',max);
        let count = 0;
        for(let i = 0; i < a.length; i++){
            if(max == a[i]){
                count++;
            }
        }
        console.log(count);
        let c = [];
        for(let i = 0; i < a.length; i++){
            if(a[i] == max){
                c[--count] = i;
            }
        }
        return c;

    }
}

export class MinMaxTester{
    static async main(args){
        let x = await prompt('xの値:');
        let y = await prompt('yの値:');
        let z = await prompt('zの値:');
        let num = await prompt('配列aの要素数:');
        let a = [2,2,8];
        let a = new Array(num);
        for(let i =0; i < num; i++){
            a[i] = await prompt(`a[${i}]：`);
        }
        console.log(`xとyの最小値は${MinMax.min(x, y)}です。`);
        console.log(`xとyの最大値は${MinMax.max(x, y)}です。`);
        console.log(`xとyとzの最小値は${MinMax.min(x, y, z)}です。`);
        console.log(`xとyとzの最大値は${MinMax.max(x, y, z)}です。`);
        console.log(`配列aの最小値は${MinMax.minArray(a)}です。`);
        let xmin = MinMax.minIndexArray(a);
        process.stdout.write('そのインデックスは{');
        for(let i = 0; i < xmin.length; i++){
            process.stdout.write(` ${xmin[i]} `);
        }
        process.stdout.write('}です。');
        console.log('');

        console.log(`配列aの最大値は${MinMax.maxArray(a)}です。`);
        let xmax = MinMax.maxIndexArray(a);
        process.stdout.write('そのインデックスは{');
        for(let i = 0; i < xmax.length; i++){
            process.stdout.write(` ${xmax[i]} `);
        }
        process.stdout.write('}です。');
        console.log('');

    }
}