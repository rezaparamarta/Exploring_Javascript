while (true) {
    // angka rahasia baru tiap ronde
    let angkaRahasia = Math.floor(Math.random() * 10) + 1;
    let nyawa = 3;

    while (nyawa > 0) {
        let tebak = prompt(`Tebak angka antara 1-10!\nKamu punya ${nyawa} nyawa tersisa.`);

        // Jika user menekan Cancel
        if (tebak === null) {
            alert('Terima kasih sudah bermain!');
            nyawa = 0;
            continue;
        }

        tebak = Number(tebak);

        if (tebak === angkaRahasia) {
            alert('Wah kamu JAGO BANGET! Kamu benar menebak angka ' + angkaRahasia);
            break;
        } else if (tebak < angkaRahasia) {
            alert('Terlalu rendah! Coba lagi.');
        } else if (tebak > angkaRahasia) {
            alert('Terlalu tinggi! Coba lagi.');
        } else {
            alert('Input tidak valid! Silahkan masukkan angka antara 1-10.');
            continue;
        }

        nyawa = nyawa - 1;
    }

    // Jika nyawa habis
    if (nyawa === 0 && tebak !== angkaRahasia) {
        alert('Yah, kamu kehabisan nyawa! Angka yang benar adalah ' + angkaRahasia);
    }

    // Tanya lagi
    if (!confirm('Mau main lagi?')) {
        alert('Terima kasih sudah bermain!');
        break;
    }
}
