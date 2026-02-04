let car1 = {
    color: "purple-blue",
    brand: "tata",
    getInfo: function () {
        return this.color
    }
}


function Purchase(price) {
        return `${this.brand} color ${this.color} availabe at ${this.price}`
    
}

Purchase.call(car1(30));