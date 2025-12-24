// Membuat object pada javascript
// 1. Object Literal
// 2. Function Declaration
// 3. Constructor Function (Keyword new)
// 4. Object.create()

let mhs1 = {
    nama: 'Reza',
    nrp: "0430040023",
    email : "reza@gmail.com",
    jurusan: 'Sistem Informasi'
}

let mhs2 = {
    nama: 'Abdul',
    nrp: "0430040023",
    email : "reza@gmail.com",
    jurusan: 'Teknik Informatika'
}

console.log(mhs1);
console.log(mhs2);

// Using function Declaration

function buatObjectMhs(nama, nrp, email, jurusan) {
    let mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

let mhs3 = buatObjectMhs('Nofariza', '0430040023', 'reza@gmail.com', 'Linguistics');
console.log(mhs3);

// Using Constructor Function
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

let mhs4 = new Mahasiswa('Ariel', '0430040023', 'reza@gmail.com', 'History');
console.log(mhs4);