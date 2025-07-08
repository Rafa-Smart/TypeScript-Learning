"use strict";
it("testing", () => {
    // dan ketika kita lupa nulis <T> tipenya
    // maka kalo dia sudah ada di consructor, maka nanti si <T> nya akn
    // dibaca lewat si constructornya, jadi sudah otomatis
    // tapi kalo ga dimasukan ke constructor maka tidak akan bisa
    // lihat saja nanti lihat di baris ke 33
    //   (nanti buat lagi yang kalo cuma dimasukan ke fungsi)
    class GenericData {
        constructor(value) {
            this.value = value;
        }
    }
    // nah jadi kita akn menggunakna class ini dengan tipe data number
    // const dataN = new GenericData<number>(123)
    const dataN = new GenericData(123);
    console.log(dataN); // GenericData { value: 123 }
    // sekarnag kita ubah menjadi string
    const dataS = new GenericData("rafa");
    console.log(dataS); // // GenericData { value: 'rafa' }
    // searang kita ubah enajadi boolean
    const dataB = new GenericData(true);
    console.log(dataB);
    // dan nanti ketika sudah kita tentukan ketika menggunaknya
    // kita ga bisa ubah lagi misal, kita pengen ubah yang bolean
    // dataB.value = 'rafa' -> error karena ga bsia
    console.log("-------------");
    class GenericData2 {
        constructor(value) {
            this.value = value;
        }
    }
    const datates1 = new GenericData("rafa");
    const datates2 = new GenericData(123);
    //   tetap bisa karena sudah ada di constructornya
    //   jadi otomatis baca dari si constructornya
    //   disini kita coba kalo ga dimasukan ke constructor apakah bisa
    // class GenericData3<T> {
    //   public value: T;
    //   public id: number;
    //   constructor(id: number) {
    //     this.id = id;
    //   }
    // }
    // const datates3 = new GenericData3()
    // nah ini akan error
    //   kecuali jika kita masukan si T nya ke constructor
    // class GenericData4<T> {
    //   public value: T;
    //   public id: T;
    //   constructor(id: T) {
    //     this.id = id;
    //   }
    // }
    // //ini ga akan error
    // const datates4 = new GenericData4(5);
    // console.log(datates4); // GenericData4 { id: 5 } 
    // APA ITU GENERIC CLASS?
    // Generic Class adalah class di TypeScript yang menggunakan parameter generic
    // agar dapat menangani berbagai jenis tipe data secara fleksibel dan tetap aman secara tipe.
    // Dengan generic class, kita bisa membuat class yang reusable untuk banyak tipe data
    // tanpa menuliskan ulang class untuk tiap tipe.
    // Generic class memungkinkan kita untuk:
    // - Menulis satu class saja yang bisa digunakan untuk berbagai tipe
    // - Menjaga keamanan tipe (type safety) tanpa harus menetapkan tipe spesifik sejak awal
    // CONTOH NON-GENERIC CLASS
    class StringStorage {
        constructor() {
            this.data = [];
        }
        add(item) {
            this.data.push(item);
        }
        getAll() {
            return this.data;
        }
    }
    const stringStore = new StringStorage();
    stringStore.add("hello");
    stringStore.add("world");
    // Tapi jika kita ingin menyimpan number atau boolean, kita harus buat class baru,
    // atau mengubah semua `string` menjadi `any`, yang tidak aman.
    // CONTOH GENERIC CLASS DASAR
    class Storage {
        constructor() {
            this.data = [];
        }
        add(item) {
            this.data.push(item);
        }
        remove(item) {
            this.data = this.data.filter((el) => el !== item);
        }
        getAll() {
            return this.data;
        }
    }
    // Penjelasan:
    // - <T> adalah parameter generic yang mewakili tipe yang ditentukan saat pemakaian class
    // - Kita bisa menggunakan class ini untuk berbagai tipe: string, number, boolean, objek, dsb
    const numberStorage = new Storage();
    numberStorage.add(1);
    numberStorage.add(2);
    console.log(numberStorage.getAll()); // [1, 2]
    const booleanStorage = new Storage();
    booleanStorage.add(true);
    booleanStorage.add(false);
    console.log(booleanStorage.getAll()); // [true, false]
    const stringStorage2 = new Storage();
    stringStorage2.add("apple");
    console.log(stringStorage2.getAll()); // ["apple"]
    const productStorage = new Storage();
    productStorage.add({ id: 1, name: "Laptop" });
    productStorage.add({ id: 2, name: "Keyboard" });
    console.log(productStorage.getAll());
    // Output: [{ id: 1, name: "Laptop" }, { id: 2, name: "Keyboard" }]
    // ==========================================
    // GENERIC CLASS DENGAN MULTIPLE TYPE PARAMETER
    class PairStore {
        constructor() {
            this.pairs = [];
        }
        add(key, value) {
            this.pairs.push([key, value]);
        }
        getAll() {
            return this.pairs;
        }
    }
    const userAges = new PairStore();
    userAges.add("Alice", 30);
    userAges.add("Bob", 25);
    console.log(userAges.getAll()); // [["Alice", 30], ["Bob", 25]]
    class Repository {
        constructor() {
            // jadi pokoknya T ini harus inerface apapu atau type apapun
            // yang mempunyai id:number, contohnya adalah Product
            this.items = [];
        }
        add(item) {
            this.items.push(item);
        }
        findById(id) {
            return this.items.find((item) => item.id === id);
        }
    }
    const repo = new Repository();
    repo.add({ id: 1, name: "TV" }); // bisa meski ada nama: "TV", karena ada si id
    repo.add({ id: 2, name: "Speaker" });
    console.log(repo.findById(1)); // { id: 1, name: "TV" }
    // ==========================================
    // GENERIC CLASS DENGAN DEFAULT TYPE
    class Logger {
        log(value) {
            console.log("Log:", value);
        }
    }
    const defaultLogger = new Logger(); // T default ke string
    defaultLogger.log("default string"); // OK
    const numberLogger = new Logger();
    numberLogger.log(123); // OK
    // ==========================================
    // GENERIC DI CLASS TURUNAN (INHERITANCE)
    class Entity {
        constructor(id) {
            this.id = id;
        }
    }
    class UserEntity extends Entity {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
    }
    const userEntity = new UserEntity(101, "Rafa");
    console.log(userEntity.id); // 101
    console.log(userEntity.name); // Rafa
    //   const userEntity2 = new UserEntity('ra','ra') // ga bisa
    // ==========================================
    // CATATAN PENTING:
    // - Generic Class hanya menentukan struktur — saat digunakan, kita bisa menentukan tipe spesifik.
    // - Saat Tipe Generic digunakan, TypeScript menjaga seluruh penggunaan sesuai dengan tipe tersebut.
    // - Tidak hanya class, fungsi di dalam class juga bisa pakai generic sendiri (berbeda dari class-nya).
    class Utility {
        identity(value) {
            return value;
        }
        wrap(value) {
            return [value];
        }
    }
    const util = new Utility();
    console.log(util.wrap(5)); // [5]
    console.log(util.identity("halo")); // "halo"
    // ==========================================
    // KAPAN TIDAK PERLU MENGGUNAKAN GENERIC CLASS?
    // - Jika class tersebut hanya akan digunakan untuk satu tipe spesifik
    // - Jika fleksibilitasnya tidak dibutuhkan
    // - Jika kita bisa menggunakan interface atau type alias yang lebih sederhana
    // ==========================================
    // KESIMPULAN:
    // - Generic Class adalah class yang menggunakan parameter tipe fleksibel
    // - Memungkinkan class bekerja dengan banyak jenis data tanpa mengulang kode
    // - Memberikan keamanan tipe, autocomplete, dan fleksibilitas
    // - Bisa digunakan dengan constraint, default type, inheritance, dan multiple parameter
});
