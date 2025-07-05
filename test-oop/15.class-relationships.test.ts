describe("test", () => {
  it("test", () => console.log("test"));

  // Dalam Object-Oriented Programming (OOP), class tidak berdiri sendiri.
  // Mereka sering berinteraksi satu sama lain dalam berbagai bentuk hubungan.
  // Hubungan antar class ini disebut sebagai "class relationships".

  // Tujuan dari class relationships adalah:
  // - Menggambarkan bagaimana objek berinteraksi
  // - Menyusun struktur sistem yang modular dan fleksibel
  // - Menunjukkan siapa bergantung pada siapa, siapa memiliki siapa, dan siapa merupakan siapa

  // Ada 5 hubungan utama antar class:
  // 1. Association
  // 2. Aggregation
  // 3. Composition
  // 4. Inheritance
  // 5. Dependency

  // ===================== 1. ASSOCIATION =====================
  // Association adalah hubungan umum antara dua class, di mana satu objek mengenal objek lain.
  // Hubungan ini longgar, dan tidak menunjukkan kepemilikan atau ketergantungan kuat.

  class Dosen {
    nama: string;

    constructor(nama: string) {
      this.nama = nama;
    }

    mengajar(matkul: MataKuliah) {
      console.log(`${this.nama} mengajar mata kuliah ${matkul.nama}`);
    }
  }

  class MataKuliah {
    nama: string;

    constructor(nama: string) {
      this.nama = nama;
    }
  }

  const dosen = new Dosen("Pak Budi");
  const mk = new MataKuliah("Algoritma");

  dosen.mengajar(mk); // Pak Budi mengajar mata kuliah Algoritma

  // Dosen tidak memiliki MataKuliah, hanya berasosiasi — ini adalah Association.

  // ===================== 2. AGGREGATION =====================
  // Aggregation adalah hubungan "HAS-A" di mana satu objek memiliki koleksi objek lain,
  // tetapi objek yang dimiliki bisa hidup mandiri di luar induknya.
  // Mirip Association, tapi menunjukkan kepemilikan yang lebih kuat.

  class Tim {
    nama: string;
    anggota: Mahasiswa[];

    constructor(nama: string, anggota: Mahasiswa[]) {
      this.nama = nama;
      this.anggota = anggota;
    }

    tampilkanAnggota() {
      console.log(`Anggota tim ${this.nama}:`);
      this.anggota.forEach((m) => console.log(`- ${m.nama}`));
    }
  }

  class Mahasiswa {
    nama: string;

    constructor(nama: string) {
      this.nama = nama;
    }
  }

  const m1 = new Mahasiswa("Andi");
  const m2 = new Mahasiswa("Rina");
  const timA = new Tim("Tim A", [m1, m2]);

  timA.tampilkanAnggota();
  // Anggota tim Tim A:
  // - Andi
  // - Rina

  // Mahasiswa bisa eksis walaupun tidak menjadi bagian dari Tim => ini adalah Aggregation.

  // ===================== 3. COMPOSITION =====================
  // Composition juga "HAS-A", tapi jauh lebih kuat dari Aggregation.
  // Objek yang dimiliki tidak bisa eksis tanpa objek induknya.

  class Buku {
    judul: string;
    isi: Halaman[];

    constructor(judul: string, isiData: string[]) {
      this.judul = judul;
      this.isi = isiData.map((teks) => new Halaman(teks));
    }

    baca() {
      console.log(`Membaca buku: ${this.judul}`);
      this.isi.forEach((hal, i) =>
        console.log(`Halaman ${i + 1}: ${hal.konten}`)
      );
    }
  }

  class Halaman {
    konten: string;

    constructor(konten: string) {
      this.konten = konten;
    }
  }

  const buku = new Buku("Belajar TypeScript", ["Intro", "Dasar", "Lanjut"]);
  buku.baca();

  // Halaman tidak bisa eksis tanpa Buku yang membuatnya => ini adalah Composition.

  // ===================== 4. INHERITANCE =====================
  // Inheritance adalah hubungan "IS-A" — satu class mewarisi struktur dan perilaku dari class lain.

  class Kendaraan {
    merk: string;

    constructor(merk: string) {
      this.merk = merk;
    }

    jalan() {
      console.log(`${this.merk} sedang berjalan`);
    }
  }

  class Mobil extends Kendaraan {
    jumlahPintu: number;

    constructor(merk: string, jumlahPintu: number) {
      super(merk);
      this.jumlahPintu = jumlahPintu;
    }

    info() {
      console.log(`Mobil ${this.merk} punya ${this.jumlahPintu} pintu`);
    }
  }

  const mbl = new Mobil("Toyota", 4);
  mbl.jalan(); // Toyota sedang berjalan
  mbl.info(); // Mobil Toyota punya 4 pintu

  // Mobil IS-A Kendaraan => ini adalah Inheritance.

  // ===================== 5. DEPENDENCY =====================
  // Dependency adalah hubungan di mana satu class menggunakan class lain sebagai parameter dalam method-nya.
  // Hubungan ini sangat lemah, hanya saat dibutuhkan saja.

  class Printer {
    print(dokumen: Dokumen) {
      console.log(`Mencetak dokumen: ${dokumen.judul}`);
    }
  }

  class Dokumen {
    judul: string;

    constructor(judul: string) {
      this.judul = judul;
    }
  }

  const printer = new Printer();
  printer.print(new Dokumen("Laporan Semester"));

  // Printer tidak memiliki atau menyimpan referensi Dokumen — hanya memakainya sesaat => ini Dependency.

  // ===================== KENAPA HARUS MENGGUNAKAN CLASS RELATIONSHIPS? =====================
  // 1. Membangun struktur program yang rapi dan mudah dipahami
  // 2. Mendukung prinsip-prinsip OOP seperti abstraction, encapsulation, polymorphism
  // 3. Menghindari duplikasi kode dengan inheritance
  // 4. Membagi tanggung jawab antar objek dengan jelas
  // 5. Mempermudah testing, pemeliharaan, dan pengembangan program

  // ===================== RINGKASAN HUBUNGAN ANTAR CLASS =====================
  // - Association   : class mengenal class lain
  // - Aggregation  : class memiliki class lain, tapi yang dimiliki bisa hidup mandiri
  // - Composition  : class memiliki class lain yang tidak bisa hidup sendiri
  // - Inheritance  : class mewarisi dari class lain (IS-A)
  // - Dependency   : class memakai class lain secara temporer (dalam method)

  // ===================== KESIMPULAN =====================
  // Class relationships adalah fondasi dari desain sistem berorientasi objek.
  // Mereka menggambarkan bagaimana objek saling terhubung, berinteraksi, dan bergantung satu sama lain.
  // Dengan memahami hubungan ini, kita bisa merancang sistem yang bersih, fleksibel, dan mudah dikembangkan.
});
