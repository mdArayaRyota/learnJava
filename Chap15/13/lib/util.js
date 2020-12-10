export class Circle{
    static main(args){
        let r = process.argv[2];
        console.log(`半径${r}の円周は${(2 * r * Math.PI).toFixed(2)}で面積は${(r * r * Math.PI).toFixed(2)}`);
    }
}
