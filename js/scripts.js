jQuery(document).ready(function () {
  // Business Logic
  $("form#Triangle-Tracker").submit(function (event) {
    event.preventDefault();
    let side1 =parseInt($("#input1").val());
    let side2 = parseInt($("#input2").val());
    let side3 = parseInt($("#input3").val());


    // User Interface Logic 
    let result;
    if (side1 === side2 && side2 === side3 && side1 === side3) {
      result = "It is an Equilateral Triangle!"
    }
    else if (((side1 + side2) <= side3) || ((side1 + side3) <= side2) || ((side2 + side3) <= side1)) {
      result = "It is NOT Triangle!"
    }
    else if (side1 === side2 || side2 === side3 || side1 === side3) {
      result = "It is an Isosceles Triangle!"
    }
    else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      result = "It is a Scalene Triangle!"
    }
   
    $("#output").text(result);
  });
});


