// Context

// cara 1
// function halo() {
//     console.log('halo');
// }

// halo();

// Cara 2
// let obj = {};
// obj.halo = function() {
//     console.log('halo');
// }

// obj.halo();

// Cara menggunakan custroctur function
// function Halo() {
//     console.log('halo Bandung');
// }

// new Halo();

// // this
// console.log(this);
// // Ini artinya mengeluarkan window global objects

// function halo() {
//     console.log(this);
//     console.log('halo');
// }

// this.halo();
// // this mengembalikan object Global

// let obj = {a: 1, nama: 'Sandhika'};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// // this mengembalikan object yang memiliki fungsi halo

function Halo() {
    console.log(this);
    console.log('halo Bandung');
}

new Halo();
