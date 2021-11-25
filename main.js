function pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;




}

let pizza1 = new pizza("large", "crispy", ["peperoni", "cheese"])


switch (pizza1.size) {
    case "large":
        basePrice = 700;
        break;
    case "medium":
        basePrice = 500;
        break;
    case "small":
        basePrice = 300;
    default:
        alert("Error")

}

console.log(basePrice)