// function getCookie(cookDoubleFudge) {
//     cookDoubleFudge = cookDoubleFudge + "=";
//     var cookies = document.cookie.split(';');
//     for(var i = 0; i <cookies.length; i++) {
//         var cookie = cookies[i];
//         while (cookie.charAt(0)==' ') {
//             cookie = cookie.substring(1);
//         }
//         if (cookie.indexOf(cookDoubleFudge) == 0) {
//             return cookie.substring(cookDoubleFudge.length,cookie.length);
//         }
//     }
//     return "";
// }


// document.cookie = "cookDoubleFudge=; expires=Tue, 31 May 2018 12:00:00 UTC";



var cookie_visited1 = Cookies.get('cookDoubleFudge');
var doublefudgeCounter = cookie_visited1;
document.getElementById("DFC").innerHTML="Double Fudge Cookies: " + cookie_visited1
console.log()
//------------------------------------------------------------------------------ Double Fudge

var cookie_visited2 = Cookies.get('cookLemon');
var lemonCounter = cookie_visited2;
document.getElementById("LC").innerHTML="Lemon Cookies: " + cookie_visited2
console.log()
//------------------------------------------------------------------------------------- Lemon
var cookie_visited3 = Cookies.get('cookPeanutbutter');
var peanutbutterCounter = cookie_visited3;
document.getElementById("PBC").innerHTML="Peanutbutter Cookies: " + cookie_visited3
console.log()
//--------------------------------------------------------------------------------Peanutbutter

var cookie_visited4 = Cookies.get('cookOatmeal');
var oatmealCounter = cookie_visited4;
document.getElementById("OMC").innerHTML="Oatmeal Cookies: " + cookie_visited4
console.log()
//----------------------------------------------------------------------------- Chocolate Chip

var cookie_visited5 = Cookies.get('cookChocolateChip');
var chocolateCounter = cookie_visited5;
document.getElementById("CCC").innerHTML="Chocolate Chip Cookies: " + cookie_visited5
console.log()
//--------------------------------------------------------------------------------- Sugar Coat

var cookie_visited6 = Cookies.get('cookSugarCoat');
var sugarCounter = cookie_visited6;
document.getElementById("SCC").innerHTML="Sugar Coat Cookies: " + cookie_visited6
console.log()


//doublefudge onclick function
function doublefudgeSet() {
  doublefudgeCounter++
  var setdoublefudge = Cookies.set('cookDoubleFudge', doublefudgeCounter);
  document.getElementById("DFC").textContent = "Double Fudge Cookies: " + doublefudgeCounter;
}
//lemon onclick function
function lemonSet() {
  lemonCounter++
  var setlemon = Cookies.set('cookLemon', lemonCounter);
  document.getElementById("LC").textContent = "Lemon Cookies: " + lemonCounter;
}
//peanutbutter onclick function
function peanutbutterSet() {
  peanutbutterCounter++
  var setpeanutbutter = Cookies.set('cookPeanutbutter', peanutbutterCounter);
  document.getElementById("PBC").textContent = "Peanutbutter Cookies: " + peanutbutterCounter;
}
//oatmeal onclick function
function oatmealSet() {
  oatmealCounter++
  var setoatmeal = Cookies.set('cookOatmeal', oatmealCounter);
  document.getElementById("OMC").textContent = "Oatmeal Cookies: " + oatmealCounter;
}
//chocolate onclick function
function chocolatechipSet() {
  chocolateCounter++
  var setChocolate = Cookies.set('cookChocolateChip', chocolateCounter);
  document.getElementById("CCC").textContent = "Chocolate Chip Cookies: " + chocolateCounter;
}
//sugar onclick function
function sugarcoatSet() {
  sugarCounter++
  var setSugar = Cookies.set('cookSugarCoat', sugarCounter);
  document.getElementById("SCC").textContent = "Sugar Coat Cookies: " + sugarCounter;
}


// function setCookie(cname, cvalue, exdays) {
//     var d = new Date();
//     d.setTime(d.getTime() + (exdays*24*60*60*1000));
//     var expires = "expires="+ d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }


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







