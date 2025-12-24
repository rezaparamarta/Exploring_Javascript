// var angka = parseInt(prompt('Masukkan angka'));

// switch (angka) {
//     case 1:
//         alert('Anda memasukan angka 1');
//         break;
//     case 2:
//         alert('Anda memasukan angka 2');
//         break;
//     case 3:
//         alert('Anda memasukan angka 3');
//         break;
//     case 4:
//         alert('Anda memasukan angka 4');
//         break;
//     case 5:
//         alert('Anda memasukan angka 5');
//         break;
//     default:
//         alert('Angka yang anda masukan salah');
//         break;
// };

var item = prompt('Masukkan nama makanan / minuman sehat / tidak sehat (contoh: nasi, daging, susu, softdrink, hamburger)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('Makanan / minuman sehat');
        break;
    case 'softdrink':
    case 'hamburger':
        alert('Makanan / minuman tidak sehat');
        break;
    default:
        alert('Makanan / minuman tidak terdaftar');
        break;
};

if (confirm('Mau coba lagi?')) {
    location.reload();
} else {
    alert('Terima kasih sudah mencoba');
}

