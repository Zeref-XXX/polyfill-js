let car1={
    color:"red",
    brand:"tata"
}

function getCarInfo(price){
    console.log(`${this.brand} of colot ${this.color} price ${price}`)
}

// getCarInfo.call(car1)

Function.prototype.myCall = function (context, ...args) {
    context.fn=this
    const result = context.fn(...args)
    delete context.fn
    return result
}


getCarInfo.myCall(car1,34)