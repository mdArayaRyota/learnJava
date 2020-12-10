export class PrintArgs{
    static main(args){
        for (let i = 0; i < process.argv.length; ++i) {
            console.log(`args[${i}] = ${process.argv[i]}`);
        }
    }
}
