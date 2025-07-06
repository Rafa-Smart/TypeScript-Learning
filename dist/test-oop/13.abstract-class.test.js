"use strict";
// interface (juga bisa disebut bentuk lain dari abstraction)
describe("testing", () => {
    // jadi abstrak ini tuh meskipun adalah sebuah class
    // tapi dia ga bsia di baut instace objekny
    // jadi hanya boleh di turunkan saja, mirip dengan interface
    // bedanya kalo interface itu seluruhnya waji abstrak / belum ada implementasinya
    // kalo abstract di class, itu ada sebagian abstrak, sebagian lagi sudah di implementasi
    it("test", () => console.log("test"));
    // jdai simplenya abstraksi itu adlah kita mebuat class yang masih belum di buat implementasi detialnya
    // setiap property atau methodnya
    // jaid implementasiya itu di class turunanya
    // jaid sebenarnya itu, abstraksi ini mirip dengan interface
    // bedanya interface itu benar benar seluruhna itu belum di implementasi
    // jadi harus di pake dan di implementasi pada objek turunannya
    // tapi kalo abstraksi itu ada sebagian yang belum di implementasi
    // dan ada juga sebagiam yang sudah di implementasi
    // jadi nanti kalo yang sudah di imlementasi itu kita bisa akses langsung dari class turunnannya
    class Customer {
        // nah kalo property yang tidak abs itu wajib di taruh di constructor
        // tapi kalo yang abs itu ga wajib, karena dia itu akna menjadi kontrak saja
        // untuk class yang extends Customer
        constructor(id) {
            this.id = id;
        }
        hello() {
            console.log(`just hello`);
        }
    }
    class RegulerCustomer extends Customer {
        constructor(nama, id) {
            super(id);
            this.nama = nama;
        }
        sayHello(nama) {
            return `halo ${nama} saya ${this.nama}`;
        }
    }
    const jamal = new RegulerCustomer("jamal", 1);
    //   ini juga bisa, karena masih turunan dari Customer
    //   const jamal: RegulerCustomer = new RegulerCustomer('jamal', 1);
    console.log(jamal.sayHello("budi"));
    //   dan juga bisa akses si method hello
    jamal.hello();
    console.log("---------");
    // Abstraksi (abstraction) dalam OOP adalah proses menyembunyikan detail implementasi dan hanya menampilkan fungsionalitas penting ke pengguna.
    // Tujuan utamanya adalah untuk menyederhanakan kompleksitas program dengan menyembunyikan bagaimana suatu fitur bekerja,
    // dan hanya mengekspos apa yang dilakukan fitur tersebut.
    // Dalam TypeScript, abstraksi dicapai dengan menggunakan:
    // - class abstract
    // - method abstract
    // - interface (juga bisa disebut bentuk lain dari abstraction)
    // ===================== CARA KERJA ABSTRAKSI =====================
    // 1. Kita mendefinisikan class atau method abstrak yang berisi struktur atau kontrak umum
    // 2. Class tersebut tidak bisa diinstansiasi langsung (karena bersifat abstract)
    // 3. Subclass harus mengimplementasikan method-method abstract tersebut
    // 4. Kita bisa berinteraksi dengan objek melalui referensi class abstraknya (abstraction layer), bukan class konkritnya
    // ===================== CONTOH ABSTRAKSI DENGAN ABSTRACT CLASS =====================
    class Kendaraan {
        constructor(merk) {
            this.merk = merk;
        }
        // Method konkrit: punya implementasi
        matikan() {
            console.log(`${this.merk} dimatikan.`);
        }
    }
    // Class turunan wajib mengimplementasikan method abstract "nyalakan"
    class Mobil extends Kendaraan {
        nyalakan() {
            console.log(`${this.merk} menyala dengan kunci.`);
        }
    }
    class Motor extends Kendaraan {
        nyalakan() {
            console.log(`${this.merk} menyala dengan kick starter.`);
        }
    }
    // ===================== PEMAKAIAN ABSTRAKSI =====================
    const kendaraan1 = new Mobil("Toyota");
    const kendaraan2 = new Motor("Honda");
    kendaraan1.nyalakan(); // Toyota menyala dengan kunci.
    kendaraan2.nyalakan(); // Honda menyala dengan kick starter.
    kendaraan1.matikan(); // Toyota dimatikan.
    kendaraan2.matikan(); // Honda dimatikan.
    // PENJELASAN:
    // - Kita berinteraksi dengan objek melalui tipe Kendaraan (bukan Mobil atau Motor secara langsung)
    // - Tapi perilaku nyalakan() tetap berbeda sesuai jenis objek
    // - Detail "bagaimana menyala" disembunyikan — inilah esensi abstraksi
    // ===================== PERBEDAAN ABSTRAKSI DENGAN FITUR OOP LAIN =====================
    // - INHERITANCE: Fokus pada pewarisan struktur dan method
    // - POLYMORPHISM: Fokus pada menjalankan method yang sama pada objek berbeda
    // - ENCAPSULATION: Fokus menyembunyikan data di dalam class
    // - ABSTRAKSI: Fokus menyembunyikan detail implementasi dan hanya menampilkan antarmuka penting
    // ===================== MENGAPA HARUS MENGGUNAKAN ABSTRAKSI =====================
    // 1. Menyederhanakan penggunaan class bagi pengguna/engineer
    // 2. Memisahkan apa yang dilakukan dan bagaimana cara kerjanya
    // 3. Memudahkan perubahan di masa depan karena hanya implementasi yang berubah, struktur tetap sama
    // 4. Membantu menerapkan prinsip SOLID: terutama "Dependency Inversion" dan "Interface Segregation"
    // 5. Menghindari pengulangan logika umum di banyak class
    // ===================== CONTOH ABSTRAKSI DI SISTEM PEMBAYARAN =====================
    class Pembayaran {
        constructor(nominal) {
            this.nominal = nominal;
        }
        info() {
            console.log(`Nominal: Rp${this.nominal}`);
        }
    }
    class PembayaranQRIS extends Pembayaran {
        proses() {
            console.log(`Pembayaran QRIS sejumlah Rp${this.nominal} sedang diproses...`);
        }
    }
    class PembayaranTransfer extends Pembayaran {
        proses() {
            console.log(`Transfer bank sebesar Rp${this.nominal} sedang diproses...`);
        }
    }
    function lakukanPembayaran(p) {
        p.info();
        p.proses();
    }
    lakukanPembayaran(new PembayaranQRIS(50000)); // QRIS
    lakukanPembayaran(new PembayaranTransfer(75000)); // Transfer
    // ===================== KESIMPULAN UTAMA ABSTRAKSI =====================
    // 1. Abstraksi membantu menyederhanakan pemrograman dengan menyembunyikan detail teknis
    // 2. Pengguna hanya tahu cara menggunakan (interface), bukan cara kerja di baliknya
    // 3. Dapat diimplementasikan dengan abstract class dan interface
    // 4. Tidak bisa diinstansiasi langsung, hanya class turunan yang bisa digunakan
    // 5. Menghasilkan kode yang lebih fleksibel, modular, dan mudah dipelihara
    // SINGKATNYA:
    // Abstraction = sembunyikan detail, tampilkan esensi
    // Abstract class = blueprint logika tinggi
    // Concrete class = implementasi nyata dari blueprint itu
});
