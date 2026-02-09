 
let car1={
    color:"bue",
    company:"toyota"
}
function Purchase(currency,price){
    console.log(`got ${this.color} ${this.company} for ${currency}${price}`)
}

// Purchase.apply(car1,["$",20000,34])
//function    context  arguments
 

Function.prototype.myapply = function (context = {}, args=[]) {
    context.fn = this
    context.fn(...args)
    delete context.fn
}

Purchase.myapply(car1,["$",2000])

