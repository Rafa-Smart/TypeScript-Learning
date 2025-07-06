"use strict";
// hasilnya di js
var CustomerType2 = {
    0: "GOLD",
    1: "REGULER",
    2: "PLATINUM",
    GOLD: 0,
    REGULER: 1,
    PLATINUM: 2
};
// jdai bisa di panggil 2 arah
console.log(CustomerType2.GOLD); // 0
console.log(CustomerType2[0]); // "GOLD"
// adi tipe data enu ini adlaha tipe dat ayang sudah pasti
// ddan ini secara default ketika kita memilih salah satu dari pilihan di enum
// maka secara default akna berubah menjadi angka dari 0 sampai seterusnya
// atua bisa jgua kita setingg, nilai awal ankanya
// atau bsia juga kita setting menjadi string, bukan agka
var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["GOLD"] = 0] = "GOLD";
    CustomerType[CustomerType["REGULER"] = 1] = "REGULER";
    CustomerType[CustomerType["PLATINUM"] = 2] = "PLATINUM";
})(CustomerType || (CustomerType = {}));
// kita buat objeknya
const user1 = {
    id: 12345,
    nama: "rafa",
    type: CustomerType.GOLD,
};
const user2 = {
    id: 12245,
    nama: "jamal",
    type: CustomerType.PLATINUM,
};
// jaid akan sesuai dengan urutan ketika membuat enumnya
console.log(`ini user type: ${user1.type}`); // 0
console.log(`ini user type: ${user2.type}`); // 2
test("test 1...", () => {
    console.log("test");
    // tapi kita juga bsia megganti agar
    // nilai dari enumnya itu buakan angka, tapi huruf
    // degan cara
    let CustomerType;
    (function (CustomerType) {
        CustomerType["GOLD"] = "Gold";
        CustomerType["REGULER"] = "Regular";
        CustomerType["PLATINUM"] = "Platinum";
    })(CustomerType || (CustomerType = {}));
    const user1 = {
        id: 12345,
        nama: "rafa",
        type: CustomerType.GOLD,
    };
    const user2 = {
        id: 12245,
        nama: "jamal",
        type: CustomerType.PLATINUM,
    };
    console.log(`ini user type2: ${user1.type}`); // Gold
    console.log(`ini user type2: ${user2.type}`); // Platinum
    console.info(`data enum: ${CustomerType.GOLD}`);
    console.info(`data enum: ${CustomerType.REGULER}`);
    console.info(`data enum: ${CustomerType.PLATINUM}`);
});
console.clear();
// enum (singkatan dari "enumeration") adalah fitur di TypeScript yang
// digunakan untuk mendefinisikan sekumpulan nilai konstan yang terkait.
// Biasanya enum dipakai untuk merepresentasikan kelompok nilai yang tetap,
// seperti status, role, arah, warna, dll.
// Dengan enum, kita bisa memberi nama pada nilai-nilai tersebut,
// sehingga kode menjadi lebih deskriptif, jelas, dan minim typo.
// ===================================================================
// * CONTOH DASAR ENUM
// ===================================================================
// Tanpa enum:
const ROLE_ADMIN = 0;
const ROLE_USER = 1;
const ROLE_GUEST = 2;
// Dengan enum:
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let userRole = Role.User;
console.log(userRole); // 1
console.log(Role[userRole]); // "User"
// ===================================================================
// * CARA KERJA ENUM (NUMERIC ENUM DEFAULT)
// ===================================================================
// Secara default, enum di TypeScript dimulai dari angka 0 dan
// akan bertambah satu untuk setiap anggota berikutnya.
var Status;
(function (Status) {
    Status[Status["Pending"] = 0] = "Pending";
    Status[Status["Approved"] = 1] = "Approved";
    Status[Status["Rejected"] = 2] = "Rejected";
})(Status || (Status = {}));
// Jika ingin memulai dari angka lain:
var StatusManual;
(function (StatusManual) {
    StatusManual[StatusManual["Pending"] = 10] = "Pending";
    StatusManual[StatusManual["Approved"] = 11] = "Approved";
    StatusManual[StatusManual["Rejected"] = 12] = "Rejected";
})(StatusManual || (StatusManual = {}));
// ===================================================================
// * STRING ENUM
// ===================================================================
// Selain angka, enum juga bisa menyimpan nilai string.
// Ini lebih aman dan mudah dibaca saat debugging atau log.
var Arah;
(function (Arah) {
    Arah["Kiri"] = "LEFT";
    Arah["Kanan"] = "RIGHT";
    Arah["Atas"] = "UP";
    Arah["Bawah"] = "DOWN";
})(Arah || (Arah = {}));
console.log(Arah.Kiri); // "LEFT"
// ===================================================================
// * HETEROGENEOUS ENUM (CAMPURAN ANGKA & STRING) ❌ Tidak Direkomendasikan
// ===================================================================
var Campur;
(function (Campur) {
    Campur[Campur["Ya"] = 1] = "Ya";
    Campur["Tidak"] = "NO";
})(Campur || (Campur = {}));
// Walau diperbolehkan, ini membuat enum lebih sulit diprediksi
// dan lebih baik dihindari jika tidak benar-benar diperlukan.
// ===================================================================
// * ENUM BERSIFAT TWO-WAY (BIDIRECTIONAL) UNTUK NUMERIC ENUM
// ===================================================================
var Contoh;
(function (Contoh) {
    Contoh[Contoh["A"] = 0] = "A";
    Contoh[Contoh["B"] = 1] = "B";
})(Contoh || (Contoh = {}));
console.log(Contoh.A); // 0
console.log(Contoh[0]); // "A"  ← ini hanya bisa untuk enum berbasis angka
// ===================================================================
// * ENUM SEBAGAI TIPE
// ===================================================================
var Warna;
(function (Warna) {
    Warna[Warna["Merah"] = 0] = "Merah";
    Warna[Warna["Hijau"] = 1] = "Hijau";
    Warna[Warna["Biru"] = 2] = "Biru";
})(Warna || (Warna = {}));
function pilihWarna(warna) {
    // ini tuh maksudnya adlah objek warna yang bertipe Warna(enum)
    if (warna === Warna.Merah) {
        console.log("Kamu memilih MERAH");
    }
}
pilihWarna(Warna.Hijau); // ✅
// ===================================================================
// * ENUM DALAM OBJECT & SWITCH
// ===================================================================
var Level;
(function (Level) {
    Level[Level["Rendah"] = 0] = "Rendah";
    Level[Level["Sedang"] = 1] = "Sedang";
    Level[Level["Tinggi"] = 2] = "Tinggi";
})(Level || (Level = {}));
function cekLevel(lv) {
    switch (lv) {
        case Level.Rendah:
            console.log("Level rendah");
            break;
        case Level.Sedang:
            console.log("Level sedang");
            break;
        case Level.Tinggi:
            console.log("Level tinggi");
            break;
    }
}
cekLevel(Level.Tinggi);
function updateStatus(status) {
    if (status === "pending") {
        console.log("Menunggu...");
    }
}
// Lebih ringan daripada enum, dan cocok untuk tipe statis kecil
// ===================================================================
// * ENUM DENGAN NILAI KHUSUS (MANUAL ASSIGNMENT)
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["NotFound"] = 404] = "NotFound";
    HttpStatus[HttpStatus["ServerError"] = 500] = "ServerError";
})(HttpStatus || (HttpStatus = {}));
console.log(HttpStatus.NotFound); // 404
// ===================================================================
// * ENUM SEBAGAI OBJEK KONSTANTA (KOMPILASI KE JS)
// ===================================================================
// Perlu dipahami bahwa setelah dikompilasi, enum akan jadi objek JS biasa:
// Misalnya:
// enum A { X, Y }
// Akan dikompilasi ke:
// const A = { 0: "X", 1: "Y", X: 0, Y: 1 }
// ===================================================================
// * BEST PRACTICES ENUM
// ===================================================================
// ✅ Gunakan enum untuk nilai yang tetap dan digunakan berulang
// ✅ Gunakan string enum jika ingin hasil log/debug lebih jelas
// ✅ Gunakan union type untuk nilai kecil dan ringan
// ✅ Hindari heterogeneous enum
// ✅ Selalu beri nama enum dan nilainya secara deskriptif (hindari "VAL1", "VAL2", dll)
// ===================================================================
// * RANGKUMAN
// ===================================================================
// - enum = tipe data untuk membuat kelompok nilai tetap
// - Ada dua jenis: numeric enum dan string enum
// - Bisa diakses dua arah (jika numeric)
// - Berguna untuk status, level, peran, aksi, dll
// - Lebih aman, terbaca, dan menghindari kesalahan penulisan
// - Alternatif: union type ("aktif" | "nonaktif") jika butuh ringan
