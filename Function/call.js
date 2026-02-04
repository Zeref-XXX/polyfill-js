let car1={
    color:"red",
    brand:"tata"
}

function getCarInfo(){
    console.log(`${this.brand} of colot ${this.color}`)
}

// getCarInfo.call(car1)

Function.prototype.myCall = function (context, args) {
    context.fn=this
    context.fn(args)

}


getCarInfo.myCall(car1)