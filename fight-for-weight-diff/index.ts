const diffWeight = (weights: Array<number>) => {
    const diff = ((weights[0] - weights[1])**2)**0.5;
    if(diff <= 5){
        return "PODEM LUTAR";
    }
    return "NAO PODEM LUTAR";
} 

console.log(diffWeight([50,53]));