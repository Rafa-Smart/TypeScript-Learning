import util from "util";
// INGETT, kalo field itu akna langusng di turunkan di objek instancenya ya
// tapi saja, ga bisa diubah lewat constructor
// KALO GA DIARUH DI CONSTRUCTOR
describe("Getter and Setter", () => {
    class Category {
        // jadi disni kita set nama itu sebagai _
        // ingat bukan karena private, beda cara nulis private di js dan ts
        // kalo nanti si fieldnya ini nama saja
        // maka nant ketika dipangil category.nama
        // maka yang dipanggil adalah si field nama, buakna si getnya
        // INGAT
        // dan juga ketika kita buat nama fielndya itu sama seperti get atau setnya
        // maka akn error
        // jadi kalo kita panggil
        // category.name maka akan dipanggil getternya
        get name() {
            if (this._name) {
                return this._name;
            }
            else {
                return "empty";
            }
        }
        set name(value) {
            if (value !== "") {
                this._name = value;
            }
        }
    }
    it("should support in class", () => {
        const category = new Category();
        console.info(category.name);
        category.name = "bubur";
        console.info(`ini langusng panggil: ${category._name}`);
        category.name = "Food";
        console.info(category.name);
        category.name = ""; // memanggil setter
        // disini kalo "", maka tidak akna berubah
        console.info(category.name);
    });
    it("apakah bisa akses field. (bisa)", () => {
        class Test {
            // nah jadi kita akna lihat, apakah ktia bisa akses
            // field yang ga ada di constructornya
            // jdai tetap bisa yaaa
            // karena field ini akna angusng di instance ke objeknya
            constructor(nama) {
                this.umur = 15;
                this.nama = nama;
            }
        }
        const jamal = new Test("jamal");
        console.log(jamal.nama);
        console.log(`cari umur: ${jamal.umur}`);
        console.log(`prototype jamal: ${util.inspect(Test.prototype, {
            showHidden: true,
            depth: 5,
        })}`);
        console.log(`isi dari jamal: ${util.inspect(jamal, {
            showHidden: true,
            depth: 5,
        })}`);
        //  isi dari jamal: Test { umur: 15, nama: 'jamal' }
    });
});
// CLASS LIFECYCLE DAN METODE SPESIAL YANG DIPANGGIL OTOMATIS DI JAVASCRIPT/TS
// 1. constructor
// - Dipanggil secara otomatis saat class di-instantiate (saat new Class() dijalankan)
// - Berguna untuk inisialisasi nilai properti
// - Hanya bisa ada satu constructor per class
// class User {
//   name;
//   age;
//   constructor(name, age) {
//     this.name = name; // dipanggil saat instansiasi
//     this.age = age;
//   }
// }
// const u1 = new User("Rafa", 20); // constructor langsung dipanggil saat new User()
// // 2. get (getter)
// // - Dipanggil secara otomatis saat properti diakses seperti obj.property
// // - Getter membuat kita bisa menjalankan logika saat akses properti
// // - Getter tidak perlu tanda kurung saat dipanggil
// class Product {
//   constructor(price) {
//     this._price = price;
//   }
//   get price() {
//     // ini bukan properti biasa, tapi method yang dijalankan saat akses obj.price
//     return `$${this._price}`;
//   }
// }
// const p1 = new Product(100);
// console.log(p1.price); // memanggil getter secara otomatis
// // 3. set (setter)
// // - Dipanggil saat properti di-*assign* (obj.property = value)
// // - Digunakan untuk validasi atau transformasi data sebelum disimpan
// // - Harus punya 1 parameter
// class Book {
//   constructor(title) {
//     this._title = title;
//   }
//   get title() {
//     return this._title.toUpperCase();
//   }
//   set title(value) {
//     if (value.length < 3) {
//       console.log("Judul terlalu pendek");
//     } else {
//       this._title = value;
//     }
//   }
// }
// const b1 = new Book("JS");
// b1.title = "TS Handbook"; // setter dipanggil
// console.log(b1.title); // getter dipanggil
// // 4. toString()
// // - Dipanggil otomatis saat object dikonversi ke string (misalnya lewat console.log, alert, atau gabung string)
// // - Berguna untuk membuat representasi string dari object
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   toString() {
//     return `Person: ${this.name}`;
//   }
// }
// const p = new Person("Aldi");
// console.log(String(p)); // Person: Aldi
// console.log(`${p}`); // toString dipanggil otomatis
// // 5. valueOf()
// // - Dipanggil saat object digunakan dalam operasi matematis (+, -, *, /, dll)
// // - Mengembalikan nilai primitif (biasanya number)
// class Counter {
//   constructor(value) {
//     this.value = value;
//   }
//   valueOf() {
//     return this.value;
//   }
// }
// const c1 = new Counter(10);
// console.log(c1 + 5); // valueOf dipanggil, hasil: 15
// // 6. Symbol.toPrimitive
// // - Metode paling tinggi prioritasnya untuk konversi primitif (string, number, default)
// // - Akan dipanggil saat object dikonversi ke primitif (lebih dari toString/valueOf)
// // - Bisa digunakan untuk kontrol penuh atas perilaku konversi
// class SmartNumber {
//   constructor(n) {
//     this.n = n;
//   }
//   [Symbol.toPrimitive](hint) {
//     if (hint === "string") return `Angka: ${this.n}`;
//     if (hint === "number") return this.n;
//     return this.n;
//   }
// }
// const sn = new SmartNumber(42);
// console.log(String(sn)); // Angka: 42
// console.log(sn + 8); // 50
// console.log(`${sn}`); // Angka: 42
// // 7. static method
// // - Tidak dipanggil lewat instance, tapi langsung lewat class-nya
// // - Tidak bisa akses this dari instance, tapi berguna untuk utilitas umum
// class MathHelper {
//   static square(n) {
//     return n * n;
//   }
// }
// console.log(MathHelper.square(5)); // 25
// 8. instance method
// - Metode biasa dalam class, dipanggil melalui object hasil instansiasi
// - Digunakan untuk aksi terhadap instance tersebut
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} speaks`);
//   }
// }
// const cat = new Animal("Kucing");
// cat.speak(); // method dipanggil via instance
// 9. private method/properties (dengan tanda #)
// - Tidak bisa diakses dari luar class
// - Digunakan untuk menyimpan logika internal
// class SecretBox {
//   #code = 1234;
//   #checkCode(input) {
//     return input === this.#code;
//   }
//   unlock(input) {
//     return this.#checkCode(input) ? "Unlocked" : "Wrong code";
//   }
// }
// const box = new SecretBox();
// console.log(box.unlock(1234)); // Unlocked
// // console.log(box.#code); // ERROR: private field
// // console.log(box.#checkCode(1234)); // ERROR
// // 10. new.target
// - Bukan method, tapi properti khusus di dalam constructor
// - Menunjukkan class mana yang dipanggil dengan `new`
// - Digunakan untuk membuat class abstrak (tidak bisa langsung diinstansiasi)
class AbstractShape {
    // ini sebenarnya sama aja kalo kita mau pake 
    // kata kunci abstrak, nanti di materi selanjutnya
    // jadi new.target
    // itu akna dipanggil ketika ada yang mau instance dari si new.target
    // target disini adalah class yang lagi dipake
    // yaitu si AbstractShape
    constructor() {
        if (new.target === AbstractShape) {
            throw new Error("Tidak bisa langsung buat AbstractShape");
        }
    }
}
class Circle extends AbstractShape {
    constructor() {
        super();
    }
}
// const shape = new AbstractShape(); // ERROR
// karena memanggil throw error
const circle = new Circle(); // OK
// 11. inheritance (extends & super)
// - `extends` untuk membuat turunan class
// - `super()` wajib dipanggil di constructor child untuk memanggil constructor parent
// - `super.method()` bisa dipakai untuk akses method dari parent
// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     return `Hello, ${this.name}`;
//   }
// }
// class Child extends Parent {
//   constructor(name) {
//     super(name); // memanggil constructor Parent
//   }
//   greet() {
//     return super.greet() + " (from child)";
//   }
// }
// const anak = new Child("Dio");
// console.log(anak.greet()); // Hello, Dio (from child)
