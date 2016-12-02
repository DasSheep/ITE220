var customerName = "Bob";
var price = 10;
var quantity = 2;
var totalPrice = price * quantity;
var customerElement = document.getElementById("customer-name");
var totalPriceElement = document.getElementById("total-price") 
customerElement.textContent = customerName;
totalPriceElement.textContent = totalPrice;