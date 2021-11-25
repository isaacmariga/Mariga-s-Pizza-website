function pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

let pizza1 = new pizza("large", "crispy", ["peperoni", "cheese"])

console.log(pizza1)