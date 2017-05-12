//// Back End ////
function Order(name, size, toppings) {
  this.name = name;
  this.size = 0;
  this.toppings = toppings;
  this.price = this.orderPrice();
}

Order.prototype.orderPrice = function() {
  var pizzaCost = 2;
  for (i = 0; i < this.toppings.length; i++) {
    pizzaCost += 5;
  }
  return pizzaCost;
}

// Order.prototype.orderSize = function() {
//   if (this.size === ".small") {
//     cost = 8;
//   } else if (this.size === ".medium") {
//     cost =10;
//   } else {
//     cost = 12;
// }


//// Front End ////
$(document).ready(function() {
  $("form#userInput").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var size = $("input:radio[name=size]:checked").val();
    var toppings = [];
    $(":checkbox:checked").each(function(i){
      toppings[i] = $(this).val();
    });
    var newOrder = new Order(name, size, toppings);
    // console.log(name);

    // $("#output").text(name + ", " + size + ", " + toppings);
    $("#output").show();
    $(".price").text(" $" + newOrder.price);
    $(".name").text(name);
    $(".topping").text(toppings);
  });
});
