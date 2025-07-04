"use strict";
test('test', () => {
    console.log('test');
});
console.clear();
// jadi kalo pake tipe dat any, maka nanti ts tidak akna
// mengecek tipe datanya, jadi bebas
// jadi boleh pake any kalo ngambil data objek atau array dari luar
// yang kita ga tau isinya apa
let data1 = 'rafa';
// nah dengan any ktia ga bsia cek dulu tipe datanya
data1.length; // hasilnya 4, karena ga perlu di cek
data1 = 123; /// ini bisa
// tapi kalopake uknown bisa di cek dulu jadi ga bisa langusng pake
let data2 = 'jamal';
console.log(data2);
// tapi kalo langusng di console.log(), maka tidak akan error
// karena hanya mencetak, bukan mengakses
// data2.length ini error karena harus di cek dulu
// jadi uknown itu hanya bisa diakses jika di cek
console.log(data2);
if (typeof data2 === 'string') {
    console.log('ini string', +data2.length); // tereksekusi
}
console.log("------------");
// Tipe data `any` adalah tipe spesial di TypeScript yang berarti "bebas tipe".
// Dengan menggunakan `any`, variabel tersebut bisa menyimpan nilai apa pun:
// string, number, object, array, function, dsb.
// TypeScript akan mengabaikan pemeriksaan tipe (type checking) terhadap variabel
// yang bertipe `any`, sehingga Anda bisa melakukan apapun terhadapnya,
// bahkan jika operasinya tidak valid secara tipe.
// ===================================================================
// * CARA KERJA "any"
// ===================================================================
// Ketika sebuah variabel diberi tipe `any`, TypeScript TIDAK AKAN memberikan
// error meskipun Anda melakukan sesuatu yang sangat aneh.
// Contoh:
let bebas; // Tanpa tipe, otomatis dianggap `any` jika "noImplicitAny" dimatikan
bebas = 10; // OK
bebas = 'teks'; // OK
bebas = { a: 1 }; // OK
bebas = () => { }; // OK
// bebas.bernyanyi();     // Tidak error saat diketik, meskipun method ini tidak ada
// Catatan:
// Jika `noImplicitAny` diaktifkan dalam tsconfig, TypeScript akan mewajibkan
// setiap variabel memiliki tipe eksplisit jika tidak dapat diinferensikan.
// Maka penggunaan `any` akan harus ditulis secara eksplisit:
/** ✅ Contoh eksplisit **/
// let data: any;
// data = 123;
// data = "hello";
// data = [true, false];
// data = { nama: "Rafa" };
// data.jalan(); // Tidak ada error di TypeScript, meskipun ini bisa error di runtime
// ===================================================================
// * KENAPA ADA "any"?
// ===================================================================
// Tujuan utama dari `any` adalah memberikan fleksibilitas penuh,
// terutama saat:
// - Melakukan migrasi dari JavaScript ke TypeScript secara bertahap
// - Menggunakan kode dari library pihak ketiga tanpa definisi tipe
// - Menangani data dinamis (misal dari JSON, API eksternal)
// - Saat Anda BELUM TAHU struktur datanya secara pasti
// ===================================================================
// * KAPAN SEBAIKNYA DIGUNAKAN?
// ===================================================================
// ✅ Gunakan `any` HANYA dalam situasi terbatas:
// 1. Saat mengimpor modul/library tanpa definisi `.d.ts`
// 2. Saat membaca JSON eksternal dengan struktur sangat dinamis
// 3. Saat sedang refactor kode dan ingin menonaktifkan pengecekan sementara
// ❌ Hindari `any` jika memungkinkan. Gunakan alternatif seperti:
// - unknown → tipe aman tapi tetap fleksibel
// - union types → `string | number`
// - generics → `<T>`
// - interface atau type alias → untuk struktur data kompleks
// ===================================================================
// * PERBEDAAN ANY vs UNKNOWN
// ===================================================================
// any      → Bisa digunakan bebas, tidak ada pengecekan
// unknown  → Lebih aman, karena harus dicek dulu sebelum dipakai
// let a: any = "halo";
let u = "halo";
// a.toUpperCase(); // ✅ langsung bisa
// u.toUpperCase(); ❌ Error, harus type-check dulu
if (typeof u === "string") {
    u.toUpperCase(); // ✅ aman setelah dicek
}
// ===================================================================
// * DAMPAK NEGATIF MENGGUNAKAN "any"
// ===================================================================
// - Kehilangan manfaat utama TypeScript: pemeriksaan tipe
// - Kesalahan tipe tidak terdeteksi saat kompilasi
// - Kode sulit dirawat (maintainability rendah)
// - Bisa menyebabkan error di runtime yang harusnya bisa dicegah
// Contoh buruk:
function proses(data) {
    //   return data.toUpperCase(); // ❌ Jika `data` adalah number, akan crash
}
proses(123); // error di runtime: data.toUpperCase is not a function
// ===================================================================
// * CONTOH PENGGUNAAN ANY YANG MASIH DITERIMA
// ===================================================================
function handleAPIresponse(response) {
    // Saat belum tahu struktur responsenya
    console.log(response);
}
// Atau saat membaca JSON tanpa definisi:
const raw = '{"id":1,"nama":"Rafa"}';
const obj = JSON.parse(raw); // bisa, tapi lebih baik didefinisikan
const dataUser = JSON.parse(raw); // ✅ lebih aman
// Atau gunakan `unknown`:
// const hasil: unknown = JSON.parse(raw);
if (typeof hasil === "object" && hasil !== null && "nama" in hasil) {
    console.log(hasil.nama);
}
// ===================================================================
// * RANGKUMAN
// ===================================================================
// - `any` = tipe "bebas", menonaktifkan pemeriksaan tipe
// - Digunakan sebagai pelarian terakhir, bukan solusi utama
// - Tidak aman, bisa menyebabkan error runtime
// - Sebaiknya diganti dengan `unknown`, `generics`, atau tipe yang lebih spesifik
// - Berguna saat transisi dari JavaScript ke TypeScript
// ===================================================================
// * KESIMPULAN
// ===================================================================
// Gunakan `any` hanya jika Anda yakin bahwa:
// - Struktur data tidak bisa dipastikan
// - Anda sedang membangun prototipe
// - Anda sedang melakukan migrasi kode
// Jika tidak, prioritaskan keamanan tipe dengan menggunakan fitur TypeScript
// yang kaya dan fleksibel.
