function almashtirRaqam(matn) {
    let yangiMatn = '';
    for (let belgi of matn) {
        if (/\d/.test(belgi)) {
            yangiMatn += '*';
        } else {
            yangiMatn += belgi;
        }
    }
    return yangiMatn;
}
const userInput = prompt("Matn kiriting:");
if (userInput !== null) {
    const result = almashtirRaqam(userInput);
    console.log(`Natija: ${result}`);
}
