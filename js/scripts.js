//// Back End ////














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
    // console.log(name);

    $("#output").text(name + ", " + size);
  });
});
