
// disni smaa aja kayakyang ada di js
// jadi tidka bisa memiliki parent class lebih dari satu parent class
// misal

// class Jamal extends Person extends Doctor {

// }


// jadi ini tuh ga bisa
// jadi cara akalinnya kalo jamal mau punya property / method dari class
// Person dan Doctor
// maka mendingan si Personnya di extends kan duu dengan si Doctor
// nah nanti si jamal tingal extends dari si Personnya saja
// yang sudah memiliki property dan method dari si Doctor
// hasil dari extends sebelumnya


describe('Inheritance', () => {

    // parent class
    class Employee {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Manager extends Employee{

    }

    class Director extends Manager {

    }

    it('should support', () => {
        const employee = new Employee("Eko");
        console.info(employee.name);

        const manager = new Manager("Budi");
        console.info(manager.name);

        const director = new Director("Joko");
        console.info(director.name);


        // jadi employe hanya punya property dan method dari employee saja
        // jadi manager punya property dan method dari namager dan dari parentnya (employee)
        // jadi director punya property dan method dari manager dan otomatis punya
        // juga dari si employee

    });

    it('testing', () => {
        class Test{
            constructor(public no:number){

            }
        }

        class Test2 extends Test{
            // constructor(){
            //     super(no);
            // }
        }
        const data = new Test2(56);

        // jadi kalo ga pake constructor di child classnya, maka tetap constructornya itu ngambil dari
        // si parent classnya

        // tapi kalo ita punya constructor juga di cassnya, maka yang dipake itu yg dari childnya aja

        class Jamal {
            constructor(public no:number){}
        }

        class Siti extends Jamal {
            public nama:String;
            constructor(nama:String, no:number){
                super(no)
                this.nama = nama;
            }
        }

    })
});