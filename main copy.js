function pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

let eachTotal = []

$(document).ready(function() {
    $('.select_toppings').selectpicker();
});

// $('.top').mousedown(function(e) {
//     e.preventDefault();
//     $(this).prop('selected', !$(this).prop('selected'));
//     return false;
// });




$("form").click(function() {
    size = $('#size').val();
    crust = $('#crust').val();
    topping = $('#toppings').val();

    // Pizza Size
    switch (size) {
        case "large":
            sizePrice = 700;
            break;
        case "medium":
            sizePrice = 500;
            break;
        case "small":
            sizePrice = 300;
            break;
        default:
            console.log("Error");
            break;
    }


    // Pizza crust
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

    // Pizza Toppings

    // let meatToppings = ["peperoni", "ham", "steak", "bacon", "chicken"]
    // toppingOptions = toppingOptions.push(meatToppings)
    // console.log(toppingOptions)


    // let toppingOptions = ["peperoni", "ham", "steak", "bacon", "chicken"]
    // let toppingPrices = [50, 70, 40, 40, 50]


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

    // console.log(toppingOptions.flat())
    // console.log(toppingPrices)

    let toppingAmount = [];


    let findPrices = (first, second) => {
        first.forEach((element, index) => {
            if (second.includes(element)) {
                toppingAmount.push(toppingPrices.flat()[index]);
            };
        });
        return toppingAmount;
    };
    findPrices(toppingOptions.flat(), topping);

    let toppingTotal = toppingAmount.reduce((a, b) => a + b, 0)

    console.log(toppingTotal)

    // console.log(size + crustPrice + toppingTotal)

    // Classic Pizza



    if ($('#delivery').is(":checked")) {
        delivery = 200;
    } else {
        delivery = 0
    }

    itemsTotal = sizePrice + crustPrice + toppingTotal;
    totalBill = sizePrice + crustPrice + toppingTotal + delivery;
    console.log(totalBill)

    pizza.prototype.Order = function() {
        return this.size + " " + this.crust + " " + this.topping;
    }

    $("p#sizePrint").html("<span class='order_size'>" + "Size = " +
        size + " @ " +
        sizePrice + "</span>");
    $("p#crustPrint").html("<span class='order_size'>" + "Crust = " +
        crust + " @ " +
        crustPrice + "</span>");
    $("p#toppingsPrint").html("<span class='order_size'>" + "Toppings = " +
        topping + " @ " +
        toppingTotal + "</span>");
    $("p#totalsPrint").html("<span class='order_size'>" + "Total = " +
        size + " @ " +
        itemsTotal + "</span>");




})
$("form#order").submit(function(event) {
    // $("form#submit").submit(function(event) {

    event.preventDefault();

    let newOrder = new pizza(size, crust, topping);



    eachTotal.push(totalBill)

    let totals = eachTotal.reduce((a, b) => a + b, 0)
    console.log(totals)

    $("ul#orders").append("<li><span class='orders'>" + newOrder.Order() + " @ " +
        totalBill + "</span></li>");
    $("p#totals").html("<span class='order_size'>" + "Total = " +
        totals + "</span>");

    $("#top1:selected").removeAttr("selected")


});