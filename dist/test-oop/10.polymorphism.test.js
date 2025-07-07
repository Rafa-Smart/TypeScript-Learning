"use strict";
describe("testing", () => {
    class sendiri {
    }
    class Ts {
        constructor(nama) {
            this.nama = nama;
        }
    }
    // console.log(ts(new sendiri('rafa')))
    // ga bisa, karena sendiri bukan turunan dari si Ts
    // jaid maksdunya ketika ktia mendeklarasikan fungsi misal
    function ts(objek) {
        console.log(objek.nama);
    }
    console.log(new Ts('rafa')); // Ts { nama: 'rafa' }
    // maka nanti kita bisa memasukan berbagai objek kedalam parameter ts ini
    // DENGAN SYARAT, bahwa objeknya itu adalah turunan dari class Ts
    // karena objek:Ts 
    // jadi dia akan menerima seluruh objek dnegna tipedata Ts
    // jadi seluruh turunan dari class Ts ini akan mempunyai tipedata Ts
    // jadi ini tuh maksudnya adalah kemampan sebuah objek yang bisa berubah bentuk
    // menjadi bentuk yang lainnya jika masih keturunan dari tipedatanya
    // jadi dia bisa berubah bentuk sesuai dengan keturunanya, dan tidak bisa dnegna yang lain
    it("testing...", () => {
        // ini kalo yang class, bisa juga pake interface, sama aja
        class Orang {
            constructor(nama, umur) {
                this.nama = nama;
                this.umur = umur;
            }
            sayHello(nama) {
                return `Halo ${nama}, Orang Bernama ${this.nama}`;
            }
        }
        // disini kita buat class turunannya
        class Guru extends Orang {
            // dan disini kita override fungsi sayHello
            sayHello(nama) {
                // this.nama ini akan diambil dari si nama di Orang
                // dan kita juga nanti tetap bisa ganti lagi namanya lewat new Dosen("jamal",15)
                return `Halo ${nama}, Guru Bernama ${this.nama}`;
            }
        }
        class Dosen extends Guru {
            // dan disini kita override fungsi sayHello
            sayHello(nama) {
                // this.nama ini akan diambil dari si nama di Orang
                // dan kita juga nanti tetap bisa ganti lagi namanya lewat new Dosen("jamal",15)
                return `Halo ${nama}, Dosen Bernama ${this.nama}`;
            }
        }
        // nah jadi poly ini tuh kita bisa merubah sebuah objek
        // yang asalnya dia itu tipenya adalah si Orang
        // tapi bsia berubah bentuk menjadi tipe lain
        // dengan syarat bahwa tipedatanya ini harus turunan dari si tipedata Orang
        let user1 = new Orang('rafa', 15);
        // user1 = 124
        // itu ga bisa karena 124 itu bukan Bertipe data Orang
        // karena bukan turunan dari Orang
        user1 = new Guru('jamal', 17);
        user1 = new Dosen('siti', 19);
        // jadi sebenernya user1 ini adalah let user1: Orang
        // tapi karena Guru dan Dosen ini adlah turunan dari si Orang
        // jadi tipedata :Orang jadi bisa menampung si Guru dan Dosen juga
        // coba lagi 
        function test(objek) {
            return objek.sayHello('rafa');
        }
        // jadi kita menggunakan tipedata Orang disetiap elemen pada arranya
        const data = [new Orang('rafa', 15), new Guru('jamal', 15), new Dosen('udin', 15)];
        // nah disini
        // kit akan lihat ketika methodnya di override
        for (let i of data) {
            console.log(test(i));
        }
        console.log('--------------------------');
    });
    // Polymorphism berasal dari bahasa Yunani: "poly" (banyak) dan "morph" (bentuk).
    // Dalam konteks OOP, polymorphism adalah kemampuan suatu objek untuk memiliki banyak bentuk,
    // terutama saat objek tersebut diperlakukan sebagai instance dari class induknya tapi menjalankan perilaku spesifik subclass-nya.
    // Tujuan polymorphism adalah agar kita bisa menulis kode yang fleksibel,
    // reusable, dan scalable, karena kita tidak perlu tahu tipe spesifik objek selama mereka mengikuti kontrak yang sama.
    // Dalam TypeScript (seperti OOP pada umumnya), polymorphism tercapai melalui:
    // - Inheritance (pewarisan class)
    // - Method Overriding
    // - Interface implementation
    // ===================== JENIS-JENIS POLYMORPHISM =====================
    // 1. Subtype Polymorphism (Inheritance-based)
    // Objek subclass bisa diperlakukan sebagai objek dari superclass.
    // Ini yang paling umum di TypeScript.
    // 2. Interface-based Polymorphism
    // Objek dari class yang berbeda bisa diperlakukan sebagai tipe interface jika mereka mengimplementasikan interface tersebut.
    // 3. Parametric Polymorphism (Generics - tidak dibahas di sini karena fokusnya ke class OOP)
    // ===================== CONTOH POLYMORPHISM BERBASIS INHERITANCE =====================
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log(`${this.name} makes a sound.`);
        }
    }
    class Dog extends Animal {
        speak() {
            console.log(`${this.name} barks.`);
        }
    }
    class Cat extends Animal {
        speak() {
            console.log(`${this.name} meows.`);
        }
    }
    // Semua class di atas mewarisi Animal, tapi memiliki versi method speak() masing-masing (overriding)
    const animals = [
        new Dog("Buddy"),
        new Cat("Luna"),
        new Animal("Generic"),
    ];
    for (const animal of animals) {
        animal.speak();
    }
    class Circle {
        constructor(radius) {
            this.radius = radius;
        }
        getArea() {
            return Math.PI * this.radius * this.radius;
        }
    }
    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
        getArea() {
            return this.width * this.height;
        }
    }
    function printArea(shape) {
        // nah  jadi disini shape inibukan dari clas lagi tapi sekarna gdari interfacenya
        console.log(`Area: ${shape.getArea()}`);
    }
    const shapes = [new Circle(5), new Rectangle(4, 6)];
    for (const shape of shapes) {
        printArea(shape);
    }
    // Output:
    // Area: 78.53981633974483
    // Area: 24
    // Penjelasan:
    // Semua objek yang mengimplementasikan interface Shape dapat diperlakukan sebagai Shape.
    // Method yang dijalankan tetap mengikuti implementasi class masing-masing.
    // ===================== MENGAPA HARUS MENGGUNAKAN POLYMORPHISM =====================
    // 1. Flexible Architecture: Kita bisa menulis function yang menerima tipe umum (misalnya superclass atau interface),
    //    dan function tersebut tetap bisa bekerja dengan berbagai class turunan atau implementasi yang berbeda.
    // 2. Reusability: Kode yang sudah ditulis tidak perlu diubah saat class baru ditambahkan.
    // 3. Scalability: Polymorphism memungkinkan sistem berkembang tanpa merusak kode lama.
    // 4. Clean Design: Tidak perlu menggunakan banyak if/else atau switch untuk membedakan tipe objek secara manual.
    // 5. Dependency Inversion Principle: Polymorphism mendukung prinsip ini karena kita berinteraksi lewat interface atau superclass, bukan class spesifik.
    // ===================== CONTOH REAL-LIFE PENGGUNAAN POLYMORPHISM =====================
    class PaymentMethod {
    }
    class CreditCard extends PaymentMethod {
        pay(amount) {
            console.log(`Paid ${amount} using Credit Card.`);
        }
    }
    class PayPal extends PaymentMethod {
        pay(amount) {
            console.log(`Paid ${amount} using PayPal.`);
        }
    }
    function processPayment(method, amount) {
        method.pay(amount);
    }
    const payment1 = new CreditCard();
    const payment2 = new PayPal();
    processPayment(payment1, 500); // Paid 500 using Credit Card.
    processPayment(payment2, 300); // Paid 300 using PayPal.
    // Penjelasan:
    // Function processPayment tidak perlu tahu tipe konkrit class. Selama method pay() tersedia, semuanya bekerja dengan baik.
    // Ini sangat powerful dalam sistem pembayaran, sistem user, game engine, dan lainnya.
    // ===================== CATATAN TAMBAHAN =====================
    // - Method overriding sangat penting agar polymorphism bisa terjadi
    // - Jika tidak override method-nya, maka method dari superclass yang akan dipakai
    // - Dengan TypeScript, IDE akan membantu validasi dan suggest polymorphism lewat tipe data dan inheritance
    // - Gunakan interface jika tidak perlu mewarisi perilaku, hanya kontrak struktur
    // ===================== KESIMPULAN =====================
    // Polymorphism adalah kemampuan objek untuk bertingkah laku berbeda meskipun dipanggil melalui referensi yang sama (misal superclass atau interface).
    // Ini adalah bagian penting dari prinsip OOP (bersama inheritance, encapsulation, abstraction).
    // TypeScript mendukung polymorphism melalui inheritance dan interface
    // Polymorphism membuat kode kita lebih fleksibel, reusable, scalable, dan mudah dikelola.
    // Untuk mencapai polymorphism, gunakan method overriding atau implement interface secara konsisten di berbagai class.
});
