// Definisi Array: kumpulan nilai yang memiliki index.
// Object kumpulan nilai yang tidak memiliki index namun memiliki nama.

var namaMhs = 'Reza';
var umurMhs = 25;
var lulus = true;
var ipSemester = [2.90, 3.10, 3.25, 2.88, 3.04];
function IPKumulatif() {
    var total = 0;
    for ( var i = 0; i < ipSemester.length; i++) {
        total += ipSemester[i];
    }
    return total / ipSemester.length;
};

// Penulisan kode di atas sangat merepotkan.
// Penulisan menggunakan Array:
var mahasiswa = ['Reza', 25, true, [2.90, 3.10, 3.25, 2.88, 3.04]];
function IPKumulatif2() {
    var total = 0;
    for ( var i = 0; i < mahasiswa.length; i++) {
        total += mahasiswa[i];
    }
    return total / mahasiswa.length;
};

IPKumulatif2([3]);

// Penulisan di atas pun masih rumit.
// Penulisan menggunakan Object:
let mhs = {
    nama: 'Reza',
    lulus: true,
    ipSemester: [2.90, 3.10, 3.25, 2.88, 3.04],
    IPKumulatif: function() {
        let total = 0;
        let ips = this.ipSemester;
        for ( let i = 0; i < ips.length; i++) {
            total += ips[i];
        }
        return total / ips.length;
    }
};

mhs.IPKumulatif();

// variable yang ada di dalam object disebut properti
// Sedangkan function yang ada di dalam object disebut method
let orang = {
    nama: 'Reza',
    umur : 32,
    pekerjaan : 'Software Tester',
    sapa: function() {
        return 'Hi, nama saya ' + this.nama + ' dan usia saya ' + this.umur + ' tahun, dan Saya adalah seorang ' + this.pekerjaan;
    },
    alamat: {
        jalan : 'Jl. Kebon Jeruk',
        kota : 'Jakarta',
        provinsi : 'Jawa Barat'
    }
};

console.log(orang.sapa());
console.log(orang.nama);
console.log(orang.alamat.jalan);
console.log(mhs.ipSemester[2]);




