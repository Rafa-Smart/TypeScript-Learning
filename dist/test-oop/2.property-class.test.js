"use strict";
// jadi kalo di ts itu kita kalo mau buat proprty,kta wajib
// mendeklarasikan dulu propertynya di fieldnya dulu
// baru nanti di constructornya(kalo mau diubah ubah di new NamaClassnya(disini))
console.clear();
describe("Properties", () => {
    class Customer {
        constructor(id, name) {
            this.name = "Guest";
            this.id = id;
            this.name = name;
        }
        // kalo fungsi itu tidak perlu di deklarasikan dulu
        sayHello(name) {
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
            constructor(nama, umur) {
                (this.nama = nama), (this.umur = umur);
            }
        }
    });
});
describe("defulut value and method...", () => {
    class Test {
        constructor(nama = "", umur = 0) {
            this.nama = nama;
            this.umur = umur;
        }
        sayHello() {
            console.log(this.nama);
        }
        sayHello2() {
            console.log(`halo ${this.nama} umur ${this.umur}`);
        }
    }
    const rafa = new Test("rafa");
    rafa.sayHello();
    const jamal = new Test("rafa", 15);
    jamal.sayHello2();
});
