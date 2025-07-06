"use strict";
// jadi assertions type itu memungkinkan kita kepada ts
// bhawa data ini bertipe INI
// jadi nanti tidka akn di cek sama si tsnya, dan tsnya sudah
// yakin bahwa data ini adalah tipe data yang kamu berikan
console.clear();
// contoh
test("testing...", () => {
    let nama = "rafa khadafi";
    // disini belum jelas bahwa nama itu tipedatanya apa
    // makanya ga bsia pake fungstion length
    // let data = nama.length // ini ga bisa
    // console.log(data)
    // padahal kita sudah tahu betul, bahwa tipe data dari nama
    // ini sduah jelas jelas adalah string
    // jadi harus pake typeof
    if (typeof nama === "string") {
        console.log(nama);
    }
    // tapi disini kita bisa memaksa kepada tsnya, bahwa data nama ini
    // tipe datanya adalah string, bukan uknown (krena kita suadh tahu betul)
    console.log(nama.length);
    // atau
    let panjang = nama.length;
    console.log(panjang);
    const user = {
        id: 12345,
        nama: "jamal istiqomah",
    };
    //   nah karena objek user ini tipenya adalah any
    // tapi padahal kita sudah tau bahwa user ini itu sebenarnya tipedatanya itu sama seprti interface USer
    // makakita bsia assertion menjadi tipedatanya USer
    const userHasil = user;
    console.log(userHasil);
    // nah jadi user ini tipedatanya kita set secara paksa bahwa dia bertipe data User
});
test("kalo salah...", () => {
    // tapi masalahnya kalo kia pake assertion
    // maka nanti tsnya ga akan lagi ngecek si tipedatanya
    // jadi mau itu benar atau salah maka, itu adalah salah kamu
    // nah disini coba kita set, bahwa user2 ini
    // yang asalnyya any, tapi mau kita paksa bahwa daia tipedatanya
    // menjadi User, meskipun tidak sama, lihat atribut kelas
    // nah tapi kalo pake assertions, maka hal ini tidak menyebabkan error
    const user2 = {
        id: 12345,
        nama: "siti",
        kelas: "10pplg",
        tambah: (a, b) => a + b
    };
    // jadi ini tidak akan error, karena ga akna di cek tipe datanya sama si 
    // tsnys, jadi harus hati hati
    const user3 = {
        id: 1234
    };
    const hasil = user3;
    console.log(hasil.tambah(5, 5));
    // nah ini ga error waktu kita akses tambah dari si hasil
    // akarena tambah ini emmang ada di interface USer
    // tapi ini hanya akan error jika kita jalankan aplikasinya
    // jadi ga ketahuan
});
console.log("============");
// Type Assertion adalah cara untuk memberitahu TypeScript bahwa:
// "Saya tahu lebih baik tentang tipe data ini daripada kamu (TypeScript)"
// Jadi, kita **memaksa TypeScript** untuk memperlakukan nilai sebagai tipe tertentu,
// meskipun TypeScript tidak bisa memastikannya sendiri.
// TypeScript **tidak melakukan konversi nilai secara runtime**,
// hanya membantu *type checking* saat *compile time*.
// ===================================================================
// * CONTOH SEDERHANA
// ===================================================================
// let nilai: unknown = "Hello, world";
// Tanpa assertion, kita tidak bisa memanggil metode string:
/// console.log(nilai.length); // ❌ error
// Dengan assertion:
// let panjang = (nilai as string).length;
// console.log(panjang); // ✅ 13
// Penjelasan:
// - `nilai as string` → memberitahu TS bahwa `nilai` adalah string
// - Maka kita bisa akses `.length`, `.toUpperCase()`, dll
// ===================================================================
// * SINTAKSIS TYPE ASSERTION
// ===================================================================
// Ada 2 bentuk:
// 1. `nilai as T` (gaya modern – direkomendasikan)
let teks = "halo";
// 2. `<T>nilai` (gaya lama – tidak direkomendasikan di React/JSX)
let teks2 = "halo juga";
// Gunakan `as` jika memakai JSX/React karena `<T>` bisa dianggap tag HTML
// ===================================================================
// * ALASAN MENGGUNAKAN TYPE ASSERTION
// ===================================================================
// ✅ Saat TypeScript tidak bisa menyimpulkan tipe dengan benar
// ✅ Saat kita tahu lebih banyak daripada compiler
// ✅ Saat menggunakan data dari luar (API, DOM, JSON, dsb)
// ✅ Saat bekerja dengan `unknown`, `any`, atau data fleksibel
// ===================================================================
// * CONTOH UMUM PENGGUNAAN ASSERTION
// ===================================================================
// (1) Ketika kita tahu elemen HTML pasti ada
// const inputEl = document.getElementById("myInput") as HTMLInputElement;
// inputEl.value = "Diubah"; // ✅ tidak error
// (2) Ketika mem-parsing JSON
const response = '{"id":1,"nama":"Rafa"}';
// const data = JSON.parse(response) as { id: number; nama: string };
// console.log(data.nama); // ✅ aman karena kita yakin bentuk JSON-nya
// (3) Ketika menerima `unknown` dari fungsi
function ambilData() {
    return "data teks";
}
// let hasil = ambilData() as string;
// console.log(hasil.toUpperCase()); // ✅ karena kita yakin itu string
// ===================================================================
// * TYPE ASSERTION BUKAN TYPE CASTING
// ===================================================================
// TypeScript tidak mengubah nilai saat runtime!
// Jadi ini hanya *instruksi ke compiler*, bukan konversi nilai seperti:
//   (int) 3.14 → 3  (di bahasa C, misalnya)
// Jadi ini hanya berlaku di level *type system*, bukan pada eksekusi nyata
// ===================================================================
// * TYPE ASSERTION BISA BERBAHAYA ❗
// ===================================================================
// Karena kamu bisa memaksa nilai menjadi tipe yang salah!
// let salah = "halo" as number; // ❌ tidak error saat compile
// console.log(salah); // hasil tetap string, tapi dianggap number oleh TS
// TypeScript tidak akan memprotes walaupun itu tidak logis
// → karena itu tanggung jawab kamu untuk memastikan keamanannya!
// ===================================================================
// * DOUBLE ASSERTION (LEBIH BERBAHAYA ❗❗❗)
// ===================================================================
let nilaiAneh = "text";
// Mengubah string menjadi number lewat unknown
// Ini sangat tidak disarankan, karena menghindari semua pengecekan
// ===================================================================
// * TYPE ASSERTION PADA OBJECT LITERAL
// ===================================================================
// type User = {
//   id: number;
//   nama: string;
// };
// let user = {} as User;
// user.id = 1;
// user.nama = "Khadafi";
// Tetapi ini bahaya jika properti tidak lengkap:
let userSalah = {}; // ❗ Tidak error, padahal belum ada `id`, `nama`
// Solusi yang lebih aman: inisialisasi langsung
let userAman = { id: 2, nama: "Dafi" };
// ===================================================================
// * KONDISI YANG COCOK MENGGUNAKAN ASSERTION
// ===================================================================
// - Saat memakai DOM API (`getElementById`, dsb)
// - Saat parsing `JSON.parse` (hasilnya `any`)
// - Saat menangani data API luar (tanpa definisi tipe)
// - Saat ingin menegaskan bentuk object literal sementara
// - Saat mempersempit `unknown` → `T`
// ===================================================================
// * PERBANDINGAN: AS CONST (Literal Assertion)
// ===================================================================
// const warna = "merah" as const;
// TypeScript akan menyimpulkan bahwa `warna` = "merah" (bukan string umum)
// Bisa digunakan untuk readonly tuple atau key literal:
// const koordinat = [10, 20] as const;
// Type: readonly [10, 20]
// ===================================================================
// * PERBANDINGAN: NON-NULL ASSERTION (!)
// ===================================================================
// const elemen = document.getElementById("username")!;
// elemen.innerHTML = "Hai";
// `!` digunakan saat kita meyakinkan bahwa nilai bukan `null` atau `undefined`
// ===================================================================
// * BEST PRACTICES TYPE ASSERTION
// ===================================================================
// ✅ Gunakan hanya saat:
//    - TypeScript tidak cukup "cerdas" menyimpulkan tipe
//    - Kamu benar-benar yakin bentuk data
// ✅ Gunakan `as` bukan `<T>` di JSX/React
// ❌ Jangan pakai assertion untuk menyembunyikan kesalahan desain
// ❌ Hindari assertion berlapis (double assertion) kecuali sangat yakin
// ✅ Gunakan helper function jika perlu pengecekan tipe nyata sebelum assertion
// ===================================================================
// * RANGKUMAN
// ===================================================================
// - Type Assertion = menyatakan tipe yang pasti pada suatu nilai
// - Ditulis: `x as T` (atau `<T>x`, kecuali di React)
// - Tidak mengubah nilai runtime, hanya untuk compile-time
// - Harus digunakan dengan penuh tanggung jawab
// - Berguna saat menangani unknown, any, JSON, DOM, dan data eksternal
// - Salah pakai assertion bisa menyebabkan bug yang sulit dilacak
