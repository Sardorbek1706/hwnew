function vaqtniAjratish() {
	let input = prompt("Daqiqa miqdorini kiriting:");
	let min = Number(input);
	if (isNaN(min) || !Number.isInteger(min)) {
		alert("Notogri malumot: Daqiqa butun son bolishi kerak");
		return;
	}
	if (min < 0) {
		alert("Notogri malumot: Daqiqa manfiy bolmasligi kerak");
		return;
	}
	let soat = Math.floor(min / 60);
	let daqiqa = min % 60;
	alert(`${soat} soat ${daqiqa} daqiqa`);
}
vaqtniAjratish();
