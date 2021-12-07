function max(){
    let maxelement = arguments[0]
    let big
    try{
        if(arguments.length === 0) throw `"null"`
        for(let i = 0 ; i<arguments.length ; i++){ 
            if(typeof arguments[i] !== "bigint"){
                if(typeof arguments[i] !== "string"){
                    if( !Number.isInteger(arguments[i])){
                        throw `"Big Error"`
                    }
                }
            } 
            if(arguments[i] === "" ||  (BigInt(arguments[i])  >= 2 ** 53)){
                throw `"Big Error"`
            }else{ 
                
            }
        }
    }
    catch(err){
        return err
    }
    
}
console.log(max(1n, 10n, 5n))



