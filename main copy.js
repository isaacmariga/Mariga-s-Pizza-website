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

    totalBill = sizePrice + crustPrice + toppingTotal + delivery
    console.log(totalBill)

    pizza.prototype.Order = function() {
        return this.size + " " + this.crust + " " + this.topping;
    }


})
$("form#order").submit(function(event) {
    event.preventDefault();

    let newOrder = new pizza(size, crust, topping);



    $("ul#contacts").append("<li><span class='contacts'>" + newOrder.Order() + "</span></li>");

    $("select#size").val("");
    $("select#crust").val("");
    $("input#delivery").val("");

    $(".contact").last().click(function() {
        $("#show-order").show();
        $("#show-order h2").text(newOrder.size);
        $(".order_size").text(newOrder.size);
        $(".order_crust").text(newOrder.crust);
        $(".order_topping").text(newOrder.topping);

        console.log(newOrder)
    });
});






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