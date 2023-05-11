const itemsCheck = (collectedItems: Array<string>, item1: string, item2: string, item3: string) => {
    
    if(collectedItems.includes(item1) && 
        collectedItems.includes(item2) && 
        collectedItems.includes(item3)
    ){
        return "PODE ENFRENTAR"
      };
    return "NAO PODE ENFRENTAR"

};