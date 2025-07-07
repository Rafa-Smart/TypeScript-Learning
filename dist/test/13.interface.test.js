"use strict";
// interface adalah cara lain untuk melakukan deklarasi data selain menggunakan type
// tapi ini lebih baik, karena banyak fitu fitur tambahan dan mudah untuk dikembagkan
it("test", () => {
    //   Ya, number[] hanyalah shorthand (penulisan singkat) dari Array<number>. Mereka identik.
    // let a: number[] = [1, 2, 3];         // Sama dengan
    // let b: Array<number> = [1, 2, 3];    // Sama persis
    // Keduanya mewarisi seluruh properti dan method dari interface Array<number>.
});
test("test 1...", () => {
    const user1 = {
        id: 12234,
        nama: "rafa khadafi",
    };
    const obj1 = {
        id: "12345",
        nama: "jamal istiqomah",
    };
    const array1 = ["rafa", 12, true];
    const math = {
        // ini ga bisa
        // tambah: function(a, b) => a + b,
        // ini bisa
        tambah: (a, b) => a + b,
        kurang: function (a, b) {
            if (b) {
                return a - b;
            }
            else {
                return a;
            }
        },
    };
    console.log(`tambah: ${math.tambah(5, 5)}`); // 10
    console.log(`kurang 1: ${math.kurang(5, 5)}`); // 0
    console.log(`kurang 2: ${math.kurang(5)}`); // 5
});
it("test lagii...", () => {
    // jadi ini langsung tanpa pake objek
    const perkalian = (a, b) => a * b;
    console.log(`perkalian: ${perkalian(5, 5)}`);
    //   jadi readonly ini akna menjaga agar datanya tidak bisa diubah ubah
    // setelah pertama kali datanya dibuat / diisi
    const tesReadonly = {
        id: 12345,
        nama: "rafa khadafi",
    };
    // ini ga bisa, karena sudah readonly
    //   tesReadonly.nama = 'jamal'
    //   hanya bisa dibaca
    console.log(tesReadonly);
});
console.clear();
const calc = {
    tambah: (x, y) => x + y,
    kurang: (x, y) => x - y,
};
console.log(calc.tambah(5, 3)); // 8
class Mobil {
    constructor(merk) {
        this.merk = merk;
    }
    nyalakan() {
        console.log(`${this.merk} menyala`);
    }
}
const m1 = new Mobil("Toyota");
console.log('====');
m1.nyalakan(); // Toyota menyala
// m1.nyalakan2(); // ga bsa
console.log('====');
let kamus = {
    halo: "hello",
    selamat: "good",
};
let buku1 = {
    id: 101,
    judul: "Belajar TS",
};
let perkalian = (x, y) => x * y;
console.log(perkalian(4, 5)); // 20
// ===================================================================
// * KAPAN TIDAK PERLU MENGGUNAKAN INTERFACE?
// ===================================================================
// ❌ Jangan gunakan interface jika:
// - Hanya ingin mendefinisikan tipe sederhana sekali pakai
// - Tidak butuh inheritance/class
// - Cukup pakai type alias untuk gabungan primitif
// ===================================================================
// * KEUNTUNGAN INTERFACE
// ===================================================================
// ✅ Mendefinisikan struktur kode secara eksplisit
// ✅ Mendukung inheritance (extend)
// ✅ Cocok untuk OOP dan kontrak antar komponen
// ✅ Kode jadi lebih terbaca dan auto-complete friendly
// ✅ TypeScript bisa validasi lebih baik saat compile
// ===================================================================
// * KELEMAHAN INTERFACE
// ===================================================================
// ❌ Tidak bisa buat union/intersection (pakai `type` untuk itu)
// ❌ Tidak bisa langsung membuat alias untuk tipe primitif
// ❌ Kadang lebih verbose daripada `type`
// ===================================================================
// * BEST PRACTICES
// ===================================================================
// ✅ Gunakan interface untuk struktur objek dan class
// ✅ Gunakan optional (`?`) untuk properti tidak wajib
// ✅ Gunakan readonly untuk properti yang tidak boleh diubah
// ✅ Hindari membuat interface terlalu besar (pisah jika perlu)
// ✅ Gunakan inheritance dengan bijak untuk menyederhanakan struktur
// ===================================================================
// * RANGKUMAN
// ===================================================================
// - Interface = kontrak struktur objek/class
// - Digunakan untuk memastikan kesesuaian bentuk data
// - Bisa digunakan untuk objek, fungsi, array, class
// - Mendukung inheritance dengan `extends`
// - Lebih cocok untuk arsitektur besar atau aplikasi OOP
// - Lebih aman, terbaca, dan mudah dikembangkan
