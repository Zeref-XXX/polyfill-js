let car1 = {
    color: "purple-blue",
    brand: "tata",
    getInfo: function () {
        return this.color
    }
}


function Purchase(price) {
    // console.log(`${this.brand} color ${this.color} availabe at ${this.price}`)
    getInfo: () => {
        return `${this.brand} color ${this.color} availabe at ${this.price}`
    }
}

Purchase.call(car1);