const prompt = require('prompt-sync')();

while (true) {
	let priceInput = prompt('Narxni kiriting: ');
	let price = Number(priceInput);
	let quantityInput = prompt('Miqdorni kiriting: ');
	let quantity = Number(quantityInput);
	if (isNaN(price) || isNaN(quantity)) {
		console.log("Xatolik: narx va miqdor son bo'lishi kerak. Qaytadan kiriting.");
		continue;
	}
	let total = price * quantity;
	if (total > 100000) {
		total = Math.floor(total * 0.9);
	} else {
		total = Math.floor(total);
	}
	console.log('Jami:', total);
	break;
}
