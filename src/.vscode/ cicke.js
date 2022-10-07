function solve(input) {
    
    let n = Number(input[0]);
    for(let power = 0; power <= n; power++)
    console.log(Math.pow(2, power));

}
solve(["10"])