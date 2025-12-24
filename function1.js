/*
function akan menyimpan input
ketika input dimasukan, function akan memproses inputannya
dan mengeluarkan output berdasarkan instruksi yang ada di dalam functionnya
function yang baik adalah function yang melakukan 1 instruksi
*/

// let bahanSatu;
// let bahanDua;
// let bahanTiga;
// // let bahanEmpat = 'bawang-bawang';
// // let bahanLima = 'sosis';
// let makanan = '';
// function nasiGoreng(bahanSatu, bahanDua, bahanTiga) {
//     makanan = bahanSatu + bahanDua + bahanTiga;
//     return makanan;
// }

// nasiGoreng('Nasi', 'Telur', 'Kecap');

// console.log(`Selamat menikmati menu ${makanan}`);

// let volumeA = 8;
// let volumeB = 3;
// let totalVolumeA = volumeA * volumeA * volumeA;
// let totalVolumeB = volumeB * volumeB * volumeB;

// let volumeKubus = totalVolumeA + totalVolumeB;


// console.log(`Volume kubus adalah ${volumeKubus}`);

// Kita buat function untuk perhitungan volume kubus
let volumeA;
let volumeB;
let totalVolumeA;
let totalVolumeB;
let volumeKubus;

function cubeVolume(volumeA, volumeB) {
    totalVolumeA = volumeA * volumeA * volumeA;
    totalVolumeB = volumeB * volumeB * volumeB;
    volumeKubus = totalVolumeA + totalVolumeB;
    return volumeKubus;
}

console.log(`Volume kubus adalah ${cubeVolume(8, 3)}`);
console.log(`Volume kubus adalah ${cubeVolume(10, 5)}`);
console.log(`Volume kubus adalah ${cubeVolume(20, 15)}`);


// Function #2
// Parameter adalah variabel yang ditulis di dalam kurung pada saat function dibuat,
// digunakan untuk menampung nilai yang dikirimkan saat function dipanggil

// Arggument adalah nilai yang dikirmkan ke parameter saat fungsi dipanggil

// contoh
// function tambah(a, b) {
//     return a + b;
// }

// var coba = tambah(10, 20);
// console.log(coba);

// function in function
// function tambah(a,b){
//     return a + b;
// }

// function kali(a, b){
//     return a * b;
// }

// var hasil = kali(tambah(1,2), tambah(3,4));
// console.log(hasil);

// Jika argument lebih dari parameter maka nilai argument akan diabaikan JS
// Jika parameter lebih dari argument maka nilai parameter lebihnya akan dikatakan Undefined
// ada hal lain dari function ini bernama arguments: array yang berisi nilai yang dikirimkan saat fungsi dipanggil
// Ini disebut pseudo variable (Array).

// contoh:
function tambah(){
    let hasil = 0;
    for ( var i = 0; i < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}

let coba = tambah(1,2,3,4,5);
console.log(coba);
