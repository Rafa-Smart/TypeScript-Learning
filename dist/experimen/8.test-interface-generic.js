"use strict";
{
    class Person {
        constructor(item) {
            this.item = item;
        }
        kali() {
            // kamu harus pastikan bahwa T = number
            // atau beri constraint pada T
            return this.item.id * this.item.umur;
        }
    }
    const data = { id: 123, umur: 25 };
    const orang = new Person(data);
    console.log(orang.kali()); // 3075
    //   const rafa: User = new Person<number>(data);
    // ga bsia karena rafa bukan User
    // tapi instance dari si Person
}
