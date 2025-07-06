"use strict";
describe("Polymorphism", () => {
    class Employee {
        constructor(name) {
            this.name = name;
        }
    }
    class Manager extends Employee {
    }
    class VicePresident extends Manager {
    }
    //   nah jadi dengna syarat kita harus castingnya itu dari class yang paling terakhir
    // aar bsia benar
    function sayHello(employee) {
        if (employee instanceof VicePresident) {
            const vp = employee;
            console.info(`Hello VP ${vp.name}`);
        }
        else if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello manager ${manager.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    //   ini kalo yan saalah
    //   karena gini
    //   disini kan paramternya itu adaalh objek isntance dengan tipedata Employee
    //   disini kan yang paling awal itu akn Employee -> Manager -> VicePresident
    // nah ketika di parametr ini kita masukan manager, maka benar dia akan masuk ke if yang manager
    // tapi bagaimana jika kia masukan vicePresident, nah dia ini ketika masuk ke if yang ngecek manager
    //   maka nanti dia akan dicek dengan instanceof, nah instanceof ini itu akna mengecek apakah objek itu adlah
    // turunan dari class ini, dan juga ngecek apakah objek ini adalah turunan dari class ini yang class
    // ini adalah turunan dari class ini
    //   jadi ketika masuk ke if manager, maka akan true
    // karena si vc ini adalah turunan dari vc dan juga merupakan turunan dari si manager
    // makanya ktia harus set agar class yang paling bawah itu emnajadi di pengeceakan diawal
    function sayHelloWrong(employee) {
        if (employee instanceof Manager) {
            const manager = employee;
            console.info(`Hello manager ${manager.name}`);
        }
        else if (employee instanceof VicePresident) {
            const vp = employee;
            console.info(`Hello VP ${vp.name}`);
        }
        else {
            console.info(`Hello employee ${employee.name}`);
        }
    }
    it("should support", () => {
        let employee = new Employee("rafa");
        console.info(employee);
        employee = new Manager("rafa");
        console.info(employee);
        employee = new VicePresident("rafa");
        console.info(employee);
    });
    it("should support method parameter polymorphism", () => {
        sayHello(new Employee("rafa"));
        sayHello(new Manager("Budi"));
        sayHello(new VicePresident("Joko"));
    });
    it("should support method parameter polymorphism wrong", () => {
        sayHelloWrong(new Employee("rafa"));
        sayHelloWrong(new Manager("Budi"));
        sayHelloWrong(new VicePresident("Joko"));
    });
});
