//call method allows to invoke a fucntion , explicitely setting th evalue of this and passing the arguments as array

let car1={
    color:"bue",
    company:"toyota"
}
function Purchase(currency,price){
    console.log(`got ${this.color} ${this.company} for ${currency}${price}`)
}

// Purchase.apply(car1,["$",20000,34])
//function    context  arguments


//Polyfill for Function.prototype.call

Function.prototype.myCall = function (context = {}, args=[]) {
    context.fn = this
    context.fn(...args)
    delete context.fn
}

Purchase.myCall(car1,["$",2000])

