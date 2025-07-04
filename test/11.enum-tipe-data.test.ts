

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
console.log(CustomerType2[0]);   // "GOLD"


// adi tipe data enu ini adlaha tipe dat ayang sudah pasti
// ddan ini secara default ketika kita memilih salah satu dari pilihan di enum
// maka secara default akna berubah menjadi angka dari 0 sampai seterusnya

// atua bisa jgua kita setingg, nilai awal ankanya
// atau bsia juga kita setting menjadi string, bukan agka

enum CustomerType {
  GOLD, // defaultnya 0
  REGULER, // defaultnya 1
  PLATINUM, // defaultnya 2
}

// disini kita buat type khusus

type Customer = {
  id: number;
  nama?: string;
  type: CustomerType;
};

// kita buat objeknya

const user1: Customer = {
  id: 12345,
  nama: "rafa",
  type: CustomerType.GOLD,
};
const user2: Customer = {
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

  enum CustomerType {
    GOLD = "Gold", // defaultnya 0 menjadi Gold
    REGULER = "Regular", // defaultnya 1 menjadi Regular
    PLATINUM = "Platinum", // defaultnya 2 menjadi Platinum
  }

  // disini kita buat type khusus

  type Customer = {
    id: number;
    nama?: string;
    type: CustomerType;
  };

  const user1: Customer = {
    id: 12345,
    nama: "rafa",
    type: CustomerType.GOLD,
  };
  const user2: Customer = {
    id: 12245,
    nama: "jamal",
    type: CustomerType.PLATINUM,
  };

  console.log(`ini user type2: ${user1.type}`); // Gold
  console.log(`ini user type2: ${user2.type}`); // Platinum

  console.info(`data enum: ${CustomerType.GOLD}`)
  console.info(`data enum: ${CustomerType.REGULER}`)
  console.info(`data enum: ${CustomerType.PLATINUM}`)

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
enum Role {
  Admin, // 0
  User, // 1
  Guest, // 2
}

let userRole: Role = Role.User;
console.log(userRole); // 1
console.log(Role[userRole]); // "User"

// ===================================================================
// * CARA KERJA ENUM (NUMERIC ENUM DEFAULT)
// ===================================================================
// Secara default, enum di TypeScript dimulai dari angka 0 dan
// akan bertambah satu untuk setiap anggota berikutnya.

enum Status {
  Pending, // 0
  Approved, // 1
  Rejected, // 2
}

// Jika ingin memulai dari angka lain:
enum StatusManual {
  Pending = 10,
  Approved, // 11
  Rejected, // 12
}

// ===================================================================
// * STRING ENUM
// ===================================================================
// Selain angka, enum juga bisa menyimpan nilai string.
// Ini lebih aman dan mudah dibaca saat debugging atau log.

enum Arah {
  Kiri = "LEFT",
  Kanan = "RIGHT",
  Atas = "UP",
  Bawah = "DOWN",
}

console.log(Arah.Kiri); // "LEFT"

// ===================================================================
// * HETEROGENEOUS ENUM (CAMPURAN ANGKA & STRING) ❌ Tidak Direkomendasikan
// ===================================================================
enum Campur {
  Ya = 1,
  Tidak = "NO",
}
// Walau diperbolehkan, ini membuat enum lebih sulit diprediksi
// dan lebih baik dihindari jika tidak benar-benar diperlukan.

// ===================================================================
// * ENUM BERSIFAT TWO-WAY (BIDIRECTIONAL) UNTUK NUMERIC ENUM
// ===================================================================
enum Contoh {
  A = 0,
  B = 1,
}

console.log(Contoh.A); // 0
console.log(Contoh[0]); // "A"  ← ini hanya bisa untuk enum berbasis angka

// ===================================================================
// * ENUM SEBAGAI TIPE
// ===================================================================
enum Warna {
  Merah,
  Hijau,
  Biru,
}

function pilihWarna(warna: Warna) {
  if (warna === Warna.Merah) {
    console.log("Kamu memilih MERAH");
  }
}

pilihWarna(Warna.Hijau); // ✅

// ===================================================================
// * ENUM DALAM OBJECT & SWITCH
// ===================================================================
enum Level {
  Rendah,
  Sedang,
  Tinggi,
}

function cekLevel(lv: Level) {
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

// ===================================================================
// * KENAPA MENGGUNAKAN ENUM?
// ===================================================================
// ✅ Representasi simbolik dari nilai tetap (misalnya: status, level, role)
// ✅ Mengurangi typo dari penggunaan string literal
// ✅ Lebih mudah saat refactor
// ✅ Lebih terbaca daripada sekadar angka atau string konstan
// ✅ Memastikan hanya nilai yang valid yang bisa digunakan

// ===================================================================
// * KEUNTUNGAN ENUM
// ===================================================================
// ✅ Jelas dan kuat (strongly-typed)
// ✅ Bisa digunakan sebagai tipe data
// ✅ Ideal untuk switch-case dan kondisi tetap
// ✅ Dukungan dua arah pada numeric enum

// ===================================================================
// * KELEMAHAN ENUM
// ===================================================================
// ❌ Tidak ada di JavaScript, jadi perlu di-*compile*
// ❌ Tidak cocok untuk nilai dinamis (flexible set)
// ❌ Performa runtime sedikit lebih berat daripada literal const
// ❌ Heterogeneous enum (campuran angka dan string) membuat kode tidak konsisten

// ===================================================================
// * ALTERNATIF ENUM: LITERAL UNION TYPE
// ===================================================================
// Untuk kasus yang ringan, bisa gunakan string literal union type:

type StatusAlt = "pending" | "approved" | "rejected";

function updateStatus(status: StatusAlt) {
  if (status === "pending") {
    console.log("Menunggu...");
  }
}

// Lebih ringan daripada enum, dan cocok untuk tipe statis kecil

// ===================================================================
// * ENUM DENGAN NILAI KHUSUS (MANUAL ASSIGNMENT)
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}

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
