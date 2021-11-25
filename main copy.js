function pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}
$('.top').mousedown(function(e) {
    e.preventDefault();
    $(this).prop('selected', !$(this).prop('selected'));
    return false;
});
$("form").click(function() {
    size = $('#size').val();
    crust = $('#crust').val();
    topping = $('#toppings').val();

    switch (size) {
        case "large":
            size = 700;
            break;
        case "medium":
            size = 500;
            break;
        case "small":
            size = 300;
            break;
        default:
            console.log("Error");
            break;
    }



    switch (crust) {
        case "crispy":
            crustPrice = 50;
            break;
        case "stuffed":
            crustPrice = 100;
            break;
        case "gluten_free":
            crustPrice = 70;
        default:
            console.log("Error")

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

    // console.log(size + crustPrice + toppingTotal)


    if ($('#delivery').is(":checked")) {
        delivery = 200;
    } else {
        delivery = 0
    }

    totalBill = size + crustPrice + toppingTotal + delivery
    console.log(totalBill)
})











// $('option').on('click', () => {
//     let crust = $('#crust').val();



//     let crust = $('#crust').val();
//     let topping = $('.top').val();



// })


// $('.top').mousedown(function(e) {
//     e.preventDefault();
//     $(this).prop('selected', !$(this).prop('selected'));
//     return false;
// });
// $('.radios').on('click', () => {
//     if ($('#delivery').is(":checked")) {
//         delivery = 200;
//     } else {
//         delivery = 0
//     }
//     console.log(delivery)
// })







// let pizza1 = new pizza(size, crust, topping)



// // console.log(pizza1)


// let toppingOptions = ["ham", "peperoni", "mushroom", "steak", "pickles"]
// let toppingPrices = [50, 70, 40, 20, 20]
// let toppingAmount = [];


// let findPrices = (first, second) => {
//     first.forEach((element, index) => {
//         if (second.includes(element)) {
//             toppingAmount.push(toppingPrices[index]);
//         };
//     });
//     return toppingAmount;
// };
// findPrices(toppingOptions, topping);

// let toppingTotal = toppingAmount.reduce((a, b) => a + b, 0)
// console.log(toppingTotal)




// var sizePrice = basePrice
// var deliveryFee = delivery



// let orderTotal = deliveryFee + basePrice + crustPrice + toppingTotal



// console.log(orderTotal)

// console.log(sizePrice)

// $("form#order").submit(function(event) {
//     event.preventDefault();

//     let newOrder = new pizza(size, crust, topping);



//     $("ul#contacts").append("<li><span class='contact'>" + newOrder.fullName() + "</span></li>");

//     $("select#size").val("");
//     $("select#crust").val("");
//     $("input#delivery").val("");

//     $(".contact").last().click(function() {
//         $("#show-order").show();
//         $("#show-order h2").text(newOrder.size);
//         $(".order_size").text(newOrder.size);
//         $(".order_crust").text(newOrder.crust);
//         $(".order_topping").text(newOrder.topping);

//         console.log(newOrder)
//     });
// });