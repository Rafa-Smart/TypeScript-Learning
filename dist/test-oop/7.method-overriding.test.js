"use strict";
describe("testing", () => {
    it('testing', () => {
        console.log('test');
    });
    // jdai maksudnya itu kita akses method yang ada di parent classnya
    // tapi ktia manipulasi di childnya, dengan syarat nama dan param nya harus sama
    // dan kalo mau akses method asli dari si parentnya bisa pake
    // super.namaMethod parenntya
    // karena aksesnya itu kita cari dulu method dari objek, lalu class nya 
    // sendiri lalu cari lagi method di
    // parentnya
    // kalo ga ada jadi undefined
    // jadi method yang ada di perentnya itu akan ketutupan dengan method yang sama pada
    // childnya
    // kalo mau akses pake super.namaMethodParentnya
    // Apa Itu Method Overriding?
    // Method overriding adalah proses di mana sebuah class turunan (subclass) menyediakan implementasi
    // baru dari method yang sudah didefinisikan oleh class induknya (superclass).
    // Tujuannya adalah untuk mengubah atau menyesuaikan perilaku method tersebut sesuai kebutuhan class turunan.
    // Dalam TypeScript, method overriding dilakukan dengan membuat method di subclass
    // dengan nama dan parameter yang sama seperti yang ada di superclass.
    // Dengan overriding, kita dapat mempertahankan struktur antar class tapi tetap memberikan perilaku yang berbeda.
    // Kenapa Harus Menggunakan Method Overriding?
    // 1. Polymorphism: memungkinkan objek subclass digunakan seperti superclass, tapi dengan perilaku uniknya sendiri.
    // 2. Custom Behavior: subclass dapat mengubah perilaku bawaan dari superclass sesuai dengan kebutuhan spesifik.
    // 3. Kode Lebih Fleksibel: superclass menyediakan default behavior, subclass mengatur detailnya sendiri.
    // 4. Reusability: logic umum ditaruh di superclass, logic khusus di subclass.
    // Bagaimana Cara Kerjanya?
    // - Subclass menuliskan ulang method yang sudah didefinisikan oleh superclass
    // - Method harus memiliki nama dan parameter yang sama
    // - Jika ingin memanggil method asli dari superclass, kita bisa gunakan `super.methodName()`
    // - Overriding tidak membutuhkan keyword khusus, cukup dengan definisi ulang yang sesuai
    // ===================== CONTOH METHOD OVERRIDING =====================
    class Animal {
        constructor(name) {
            this.name = name;
        }
        speak() {
            console.log(`${this.name} makes a sound.`);
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
        // Method overriding: kita override method speak milik superclass (Animal)
        speak() {
            console.log(`${this.name} barks.`);
        }
    }
    class Cat extends Animal {
        constructor(name) {
            super(name);
        }
        // Overriding juga dilakukan di sini
        speak() {
            console.log(`${this.name} meows.`);
        }
    }
    // Sekarang kita buat instansi dan lihat hasil overriding-nya
    const a = new Animal("GenericAnimal");
    a.speak(); // Output: GenericAnimal makes a sound.
    const d = new Dog("Buddy");
    d.speak(); // Output: Buddy barks.
    const c = new Cat("Kitty");
    c.speak(); // Output: Kitty meows.
    // ===================== MEMANGGIL METHOD DARI SUPERCLASS DALAM OVERRIDING =====================
    class Bird extends Animal {
        constructor(name) {
            super(name);
        }
        speak() {
            // Memanggil method dari superclass
            super.speak(); // Output dari Animal: name makes a sound.
            // Lalu tambahkan logic tambahan
            console.log(`${this.name} chirps.`);
        }
    }
    const b = new Bird("Tweety");
    b.speak();
    // Output:
    // Tweety makes a sound.
    // Tweety chirps.
    // ===================== KONSEP POLYMORPHISM DENGAN METHOD OVERRIDING =====================
    // Polymorphism artinya objek bisa diakses melalui referensi superclass, tapi menjalankan method dari subclass
    // Misal: kita buat array berisi semua animal
    const animals = [
        new Dog("Max"),
        new Cat("Luna"),
        new Bird("Chirpy"),
    ];
    for (const animal of animals) {
        animal.speak(); // Walaupun tipenya Animal, method yang dijalankan sesuai class aslinya (Dog, Cat, Bird)
    }
    // Output:
    // Max barks.
    // Luna meows.
    // Chirpy makes a sound.
    // Chirpy chirps.
    // ===================== ATURAN METHOD OVERRIDING =====================
    // - Nama method harus sama dengan method di superclass
    // - Jumlah dan jenis parameter harus sama (atau kompatibel secara tipe)
    // - Tipe return value harus sama atau subtype (covariant return types)
    // - Tidak boleh mengganti visibility (jangan jadikan private jika aslinya public)
    // - Gunakan `super.methodName()` jika ingin menambahkan logika di atas perilaku default
    // ===================== ABSTRACT CLASS DAN METHOD OVERRIDING =====================
    class Shape {
        describe() {
            console.log("This is a shape.");
        }
    }
    class Rectangle extends Shape {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }
        // Wajib override method abstract
        getArea() {
            return this.width * this.height;
        }
        describe() {
            super.describe();
            console.log(`This is a rectangle with area ${this.getArea()}`);
        }
    }
    const r = new Rectangle(4, 5);
    r.describe();
    // Output:
    // This is a shape.
    // This is a rectangle with area 20
    // ===================== KESIMPULAN =====================
    // Method overriding adalah fitur penting dalam OOP yang memungkinkan subclass untuk mengubah perilaku method warisan
    // Ini memungkinkan reuse struktur induk tapi dengan perilaku yang fleksibel di setiap subclass
    // TypeScript secara ketat mengecek nama, parameter, dan tipe saat overriding untuk menjaga konsistensi
    // Overriding memungkinkan polymorphism dan arsitektur OOP yang scalable dan maintainable
    // Gunakan super.method() untuk tetap bisa manfaatkan logika dari class induk saat meng-overridenya
});
