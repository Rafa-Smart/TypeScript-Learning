"use strict";
describe("testing...", () => {
    // jadi implements interface
    // jadi sebuah class itu harus megikuti contrak dari si interfacenya
    // dan 1 class bisa mengikuti banyak interface sekaligus
    // jadi ini bukanlah pewarisan tapi mengikuti kontrak dari interface tersebut
    it('testing...', () => {
        class User {
            constructor(name, energi) {
                this._energi = 10;
                this._name = name;
                // jadi kalo nanti ada objek isntance
                // dia kalo mau ngisi energi
                // maka kalo disini maka energi dari user ini akna ditambahkan
                // ke field _energi 
                // tapi kalo ga ngisi maka _energi, tidak hanya punya default nilai yaitu 10
                if (typeof energi == 'number') {
                    this._energi += energi;
                }
            }
            sayHello() {
                console.log(`haloo ${this._name}`);
            }
            makan(jumlah) {
                // jadi kalo pake ?
                // maka semua kemungkinanya harus di pake
                if (typeof this._energi === 'number') {
                    return `energi ${this._name} sekarang ${this._energi += jumlah}`;
                }
                else {
                    return 'kamu tidak makan';
                }
            }
        }
        const jamal = new User('jamal');
        console.log(jamal.makan(20)); // energi kamu sekarang 30
        const siti = new User('siti', 10);
        console.log(siti.makan(20)); // energi kamu sekarang 40
        console.log('----------------');
    });
    // Sekarang kita buat class yang mengimplementasikan semua kontrak melalui Auditable dan IUser
    class User {
        constructor(id, username, email) {
            this.id = id;
            this.username = username;
            this.email = email;
            this.createdAt = new Date();
            this.updatedAt = new Date();
        }
        // Tambahkan method tambahan (opsional)
        softDelete() {
            this.deletedAt = new Date();
            this.updatedAt = new Date();
        }
    }
    // Penjelasan:
    // - Class `User` wajib mengimplementasikan semua properti yang didefinisikan oleh interface-interface tersebut
    // - Karena `Auditable` mewarisi `Identifiable` dan `Timestamped`, maka semua propertinya menjadi kewajiban bagi class User
    // - `User` juga wajib memenuhi `IUser`
    const u = new User(1, "john_doe", "john@example.com");
    console.log(u.username); // Output: john_doe
    console.log(u.createdAt); // Tanggal dibuat
    u.softDelete();
    console.log(u.deletedAt); // Tanggal penghapusan lembut
    class Product {
        constructor(id, name) {
            this.id = id;
            this.name = name;
        }
        log() {
            console.log(`Product: ${this.name}`);
        }
        serialize() {
            return JSON.stringify({ id: this.id, name: this.name });
        }
    }
    const p = new Product(10, "Laptop");
    p.log(); // Output: Product: Laptop
    console.log(p.serialize()); // Output: {"id":10,"name":"Laptop"}
    // ===================== CATATAN TAMBAHAN =====================
    // - Interface tidak bisa memiliki implementasi nyata (hanya definisi struktur)
    // - Interface bisa mewarisi banyak interface lain (multiple inheritance), berbeda dari class yang hanya bisa extend satu class
    // - Class bisa implement lebih dari satu interface, dan TypeScript akan memastikan semua kontrak terpenuhi
    // - Jika ada properti/interface yang tidak diimplementasikan dalam class, akan muncul error di TypeScript
    // - Interface cocok untuk dependency injection, testing, dan pemisahan antar lapisan sistem (layered architecture)
    // Kesimpulan:
    // Interface inheritance di dalam class sangat penting untuk membangun sistem berbasis OOP yang scalable dan maintainable.
    // Kita bisa menggabungkan banyak kontrak menjadi satu interface yang kompleks, lalu class bisa mengimplementasikannya
    // dengan kontrol penuh terhadap logic internal.
});
