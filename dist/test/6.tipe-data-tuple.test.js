"use strict";
// Apa itu Tuple?
// Tuple adalah struktur data khusus di TypeScript yang memungkinkan kita menyimpan beberapa nilai 
// dalam satu array, dengan jumlah elemen tetap dan tipe data yang sudah ditentukan secara berurutan.
// Dengan kata lain, tuple adalah array dengan panjang tetap dan tipe pada setiap indeksnya juga tetap.
// Tujuannya adalah untuk menyimpan data yang terkait tetapi memiliki tipe berbeda.
// Contoh tuple sederhana:
// [string, number] → berarti elemen pertama harus string, dan elemen kedua harus number.
console.clear();
it('test readonly', () => {
    // disini kita buat tuple
    let array1 = [1, 'rafa', [10, 10, 10], true, 20, 20, 20, 20];
    // atau bisa juga jika igin readonly
    expect(12).toBe(12);
    console.log(array1);
    let d = [1, 'rafa'];
    // readonly adalah kata kunci (keyword) di TypeScript yang digunakan 
    // untuk menandai properti pada objek atau elemen tuple agar tidak bisa 
    // diubah (immutable) setelah ditetapkan.
    let array2 = [1, 'rafa', [10, 10, 10], true, 20, 20, 20, 20];
    console.log(array2);
    // Readonly<T> adalah utility type bawaan dari TypeScript yang digunakan 
    // untuk mengubah seluruh properti dari T menjadi readonly.
});
let identitas = ["Rafa", 25];
// Bagaimana Cara Kerja Tuple?
// Ketika mendeklarasikan tuple, kamu menentukan:
// - jumlah elemen (panjang tetap)
// - tipe data dari masing-masing elemen berdasarkan urutan
// Jika kamu mengubah urutan atau jumlah elemen, maka TypeScript akan memberikan error.
// let salah1: [string, number] = [25, "Rafa"] // ❌ Error: urutan salah
// let salah2: [string, number] = ["Rafa"] // ❌ Error: jumlah elemen tidak sesuai
// Tujuan dan Keuntungan Tuple:
// - Membatasi jumlah dan tipe data pada array secara ketat
// - Lebih aman dibandingkan array biasa saat menyimpan kombinasi data tetap
// - Cocok digunakan untuk pasangan data seperti koordinat, pasangan key-value, hasil fungsi, dll
// - Memberikan dokumentasi eksplisit: tuple menyampaikan makna data melalui urutan dan tipe
// Perbedaan Tuple dan Array:
// - Array biasa: tipe data elemen seragam, panjang bisa dinamis
//   Contoh: let angka: number[] = [1, 2, 3]
// - Tuple: tipe tiap elemen bisa berbeda, panjang tetap
//   Contoh: let hasil: [string, boolean, number] = ["Rafa", true, 100]
// Cara Mengakses Nilai Tuple:
let data = ["Login berhasil", true];
// let pesan = data[0] // "Login berhasil"
// let status = data[1] // true
// Destructuring Tuple
let koordinat = [10, 20];
let [x, y] = koordinat;
console.log(x); // 10
console.log(y); // 20
// Tuple dengan Optional Element (elemen yang boleh tidak diisi)
let dataPengguna = ["Andi"];
// Bisa diisi hanya satu elemen string
// Elemen kedua (number) bersifat opsional
// Tuple dengan Spread Operator (rest element)
// Hanya boleh satu spread element, dan harus diletakkan di akhir
let logData = ["Total", 100, 200, 300];
// Tuple dalam Fungsi
function getUser() {
    return ["Budi", 22];
}
// let [nama, umur] = getUser()
// Label Tuple (sejak TS 4.0+)
// Label memberikan makna lebih baik saat dibaca oleh manusia (tidak berdampak pada runtime)
let user = ["Citra", 30];
let hasilProses = ["Berhasil", true];
// Tuple dan readonly
let readonlyTuple = [10, 20];
// readonlyTuple[0] = 100 // ❌ Error: karena tuple bersifat readonly
// Tuple dengan union type
let tupleCampuran = [123, true];
tupleCampuran = ["abc", false]; // juga valid
// Tuple dengan array di dalamnya
let tabel = ["Statistik", [10, 20, 30]];
// Catatan Penting:
// - Tuple bersifat ketat: urutan dan tipe harus persis
// - Tuple bisa digunakan untuk struktur data tetap dan aman
// - Tidak sama dengan array biasa, meskipun bentuknya mirip
// - Cocok digunakan saat data terdiri dari bagian-bagian yang memiliki makna dan tipe berbeda
// Kapan Harus Menggunakan Tuple?
// - Saat data memiliki struktur tetap dan jumlah elemen pasti
// - Saat tiap elemen memiliki tipe dan makna berbeda (misalnya hasil proses: [pesan, status])
// - Saat ingin mengekspresikan struktur data kecil tanpa membuat objek penuh
// - Saat mendesain API/fungsi yang mengembalikan beberapa nilai
// Kesimpulan:
// Tuple adalah fitur kuat dari TypeScript yang memungkinkan array dengan tipe dan jumlah elemen tetap
// Mereka cocok untuk menyimpan data kompleks dalam format ringkas dan aman
// TypeScript memberikan pengecekan ketat terhadap isi dan urutan elemen tuple
// Gunakan tuple untuk meningkatkan kejelasan, keamanan tipe, dan dokumentasi eksplisit dalam kode
