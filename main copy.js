function pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

let eachTotal = []

$(document).ready(function() {
    $('.select_toppings').selectpicker();
});


$("form").click(function() {
    size = $('#size').val();
    crust = $('#crust').val();
    meatTopping = $('#meat_toppings').val();
    veggieTopping = $('#veggie_toppings').val();
    extraTopping = $('#extra_toppings').val();
    classic = $('#classic').val();

    // console.log(classic)

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



    let meatOptions = ["peperoni", "ham", "steak", "bacon", "chicken"]
    let meatPrices = [50, 70, 40, 40, 50]
    let veggieOptions = ["mushroom", "pineapple", "tomatoes", "spinach", "broccoli"]
    let veggiePrices = [30, 20, 20, 30, 30]
    let extraOptions = ["cheese", "olives", "chillies", "pickles", "bell_peppers", "onions"]
    let extraPrices = [40, 30, 10, 20, 20, 20]
    let classicOptions = ["hawaian"]

    let toppingOptions = []
    let toppingPrices = []
    let toppings = [];




    if (classic == "hawaian") {
        toppings.push(["bacon", "tomatoes", "ham", "pineapple"], extraTopping)
    } else {
        toppings.push(meatTopping, veggieTopping, extraTopping);
    }

    toppingOptions.push(meatOptions, veggieOptions, extraOptions),
        toppingPrices.push(meatPrices, veggiePrices, extraPrices)

    // console.log(toppings)

    // console.log(toppingOptions.flat())
    // console.log(toppingPrices)

    let toppingAmount = [];


    let findPrices = (first, second) => {
        first.forEach((element, index) => {
            if (second.includes(element)) {
                toppingAmount.push(toppingPrices.flat()[index]);
            };
        });
        return toppingAmount.flat();
    };

    findPrices(toppingOptions.flat(), toppings.flat());

    let toppingTotal = toppingAmount.reduce((a, b) => a + b, 0)

    console.log(toppingAmount)
        // console.log(toppingTotal)

    // console.log(size + crustPrice + toppingTotal)

    let classicLabel = classic + "   :   "


    if ($('#delivery').is(":checked")) {
        delivery = 200;
    } else {
        delivery = 0
    }

    itemsTotal = sizePrice + crustPrice + toppingTotal;
    totalBill = sizePrice + crustPrice + toppingTotal + delivery;
    // console.log(totalBill)

    pizza.prototype.Order = function() {
        return this.size + " " + this.crust + " " + this.toppings.flat();
    }

    $("p#sizePrint").html("<span class='order_size'>" + "Size = " +
        size + " @ " +
        sizePrice + "</span>");
    $("p#crustPrint").html("<span class='order_size'>" + "Crust = " +
        crust + " @ " +
        crustPrice + "</span>");
    $("p#toppingsPrint").html("<span class='order_size'>" + "Toppings = " + classicLabel + "  " +
        toppings.flat() + " @ " +
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
        // console.log(totals)

    $("ul#orders").append("<li><span class='orders'>" + newOrder.Order() + " @ " +
        totalBill + "</span></li>");
    $("p#totals").html("<span class='order_size'>" + "Total = " +
        totals + "</span>");

    $("#top1:selected").removeAttr("selected")


});