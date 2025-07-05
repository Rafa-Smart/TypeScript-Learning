describe("testing...", () => {









    it('testing...', () => {
        
    })


  // Apa Itu Interface Inheritance di Class (OOP)?
  // Interface inheritance di class adalah mekanisme di mana sebuah class mengimplementasikan (implements)
  // satu atau lebih interface, dan interface tersebut bisa mewarisi (extends) interface lain.

  // Artinya, sebuah class tidak hanya mengikuti kontrak dari satu interface langsung,
  // tapi juga bisa mengikuti struktur gabungan dari banyak interface melalui inheritance antar interface.

  // Ini adalah bagian dari paradigma OOP (Object-Oriented Programming) di TypeScript,
  // di mana interface digunakan untuk mendefinisikan *kontrak* (bukan implementasi),
  // dan class bertugas *mengimplementasikan* kontrak tersebut secara konkret.

  // Kenapa Harus Menggunakan Interface Inheritance di Class?
  // 1. Pemisahan Kontrak dan Implementasi: interface mendefinisikan aturan, class menjalankan logika nyata.
  // 2. Modularisasi: interface bisa dibagi dan digabung menggunakan inheritance untuk fleksibilitas tinggi.
  // 3. Scalability: memudahkan ekspansi sistem besar.
  // 4. Multiple Contracts: class dapat mengimplementasikan banyak interface sekaligus.
  // 5. Dependency Injection: interface memudahkan penulisan kode loosely coupled.
  // 6. Polymorphism: memungkinkan class berbeda digunakan dengan cara yang seragam (berdasarkan interface-nya).

  // ===================== CONTOH IMPLEMENTASI INTERFACE INHERITANCE DI CLASS =====================

  // Misalnya kita punya interface dasar untuk entitas yang memiliki ID
  interface Identifiable {
    id: number;
  }

  // Interface untuk entitas yang bisa dilacak waktu
  interface Timestamped {
    createdAt: Date;
    updatedAt: Date;
  }

  // Kita buat interface baru yang mewarisi dua interface di atas
  interface Auditable extends Identifiable, Timestamped {
    deletedAt?: Date;
  }

  // Interface untuk entitas pengguna
  interface IUser {
    username: string;
    email: string;
  }

  // Sekarang kita buat class yang mengimplementasikan semua kontrak melalui Auditable dan IUser
  class User implements Auditable, IUser {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;
    username: string;
    email: string;

    constructor(id: number, username: string, email: string) {
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

  // ===================== MULTIPLE INTERFACE IMPLEMENTATION TANPA INHERITANCE =====================

  // Jika tidak ingin interface baru, kita juga bisa langsung implementasikan banyak interface sekaligus
  interface Loggable {
    log(): void;
  }

  interface Serializable {
    serialize(): string;
  }

  class Product implements Identifiable, Loggable, Serializable {
    id: number;
    name: string;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    log(): void {
      console.log(`Product: ${this.name}`);
    }

    serialize(): string {
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
