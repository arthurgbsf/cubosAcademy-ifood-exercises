const atmosferLayerLocation = (height: number) => {

    if(height < 0 && height > 900){
        throw new Error("Impossible height value.");
    }
    if( height >= 0 &&  height <= 20){
        return "TROPOSFERA";
    };
    if(height >20 && height <= 50){
        return "ESTRATOSFERA";
    };
    if(height >50 && height <= 80){
        return "MESOSFERA";
    }
    if(height >80 && height <= 450){
        return "TERMOSFERA";
    }
    if(height >450 && height <= 900){
        return "EXOSFERA";
    }
}

try {
    console.log(atmosferLayerLocation(500));
} catch (error:any) {
    console.log(error.message);
}