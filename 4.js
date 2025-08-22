function qisqartirish() {
    let input = prompt("Ism va familiya kiriting:");
    let parts = input.trim().split(' ');

    if (parts.length === 2) {
        let ism = parts[0];
        let familiya = parts[1];
        
        let qisqartirilgan = ism.charAt(0).toUpperCase() + '. ' + familiya;
        
        alert(qisqartirilgan);
    } else {
        alert("Notogri format: Ism va familiya kiritilishi kerak");
    }
}
