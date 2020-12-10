export class SumOfArgs{
    static main(args){
        let sum = 0;
        for(let i = 2; i < process.argv.length; i++){
            sum += parseFloat(process.argv[i]);
        }
        console.log(`合計は${sum}です。`);
    }
}
