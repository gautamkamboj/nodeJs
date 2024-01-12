for(let x=5; x>0; x--){
    let str = "";
    for(let y=0; y<5-x; y++){
        str += "  ";
    }
    
    for(let z = 1; z < (2*x) ; z++){
        str += z + " ";
    }
    console.log(str);
}