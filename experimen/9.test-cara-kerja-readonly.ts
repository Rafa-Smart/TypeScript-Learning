
// let dataReadArray: ReadonlyArray<number> = [1, 2, 3]
// Berarti kamu memberi tahu TypeScript:

// “Hei compiler, tolong perlakukan dataReadArray seolah-olah hanya punya fitur-fitur yang didefinisikan dalam ReadonlyArray<number>.”

// Meskipun dataReadArray itu sebenarnya instance dari Array<number>, TypeScript akan membatasi apa yang bisa kamu akses dari variable tersebut sesuai kontrak yang kamu deklarasikan.
{
    // jadi kita akn membuat experimen,
    // jadi kenapa ketika kita menggunakan interface ReadonlyArray
    // pada objek instance Array
    // kita hanya bisa membaca saja arraynya
    // tapi ga bisa merubahnya, seeprti, push,pop,shift, dll

    
    // oke kita mulai
    let dataReadArray:ReadonlyArray<number> = [1,2,3,4,5,6,7,8,9]
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
        // disini kita buat menambah deklaasi method pada interface ReadonlyArray

        interface ReadonlyArray<T> {
            // disini deklarasi dari method pusnya
            // saya ambil dari interface Array<T>
            // yang asli

            push(...items:T[]):number

            // nah jadi meski ini interafce ReadonlyArray
            // jadi ga bsia di manipulasi
            // tapi kita manipulasi kontraknya haha

            // jadi sekarnag kita bisa push elemen
            // ke objek instance array, yang variable yang menampunya itu
            // mengikuti inteface ini
        }


        let dataReadArray:ReadonlyArray<number> = new Array<number>(1,2,3,4,5,6,7,8,9)
        // disini bisa kita push
        dataReadArray.push(10)
        console.log(dataReadArray)

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

    // nahh itu yang sebenernya terjadi pada interface ReadonlyArray



}

{
    // kita coba dulu ya
    interface MethodUtama {
        kali(a:number,b:number):number
        bagi(a:number,b:number):number
        tambah(a:number,b:number):number
        kurang(a:number,b:number):number
    }



    class Math implements MethodUtama{
        // gausah pake constructor
        // jadi kita hanya ingin buat method saja ke si objek
        // instancenya

        // nah disini kita ga bisa pek overload ya
        // karena hanya beda return saja, dan juga
        // ternyata ini tuh berbeda nama fungsinya

        kali(a:number,b:number):number{
            return a * b
        }
        bagi(a:number,b:number):number{
            return a * b
        }
        tambah(a:number,b:number):number{
            return a * b
        }
        kurang(a:number,b:number):number{
            return a * b
        }
    }

    // disini kita buat interface lagi
    // tapi ga sebanyak si method
    interface MethodKedua {
        // jadi hanya punya kali da bagi, tambah dan kurnag nya ga ada
        kali(a:number,b:number):number
        bagi(a:number,b:number):number       

        // disni kalo ktia tambahkan lagi method
        // yang ga sesuai dengan yang MEthodUtama
        // maka variable data ii akna error
        // karena ga bisa nyesuain sama si objek isntance new MAth

        // ini namanya adalah polymorphism
        // type interface
        // jadi kemiripan tipe interface, meskipun bukan turunan
    }


    let data:MethodKedua = new Math();

    // nah disini seharusnya si new Math ini dia menurunkan method kali,bagi,tambah,kurang
    // tapi karena kita tampung dengan variable yang mengikuti interface MEthodKedua yang hanya
    // punya kali dan bagi
    // jadi kita hanya bisa akses method kali dan bagi saja di variable data ini

    console.log(data.kali(1,2))
    console.log(data.bagi(1,2))
    // console.log(data.kurang(1,2)) // ga bisa -> error
    // console.log(data.tambah(1,2)) // ga bisa -> error

}

{
  interface ReadonlyArray<T> {
    push(...items: T[]): number;
  }

  let dataArray1: ReadonlyArray<number> = [1, 2, 3];
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


