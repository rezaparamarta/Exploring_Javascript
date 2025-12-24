let jmlhAngkot = 10;
let angkotBeroperasi = 6;

for (let angkot = 1; angkot <= jmlhAngkot; angkot++) {
    if (angkot <= angkotBeroperasi) {
        console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');
    } else if (angkot === 8) {
        console.log('Angkot No. ' + angkot + ' Sedang lembur');
    } else {
        console.log('Angkot No. ' + angkot + ' Sedang tidak beroperasi dengan baik');
    }
}