let jmlhAngkot = 10;
let angkot = 1;
let beroperasi = 6;

while (angkot <= beroperasi) {
    console.log('Angkot No. ' + angkot + ' beroperasi dengan baik');
    angkot++;
}

for (let angkot = beroperasi + 1; angkot <= jmlhAngkot; angkot++) {
    console.log('Angkot No. ' + angkot + ' Sedang tidak beroperasi dengan baik');
}