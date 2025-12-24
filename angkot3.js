// Buat looping untuk angkot yang berjumlah 10 angkot secara incremental
// buat konidisi angkot 1 - 6 beroperasi dengan baik dan angkot 7 - 10 sedang tidak beroperasi
// gunakan for loop dan if else kondisi

let jmlhAngkot = 10;
let angkotBeroperasi = 6;

for (let angkot = 1; angkot <= jmlhAngkot; angkot++) {
    if (angkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');
    } else {
        console.log('Angkot No. ' + angkot + ' Sedang tidak beroperasi dengan baik');
    }
}

console.log('Angkot selesai beroperasi hari ini.');