var angka;
var inputGame = prompt("Masukkan bilangan");
angka = parseInt(inputGame);
if ( angka % 2 == 0) {
    alert(angka + " adalah bilangan genap");
} else if ( angka % 2 == 1) {
    alert(angka + " adalah bilangan ganjil");
} else {
    alert("Yang anda masukkan bukan bilangan");
}

console.log("Selamat datang di program bilangan genap dan ganjil!");