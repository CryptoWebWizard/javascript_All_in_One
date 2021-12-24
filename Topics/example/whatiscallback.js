function myDisplayer () {
  // document.getElementById("demo").innerHTML = some;


  var test3 = "tetstts"

  console.log(test3);
}

function myCalculator(a,b,secondcall) {
//  console.log("not call abck");
secondcall()
console.log(a+b); 
}



myCalculator(2,3,myDisplayer)



