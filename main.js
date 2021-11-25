function pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;




}

let size = $('#size').val();
let crust = $('#crust').val();
let topping = $('#toppings').val();

$('.top').mousedown(function(e) {
    e.preventDefault();
    $(this).prop('selected', !$(this).prop('selected'));
    return false;
});


let pizza1 = new pizza(size, crust, topping)


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
        // console.log("Error")

}

console.log(pizza1)


switch (pizza1.crust) {
    case "crispy":
        crustPrice = 50;
        break;
    case "stuffed":
        crustPrice = 100;
        break;
    case "gluten_free":
        crustPrice = 70;
    default:
        // console.log("Error")

}
let toppingOptions = ["ham", "peperoni", "mushroom", "steak", "pickles"]
let toppingPrices = [50, 70, 40, 20, 20]
let toppingAmount = [];


let findPrices = (first, second) => {
    first.forEach((element, index) => {
        if (second.includes(element)) {
            toppingAmount.push(toppingPrices[index]);
        };
    });
    return toppingAmount;
};
findPrices(toppingOptions, topping);

let toppingTotal = toppingAmount.reduce((a, b) => a + b, 0)

console.log(toppingTotal)



// let num = toppingOptions.findIndex(rank => rank === topping);

// console.log(num)

// toppingTotal.push()


// console.log(crustPrice)

// // toppings

// let toppingOptions = ["Cheese", "Peperoni", "Salami", "Pineapple", "Pickles"]
// let toppingPrices = [50, 70, 40, 20, 20]
// let toppingTotal = []


// let tPrice = (topping) => {
//     let num = toppingOptions.findIndex(rank => rank === topping);
//     toppingOptions[num] = toppingPrices[num]
//     toppingTotal.push(toppingPrices[num])
//     sumTotal = toppingTotal.reduce((a, b) => a + b)

//     console.log(sumTotal)


// }

// tPrice("Salami")


// total = sumTotal + crustPrice + basePrice

// console.log(total)