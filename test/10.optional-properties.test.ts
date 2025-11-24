

console.clear()



test('testing 1...', () => {

    type User = {
        id:number,
        nama?:string
    }

    const user1: User = { // bisa
        id:12345,
        nama:'rafa'
    }

    const user2: User = { // bisa, karena opsional
        id:1209
    }

    // jdai yag terjadi dibalik layar itu adalah
    // Jika kita deklarasikan:
    //   nama?: string
    // Maka secara internal dianggap sebagai:
    //   nama: stirng | undefined

    // jadi ketika kita ingin emnggunakannya, lebih baik jika
    // kita menggunakan pengecekan typeOf

    if(typeof user1.nama === 'string'){
        // jadi kalo ga diisi, maka ga akan dihitung lengthnya
        // tapi jika diisi dan itu adalah benar string, amaka dicari lengthnya
        console.log(`data nama ${user1.nama.length}`)
    }

    if(typeof user2.nama === 'string'){
        // ini ga bisa, karena atribut nama di user2, tidak punya
        // nilai nama, oleh karena itu akan undefined
        console.log(`data nama ${user2.nama.length}`)
    }

    // atau bisa juga seperti ini
    console.log(`data nama: ${user1.nama?.toUpperCase()}`)
    // jadi kalo engga undefined, maka akan di upperCasekan



})




// secara default ketika ktia membuat atribut di objek atau type
// maka data itu harus wajib diisi nilainya

// namun kadang kadang, tidak semua atribut itu wajib diisi nilainya
// pada kasus, kita bisa menjadikan atribut itu menjadi tidak wajib diisi
// dengan cara menambhakan tanda ?, untuk menandakan bahwa atribut itu tidak wajib diisi



// ===================================================================
// * PENJELASAN SANGAT LENGKAP TENTANG ATRIBUT OPTIONAL DI TYPESCRIPT
// ===================================================================

// ===================================================================
// * APA ITU ATRIBUT OPTIONAL?
// ===================================================================
// Atribut optional adalah properti pada objek yang **tidak wajib diisi**.
// Jika properti tersebut tidak diberikan, maka nilainya dianggap `undefined`.
// Dalam TypeScript, atribut optional ditandai dengan tanda `?` setelah nama propertinya.

// Contoh:
//   type User = {
//     nama: string;
//     umur?: number;  ← ini adalah atribut optional
//   }

// ===================================================================
// * CARA KERJA ATRIBUT OPTIONAL
// ===================================================================
// Saat sebuah objek memiliki atribut optional, TypeScript akan:
// - Tidak mewajibkan properti tersebut saat pembuatan objek
// - Menganggap nilai properti sebagai `tipe | undefined`
// - Memerlukan pemeriksaan sebelum menggunakan nilai optional (best practice)

// type User = {
//   nama: string;
//   umur?: number; // optional
// };

// let u1: User = { nama: "Rafa" };               // ✅ boleh tanpa `umur`
// let u2: User = { nama: "Dafi", umur: 22 };     // ✅ juga boleh

// ===================================================================
// * MENGAKSES NILAI OPTIONAL
// ===================================================================
// function cetakUmur(user: User) {
  // ❌ Akan error jika langsung pakai method yang hanya untuk number
  // console.log(user.umur.toFixed(2)); // ERROR: kemungkinan undefined

  // ✅ Cara aman:
//   if (typeof user.umur === 'number') {
//     console.log("Umurnya:", user.umur.toFixed(2));
//   } else {
//     console.log("Umur tidak tersedia");
//   }
// }

// cetakUmur(u1); // Umur tidak tersedia
// cetakUmur(u2); // Umurnya: 22.00

// ===================================================================
// * MENGGUNAKAN OPERATOR OPTIONAL CHAINING
// ===================================================================
// Kita bisa menggunakan optional chaining `?.` untuk mengakses properti
// secara aman jika nilai tersebut mungkin `undefined`.

// let panjangUmur = u1.umur?.toFixed(2); // ✅ tidak error, hasil: undefined

// ===================================================================
// * APA YANG TERJADI DI BALIK LAYAR?
// ===================================================================
// Jika kita deklarasikan:
//   umur?: number
// Maka secara internal dianggap sebagai:
//   umur: number | undefined

// Jadi jika kita tulis:
let umurLain: number | undefined;
umurLain = undefined;   // ✅ boleh
umurLain = 25;          // ✅ juga boleh

// ===================================================================
// * ATRIBUT OPTIONAL DALAM PARAMETER FUNGSI
// ===================================================================
function salam(nama: string, sapaan?: string) {
  if (sapaan) {
    console.log(`${sapaan}, ${nama}`);
  } else {
    console.log(`Halo, ${nama}`);
  }
}

salam("Rafa");               // Halo, Rafa
salam("Dafi", "Selamat pagi"); // Selamat pagi, Dafi

// ===================================================================
// * KAPAN HARUS MENGGUNAKAN ATRIBUT OPTIONAL?
// ===================================================================
// ✅ Gunakan saat:
// - Sebuah properti memang tidak selalu ada
// - Ingin membuat struktur data lebih fleksibel
// - Menangani input dari pengguna atau API yang tidak selalu lengkap
// - Membuat API, form, atau data user-friendly

// ❌ Hindari jika:
// - Properti tersebut sangat penting untuk logika utama
// - Lebih baik gunakan default value daripada optional jika ada fallback

// ===================================================================
// * OPTIONAL DI DALAM ARRAY ATAU OBJECT NESTED
// ===================================================================
// type Produk = {
//   id: number;
//   nama: string;
//   diskon?: {
//     persen: number;
//     tanggalBerakhir?: string;
//   };
// };

let p1: Produk = {
  id: 1,
  nama: "Laptop"
};

// let p2: Produk = {
//   id: 2,
//   nama: "Monitor",
//   diskon: {
//     persen: 10
//   }
// };

// Mengakses diskon dan tanggal dengan aman
// function tampilDiskon(p: Produk) {
//   if (p.diskon?.tanggalBerakhir) {
//     console.log(`Diskon berlaku sampai ${p.diskon.tanggalBerakhir}`);
//   } else {
//     console.log("Diskon tidak diketahui tanggalnya");
//   }
// }

// tampilDiskon(p1); // Diskon tidak diketahui tanggalnya
// tampilDiskon(p2); // Diskon tidak diketahui tanggalnya

// ===================================================================
// * KEUNTUNGAN ATRIBUT OPTIONAL
// ===================================================================
// ✅ Mempermudah fleksibilitas data
// ✅ Lebih aman daripada any / unknown karena tetap memiliki tipe
// ✅ Sangat cocok untuk struktur data dinamis
// ✅ Mengurangi error saat menerima data yang tidak lengkap

// ===================================================================
// * KEKURANGAN / HAL YANG PERLU DIWASPADAI
// ===================================================================
// ❌ Harus selalu dicek sebelum digunakan
// ❌ Bisa menyebabkan `undefined is not a function` jika lupa periksa
// ❌ Penggunaan berlebihan membuat data jadi tidak terstruktur

// ===================================================================
// * BEST PRACTICES
// ===================================================================
// ✅ Gunakan optional jika memang properti tidak wajib
// ✅ Tambahkan pengecekan sebelum menggunakan nilainya
// ✅ Gunakan default value jika lebih cocok
// ✅ Hindari menambahkan terlalu banyak optional yang tidak perlu

// ===================================================================
// * CONTOH DENGAN DEFAULT VALUE
// ===================================================================
function greet(nama: string, sapaan: string = "Halo") {
  console.log(`${sapaan}, ${nama}`);
}

greet("Rafa");            // Halo, Rafa
greet("Dafi", "Hi");      // Hi, Dafi

// ===================================================================
// * RANGKUMAN
// ===================================================================
// - Optional property ditandai dengan tanda `?`
// - Tipe data = aslinya + `undefined`
// - Harus dicek sebelum akses method/property
// - Gunakan untuk data yang tidak wajib diisi
// - Bisa digunakan di parameter fungsi, objek, nested object, array
// - Gunakan optional chaining untuk akses aman
// - Cocok untuk data fleksibel seperti API, form, dsb
// test












