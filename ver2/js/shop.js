$(document).ready(function(){

	var total1 = Cookies.get("peanutbuttercookies")
		if (total1 == null) {
			total1 = 0;
			console.log(total1)
		} 

	var total2 = Cookies.get("fudgecookies")
		if (total2 == null) {
			total2 = 0;
			console.log(total1)
		} 

	var total3 = Cookies.get("oatmealcookies")
		if (total3 == null) {
			total3 = 0;
			console.log(total1)
		} 

	$("#peanutbutter").click(function(){
		total1 = parseInt(total1, 10) + 1;
		console.log(total1);
		Cookies.set("peanutbuttercookies" , total1);
	});

	$("#clearpeanutbutter").click(function(){
		Cookies.expire("peanutbuttercookies");
		console.log("You jelly")
	});

	$("#fudge").click(function(){
		total2 = parseInt(total2, 10) + 1;
		console.log(total2);
		Cookies.set("fudgecookies", total2);
	});

	$("#clearfudge").click(function(){
		Cookies.expire("fudgecookies");
		console.log("Milk needed")
	});

	$("#oatmeal").click(function(){
		total3 = parseInt(total3, 10) + 1;
		console.log(total3);
		Cookies.set("oatmealcookies" , total3);
	});

	$("#clearoatmeal").click(function(){
		Cookies.expire("oatmealcookies");
		console.log("I wanted chocolate")
	});
});