



var cookie_visited = Cookies.get('cookDoubleFudge');
var doublefudgeCounter = 0;
//--------------------------------------------------------- Double Fudge
var cookie_visited = Cookies.get('cookLemon');
var lemonCounter = 0;
//--------------------------------------------------------- Lemon
var cookie_visited = Cookies.get('cookPeanutbutter');
var peanutbutterCounter = 0;
//---------------------------------------------------------Peanutbutter
var cookie_visited = Cookies.get('cookOatmeal');
var oatmealCounter = 0;
//---------------------------------------------------------- Chocolate Chip
var cookie_visited = Cookies.get('cookChocolateChip');
var chocolateCounter = 0;
//---------------------------------------------------------- Sugar Coat
var cookie_visited = Cookies.get('cookSugarCoat');
var sugarCounter = 0;


//doublefudge onclick function
function doublefudgeSet() {
  var setdoublefudge = Cookies.set('cookDoubleFudge', doublefudgeCounter);
  doublefudgeCounter++
    document.getElementById("DFC").innerHTML = "Double Fudge Cookies: " + doublefudgeCounter;
}
//lemon onclick function
function lemonSet() {
  var setlemon = Cookies.set('cookLemon', lemonCounter);
  lemonCounter++
    document.getElementById("LC").innerHTML = "Lemon Cookies: " + lemonCounter;
}
//peanutbutter onclick function
function peanutbutterSet() {
  var setpeanutbutter = Cookies.set('cookPeanutbutter', peanutbutterCounter);
  lemonCounter++
    document.getElementById("PBC").innerHTML = "Peanutbutter Cookies: " + peanutbutterCounter;
}
//oatmeal onclick function
function oatmealSet() {
  var setoatmeal = Cookies.set('cookOatmeal', oatmealCounter);
  oatmealCounter++
    document.getElementById("OMC").innerHTML = "Oatmeal Cookies: " + oatmealCounter;
}
//chocolate onclick function
function chocolatechipSet() {
  var setChocolate = Cookies.set('cookChocolateChip', chocolateCounter);
  chocolateCounter++
    document.getElementById("CCC").innerHTML = "Chocolate Chip Cookies: " + chocolateCounter;
}
//sugar onclick function
function sugarcoatSet() {
  var setSugar = Cookies.set('cookSugarCoat', sugarCounter);
  sugarCounter++
    document.getElementById("SCC").innerHTML = "Sugar Coat Cookies: " + sugarCounter;
}

////remove cookie counter

function myBtn() {
  //rest Double Fudge Counter
  Cookies('cookDoubleFudge', 0);
      document.getElementById("DFC").innerHTML = "Double Fudge Cookies: 0";
  
  //reset Lemon Counter
  Cookies('cookLemon', 0);
      document.getElementById("LC").innerHTML = "Lemon Cookies: 0";
  
  //rest Peanutbutter Counter
  Cookies('cookPeanutbutter', 0);
      document.getElementById("PBC").innerHTML = "Peanutbutter Cookies: 0";
  
  //reset Oatmeal Counter
  Cookies('cookOatmeal', 0);
     document.getElementById("OMC").innerHTML = "Oatmeal Cookies: 0";
  
  //reset ChocolateChip
  Cookies('cookChocolateChip', 0);
      document.getElementById("CCC").innerHTML = "Chocolate Chip Cookies: 0";
  
  //reset SugarCoat
  Cookies('cookSugarCoat', 0);
      document.getElementById("SCC").innerHTML = "Sugar Coat Cookies: 0";
}







