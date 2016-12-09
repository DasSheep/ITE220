var shop =	{
		customerName: 'Bob',
		totalPrice: '0',
		discountPer: '0.25',
		products: [
		"Brooklyn T-Shirt White",
		"Brooklyn T-Shirt Black",
		"Apple Watch",
		"Android Phone"
		],
		prices: [10, 10, 199, 159],

		displayCustomerName: function() {
			var customerElement = document.getElementById("customer-name");
			customerElement.textContent = this.customerName
		},
		displayPriceBeforeDist: function() {
			var totalPriceElement = document.getElementById("total-price-bd")
			this.totalPrice = this.prices[0] +this.prices[1] +this.prices[2] +this.prices[3];
			totalPriceElement.textContent = this.totalPrice
		},
		displayDiscount: function() {
			var discountPerElement = document.getElementById("discount-percent")
			discountPerElement.textContent = this.discountPer*100;
		},
		displayTotalPrice: function() {
			var totalPriceElement = document.getElementById("total-price");
			totalPriceElement.textContent = (this.prices[0] +this.prices[1] +this.prices[2] +this.prices[3])-((this.prices[0] +this.prices[1] +this.prices[2] +this.prices[3]) * this.discountPer); 
		},
		listProducts: function() {
			var productsText = "";
			var productsElement = document.getElementById("product-list");
			for (var i = 0; i<this.products.length ; i++) {this.productsText += "<li class='list-group-item'><span class='badge'>$"+ this.prices[i]+"</span>" + this.products[i]+"</li>";}
			productsElement.innerHTML = this.productsText;

		}
	}

	var time = new Date();
	var curHr = time.getHours();
	var timeofDay = "null";
	var timeofDayElement = document.getElementById("time-of-day")
	if (curHr < 12) {timeofDay = "morning";}
	else if (curHr < 18) {timeofDay = "afternoon";}
	else {timeofDay = "evening";}
	timeofDayElement.textContent = timeofDay;

shop.displayCustomerName();
shop.displayDiscount();
shop.displayPriceBeforeDist();
shop.displayTotalPrice();
shop.listProducts();
