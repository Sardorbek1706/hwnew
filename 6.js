function countLetter(text, letter) {
	if (typeof text !== 'string' || typeof letter !== 'string' || letter.length !== 1) {
		return 0;
	}
	text = text.toLowerCase();
	letter = letter.toLowerCase();
	let count = 0;
	for (let i = 0; i < text.length; i++) {
		if (text[i] === letter) {
			count++;
		}
	}
	return count;
}
let text = prompt('Matnni kiriting:');
let letter = prompt('Harfni kiriting:');
console.log(countLetter(text, letter));


