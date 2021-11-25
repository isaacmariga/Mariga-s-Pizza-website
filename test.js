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

let text = "";
let i = 0;
while (i < 10) {
    text += "<br> The number is " + i;
    i++;
}

console.log(text)