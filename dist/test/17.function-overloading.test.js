"use strict";
// jadi membaut fungsi yang sama, tapi dengan parameter yang berbeda beda
// jadi fungis overload itu adalah
// kita mendeklarasikan function tapi bisa digunakan beberapa kali
// atau bisa diugnkan dnegna cara implementasi yang berbeda beda
// jadi caranya adalah
// 1. Kita tulis beberapa versi "declarasi fungsi" (hanya headernya saja).
// 2. Lalu kita buat satu implementasi fungsi yang menangani semua kasus.
// 3. Di dalam implementasi, kita deteksi input (misalnya dengan `typeof`) untuk jalur eksekusi yang benar.
// Function overloading adalah fitur yang memungkinkan kita
// mendefinisikan beberapa bentuk parameter dan tipe return
// untuk **fungsi dengan nama yang sama**, tapi dengan implementasi berbeda.
// Ini berguna saat sebuah fungsi harus mendukung berbagai jenis input,
// tapi tetap menjaga keamanan tipe (type safety).
// Catatan penting:
// - Hanya bisa dilakukan di TypeScript (bukan JavaScript).
// - Implementasi hanya satu, tapi deklarasi bisa lebih dari satu.
it("testing...", () => {
    function perkalian(a, b) {
        if (b) {
            return a * b;
        }
        else {
            return a;
        }
    }
    ;
});
// ===================================================================
// * KENAPA HARUS MENGGUNAKAN FUNCTION OVERLOADING?
// ===================================================================
// ✅ Fungsi fleksibel → bisa menerima berbagai jenis input
// ✅ Menjaga kejelasan dan keamanan tipe (type safety)
// ✅ Menghindari penggunaan `any` yang tidak aman
// ✅ Mendokumentasikan variasi penggunaan fungsi
// ✅ Kode lebih rapi dan profesional
// ===================================================================
// * BAGAIMANA CARA KERJANYA?
// ===================================================================
// 1. Kita tulis beberapa versi "declarasi fungsi" (hanya headernya saja).
// 2. Lalu kita buat satu implementasi fungsi yang menangani semua kasus.
// 3. Di dalam implementasi, kita deteksi input (misalnya dengan `typeof`) untuk jalur eksekusi yang benar.
// ===================================================================
// * CONTOH: OVERLOAD DENGAN TIPE YANG BERBEDA
// ===================================================================
console.clear();
// Implementasi tunggal: menerima tipe union (string | number)
// nah kalo pas dideklarasikannya itu paramternya beda beda
// maka pas implementasinya itu ebisa menggunakan union, atau bisa pake any
function prosesData(data) {
    if (typeof data === "string") {
        return data.toUpperCase(); // jika string, ubah jadi kapital
    }
    else if (typeof data === "number") {
        return data * 2; // jika number, kalikan dua
    }
    // fallback seharusnya tidak pernah terjadi
    throw new Error("Tipe tidak dikenali");
}
console.log(prosesData("hello")); // ✅ "HELLO"
console.log(prosesData(21)); // ✅ 42
function contoh(x) {
    return x.length; // atau return x.toUpperCase();
}
// Implementasi
function sapa(a, b) {
    if (b) {
        return `Halo ${a} ${b}`;
    }
    return `Halo ${a}`;
}
console.log(sapa("Rafa")); // ✅ Halo Rafa
console.log(sapa("Rafa", "Khadafi")); // ✅ Halo Rafa Khadafi
// Implementasi tunggal
function cetakPesan(pesan) {
    if (Array.isArray(pesan)) {
        pesan.forEach((p) => console.log("Pesan:", p));
    }
    else {
        console.log("Pesan:", pesan);
    }
}
cetakPesan("Halo Dunia"); // ✅ satu pesan
cetakPesan(["Hai", "Apa kabar", "Selamat datang"]); // ✅ banyak pesan
// ===================================================================
// * CATATAN PENTING
// ===================================================================
// - Semua deklarasi overload harus ditulis sebelum implementasi
// - Implementasi fungsi hanya boleh SATU
// - Implementasi harus bisa menangani SEMUA kemungkinan dari overload
// - TypeScript akan mengecek tipe saat fungsi dipanggil
// - Tidak bisa langsung overload hanya dengan perbedaan return type saja
// ===================================================================
// * APA YANG TIDAK BISA DILAKUKAN (CONTOH SALAH)
// ===================================================================
// Tidak bisa membuat dua fungsi berbeda dengan nama sama:
//
// function doSomething(x: string): void {} ❌
// function doSomething(x: number): void {} ❌
// → Ini error karena implementasi lebih dari satu!
// ===================================================================
// * MANFAAT FUNCTION OVERLOADING DALAM PRAKTIK
// ===================================================================
// ✅ Membuat fungsi utility yang fleksibel
// ✅ Cocok untuk fungsi parsing, konversi, format, validasi, dsb
// ✅ Dapat menangani banyak jenis input dengan aman
// ✅ Mendokumentasikan niat penggunaan fungsi secara eksplisit
// ===================================================================
// * BEST PRACTICES FUNCTION OVERLOADING
// ===================================================================
// ✅ Gunakan overload saat kamu ingin fungsi mendukung multiple bentuk input
// ✅ Hindari penggunaan `any`, dan gunakan union atau overload
// ✅ Selalu tangani semua cabang tipe dalam implementasi (`typeof`, `Array.isArray`, dsb)
// ✅ Dokumentasikan tiap versi overload agar jelas bagi tim
// ===================================================================
// * KESIMPULAN
// ===================================================================
// - Function overloading = teknik membuat satu fungsi yang mendukung berbagai bentuk input
// - Di TypeScript, kita menuliskan beberapa deklarasi lalu satu implementasi
// - Membantu menjaga tipe tetap aman, kode tetap rapi
// - Cocok untuk banyak kasus seperti parsing, konversi, logika fleksibel
