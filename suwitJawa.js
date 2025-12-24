var tanya = true;
while (tanya) {
// menangkap pilihan player
let player = prompt(`Silahkan pilih: gajah, semut, orang`)
// menagkap pilihan computer
// membangkitkan bilangan random
let comp = Math.random();


if (comp < 0.34) {
    comp = 'gajah';
} else if (comp > 0.34 && comp < 0.67) {
    comp = 'orang';
} else {
    comp = 'semut';
}

// menentukan rules
if (player == comp) {
    hasil = 'SERI!';
} else if (player == 'gajah') {
    // if (comp == 'orang') {
    //     hasil = 'MENANG!';
    // } else {
    //     hasil = 'KALAH!';
    // }
    // Ternary condition:
    hasil = ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
} else if (player == 'orang') {
    hasil = ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
} else if (player == 'semut') {
    hasil = ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
} else {
    hasil = 'Anda Memasukkan pilihan yang salah!';
}
// tampilkan hasilnya

alert(`kamu memimilih: ${player} dan komputer memilih: ${comp} \nMaka hasilnya: Kamu ${hasil}`);
// if (confirm('Mau main lagi?')) {
//     window.location.reload();
// }
tanya = confirm('Mau main lagi?');
}

alert('Terima kasih sudah bermain');

