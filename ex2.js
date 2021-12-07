function max(){

    let maxelement = arguments[0]
    for(let i =0 ; i<arguments.length ; i++){
        if(arguments[i] > maxelement){
            maxelement = arguments[i]
        }
    }
    
    return maxelement
}

console.log(max(4,5,7,8))