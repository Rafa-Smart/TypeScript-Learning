"use strict";
test("test passed", () => {
    console.log("teestt");
});
console.clear();
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
    // kita buat objek baru berdasarkan si type User
    const orang = {
        id: 1, // disini kalo kita beda tipedatanya dengan yang di User(untuk idnya) -> error
        name: "budi"
    };
    // kita buat tuple dengan tipe dta MyTuple
    const tuple1 = [5, 'rafa', true];
    console.log(tuple1);
    console.log(orang);
});
test('union test type', () => {
    const idInt = {
        id: 1 // bisa
    };
    const idString = {
        id: '12345' // bisa
    };
});
test('test 3...', () => {
    // selain ktia bisa apke pake alias untuk
    // struktur tipe data objek
    // kita juga bsia pake langsung tampa menggunakan alias
    const obj1 = {
        id: 1,
        name: 'rafa',
        age: 15,
        sehat: true
    };
    // kalo langusng tanpa alias
    const obj2 = {
        id: 1,
        name: 'jamal',
        age: 15,
        sehat: false
    };
    obj2.name = 'siti'; // bisa
    // obj2.description = 'testingg' -> tidak bisa
    // jadi kalo kasusnya sederhana, kita bisa langusng saja
    // mendeklarasikan tipedatanya langusng
});
console.clear();
const modulo = (x, y) => x % y;
const tambah = (x, y) => x + y;
const kurang = (x, y) => x - y;
const bagi = function (x, y) {
    return x / y;
};
let list = [1, 2, 3, 4];
let idList = [1, "dua", 3, "empat"];
let product = {
    id: 101,
    name: "Keyboard",
    category: {
        id: 1,
        label: "Elektronik",
    },
};
let mhs = { id: 1, nama: "Rafa" };
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
