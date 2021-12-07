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
                big = BigInt(arguments[i])
                if(big >= maxelement){
                    maxelement = big
                }
            }
        }
        return maxelement
    }
    catch(err){
        return err
    }
    
}
console.log(max(1n, 10n, 5n))
console.log(max("10", 5n, 1))
console.log(max(2 ** 53 - 1))
console.log(max())
console.log(max(2 ** 53))
console.log(max("10" / 3))
console.log(max("10" / 2))
console.log(max(10 - 12, 10 - 10, 10 - 11))
console.log(max(0n))
console.log(max(""))



