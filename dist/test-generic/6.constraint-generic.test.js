"use strict";
it("testing", () => {
    // jadi sebelumnya kita itu bisa memasukan tipedat apapun kedalam tipe genericnya
    // tapi kita bisa membatasi tipedata yang bisa dimasukan ke tipe genericnya
    class EmployeeData {
        // nah jadi hanya tipedata yang bertipe Employee
        // da juga turunan dari Employee saja yang bisa dimasukan
        constructor(employee) {
            this.employee = employee;
        }
    }
    it("should support constraint", async () => {
        const data1 = new EmployeeData({
            id: "100",
            name: "Jamal",
        });
        const data2 = new EmployeeData({
            id: "100",
            name: "Jamal",
            totalEmployee: 100,
        });
        const data3 = new EmployeeData({
            id: "100",
            name: "Jamal",
            totalEmployee: 100,
            totalManager: 10,
        });
        // const data4 = new EmployeeData<string>("jamal"); // error
        // karena stirng bukan turunan dari si tipeData Employee
        // const data4 = new EmployeeData<number>(100); // error
    });
    // Constraint pada generic function adalah cara untuk membatasi tipe data
    // yang diperbolehkan oleh parameter generic (misalnya `T`, `U`, dsb).
    // Dengan constraint, kita dapat memastikan bahwa tipe `T` hanya boleh
    // memiliki sifat tertentu atau termasuk dalam bentuk tertentu (seperti objek yang punya `length`).
    // Tanpa constraint, parameter generic bisa berupa tipe apapun: number, string, object, dll.
    // Contoh tanpa constraint:
    function echo(value) {
        return value;
    }
    echo(123); // T = number
    echo("text"); // T = string
    echo({ name: "Rafa" }); // T = object
    // Tapi bagaimana jika kita ingin membuat fungsi yang hanya menerima tipe
    // yang memiliki properti `length` (seperti array atau string)?
    // Kita tidak bisa jamin bahwa semua T akan punya `.length`, maka kita butuh constraint
    // -----------------------------------------------------------
    // Cara menerapkan constraint pada generic function
    // -----------------------------------------------------------
    // Sintaks:
    // function namaFungsi<T extends ConstraintType>(param: T): ReturnType
    // Kata `extends` di sini digunakan untuk membatasi tipe T
    // agar hanya bisa menjadi tipe yang "mewarisi" atau "memenuhi bentuk dari ConstraintType"
    // -----------------------------------------------------------
    // Contoh 1: Membatasi agar T harus punya property `length`
    // -----------------------------------------------------------
    function logLength(item) {
        console.log("Length:", item.length);
        return item.length;
    }
    logLength("Hello"); // OK: string punya length
    logLength([1, 2, 3]); // OK: array juga punya length
    logLength({ length: 10 }); // OK: objek dengan property length juga bisa
    function getPersonName(person) {
        return person.name;
    }
    getPersonName({ name: "Ali", age: 20 }); // OK
    getPersonName({ name: "Budi", age: 30, gender: "M" }); // OK: karena extend Person
    // getPersonName({ name: "X" }); // ❌ Error: age tidak ada
    // -----------------------------------------------------------
    // Contoh 3: Generic dengan constraint terhadap union type
    // -----------------------------------------------------------
    function convertToString(value) {
        return value.toString();
    }
    convertToString(42); // OK
    convertToString("Test"); // OK
    // convertToString(true); // ❌ Error: boolean tidak termasuk dalam string | number
    // -----------------------------------------------------------
    // Contoh 4: Constraint pada multiple generic
    // -----------------------------------------------------------
    function compareIds(a, b) {
        return a.id === b.id;
    }
    compareIds({ id: 1 }, { id: 1 }); // OK
    compareIds({ id: 10, name: "X" }, { id: 10, value: true }); // OK
    // compareIds({ name: "X" }, { id: 1 }); // ❌ Error: T harus punya id
    // -----------------------------------------------------------
    // Contoh 5: Constraint + keyof (property name constraint)
    // -----------------------------------------------------------
    function getProp(obj, key) {
        return obj[key];
    }
    const user = { id: 1, name: "Rafa" };
    getProp(user, "id"); // OK
    getProp(user, "name"); // OK
    // getProp(user, "age"); // ❌ Error: 'age' bukan key dari user
    // -----------------------------------------------------------
    // Manfaat dari Constraint pada Generic Function
    // -----------------------------------------------------------
    // - Meningkatkan type safety (keamanan tipe) dengan memastikan fungsi hanya menerima tipe valid
    // - Menghindari runtime error akibat improper access (misal: akses property yang tidak ada)
    // - Memberikan kontrol penuh terhadap apa yang bisa diterima oleh generic
    // - Memudahkan penggunaan kembali fungsi dengan tipe data kompleks (reusable)
    // - Meningkatkan DX (developer experience) dengan bantuan autocomplete dan validasi oleh TS
    // -----------------------------------------------------------
    // Kenapa harus pakai constraint?
    // -----------------------------------------------------------
    // - Tanpa constraint, kamu bisa menulis fungsi generic yang terlalu longgar
    //   dan membiarkan tipe tak terkontrol (potensi error besar)
    // - Dengan constraint, kamu bisa mempersempit ruang tipe ke bentuk yang kamu inginkan
    // - Ideal untuk membangun fungsi utilitas, library, atau API yang kuat dan aman
    // -----------------------------------------------------------
    // Kesimpulan:
    // -----------------------------------------------------------
    // - Constraint generic digunakan dengan `extends`
    // - Memastikan bahwa parameter generic hanya menerima tipe tertentu
    // - Bisa berdasarkan object shape, interface, union, bahkan kombinasi dengan keyof
    // - Sangat penting saat kamu ingin akses properti dari generic tanpa error
    // - Banyak digunakan dalam real-world seperti library, framework, handler, form, dll
    // -----------------------------------------------------------
    // Tips Best Practice:
    // -----------------------------------------------------------
    // - Gunakan constraint jika fungsi mengakses properti dari generic (seperti `.length`, `.id`, dll)
    // - Gunakan interface atau type alias untuk constraint yang kompleks
    // - Hindari overuse constraint jika fungsi memang harus fleksibel
    // - Gunakan gabungan constraint dan inferensi untuk hasil optimal
    // =============================================================
    // Sekian penjelasan sangat amat lengkap tentang
    // Constraint Generic Function di TypeScript
    // =============================================================
});
