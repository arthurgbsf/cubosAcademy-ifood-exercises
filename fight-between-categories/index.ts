const checkCategory = (weight1: number, weight2: number) => {

    const fighterData = [{weight: weight1, category:""}, 
                        {weight: weight1, category:""}];
    
    for (const fighter of fighterData){

        if( fighter.weight < 55 ){
            fighter.category = "peso leve"
        }
    
        if( fighter.weight < 65 && fighter.weight >= 55){
            fighter.category = "peso meio-médio"
        }

        if( fighter.weight < 75 && fighter.weight >= 65){
            fighter.category = "peso médio"
        }

        if( fighter.weight < 85 && fighter.weight >= 75){
            fighter.category = "peso meio-pesado"
        }

        if( fighter.weight >= 85){
            fighter.category = "peso pesado"
        }
    }

    if(fighterData[0].category === fighterData[1].category){
        return "PODEM LUTAR"
    }else{
        return "NAO PODEM LUTAR"
    }

}