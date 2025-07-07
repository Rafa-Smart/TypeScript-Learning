"use strict";
{
    function cekId(item) {
        console.log(item.id);
    }
    // disin ceknya pake fungsi
    const data = {
        id: 123,
    };
    const data2 = {
        id: 990,
        nama: "rafa",
    };
    const data3 = {
        id: 889,
        kelas: "10pplg2",
    };
    cekId(data);
    cekId(data2); // bisa karena punya property id dna dia extends
    cekId(data3); // bisa karena punya property id meskipun bukan extends
    // disini kita cek pake class
    class Person {
        constructor(item) {
            this.item = item;
        }
        cekID() {
            console.log(this.item.id);
        }
    }
    const dataClass = new Person(data);
    const dataClass2 = new Person(data2);
    const dataClass3 = new Person(data3);
    console.log(dataClass);
    console.log(dataClass2);
    console.log(dataClass3);
    dataClass.cekID();
    dataClass2.cekID();
    dataClass3.cekID();
}
