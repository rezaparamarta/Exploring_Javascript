// for (let baris = 1; baris <= 5; baris++) {
//     let bintang = '';
//     for (let kolom = 1; kolom <= baris; kolom++) {
//         bintang += '*';
//     }
//     console.log(bintang);
// }

// for ( let baris = 5; baris >= 1; baris--) {
//     let bintang = '';
//     for ( let kolom = 1; kolom <= baris; kolom++) {
//         bintang += '*';
//     }
//     console.log(bintang);
// }

// for ( let baris = 1; baris <= 5; baris++) {
//     let bintang = '';
//     for ( let kolom = 1; kolom <= baris; kolom++) {
//         bintang += '*';
//     }
//     console.log(bintang);
// }

// for ( let baris = 1; baris <= 10; baris++) {
//     let bintang = '';
//     for ( let i = 1; i <= baris; i++) {
//         bintang += '*';
//     }
//     console.log(bintang);
// }

// for (let baris = 10; baris >= 1; baris--) {
//     let bintang = '';
//     for (let i = 1; i <= baris; i++) {
//         bintang += '*';
//     }
//     console.log(bintang);
// }

// for (let baris = 1; baris <= 5; baris++) {
//     let bintang = '';

//     for (let spasi = 1; spasi <= 5 - baris; spasi++) {
//         bintang += ' ';
//     }

//     for (let kolom = 1; kolom <= 2 * baris - 1; kolom++) {
//         bintang += '*';
//     }
//     console.log(bintang);
// }

// for ( let baris = 5; baris >= 1; baris--) {
//     let bintang = '';
//     // looping baris true lebih besar dari 1, lakukan variabel bintang string kosong
//     // looping apakah nilai spasi lebi kecil / sama dengan 5 dikurangi baris (5 - 5 = 0)
//     // nilai spasi dibandingkan dengan nilai baris = 0; artina cetak spasi 0 / kosong / tanpa spasi ke variable bintang
//     for ( let spasi = 1; spasi <= 5 - baris; spasi++) {
//         bintang += ' ';
//     }
//     // 
//     for ( let kolom = 1; kolom <= 2 * baris - 1; kolom++) {
//         bintang += '*';
//     }
//     console.log(bintang);
// }

for (let baris = 1; baris <= 5; baris++) {
    let bintang = '';
    for (let kolom = 1; kolom <= baris; kolom++) {
        bintang += '*'
    }
    console.log(bintang);
}
console.log('selamat datang di program');

for (let baris = 1; baris <= 5; baris++) {
    let sayLove = '';
    for (let kolom = 1; kolom <= baris; kolom++) {
        console.log('Aku cinta kamu!');
    }
    console.log(sayLove);
}