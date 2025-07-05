// jadi kalo di ts itu kita kalo mau buat proprty,kta wajib
// mendeklarasikan dulu propertynya di fieldnya dulu
// baru nanti di constructornya(kalo mau diubah ubah di new NamaClassnya(disini))

console.clear();

describe("Properties", () => {
  class Customer {
    // nh jadi buat dulu disini
    // propertynya, lalu nanti baru boleh di constructornya

    // jadi propertty yang kita deklarasikan di field ini
    // maka wajib kita deklarasikan juga di constructor
    // kecuali yang opsional
    readonly id: number;
    name: string = "Guest";
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    // kalo fungsi itu tidak perlu di deklarasikan dulu
    sayHello(name: string): void {
      console.info(`Hello ${name}, my name is ${this.name}`);
    }
  }

  it("should can have properties", () => {
    const customer = new Customer(1, "Jonh");
    customer.age = 20;

    console.info(customer.id);
    console.info(customer.name);
    console.info(customer.age);
    console.info(customer);
  });

  it("should can have methods", () => {
    const customer = new Customer(1, "rafa");
    customer.sayHello("Budi");
  });

  it("test salah...", () => {
    class Test {
      // disini kita buat dulu fieldnya

      // constructor(nama:String,umur:number){
      //     this.nama = nama,
      //     this.umur = umur;
      // }

      // nah jadi kalo kita ga deklarasikan dulu ropertynya di field
      // maka nanti akan error

      // jadi deklarasikan dulu
      nama: string;
      umur: number;
      constructor(nama: string, umur: number) {
        (this.nama = nama), (this.umur = umur);
      }

      // tapi kalo gini

      // nah ini mungkin error, karena kita belum tambahkan si this.nama = nama
      // this.umur = umur

      // jadi kalo di ts itu harus di tulis dulu semuanya, baru ketahuan kalo dia itu
      // benerean error atau hanya error karena kita belum tulis secara lengkap

      // nama:string;
      // umur:number;
      // constructor(nama:string, umur:number){

      // }
    }
  });
});

describe("defulut value and method...", () => {
  class Test {
    // nama:string = "";
    // umur?:number = 0;
    // constructor(nama:string, umur:number){
    //     this.nama = nama;
    //     this.umur = umur
    // }

    // atau bsia juga disini

    nama: string;
    umur?: number;
    constructor(nama: string = "", umur: number = 0) {
      this.nama = nama;
      this.umur = umur;
    }

    sayHello(): void {
      console.log(this.nama);
    }
    sayHello2(): void {
      console.log(`halo ${this.nama} umur ${this.umur}`);
    }
  }

  const rafa = new Test("rafa");
  rafa.sayHello();

  const jamal = new Test("rafa", 15);
  jamal.sayHello2();
});
