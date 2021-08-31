import process from 'process'
for (let i=3; i<process.argv.length;i++){
    if (!Number(process.argv[i])){
        console.log("Sorry, the argument " + process.argv[i] + " is not a number, please try again")
        process.exit()
    }
}

if (process.argv[2] === "sum"){
    let sum = 0;
    for (let i=3; i<process.argv.length;i++) {
        sum += Number(process.argv[i]);
    }
    console.log(sum)
}

if (process.argv[2] === "avg"){
    let sum = 0;
    for (let i=3; i<process.argv.length;i++) {
        sum += Number(process.argv[i]);
    }
    let lengthArgv = process.argv.length -3
    console.log(sum/lengthArgv)
}
if (process.argv[2]!=="sum" && process.argv[2]!=="avg"){
    console.log("I cannot calculate that, please type either \"sum\" (to calculate the sum) or \"avg\" (To calculate the Average)"
    )
};