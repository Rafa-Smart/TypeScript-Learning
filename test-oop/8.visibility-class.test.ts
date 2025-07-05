describe("test", () => {
  // jadi di method dan di property
  // defaultnya itu adalah public
  // misal

  // nama:string;
  // sama kayak
  // public nama:string;

  // dan private adalah bisa hanya bisa diakses dari clas itu saja
  // dan protected hanya bsia diakses oelh class itu dan clas turunannya

  class Counter {
    private counter1: number = 0;
    protected counter2: number = 0;

    public increment(): void {
      this.counter1++;
    }

    public getCounter(): number {
      return this.counter1;
    }
  }

  //   jdai kalo kita pake Counter saja, maka hanya bisa nambah conter sebanyak 1
  //   kalo doublecounter bisa 2

  class DoubleCounter extends Counter {
    public getCounter2(): number {
      return this.counter2;
    }
    public increment2(): void {
      this.counter2 += 2;
    }
  }

  it("should support private", () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.increment();
    console.info(`counter 1: ${counter.getCounter()}`);
  });

  it("should support protected", () => {
    const counter = new DoubleCounter();
    counter.increment2();
    counter.increment2();
    counter.increment2();
    console.info(`counter 2: ${counter.getCounter2()}`);
  });

  // Apa Itu Visibility?
  // Visibility (juga disebut access modifier) dalam OOP adalah konsep untuk mengatur
  // tingkat aksesibilitas terhadap properti atau method dari sebuah class, baik dari luar class,
  // dari subclass (class turunan), atau dari dalam class itu sendiri.

  // Tujuannya adalah untuk melindungi data dan menjaga enkapsulasi,
  // agar hanya bagian tertentu dari kode yang bisa mengakses bagian sensitif dari class.

  // Di TypeScript, ada tiga modifier visibility utama:
  // - public
  // - private
  // - protected

  // ===================== 1. PUBLIC =====================
  // public adalah modifier default jika tidak ditulis apa pun.
  // Akses public berarti properti atau method dapat diakses dari mana saja:
  // - dari dalam class itu sendiri
  // - dari luar class (instansi/objek)
  // - dari subclass (class turunan)

  class PublicExample {
    public name: string;

    constructor(name: string) {
      this.name = name;
    }

    public sayHello(): void {
      console.log(`Hello, ${this.name}`);
    }
  }

  const pub = new PublicExample("Rafa");
  console.log(pub.name); // boleh diakses (public)
  pub.sayHello(); // Hello, Rafa

  // ===================== 2. PRIVATE =====================
  // private berarti hanya bisa diakses dari dalam class itu sendiri.
  // Tidak bisa diakses dari luar class maupun dari subclass.

  class PrivateExample {
    private secret: string;

    constructor(secret: string) {
      this.secret = secret;
    }

    private revealSecret(): void {
      console.log(`Secret is: ${this.secret}`);
    }

    public expose(): void {
      this.revealSecret(); // bisa, karena dipanggil dari dalam class
    }
  }

  const priv = new PrivateExample("TOP_SECRET");
  // console.log(priv.secret); // ❌ Error: Property 'secret' is private
  // priv.revealSecret();      // ❌ Error: Method 'revealSecret' is private
  priv.expose(); // ✅ Boleh, karena method expose() bersifat public

  // ===================== 3. PROTECTED =====================
  // protected mirip dengan private, tapi masih bisa diakses dari subclass (class turunan).
  // Tidak bisa diakses dari luar objek/class, tapi bisa digunakan oleh subclass.

  class ProtectedExample {
    protected code: string;

    constructor(code: string) {
      this.code = code;
    }

    protected showCode(): void {
      console.log(`Code is: ${this.code}`);
    }
  }

  class SubProtected extends ProtectedExample {
    constructor(code: string) {
      super(code);
    }

    public accessProtected(): void {
      console.log("Accessing protected member from subclass:");
      console.log(this.code); // ✅ Bisa diakses karena subclass
      this.showCode(); // ✅ Bisa diakses karena subclass
    }
  }

  const prot = new SubProtected("XYZ123");
  prot.accessProtected(); // ✅ Boleh, lewat method public
  // console.log(prot.code); // ❌ Error: Property 'code' is protected
  // prot.showCode();        // ❌ Error: Method 'showCode' is protected

  // ===================== RINGKASAN PERBANDINGAN =====================
  // +----------------+--------------+-------------+-------------+
  // | Akses Dari     | public       | protected   | private     |
  // +----------------+--------------+-------------+-------------+
  // | Dalam Class    | ✅           | ✅          | ✅          |
  // | Subclass       | ✅           | ✅          | ❌          |
  // | Luar Class     | ✅           | ❌          | ❌          |
  // +----------------+--------------+-------------+-------------+

  // ===================== KENAPA HARUS MENGGUNAKAN VISIBILITY =====================
  // 1. Enkapsulasi: Membatasi bagian mana yang bisa diakses dari luar
  // 2. Keamanan: Mencegah akses langsung terhadap data internal
  // 3. Maintainability: Menghindari penggunaan properti internal yang bisa berubah sewaktu-waktu
  // 4. Abstraction: Menyembunyikan detail implementasi dari pengguna objek
  // 5. Scalability: Memudahkan refactor, karena kode eksternal tidak tergantung pada struktur internal

  // ===================== CONTOH NYATA PENERAPAN SEMUA MODIFIER =====================

  class BankAccount {
    public owner: string;
    protected balance: number;
    private pin: number;

    constructor(owner: string, initialBalance: number, pin: number) {
      this.owner = owner;
      this.balance = initialBalance;
      this.pin = pin;
    }

    public getBalance(): number {
      return this.balance;
    }

    public withdraw(amount: number, inputPin: number): void {
      if (this.validatePin(inputPin)) {
        if (amount <= this.balance) {
          this.balance -= amount;
          console.log(`Withdrawal successful. New balance: ${this.balance}`);
        } else {
          console.log("Insufficient funds.");
        }
      } else {
        console.log("Incorrect PIN.");
      }
    }

    private validatePin(inputPin: number): boolean {
      return inputPin === this.pin;
    }
  }

  class PremiumAccount extends BankAccount {
    public deposit(amount: number): void {
      this.balance += amount; // ✅ Bisa akses protected property
      console.log(`Deposited ${amount}. New balance: ${this.balance}`);

      //   disini kita bisa akses si balance, karena di parentnya
      // sudah di set menjadi protected
    }
  }

  const account = new PremiumAccount("Rafa", 1000, 1234);
  account.withdraw(200, 1234); // Withdrawal successful. New balance: 800
  account.deposit(500); // Deposited 500. New balance: 1300
  // account.pin; // ❌ Error: Property 'pin' is private
  // account.balance; // ❌ Error: Property 'balance' is protected

  // ===================== TIPS TAMBAHAN =====================
  // - Jika tidak menyebutkan modifier apa pun, maka default-nya adalah `public`
  // - Untuk keamanan tinggi (misalnya sistem auth, transaksi), gunakan kombinasi `private` dan `protected`
  // - Gunakan getter/setter (dengan public method) untuk mengontrol akses terhadap properti private
  // - protected cocok untuk memberi akses internal pada turunan, tapi tetap menyembunyikan dari luar

  // ===================== KESIMPULAN =====================
  // Visibility modifier (`public`, `private`, `protected`) penting untuk membatasi dan mengontrol akses ke bagian internal class
  // Mereka membantu membangun arsitektur program yang kuat, aman, dan mudah dirawat
  // Gunakan `private` untuk informasi yang benar-benar harus tersembunyi, `protected` untuk akses terbatas ke subclass,
  // dan `public` hanya jika memang perlu diekspos secara luas
  // Ini adalah bagian penting dari prinsip OOP: enkapsulasi, abstraction, dan keamanan struktur data
});
