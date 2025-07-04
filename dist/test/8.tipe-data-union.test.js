"use strict";
test('', () => {
    console.log('test passed');
});
console.clear();
// jika kita menggunakan tipe data yang bisa berubah ubha
// memakai tipe data any, tidak bagus
// jadi lebih baik kita pake tipe data union
// contoh 
let sample = 'rafa';
// sample = 123; ga bisa, karena di union ga ada tipe data number
sample = true;
sample = () => { }; // tetap bisa, karena sudah di set di union, bisa tipedata function
// tapi kalo kita mau panggil datanya
// maka kita harus pake typeOf, jadi bisa tahu apa itu datanya
// jadi kalo berubah tiba tiba, maka tidak terjadi error
let arr2 = [1, "dua", 3, "empat", true, false];
arr2.forEach((el) => {
    if (typeof el === "string") {
        console.log("String:", el.toUpperCase());
    }
    else if (typeof el === "boolean") {
        console.log("boolean:", !el);
    }
    else {
        console.log("Number:", el * 2);
    }
});
// function testing(data: number | string | boolean){
//     console.log(data.length) //
//     // nah disini kita berharap bahwa parameter yang dikasihnya itu bertipe number
//     // maka ini akna error, meskipun kia benar memasukan data yang tipedatanya number
//     // karena tsnya akan bingung bahwa tipe data yang ada ini itu number, string, atau boolean
//     // makanya harus pake typeof
// }
console.clear();
// ===================================================================
// * PENJELASAN LENGKAP TENTANG TIPE DATA UNION DI TYPESCRIPT
// ===================================================================
// ===================================================================
// * APA ITU TIPE DATA UNION?
// ===================================================================
// Tipe data "union" memungkinkan sebuah variabel memiliki lebih dari
// satu jenis tipe data (multi-type).
// Sintaksnya menggunakan operator `|` (pipe).
// Contoh: `string | number` berarti variabel bisa berisi string atau number.
// ===================================================================
// * CONTOH PENGGUNAAN UNION TYPE
// ===================================================================
// let nilai: string | number;
// nilai = "lulus";    // ✅ valid
// nilai = 100;        // ✅ valid
// // nilai = true;    // ❌ error, karena bukan string atau number
// ===================================================================
// * CARA KERJA TIPE UNION
// ===================================================================
// Saat kita mendeklarasikan tipe union seperti:
//   let a: string | number
// maka TypeScript hanya akan mengizinkan `a` untuk menyimpan nilai
// yang sesuai salah satu tipe tersebut (string atau number saja).
// Namun kita tidak bisa langsung mengakses method spesifik tanpa
// pemeriksaan tipe terlebih dahulu.
// ===================================================================
// * CONTOH PEMERIKSAAN TIPE (TYPE NARROWING)
// let data: string | number;
// data = "hello";
// if (typeof data === "string") {
//   console.log(data.toUpperCase()); // ✅ Aman, karena kita sudah pastikan `string`
// }
// data = 42;
// if (typeof data === "number") {
//   console.log(data.toFixed(2)); // ✅ Aman, karena kita sudah pastikan `number`
// }
// ===================================================================
// * KAPAN MENGGUNAKAN TIPE UNION?
// ===================================================================
// ✅ Gunakan tipe union ketika:
// * 1. Variabel bisa memiliki lebih dari satu jenis tipe
// * 2. Fungsi menerima beberapa tipe input yang valid
// * 3. Struktur data fleksibel (misalnya dari API eksternal)
// ===================================================================
// * CONTOH UNION DALAM FUNGSI
function cetakNilai(n) {
    if (typeof n === "string") {
        console.log("String:", n.toUpperCase());
    }
    else {
        console.log("Number:", n.toFixed(2));
    }
}
cetakNilai("test"); // ✅
cetakNilai(123.456); // ✅
// ===================================================================
// * CONTOH UNION DALAM ARRAY
let arr = [1, "dua", 3, "empat"];
arr.forEach((el) => {
    if (typeof el === "string") {
        console.log("String:", el.toUpperCase());
    }
    else {
        console.log("Number:", el * 2);
    }
});
function ambilData(id) {
    console.log("ID:", id);
}
function suaraHewan(h) {
    if (h.jenis === "kucing") {
        h.meong(); // ✅ Bisa, karena sudah diskriminasi
    }
    else {
        h.gonggong(); // ✅ Bisa juga
    }
}
// ===================================================================
// * TIPS PENGGUNAAN UNION TYPE
// ===================================================================
// ✅ Jangan gunakan terlalu banyak tipe dalam satu union kecuali memang perlu
// ✅ Gunakan type narrowing untuk mengakses method spesifik
// ✅ Gunakan `type` atau `interface` untuk membuat kode lebih bersih
// ✅ Jangan campur tipe yang tidak berhubungan kecuali ada alasannya
// ===================================================================
// * PENUTUP & RANGKUMAN
// ===================================================================
// - Union type memungkinkan variabel/fungsi menangani banyak tipe data
// - Ditulis dengan `|` (pipe) → `string | number`
// - Harus dicek dulu untuk mengakses properti/metode spesifik
// - Lebih aman dari `any`, dan lebih terkontrol dari segi validasi
// - Cocok untuk kasus data fleksibel namun tetap ingin pakai TypeScript dengan aman
