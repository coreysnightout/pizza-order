//// Back End ////
function Order(name, size, toppings) {
  this.name = name;
  this.size = size;
  this.toppings = toppings;
  this.price = this.
}













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

    $("#output").text(name + ", " + size + ", " + toppings);
  });
});
