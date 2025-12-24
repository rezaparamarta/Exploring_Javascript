// // Array : Susunan sistematis dari objek objek yang serupa.
// let days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
// console.log(days);

// for (let i = 0; i < days.length; i++) {
//     console.log(`hari ${i + 1} adalah ${days[i]}`);
// };

// /*
// Variable jamak, yang mempunyai banyak elemen dan diacu dengan nama yang sama.
// kumpulan paangan key dan nilai  ( key and value )
// Key adalah index pada array dengan tipe integer yang dimulai dari 0
// Array pada javascript bertipe object
// Array pada javascript memiliki fungsi / method length untuk menghitung jumlah elemn di dalamnya
// Elemen pada array boleh memiliki tipe data yang berbeda
// */

// let animals = ['kucing', 'kelinci', 'monyet', 'anjing'];
// console.log(animals[3]);
// console.log(typeof animals);


// // How to manage array

// /*
// Menambah elemen pada array
// Menghapus elemen pada array
// Menampilkan seluruh isi array
// */
// let arr = ["a", 1, true];
// console.log(arr);
// // Menambah isi array manual
// let array2 = [];
// arr[0] = "Reza";
// arr[1] = "abdul";
// arr[2] = "Nofa";
// console.log(array2);

// // Menghapus elemen dari array manual
// let array3 = ["Sandhika", "Galih", "Mita"];
// array3[1] = undefined;
// console.log(array3);

// // Menampilkan seluruh isi array
// // Trace array using loop
// let arrayLooping = ["Reza", "Abdul", "Nofa"];
// for (let i = 0; i < arrayLooping.length; i++) {
//     console.log('Mahasiswa ke- ' + (i + 1)  + ' adalah ' + arrayLooping[i]);
// }

// // Method on array
// // 1. join
// let arrayJoin = ["Reza", "Abdul", "Nofa"];
// console.log(arrayJoin.join(' - ')); // Reza,Abdul,Nofa
// // 2. push
// arrayJoin.push('Mita', 'Solihin', 'Sobirin');
// console.log(arrayJoin);

// // 3. pop
// arrayJoin.pop(); // Menghapus elemen terakhir
// console.log(arrayJoin);

// // 4. unshift
// arrayJoin.unshift('Rahmat', 'Rafid'); // menambahkan elemen pada awal
// console.log(arrayJoin);

// // 5. shift
// arrayJoin.shift(); // Menghapus elemen pertama
// console.log(arrayJoin);

// // Case Study

// let arrayList = ["Reza", "Abdul", "Nofa"];
// let inputName = '';
// function registerName(arrayList, inputName) {
//     if (inputName === 'Reza') {
//         arrayList.shift();
//     } else {
//         arrayList.push(inputName);
//     }
//     return arrayList;
// }

// console.log(registerName(arrayList, 'Hamid'));
// let contohArray = ['Iron Man', 'Spider Man', 'Hulk', 'Thor'];
// // 6. splice (menyisipkan nilai baru ditengah array)
// // contohArray.splice(1, 0, 'Black Widow'); // splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2)
// // console.log(contohArray);

// contohArray.splice(1, 2, 'Dare Devil', 'Wolverine');
// console.log(contohArray);

// // 7. slice (mengiris sebuah aaray menjadi array baru)
// // slice (indexAwal, indexakhir);
// let arraySlice = contohArray.slice(1, 3); // ambil element dari index ke 1 dan berenti di index ke 3, return data adalah index 1 dan index 2.
// console.log(arraySlice);

// Method selanjutnya adalah foreach dan map

// 8. foreach
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }
let mahasiswa = ['Reza', 'Abdul', 'Nofa'];
// lakukan looping untuk setiap elemen yang ada di array angka/mahasiswa, lakukan fungsi berikut ini
mahasiswa.forEach(function(e, i) {
    console.log('Mahasiswa ke- ' + (i + 1) + ' adalah ' + e);
});

// 9. Map / map = bisa mengembalikan array
let newangka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newAngka2 = newangka.map(function(e) {
    return e * 2;
});
console.log(newAngka2.join(' - '));

// 10. sort
let angkaSort = [10, 5, 2, 3, 1, 4, 6, 7, 8, 9];
angkaSort.sort(function(a,b) {
    return a - b;
});
console.log(angkaSort.join(' - '));

// Filter and Find

// 9. filter
let angkaSort2 = [10, 5, 2, 3, 1, 4, 6, 7, 8, 9];
let angkaSort3 = angkaSort2.filter(function(e) {
    return e > 5;
});
console.log(angkaSort3.join(' - '));

// 10. find
let angkaSort4 = [10, 5, 2, 3, 1, 4, 6, 7, 8, 9];
let angkaSort5 = angkaSort4.find(function(e) {
    return e > 5;
});
console.log(angkaSort5);

