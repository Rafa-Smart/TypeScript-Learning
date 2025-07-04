"use strict";
// Penjelasan Sangat Lengkap: Tipe Data Primitif di TypeScript
// jadi tipe data primitif itu akan mencpyo nilainya saja
// tapi kalo non primitif itu akan mengcopy referensinya (array), coba baca penjelasan dibawah
// jadi sebenarnya itu sama aja, tapi yang membedakan itu adlah
// jadi bedanya degan js adaah tipe data ini harus di deklarasikan secara eksplisit
// jadi ketika sudah di deklarasikan tipedatanya
// dan nanti tidka bsia lagi diubah tipenya
// misal ketika kita sudah mendeklarasikan sebuah variable dengan tipe data string
// maka kita tidak bisa mengubahnya menjadi number, boolean, atau tipe data lainnya
// tapi meskipun begitu, ts sudah pintar, dan kalo kita lupa maka tipe datanya akan ditentukan dari tipe data
// dari nilai yang kita masukan ke variabel tersebut
const first_name = "Rafa";
console.log(first_name);
// Apa Itu Tipe Data Primitif?
// Tipe data primitif adalah tipe data paling dasar dalam TypeScript (dan JavaScript).
// Mereka digunakan untuk merepresentasikan nilai-nilai sederhana yang tidak memiliki metode atau properti tambahan.
// Tipe data ini menyimpan data secara langsung (by value) — bukan melalui referensi atau pointer.
// Nilai primitif tidak bisa diubah (immutable), artinya jika kamu memodifikasi nilainya, maka sebenarnya kamu membuat nilai baru, bukan mengubah yang lama.
// Mengapa Tipe Primitif Penting?
// 1. Ringan dan efisien: disimpan di stack memory, bukan heap.
// 2. Aman: lebih mudah dianalisis dan dikendalikan oleh compiler.
// 3. Cepat: karena langsung mengakses nilai, tanpa referensi.
// 4. Type-safe: membantu TypeScript memberikan kesalahan saat kompilasi jika digunakan secara salah.
// Cara Kerja:
// Ketika kita mendeklarasikan variabel bertipe primitif, nilai disimpan langsung di memori stack.
// Saat nilai dikopi ke variabel lain, maka dibuat duplikat nilainya (bukan referensi).
// Setiap variabel dengan tipe primitif menyimpan salinan nilainya sendiri.
// Daftar Lengkap Tipe Data Primitif di TypeScript:
// 1. string
// Digunakan untuk menyimpan teks (urutan karakter Unicode).
// Ditulis dengan tanda kutip tunggal (' '), ganda (" "), atau backtick (` `).
let nama = "Rafa";
let pesan = `Halo, ${nama}`; // menggunakan template literal
// 2. number
// Menyimpan semua jenis angka: bulat, desimal, negatif, positif, Infinity, NaN.
let usia = 25;
let pi = 3.14;
let hasil = NaN;
let takTerhingga = Infinity;
// 3. boolean
// Menyimpan nilai logika: true atau false.
// Sangat penting dalam kondisi dan logika.
let isLogin = true;
let isAdmin = false;
// 4. null
// Menyatakan "tidak ada nilai secara eksplisit".
// Biasanya digunakan sebagai nilai awal untuk variabel yang akan diisi nanti.
let dataKosong = null;
// 5. undefined
// Nilai default dari variabel yang belum diberi nilai.
// Menyatakan bahwa variabel "belum diinisialisasi".
let belumDiisi = undefined;
// 6. symbol
// Tipe data unik dan immutable yang digunakan untuk identifier unik pada properti objek.
// Biasanya digunakan pada level advanced seperti dalam library/framework.
let id1 = Symbol("id");
let id2 = Symbol("id");
let sama = (id1 === id2); // false → karena symbol selalu unik
// 7. bigint (ES2020+)
// Digunakan untuk menyimpan angka sangat besar (melebihi batas Number.MAX_SAFE_INTEGER).
// Ditulis dengan akhiran 'n'.
let angkaBesar = 9007199254740991n;
let hasilBesar = angkaBesar + 1n;
// Catatan penting tentang null dan undefined:
// Secara default, null dan undefined adalah subtype dari semua tipe lain.
// Artinya: kamu bisa melakukan ini jika strict null checks dimatikan:
// let nama: string = null → ini diperbolehkan jika `strictNullChecks` dimatikan.
// Namun pada mode TypeScript modern (strict mode), kamu harus eksplisit jika variabel bisa bernilai null atau undefined:
// Contoh:
let mungkinKosong = null;
let mungkinBelum = undefined;
// Perbedaan Antara Primitif dan Non-Primitif:
// Primitif: string, number, boolean, null, undefined, symbol, bigint → by value
// Non-primitif: object, array, function, class → by reference
// Contoh by value (tipe primitif)
let a = 10;
let b = a;
b = 20;
// a tetap 10, karena nilai disalin (bukan referensi)
// Contoh by reference (tipe non-primitif)
let obj1 = { nama: "Rafa" };
let obj2 = obj1;
obj2.nama = "Khadafi";
// obj1.nama ikut berubah karena obj1 dan obj2 menunjuk ke objek yang sama
// Kesimpulan:
// - Tipe primitif adalah pondasi dari semua data di TypeScript
// - Digunakan untuk menyimpan nilai dasar dan tidak memiliki struktur kompleks
// - Immutable, ringan, dan efisien
// - Harus dipahami untuk menulis program yang bersih, aman, dan mudah diprediksi
// Rekomendasi:
// - Gunakan tipe primitif untuk menyimpan data dasar seperti nama, angka, status, dsb.
// - Aktifkan strict mode di tsconfig.json agar TypeScript membantu mendeteksi kesalahan saat kamu bekerja dengan null atau undefined
