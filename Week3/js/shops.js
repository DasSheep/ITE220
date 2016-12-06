<!-- Temp product list -->
var products = [
	"London T-Shirt White",
	"London T-Shirt Black",
	"Apple Watch",
	"Android Phone"
];
var prices = [10, 10, 199, 159];
var customerName = "Bob";
var price = 10;
var quantity = 2;
var totalPrice = 0;

<!-- Time value -->
var time = new Date();
var curHr = time.getHours();

<!-- Displaying name -->
var customerElement = document.getElementById("customer-name");
	customerElement.textContent = customerName;

<!-- Displaying Total before discount -->
var totalPricebdElement = document.getElementById("total-price-bd");

<!-- Displaying Total Price -->
var totalPriceElement = document.getElementById("total-price");


<!-- Displaying Discount -->
var discountPer = 0.25;
var discountPerElement = document.getElementById("discount-percent")
	discountPerElement.textContent = discountPer*100;

<!-- Displaying Prodcuts List -->
var productsText = "";
var productsElement = document.getElementById("product-list");

<!-- Displaying Time of day -->
var timeofDay = "null";
var timeofDayElement = document.getElementById("time-of-day")
	
<!-- Products listing Statement -->
for (var i = 0; i<products.length ; i++) {
	productsText += "<li class='list-group-item'><span class='badge'>$"+ prices[i]+"</span>" + products[i]+"</li>";
}
	productsElement.innerHTML = productsText;

<!-- Adding up price -->
	totalPrice = prices[0] +prices[1] +prices[2] +prices[3];
	totalPricebdElement.textContent = totalPrice;
	totalPriceElement.textContent = totalPrice-(totalPrice*discountPer);

<!-- Greeting Statement -->
if (curHr < 12) {
  timeofDay = "morning";
} else if (curHr < 18) {
  timeofDay = "afternoon";
} else {
  timeofDay = "evening";
}
	timeofDayElement.textContent = timeofDay;