$('option').on('click', () => {

    let size = $('#size').val();
    let crust = $('#crust').val();
    let topping = $('.top').val();

})
$('.top').mousedown(function(e) {
    e.preventDefault();
    $(this).prop('selected', !$(this).prop('selected'));
    return false;
});
$('.radios').on('click', () => {
    if ($('#delivery').is(":checked")) {
        delivery = 200;
    } else {
        delivery = 0
    }
    console.log(delivery)
})




function pizza(size, crust, topping) {
    this.size = size;
    this.crust = crust;
    this.topping = topping;


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
            console.log("Error")

    }

    // console.log(pizza1)


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
    console.log(toppingTotal)



}
console.log(basePrice)
var deliveryFee = delivery



let orderTotal = deliveryFee + basePrice + crustPrice + toppingTotal



console.log(orderTotal)

console.log(orderTotal)

$("form#order").submit(function(event) {
    event.preventDefault();

    let newOrder = new pizza(size, crust, topping);



    $("ul#contacts").append("<li><span class='contact'>" + newOrder.fullName() + "</span></li>");

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