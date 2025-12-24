// Apa itu rekursif?
// Dia adalah fungsi yang memanggil dirinya sendiri
// Contoh:
// function recursive(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return recursive(n - 1) + recursive(n - 1);
//     }
// }
// console.log(recursive(5));
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
// code above will reduce 10 till 1;
// same process different approaches
// look at this code below:
function tampilAngka(n) {
    if(n === 0) {
        return;  // This block code determines the end of the function as base case
    }
    console.log(n);
    tampilAngka(n - 1);
}

tampilAngka(10);


function faktorial(n) {
    if (n === 0) {
        return 1;
        
    }
    return n * faktorial(n - 1);
}
console.log(faktorial(5));
