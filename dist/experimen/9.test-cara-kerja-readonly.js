"use strict";
{
    // jadi kita akn membuat experimen,
    // jadi kenapa ketika kita menggunakan interface ReadonlyArray
    // pada objek instance Array
    // kita hanya bisa membaca saja arraynya
    // tapi ga bisa merubahnya, seeprti, push,pop,shift, dll
    // oke kita mulai
    let dataReadArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // nah ketka kita coba untuk ubah, dia itu ga bisa
    // dataReadArray.push(10) //error
    // errornya itu katanya
    // property 'push' does not exist on type readonly number[]
    // jadi pada interface ini, dia ga punya deklarasi untuk method push
    // yang sebenarnya implementainya sudh ada di instance objek dari si Array ini
    // jadi disini coba kita manipulasi si interface ReadonlyArray ini
    // agar dia mendeklarasiakn method push, yang implementasinya sudah ada di
    // objek instance Arranynya,pada kasus ini dataReadArray
    {
        let dataReadArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
        // disini bisa kita push
        dataReadArray.push(10);
        console.log(dataReadArray);
    }
    // jadi kesimpulannya ketiak kita menggunakan objek instance yang sebenanrya
    // dia sudah punya banyak deklarasi di interface aslinya
    // dan sudah di implemenasi juga lewat si classnya
    // contoh disini misal class Array<number>
    // tapi kalo variable (dalam kasus ini dataReadArray) yang merupakan objek instance 
    // dari si Array<T>
    // dan kita set bahwa variable ini itu mengikuti kontrak dari interface
    // yang ssebenarnya sudah di implementasikan di variable dataReadArray
    // jadi kita hanay menggunakna kontrak yang kita set aja
    // meskipun kita punya banyak method di dataReadArray lewat method instence
    // dari si Array
    // jadi interface itu hanya sebagai kontrak saja, misal kalo kita punya objek
    // yang punya bannyak method contoh method/property dari interface yang sudah
    // di implementasikan di classnya yang menghasilkan objek instance yang memiliki 
    // method:
    // push,pop,shift,unshift,dll
    // tapi pada variable yang menampung objek tersebut, kita set
    // bahwa dia itu menginmplementasi interface lain, yang interface ini
    // hanya punya method misal
    // pop saja
    // maka otomatis, variable ini hanya bisa mengakses method pada objeknya yaitu pop 
    // saja, meski sebenarnya pada objeknya itu
    // memiliki banyak method
    // nahh itu yang sebenernya terjadi pada interface ReadonlyArrat
}
{
    let dataArray1 = [1, 2, 3];
    dataArray1.push();
    // tuh jadi ga bisa, karena method push ini ga ada di interface ReadonlyArray, tapi kita bisa gini
    // ohh jadi defaultnya kalo kita ga pake ReadonlyArray ini
    // maka nanti kita akan menggunakan interface Array<T>
    // jadi karena kita pake interface si ReadonlyArray
    // jadi kita hanay bisa membaca arrray ini saja
    // dan tidak bisa diubah ubah
    // karena keterbatasan akses untuk merubah
    // karena kita menggunakan interface ReadonlyArray ini
    // jadi sama kyak extends, jadi kita new dari si Array<T>
    // tapi kita mneggunakn interface yang lain yang tidak selengkap si
    // Array, dan apakah dengn kita mengguakan interface yang terbatas
    // tapi kita new dari Array<T> yang sudah lengkap methodnya
    // tapi ketik buat instance objek nya kita mengikuti interface ReadonlyArray
    // yang lebih sedikit method arraynya
}
