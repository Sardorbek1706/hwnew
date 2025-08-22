function convertToUSD(uzs) {
	const rate = 12500;
	if (typeof uzs === 'string') uzs = uzs.trim();
	if (isNaN(uzs) || uzs === '' || Number(uzs) < 0) {
		return 'Notogri malumot';
	}
	let usd = Number(uzs) / rate;
	return usd.toFixed(2) + ' USD';
}
let uzs = prompt('Som miqdorini kiriting:');
console.log(convertToUSD(uzs));
