function demo(input) {
    let n = Number(input[0])
    let numbers = ""

    for (let i = n; i > 0; i--) {
        numbers = numbers + i;
     }
     console.log(numbers)
}
demo(["8"])
