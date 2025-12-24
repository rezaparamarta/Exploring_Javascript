//alert("Hello World");
// let x = 10;
// console.log("Hello from external JS file");
// console.log("Isi dari variable x adalah " + x);
// alert
// alert('Selamat datang di Javascript Fundamental WPU');
// alert('Halo');
// alert('Nama');
// alert('Saya');
// alert('Reza');

// Prompt
/*var nama = prompt('masukan nama anda: ');
alert('Halo ' + nama);*/

// Confirm
// var test = confirm('kamu yakin?');
// if (test === true) {
//     alert('user menekan OK!');
// } else {
//     alert('user menekan Cancel!');
// };
alert('selamat datang..');
var lagi = true;
// use truty value
while( lagi ) {
    var nama = prompt('masukan nama anda: ');
    alert('Halo ' + nama);

    lagi = confirm('coba lagi?');
}

alert('terima kasih sudah berkunjung');