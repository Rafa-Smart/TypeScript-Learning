// jadi kita bisa menurunkan atau mewariskan
// data data / atribut dnegna tipedatanya dari interface lain

describe("interface...", () => {


  test("test 1...", () => {
    enum TypePosisi {
      CEO = "CEO",
      MANAGER = "MANAGER",
    }

    interface Person {
      nama: string;
      umur: number;
    }

    interface Karyawan extends Person {
      posisi: TypePosisi;
    }

    const user1: Karyawan = {
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

  interface Person {
    nama: string;
    umur: number;
  }

  type Siswa = Person & {
    // jadi pake & untuk menggabungkan
    kelas: number;
  };

  const siswa1: Siswa = {
    nama: "jamal",
    umur: 16,
    kelas: 12,
  };
  console.log(siswa1);

  type mapel = {
    mapel: string;
  } & Siswa;
});

console.clear();

// Extending interface adalah fitur di TypeScript yang memungkinkan
// satu interface mewarisi properti dari interface lain.
// Dengan kata lain, kita bisa membuat interface baru berdasarkan
// interface sebelumnya dan menambahkan atau memodifikasi properti tambahan.

// Dalam istilah OOP, ini mirip dengan konsep inheritance (pewarisan),
// dan sangat berguna untuk membuat struktur tipe data yang kompleks
// secara bertahap dan terorganisir.

// ===================================================================
// * CARA MENULIS EXTENDING INTERFACE
// ===================================================================
interface Person {
  nama: string;
  umur: number;
}

interface Employee extends Person {
  posisi: string;
}

const karyawan: Employee = {
  nama: "Rafa",
  umur: 25,
  posisi: "Developer",
};

// Penjelasan:
// Interface `Employee` mewarisi semua properti dari `Person`,
// jadi `Employee` harus memiliki `nama`, `umur`, dan `posisi`.

// ===================================================================
// * BAGAIMANA CARA KERJANYA?
// ===================================================================
// Saat sebuah interface `B` memperluas interface `A`,
// maka TypeScript akan secara otomatis "menyalin" seluruh struktur
// dari `A` ke dalam `B`, lalu menambahkan apa pun yang didefinisikan dalam `B`.
// Properti-properti dari `A` tetap ada dan wajib diimplementasikan
// jika digunakan sebagai tipe dari suatu objek.

// ===================================================================
// * KENAPA HARUS MENGGUNAKAN EXTENDING INTERFACE?
// ===================================================================
// ✅ Memungkinkan reuse struktur data antar interface
// ✅ Menghindari duplikasi kode
// ✅ Mempermudah pengembangan struktur data kompleks secara bertahap
// ✅ Cocok untuk proyek besar dan kolaboratif
// ✅ Membantu pemisahan tanggung jawab antar interface (Single Responsibility)

// ===================================================================
// * CONTOH: MULTI-LEVEL EXTENDING (BERTINGKAT)
// ===================================================================
interface BaseEntity {
  id: number;
}

interface UserEntity extends BaseEntity {
  username: string;
}

interface AdminEntity extends UserEntity {
  akses: string[];
}

const admin: AdminEntity = {
  id: 1,
  username: "admin123",
  akses: ["read", "write", "delete"],
};

// AdminEntity memiliki semua properti dari UserEntity dan BaseEntity

// ===================================================================
// * CONTOH: EXTEND LEBIH DARI SATU INTERFACE (MULTIPLE EXTENDING)
// ===================================================================
interface HasEmail {
  email: string;
}

interface HasPhone {
  phone: string;
}

interface Contact extends HasEmail, HasPhone {
  name: string;
}

const kontak: Contact = {
  name: "Khadafi",
  email: "khadafi@mail.com",
  phone: "08123456789",
};

// `Contact` memiliki semua properti dari HasEmail dan HasPhone

// ===================================================================
// * PERBEDAAN EXTENDING INTERFACE VS TYPE ALIAS EXTENDS
// ===================================================================
// Interface:
// - Mendukung `extends` satu atau lebih interface
// - Bisa digunakan sebagai kontrak class (OOP)
// - Lebih cocok untuk struktur objek dan sistem besar

// Type Alias:
// - Tidak bisa `extends` interface (tapi bisa pakai intersection `&`)
// - Lebih cocok untuk union, literal types, dan kombinasi kompleks

// Contoh type alias setara (tidak 100% sama tapi mirip):
// type A = { a: string };
// type B = A & { b: number };

// ===================================================================
// * CONTOH DENGAN OPTIONAL DAN READONLY
// ===================================================================
interface Identitas {
  readonly id: number;
  nama: string;
}

// interface Mahasiswa extends Identitas {
//   jurusan?: string; // optional
// }

// const mhs: Mahasiswa = {
//   id: 1,
//   nama: "Rafa"
// };

// mhs.id = 5; // ❌ error: readonly

// ===================================================================
// * CONTOH UNTUK FUNGSI
// ===================================================================
interface Hitung {
  (a: number, b: number): number;
}

interface HitungTambah extends Hitung {}

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
