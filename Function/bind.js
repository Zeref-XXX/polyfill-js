let car1 = {
    color: "red",
    brand: "tata"
}

function getCarInfo(price, type,other) {
    console.log(`${other} git ${this.brand} of color  ${this.color} price ${price} type ${type}`)
}


Function.prototype.myBind = function (context, ...bargs ) {
    context.fn = this

    return function (...args) {
        return context.fn.apply(context, [...bargs,...args])

    }
}


const binds = getCarInfo.myBind(car1, 34, "new")
binds("hell0")