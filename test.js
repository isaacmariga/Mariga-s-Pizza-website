// const array1 = [1, 2, 3, 4]

// console.log(array1.reduce((a, b) => a + b, 0))


// let toppingOptions = ["Cheese", "Peperoni", "Salami", "Pineapple", "Pickles"];
// const queries = ['Peperoni', 'Salami', 'Pickles'];
// const findPositions = (first, second) => {
//     const indicies = [];
//     first.forEach((element, index) => {
//         if (second.includes(element)) {
//             indicies.push(index);
//         };
//     });
//     return indicies;
// };
// console.log(findPositions(toppingOptions, queries));


// $(document).ready(function() {
//     $('.multi_select').selectpicker();
// });


// , "mushroom", "pineapple", "tomatoes", "spinach", "broccoli", "cheese", "olives", "chillies", "pickles", "bell_peppers", "onions"

// , 30, 20, 20, 30, 30, 40, 30, 10, 20, 20, 20
let meatToppings = ["peperoni", "ham", "steak", "bacon", "chicken"]
let meatPrices = [50, 70, 40, 40, 50]
let veggieToppings = ["mushroom", "pineapple", "tomatoes", "spinach", "broccoli"]
let veggiePrices = [30, 20, 20, 30, 30]
let extraToppings = ["cheese", "olives", "chillies", "pickles", "bell_peppers", "onions"]
let extraPrices = [40, 30, 10, 20, 20, 20]

let toppingOptions = []
let toppingPrices = []


toppingOptions.push(meatToppings, veggieToppings, extraToppings)
toppingPrices.push(meatPrices, veggiePrices, extraPrices)

console.log(toppingOptions.flat())
console.log(toppingPrices)