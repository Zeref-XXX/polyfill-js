let car1 = {
    color: "red",
    brand: "tata"
}

function getCarInfo(price, type) {
    console.log(`${this.brand} of color  ${this.color} price ${price} type ${type}`)
}

// getCarInfo.apply(car1, [34, "new"])

Function.prototype.myApply = function (context, args = []) {
    context.fn = this
    const result = context.fn(...args)
    delete context.fn
    return result
}


getCarInfo.myApply(car1, [34, "new"])