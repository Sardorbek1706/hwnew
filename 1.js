
function tekshirParol(parol) {
    if (parol.length < 8) {
        return "Kuchsiz parol: 8 belgidan kam";
    }

    let kattaHarf = /[A-Z]/.test(parol);
    let kichikHarf = /[a-z]/.test(parol);
    let raqam = /[0-9]/.test(parol);

    if (kattaHarf && kichikHarf && raqam) {
        return "Kuchli parol";
    } else {
        if (!kattaHarf) {
            return "Kuchsiz parol: Katta harf yoq";
        } else if (!kichikHarf) {
            return "Kuchsiz parol: Kichik harf yoq";
        } else if (!raqam) {
            return "Kuchsiz parol: Raqam yoq";
        }
    }
}

let password = prompt("Parolni kiriting:");
let natija = tekshirParol(password);
alert(natija);
