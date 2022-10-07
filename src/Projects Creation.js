function ProjectsCreation(input) {
    let name = input[0];
    let number = input[1];
    let hours = number * 3;
    let result = (`The architect ${name} will need ${hours} hours to complete ${number} project/s.`)
    console.log(result);
}

ProjectsCreation([ "Atanas", 4 ]);