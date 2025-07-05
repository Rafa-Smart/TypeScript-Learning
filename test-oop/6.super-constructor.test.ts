describe("testing...", () => {
  it("testing", () => {
    // jadi super ini kayak this tapi mengkases class parentya

    // dan jika kita ingin emngambil property yang sudah ada di parent classnya
    // maka kit abisa pake super(namaPropertyParent)

    // dan kita juga ga perlu tulis property yang dari parent class ini di constructor
    // child classnya, karena sudah di buatkan / dilakukan di conctrutor di parent classnya
    // kecuali jika diparent classnya sudah ada property nama defaultnya 'rafa'
    // nah kamu inign menggunakan nama di child classnya, tapi inign mengganti nama defaultnya 'rafa' menjadi 'rafael' di child classnya

    // caranya adalah, tetap memanggil super(nama) di child classnya
    // tapi ktia tambahka juga nama ini di constructor child classnya
    // agar bsia diubah
    // contoh

    // dan kalo ktia mau make nilai default dari parent classnya itu ga bsia ya, jadi
    // apapun nilai yang ada di constructor classnya itu wajib ada di super di childnya
    // dan otomatis harus ad juga di constructor childnya
    // otomatis akan diganti (karena harus diisi)

    // bisa lihat di test 2

    // kalo di js bisa pake nilai default dari si parent classnya
    // lihat di folder playgroud 2

    class TestParent {
      nama: string = "rafa";

      constructor(nama: string) {
        this.nama = nama;
      }
    }

    class TestChild extends TestParent {
      umur: number;

      constructor(umur: number, nama: string) {
        super(nama); // kalo ga pake ini bakal error
        // super() ini juga error, karena wajib menuliskan seluruh property
        // yang ad di constructor parent classnya
        this.umur = umur;
      }
    }

    const tes: TestChild = new TestChild(4, "tes");
    console.log(tes);

    console.log("--------------");
  });

  it("test pake property default dari parent class", () => {
    class TestParent {
      namaDefault: string = "jamal";
        // nah jadi kalo mau kita akses, itu kita ga bisa pake constructor

        id:number;
        constructor(id:number){
            this.id = id;
        }
    }

    class TestChild extends TestParent {
      umur: number;
      namaDefaultChild: string = "";
        
      constructor(umur: number,id:number) {
        super(id)
        this.umur = umur;
        // nahhhhh ini bsaaa


        // jadi sebearnya kita itu akses si fieldnya saja
        // pukan property yang ada di constructor parentnya

        // dan juga sudah ada defalutnya yaitu "" / string kosong
        // jadi kalo ga diisi maka tetep wajib di masukan ke constructornya

        this.namaDefaultChild = this.namaDefault
        console.log(`tetap bisa akses si property default di parentnya ${this.namaDefault}`)
        // tetap bisa akses si property default di parentnya jamal  
      }

    }

    const tes: TestChild = new TestChild(4,15);
    console.log(tes);

    console.log("--------------");
  });

  // Apa Itu super constructor?
  // Dalam pemrograman berorientasi objek (OOP), `super` merujuk pada class induk (superclass).
  // `super constructor` adalah pemanggilan constructor milik class induk dari dalam constructor class turunan (subclass).
  // Di TypeScript (juga JavaScript modern), pemanggilan ini dilakukan dengan menggunakan keyword `super()`.

  // Tujuan dari super constructor:
  // Saat kita membuat subclass dan mendefinisikan constructor-nya sendiri, kita perlu memanggil constructor class induk agar:
  // - Properti dan logic inisialisasi dari class induk tetap dijalankan
  // - Pewarisan struktur data dan logika tetap utuh
  // - TypeScript tidak error (wajib memanggil super() sebelum akses `this`)

  // Kenapa Harus Menggunakan super constructor?
  // 1. Inheritance: Subclass bisa mewarisi dan memperluas class induk dengan logika tambahan
  // 2. DRY Principle: Menghindari pengulangan inisialisasi yang sudah dilakukan class induk
  // 3. Type Safety: TypeScript memaksa penggunaan `super()` jika constructor ada di subclass
  // 4. Struktur Modular: Logika umum ditempatkan di superclass, subclass tinggal memanggilnya

  // ===================== CONTOH PENGGUNAAN super CONSTRUCTOR =====================

  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
      console.log(`Person constructor called`);
    }

    introduce() {
      console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
    }
  }

  // Kita buat class turunan Student dari Person
  class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
      // Di sini kita wajib memanggil constructor class induk dengan super()
      // Jika tidak, maka akan error: "Constructors for derived classes must contain a 'super' call."
      super(name, age); // memanggil constructor Person dan meneruskan name, age
      this.grade = grade;
      console.log(`Student constructor called`);
    }

    introduce() {
      // Kita bisa override method dari class induk
      super.introduce(); // memanggil method introduce dari class induk
      console.log(`I'm in grade ${this.grade}.`);
    }
  }

  const student = new Student("Rafa", 17, "11A");
  // Output:
  // Person constructor called
  // Student constructor called

  student.introduce();
  // Output:
  // Hi, I'm Rafa, 17 years old.
  // I'm in grade 11A.

  // ===================== CONTOH DENGAN EXTEND MULTI-LEVEL (TURUNAN BERLAPIS) =====================

  class SchoolMember {
    id: number;

    constructor(id: number) {
      this.id = id;
      console.log("SchoolMember constructor called");
    }
  }

  class Teacher extends SchoolMember {
    subject: string;

    constructor(id: number, subject: string) {
      super(id); // panggil constructor dari SchoolMember
      this.subject = subject;
      console.log("Teacher constructor called");
    }
  }

  class SeniorTeacher extends Teacher {
    level: number;

    constructor(id: number, subject: string, level: number) {
      super(id, subject); // panggil constructor dari Teacher (yang juga sudah memanggil SchoolMember)
      this.level = level;
      console.log("SeniorTeacher constructor called");
    }
  }

  const guru = new SeniorTeacher(1001, "Math", 3);
  // Output:
  // SchoolMember constructor called
  // Teacher constructor called
  // SeniorTeacher constructor called

  // ===================== BEHIND THE SCENE / CARA KERJANYA =====================
  // - Saat kita membuat subclass dan menambahkan constructor, kita harus memanggil constructor class induk terlebih dahulu.
  // - TypeScript (dan JavaScript ES6 ke atas) akan memastikan semua properti dan logic inisialisasi di superclass tetap dijalankan.
  // - Tanpa pemanggilan super(), properti `this` tidak bisa diakses, dan akan menyebabkan runtime error.
  // - `super()` dapat menerima parameter agar subclass bisa meneruskan nilai yang dibutuhkan superclass

  // ===================== CATATAN TAMBAHAN =====================
  // - Kita bisa menggunakan `super.methodName()` di dalam method subclass untuk memanggil method induk
  // - Jika subclass tidak memiliki constructor sendiri, maka secara otomatis constructor dari superclass digunakan
  // - Pemanggilan super wajib berada di baris pertama dalam constructor subclass
  // - `super()` hanya bisa digunakan dalam class yang menggunakan keyword `extends`

  // ===================== KESIMPULAN =====================
  // `super constructor` adalah mekanisme vital dalam pewarisan class (OOP) di TypeScript
  // Ia menjamin bahwa constructor class induk tetap dijalankan saat instance subclass dibuat
  // Penggunaan `super()` wajib jika subclass memiliki constructor sendiri
  // Selain constructor, `super` juga bisa dipakai untuk memanggil method milik class induk secara eksplisit
  // Ini mendukung prinsip OOP seperti inheritance, code reuse, dan overriding dengan kontrol yang lebih rapi
});
