"use strict";
// jadi kita bisa menurunkan atau mewariskan
// data data / atribut dnegna tipedatanya dari interface lain
describe("interface...", () => {
    test("test 1...", () => {
        let TypePosisi;
        (function (TypePosisi) {
            TypePosisi["CEO"] = "CEO";
            TypePosisi["MANAGER"] = "MANAGER";
        })(TypePosisi || (TypePosisi = {}));
        const user1 = {
            nama: "rafa khadafi",
            umur: 15,
            posisi: TypePosisi.CEO,
        };
        console.log(user1);
    });
});
test("test 2...", () => {
    // selain pake interface, kita juga bisa extends tpai pake type
    // degan cara interception types
    // dan ini juga bsia lebih dari 1
    const siswa1 = {
        nama: "jamal",
        umur: 16,
        kelas: 12,
    };
    console.log(siswa1);
});
console.clear();
const karyawan = {
    nama: "Rafa",
    umur: 25,
    posisi: "Developer",
};
const admin = {
    id: 1,
    username: "admin123",
    akses: ["read", "write", "delete"],
};
const kontak = {
    name: "Khadafi",
    email: "khadafi@mail.com",
    phone: "08123456789",
};
// const tambah: HitungTambah = (x, y) => x + y;
// `HitungTambah` mewarisi bentuk fungsi dari `Hitung`
// ===================================================================
// * BEST PRACTICES
// ===================================================================
// ✅ Gunakan `extends` untuk menghindari duplikasi struktur antar interface
// ✅ Gunakan multiple `extends` jika objek perlu beberapa kemampuan
// ✅ Gunakan prefix/suffix nama interface secara jelas (misal: User, UserPayload, etc)
// ✅ Pisahkan interface besar menjadi bagian kecil dan extend sesuai kebutuhan
// ✅ Hindari penggunaan `any` dalam interface yang kompleks
// ===================================================================
// * KEUNTUNGAN EXTENDING INTERFACE
// ===================================================================
// ✅ DRY (Don't Repeat Yourself) — menghindari pengulangan kode
// ✅ Mempermudah perubahan struktur di masa depan
// ✅ Meningkatkan keterbacaan dan skalabilitas kode
// ✅ Ideal untuk pemrograman berorientasi objek (OOP)
// ===================================================================
// * KEKURANGAN EXTENDING INTERFACE
// ===================================================================
// ❌ Jika terlalu dalam (nested extends), bisa sulit dilacak
// ❌ Struktur terlalu rumit jika banyak turunan tidak relevan
// ❌ Tidak cocok untuk penggabungan tipe primitif (pakai type alias &)
// ===================================================================
// * RANGKUMAN
// ===================================================================
// - Extending interface = mewarisi struktur dari interface lain
// - Ditulis dengan: `interface B extends A { ... }`
// - Bisa extend satu atau lebih interface
// - Bisa diterapkan pada objek, class, fungsi, array, dll
// - Sangat berguna untuk struktur data besar dan modular
// - Bisa dikombinasikan dengan readonly, optional, generic, dan lainnya
