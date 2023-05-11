const preyOrPredator = (ispray: Boolean) => {
    if(ispray){
        return "PRESA";
    };
    return "PREDADOR"
}

console.log(preyOrPredator(true));
console.log(preyOrPredator(false));