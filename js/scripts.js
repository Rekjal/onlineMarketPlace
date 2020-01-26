$(document).ready(function() {
    $("#formOne").submit(function(event) {
      var fullName = $("input#name").val();
      var address = $("input#address").val();
      var selectedJewel = $("input:radio[name=jewelery]:checked").val();

      // var person2Input = $("input#person2").val();
      // var animalInput= $("input#animal").val();
      // var exclamationInput = $("input#exclamation").val();
      // var verbInput = $("input#verb").val();
      // var nounInput = $("input#noun").val();
  
      $("#info").append(`Thank you for placing your order ${fullName}. <br> Your order of: ${selectedJewel} shall be shipped to ${address}`);
      
      // $(".person2").text(person2Input);
      // $(".animal").text(animalInput);
      // $(".exclamation").text(exclamationInput);
      // $(".verb").text(verbInput);
      // $(".noun").text(nounInput);
  
  
      event.preventDefault();
    });
  });

  if (1 === 1){
    do something;
  }

  if 1 {
    do something;
  }

  if true {
    do something;
  }