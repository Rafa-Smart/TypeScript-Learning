// interface adalah cara lain untuk melakukan deklarasi data selain menggunakan type
// tapi ini lebih baik, karena banyak fitu fitur tambahan dan mudah untuk dikembagkan

test("test 1...", () => {
  // jadi sebenarnya itu hampir mirip seperti menggunakan type
  interface User {
    id: number | string;
    nama?: string;
  }

  const user1: User = {
    id: 12234,
    nama: "rafa khadafi",
  };

  // untuk objek yang agak bebas
  interface Objek {
    // jadi maksudnya itu
    // keynya wajib bertipe data string
    // dan valuenya atau hasilnya itu harus string juga
    [key: string]: string;
    // atua bisa juga gini
    // [key:string | number]:string
  }

  const obj1: Objek = {
    id: "12345",
    nama: "jamal istiqomah",
  };

  // untuk array
  interface MyArray {
    // jadi index itu maksudnya adalah
    // indexnya itu harus number, dan ini sudah defaulyaa
    // dan valuenya bisa boolean | string | number
    [index: number]: boolean | string | number;
  }

  const array1: MyArray = ["rafa", 12, true];

  // interface untuk function
  interface MyFunction1 {
    // jdai nama functionnya harus tambah, dan parameternya harus number
    // dan hasilnya itu number
    tambah(a: number, b: number): number;

    // jadi b ini obsional
    kurang(a: number, b?: number): number;
  }

  const math: MyFunction1 = {
    // ini ga bisa
    // tambah: function(a, b) => a + b,

    // ini bisa
    tambah: (a, b) => a + b,
    kurang: (a, b?) => {
      if (b) {
        return a - b;
      } else {
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

  interface HItung2 {
    (a: number, b: number): number;
  }

  const perkalian: HItung2 = (a, b) => a * b;
  console.log(`perkalian: ${perkalian(5, 5)}`);

  // ini ga bisa karena ada 2 interface, tapi hanya dipake 1

  // interface HItung2 {
  //     (a:number, b:number):number,
  //     (a:string, b:number):number
  // }

  // const perkalian: HItung2 = (a,b) => a * b

  // buat interface readonly (untuk propretynya)

  interface TesReadonly {
    id: number;
    readonly nama: string;
  }
  //   jadi readonly ini akna menjaga agar datanya tidak bisa diubah ubah
  // dari pertama kali datanya diisikan

  const tesReadonly: TesReadonly = {
    id: 12345,
    nama: "rafa khadafi",
  };
  // ini ga bisa, karena sudah readonly
  //   tesReadonly.nama = 'jamal'

  //   hanya bisa dibaca
  console.log(tesReadonly);
});

console.clear();

// Interface adalah fitur di TypeScript yang digunakan untuk
// mendefinisikan struktur dari sebuah objek, class, atau fungsi.
// Interface memaksa suatu entitas untuk "mematuhi" bentuk tertentu.
// Bisa dianggap seperti "kontrak" yang menyatakan bahwa jika
// suatu objek/class menggunakan interface, maka properti/metodenya
// harus sesuai dengan definisi interface tersebut.

// ===================================================================
// * CARA MENULIS INTERFACE
// ===================================================================
// interface User {
//   id: number;
//   name: string;
//   email?: string; // optional
// }

// let u1: User = {
//   id: 1,
//   name: "Rafa"
// };

// email tidak wajib karena optional

// ===================================================================
// * KENAPA HARUS MENGGUNAKAN INTERFACE?
// ===================================================================
//  Untuk menentukan struktur data yang konsisten
//  Untuk mempermudah kerjasama tim (kontrak antar modul)
//  Untuk validasi dan keamanan tipe saat compile
//  Untuk membantu IDE memberikan auto-complete
//  Untuk inheritance dan pengembangan sistem yang scalable

// ===================================================================
// * MENGGUNAKAN INTERFACE DI DALAM FUNGSI
// ===================================================================
// function printUser(user: User) {
//   console.log(`ID: ${user.id}, Nama: ${user.name}`);
// }

// printUser({ id: 2, name: "Khadafi" });

// ===================================================================
// * INTERFACE DENGAN METHOD/FUNGSI
// ===================================================================
interface Calculator {
  // disini wajib, untuk nanti yang mnegikuti
  // interface ini menggunakan nama functionnya itu tabah dan kurang

  tambah(a: number, b: number): number;
  kurang(a: number, b: number): number;
}

const calc: Calculator = {
  tambah: (x, y) => x + y,
  kurang: (x, y) => x - y,
};

console.log(calc.tambah(5, 3)); // 8

// ===================================================================
// * INTERFACE SEBAGAI KONTRAK UNTUK CLASS
// ===================================================================
interface Kendaraan {
  merk: string;
  nyalakan(): void;
}

class Mobil implements Kendaraan {
  merk: string;
  constructor(merk: string) {
    this.merk = merk;
  }

  nyalakan() {
    console.log(`${this.merk} menyala`);
  }
}

const m1 = new Mobil("Toyota");
m1.nyalakan(); // Toyota menyala

// ===================================================================
// * INTERFACE DENGAN INHERITANCE / EXTENDS
// ===================================================================
interface Person {
  nama: string;
}

interface Karyawan extends Person {
  posisi: string;
}

let k1: Karyawan = {
  nama: "Rafa",
  posisi: "Programmer",
};

// ===================================================================
// * MULTIPLE INHERITANCE
// ===================================================================
interface A {
  a: number;
}
interface B {
  b: number;
}
interface Gabungan extends A, B {}

// let obj: Gabungan = {
//   a: 1,
//   b: 2
// };

// ===================================================================
// * INTERFACE UNTUK ARRAY
// ===================================================================
interface StringArray {
  [index: number]: string;
}

// let arr: StringArray = ["satu", "dua", "tiga"];

// ===================================================================
// * INTERFACE UNTUK OBJECT DENGAN KEY DINAMIS
// ===================================================================
interface Kamus {
  [key: string]: string;
}

let kamus: Kamus = {
  halo: "hello",
  selamat: "good",
};

// ===================================================================
// * PERBEDAAN INTERFACE VS TYPE ALIAS
// ===================================================================
// INTERFACE:
// - Bisa di-*extend* (inheritance)
// - Bisa digunakan sebagai kontrak class
// - Tidak bisa union/intersection langsung

// TYPE ALIAS:
// - Bisa union/intersection (misalnya: type A = string | number)
// - Tidak bisa digunakan sebagai kontrak class
// - Tidak bisa dideklarasikan ulang (interface bisa)

// INTERFACE LEBIH DISARANKAN untuk:
// - Struktur objek yang digunakan berulang
// - Class dan arsitektur OOP

// ===================================================================
// * INTERFACE DENGAN READONLY DAN OPTIONAL
// ===================================================================
interface Buku {
  readonly id: number; // tidak bisa diubah
  judul: string;
  penulis?: string; // boleh ada, boleh tidak
}

let buku1: Buku = {
  id: 101,
  judul: "Belajar TS",
};

// buku1.id = 202; // ❌ error: readonly

// ===================================================================
// * INTERFACE UNTUK FUNCTION TYPE
// ===================================================================
interface Hitung {
  // kalo ini, jadi bisa, untuk tidak membuat objek
  // tapi buat variable function langusng
  (a: number, b: number): number;
}

let perkalian: Hitung = (x, y) => x * y;
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
