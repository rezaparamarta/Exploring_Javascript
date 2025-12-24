let penumpang = [];

let tambahPenumpang = function(namaPenumpang, penumpang) {
    // Jika angkot kosong
    if (penumpang.length === 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array & keluar dari function
        return penumpang;
    // else
    } else {
    // telusuri seluruh kursi dari awal
    for ( let i = 0; i < penumpang.length; i++) {
        // jika ada kursi kosong
        if (penumpang[i] === undefined) {
            // tambah penumpang ke kursi tersebut
            penumpang[i] = namaPenumpang;
            // kembalikan isi array & keluar dari function
            return penumpang;
        }
        // Jika sudah ada nama yang sama
        if (penumpang[i] === namaPenumpang) {
            // tampilkan pesan error
            console.log(namaPenumpang + ' sudah ada di dalam angkot.');
            // kembalikan array & keluar dari function
            return penumpang;
        }
        // Jika seluruh kursi terisi
        if (i === penumpang.length - 1) {
            // tambah penumpang di akhir array
            penumpang.push(namaPenumpang);
            // kembalikan isi array & keluar dari function
            return penumpang;
        }

    }
}

};

let hapusPenumpang = function(namaPenumpang, penumpang) {
    // Jika angkot kosong
    if (penumpang.length === 0) {
        // tampilkan pesan bahwa angkot kosong
        console.log('Angkot kosong');
        // kembalikan array & keluar dari function
        return penumpang;
    } else {
        // Jika ada penumpang yang namanya sesuai, hapus nama penumpang pada array dengan memberi nilai undefined
      for (let i = 0; i < penumpang.length; i++) {
          if (penumpang[i] === namaPenumpang) {
              penumpang[i] = undefined;
              // kembalikan isi array & keluar dari function
              return penumpang;
          }
      }
      // Jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya.
      console.log(namaPenumpang + ' tidak ada di dalam angkot.');
      // kembalikan array & keluar dari function
      return penumpang;
    }
};

