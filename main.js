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


switch (pizza1.crust) {
    case "crispy":
        crustPrice = 50;
        break;
    case "stuffed":
        crustPrice = 100;
        break;
    case "gluten free":
        crustPrice = 70;
    default:
        alert("Error")

}

console.log(crustPrice)