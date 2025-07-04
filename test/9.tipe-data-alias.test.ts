test("test passed", () => {
    console.log("teestt")
})

console.clear()


// jadi kita bisa menentukan tipe data yang kita buat sendiri
// menggunakan type 
// dan bisa duninakan untuk
//    - objek
//    - union
//    - array
//    - function
//    - nested types
//    - dll

// Daripada menulis tipe kompleks berulang kali seperti:
//   { id: number, name: string }
// Kita bisa membuat alias:
//   type User = { id: number, name: string };

// jadi kita ini hanya buat alias sja


// type User = { //err karena ada nama User juga di file lain yg berada di global scope
//     id:number,
//     name:string
// }


it('testing...', () => {
    type User = {
        id:number,
        name:string
    }

    // kita buat objek baru berdasarkan si type User
    const orang: User = {
        id:1, // disini kalo kita beda tipedatanya dengan yang di User(untuk idnya) -> error
        name:"budi"
    }

    type MyTuple = [number, string, boolean] // array dengan tipe data yang sudah kita tentukan


    // kita buat tuple dengan tipe dta MyTuple

    const tuple1: MyTuple = [5, 'rafa', true]
    console.log(tuple1)
    console.log(orang)
})


test('union test type', () => {
    type Id = {
        id:number | string
    }

    const idInt: Id = {
        id: 1 // bisa
    }

    const idString: Id = {
        id:'12345' // bisa
    }
})


test('test 3...',() => {


    // selain ktia bisa apke pake alias untuk
    // struktur tipe data objek
    // kita juga bsia pake langsung tampa menggunakan alias

    // ini kalo pake alias
    type Objek = {
        id:number,
        name:string,
        age:number,
        sehat:boolean
    }

    const obj1: Objek = {
        id:1,
        name:'rafa',
        age:15,
        sehat:true
    }

    // kalo langusng tanpa alias
    const obj2: {
        id:number,
        name:string,
        age:number,
        sehat:boolean
    } = {
        id:1,
        name:'jamal',
        age:15,
        sehat:false

    }

    obj2.name = 'siti'// bisa
    // obj2.description = 'testingg' -> tidak bisa

    // jadi kalo kasusnya sederhana, kita bisa langusng saja
    // mendeklarasikan tipedatanya langusng



})


console.clear()

// ===================================================================
// * PENJELASAN SANGAT LENGKAP TENTANG TYPE ALIAS DI TYPESCRIPT
// ===================================================================

// ===================================================================
// * APA ITU TYPE ALIAS?
// ===================================================================
// Type Alias adalah fitur di TypeScript yang memungkinkan kita
// memberi nama (alias) untuk tipe data tertentu.
// Ini membuat tipe yang kompleks jadi lebih ringkas, terbaca, dan mudah digunakan ulang.

// Contoh:
// Daripada menulis tipe kompleks berulang kali seperti:
//   { id: number, name: string }
// Kita bisa membuat alias:
//   type User = { id: number, name: string };

// ===================================================================
// * CONTOH SEDERHANA TYPE ALIAS
// ===================================================================
// type User = {
//   id: number;
//   name: string;
// };

// let user1: User = { id: 1, name: "Rafa" };
// let user2: User = { id: 2, name: "Dafi" };

// ===================================================================
// * KENAPA MENGGUNAKAN TYPE ALIAS?
// ===================================================================
// ✅ Membuat kode lebih bersih dan konsisten
// ✅ Menghindari penulisan ulang tipe kompleks
// ✅ Mudah dalam refactoring dan pemeliharaan
// ✅ Menyederhanakan tipe union atau intersection yang kompleks
// ✅ Bisa digunakan untuk mendefinisikan:
//    - objek
//    - union
//    - array
//    - function
//    - nested types
//    - dll

// ===================================================================
// * CONTOH TYPE ALIAS UNTUK UNION
// ===================================================================
// type ID = string | number;

// let id1: ID = 123;
// let id2: ID = "abc";

// ===================================================================
// * TYPE ALIAS UNTUK FUNCTION TYPE
// ===================================================================
type Kalkulasi = (a: number, b: number) => number;

const tambah: Kalkulasi = (x, y) => x + y;
const kurang: Kalkulasi = (x, y) => x - y;

// ===================================================================
// * TYPE ALIAS UNTUK ARRAY
// ===================================================================
type AngkaArray = number[];
let list: AngkaArray = [1, 2, 3, 4];

// Bisa juga array of union
type IDList = (string | number)[];
let idList: IDList = [1, "dua", 3, "empat"];

// ===================================================================
// * TYPE ALIAS UNTUK NESTED OBJECT
// ===================================================================
type Product = {
  id: number;
  name: string;
  category: {
    id: number;
    label: string;
  };
};

let product: Product = {
  id: 101,
  name: "Keyboard",
  category: {
    id: 1,
    label: "Elektronik",
  },
};

// ===================================================================
// * TYPE ALIAS DENGAN OPTIONAL DAN READONLY
// ===================================================================
type Mahasiswa = {
  readonly id: number;       // tidak bisa diubah
  nama: string;
  umur?: number;             // optional
};

let mhs: Mahasiswa = { id: 1, nama: "Rafa" };
// mhs.id = 10; // ❌ error: readonly

// ===================================================================
// * PERBEDAAN TYPE ALIAS VS INTERFACE
// ===================================================================
// interface dan type alias mirip, tetapi ada beberapa perbedaan kecil.
// type lebih fleksibel untuk:
// - union
// - function
// - primitives
// interface lebih cocok untuk object-oriented (inheritance)

// Contoh menggunakan interface (alternatif dari type alias):
interface Pegawai {
  id: number;
  nama: string;
}

// Sama seperti:
type PegawaiAlias = {
  id: number;
  nama: string;
};

// ===================================================================
// * KAPAN GUNAKAN TYPE ALIAS?
// ===================================================================
// Gunakan `type` saat:
// - Membuat union, intersection, atau tipe primitif
// - Mendefinisikan tipe fungsi
// - Tipe kompleks yang tidak memerlukan inheritance

// Gunakan `interface` saat:
// - Fokus pada struktur objek
// - Perlu extend/inherit objek lain

// ===================================================================
// * KEUNTUNGAN MENGGUNAKAN TYPE ALIAS
// ===================================================================
// ✅ Kode lebih bersih dan bisa digunakan ulang
// ✅ Mudah mengelola tipe kompleks
// ✅ Meningkatkan keterbacaan kode
// ✅ Membantu refactoring secara global

// ===================================================================
// * KEKURANGAN TYPE ALIAS
// ===================================================================
// ❌ Tidak bisa di-extend setelah didefinisikan, berbeda dengan interface
// ❌ Tidak cocok jika ingin pewarisan struktur objek secara dinamis

// ===================================================================
// * RANGKUMAN
// ===================================================================
// - Type alias adalah fitur untuk memberi nama pada tipe data
// - Ditulis dengan `type Nama = ...`
// - Cocok untuk object, union, function, array, nested, dll
// - Lebih fleksibel daripada interface dalam beberapa kasus
// - Membantu membuat kode lebih rapi, reusable, dan maintainable



