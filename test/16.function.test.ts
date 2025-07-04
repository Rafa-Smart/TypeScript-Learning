

// penjelasan
//  1. Interface bukan array literal
// Interface di TypeScript adalah kontrak untuk bentuk data, bukan struktur data konkret seperti number[].

// Misalnya:
// interface MyArray {
//   [index: number]: number;
// }
// Itu artinya: MyArray adalah objek yang punya properti dengan nama angka (0, 1, 2, ...) dan setiap nilainya bertipe number.
// Ini bentuk teknis array, tapi bukan benar-benar array asli (Array). Itu hanya objek dengan property bernomor seperti:

// const arr: MyArray = {
//   0: 10,
//   1: 20,
//   2: 30,
// }; // valid
// TAPI ini bukan array asli, jadi kamu tidak bisa pakai metode seperti .map(), .push(), .forEach().



// jadi gii, kamu ga boleh mendeklarasikan tipedata ketika pemanggilan fungsi
// kamu hanya harus mendeklarasikan tipedata ketika pembuatan fungsi itu saja


// jadi kalo buat function di ts, maka kita perlu menentukan
// tipe data paramaeternya dan juga tipedata return valuenya
// dan jika function tersebut tidak emngebalikan return value
// maka tipe datanya harus emnjadi void

// jadi kalo ga masukan tipedata, maka nanti tipedatanya
// adalah any

// jadi kao mau buat function ada namanya
// adi ada : setelah nama fungsi
// kita hatus pake namaFuncion:(a:number(misal)):number(misal)

// kalo mau deklarasiin fungsi, tapi belum mau eksekusi functionnya

console.clear()

it('test...', ():void => {
    function sayHello(nama:string):string{
        return `haloo ${nama}`
    }

    function tesVoid(nama:string):void{
        console.log(`haloo ${nama}`)
    }

    let data:string = sayHello('rafa')
    console.log(data)


    tesVoid('jamal')


    // atua juga bsia pake assertion jia kita tahu bahwa
    // function ini sebenearnya itu emgembalikan string

    function tesAs(nama:string):any{
        return `ini contoh assertions ${nama}`
    }

    let hasil = tesAs('siti') as string
    console.log(hasil)

})


it('function lagi...', () => {

    // disini kita buat function yang belum di impmentasi
    let sayHello:(a:number, b:number) => number;
    let operasi:(a: number, b: number) => number;

    // cara pakenya adalah
    sayHello = (a,b) => a+b;



    // disin ktia bua lagi yang values
    function hitung(...values:number[]){
        // disini ga bisa pake arguemnet, karena harus ada parameter yang digunakan
        let hasil:number = 0;
        for(let i of values){
            hasil += i
        }
        return hasil
    }

    console.log(hitung(1,2,3,4,5))



    // mmebuat function callback

    function hitungMap(array:number[], callback:(data:number,index:number,array:number[]) => number):number[]{
        let data:number[] = [];
        for(let i = 0; i < array.length; i++){
            data.push(callback(array[i],i,array))
        }
        return data
        // ingat karena disini returnnya itu array number, maka di atas itu harus dikasih tau bahwa ini
        // mereturnkan :number[]
    }

    interface myArray {
        [index:number]:number
    }
    // Error-nya terjadi di sini, karena kamu mencoba menginisialisasi array ([...]) ke sebuah variabel yang tipenya adalah interface myArray.
    // Padahal, interface di TypeScript bukan tipe data langsung seperti number[], melainkan hanya kontrak struktur.
    // Dan walaupun myArray kamu bentuknya mirip array, TypeScript tidak secara otomatis menganggapnya array sesungguhnya.

    // let arrayTest:myArray = [1,2,3,4,5,6,7,8,9,10]
    let arrayTest:number[] = [1,2,3,4,5,6,7,8,9,10]

    let hasilMap:number[] = hitungMap(arrayTest,((el, i, arr) => {
        return el * 2
    }))

    // Kesalahan utama: kamu tidak boleh menuliskan tipe (:number[]) lagi saat memberikan argumen dalam pemanggilan fungsi. Tipe ditulis saat deklarasi, bukan saat pemanggilan.

    console.log(hasilMap)




})



it('testing function 2...', ():void => {
    const arr:number[] = [2,3,4,1,5,6,3,7,8,9,10,1,21,43,5,3,1]

    function sorting(arr:number[]):number[]{
        for(let i = 0; i<arr.length; i++){
            for(let j = 0; j < arr.length-1; j++){
                if(arr[j] > arr[j+1]){
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                }
            }
        }
        return arr
    }

    console.log(sorting(arr))

})

console.clear()


// Function (fungsi) adalah blok kode yang dapat digunakan ulang,
// yang melakukan suatu tugas atau perhitungan.
// Function bisa menerima input (parameter) dan menghasilkan output (return).

// Di TypeScript, function dapat memiliki tipe untuk:
// - Parameter
// - Nilai kembali (return value)
// - Keseluruhan bentuk/syarat dari fungsi (function signature)

// ===================================================================
// * CARA MENGGUNAKAN FUNCTION DI TYPESCRIPT
// ===================================================================
// (1) FUNCTION DENGAN TIPE PADA PARAMETER DAN RETURN
// function tambah(a: number, b: number): number {
//   return a + b;
// }
// console.log(tambah(3, 4)); // ✅ 7

// - `a: number` dan `b: number` → parameter harus number
// - `: number` setelah `)` → hasil return wajib number

// ===================================================================
// * ALASAN HARUS MENGGUNAKAN FUNCTION
// ===================================================================
// ✅ Kode jadi lebih rapi dan modular
// ✅ Menghindari duplikasi kode
// ✅ Dapat digunakan ulang di berbagai tempat
// ✅ Mendukung parameter, return value, dan kontrol alur
// ✅ Dengan TypeScript: aman dari kesalahan tipe dan dokumentasi lebih jelas

// ===================================================================
// * FUNCTION DENGAN PARAMETER OPSIONAL
// ===================================================================
// function sapa(nama: string, panggilan?: string): string {
//   if (panggilan) {
//     return `Halo ${panggilan} ${nama}`;
//   }
//   return `Halo ${nama}`;
// }
// console.log(sapa("Rafa")); // ✅ Halo Rafa
// console.log(sapa("Rafa", "Tuan")); // ✅ Halo Tuan Rafa

// Parameter dengan `?` → boleh diberikan atau tidak

// ===================================================================
// * FUNCTION DENGAN DEFAULT VALUE
// ===================================================================
// function greet(name: string = "Anonim"): string {
//   return `Hai, ${name}`;
// }
// console.log(greet()); // ✅ Hai, Anonim

// Parameter default = jika tidak diberikan, akan pakai nilai bawaan

// ===================================================================
// * ARROW FUNCTION DENGAN TIPE
// ===================================================================
const kali = (x: number, y: number): number => x * y;
console.log(kali(5, 3)); // ✅ 15

// Arrow function = bentuk pendek dari function expression

// ===================================================================
// * FUNCTION TANPA RETURN (VOID)
// ===================================================================
// function cetakPesan(pesan: string): void {
//   console.log("Pesan:", pesan);
// }
cetakPesan("Selamat belajar!"); // ✅ Pesan: Selamat belajar!

// Return type `void` → tidak mengembalikan apa pun

// ===================================================================
// * FUNCTION TYPE / FUNCTION SIGNATURE
// ===================================================================
// Tipe fungsi secara eksplisit (tanpa implementasi langsung)
let operasi: (a: number, b: number) => number;

operasi = function (x, y) {
  return x + y;
};

// Bisa juga dipakai untuk parameter fungsi lain:
function kalkulasi(a: number, b: number, fn: (x: number, y: number) => number): number {
  return fn(a, b);
}
console.log(kalkulasi(10, 5, (a, b) => a - b)); // ✅ 5

// ===================================================================
// * FUNCTION OVERLOADING
// ===================================================================
// Mendefinisikan fungsi dengan beberapa bentuk (signature) berbeda

function cetakData(data: string): void;
function cetakData(data: number): void;
function cetakData(data: any): void {
  console.log("Isi data:", data);
}
cetakData("hello");
cetakData(123);

// Di TypeScript, overload ditulis sebagai beberapa deklarasi,
// lalu satu implementasi yang menangani semuanya

// ===================================================================
// * REST PARAMETER (SEPERTI VARIADIC FUNCTION)
// ===================================================================
function jumlahSemua(...angka: number[]): number {
  return angka.reduce((total, item) => total + item, 0);
}
console.log(jumlahSemua(1, 2, 3, 4)); // ✅ 10

// `...angka` menerima banyak argumen sebagai array

// ===================================================================
// * CALLBACK FUNCTION DENGAN TIPE
// ===================================================================
// function prosesData(data: number[], cb: (n: number) => number): number[] {
//   return data.map(cb);
// }
// const hasil = prosesData([1, 2, 3], (n) => n * 2);
// console.log(hasil); // ✅ [2, 4, 6]

// Function sebagai parameter (callback) juga bisa diketik dengan aman

// ===================================================================
// * ANONYMOUS FUNCTION & ARROW FUNCTION
// ===================================================================
// Function tanpa nama (digunakan langsung saat dibutuhkan)
// setTimeout(():void => {
//   console.log("Selesai menunggu...");
// }, 1000);

// ada error kalo di file jest, tapikalo di file lain engga

// ===================================================================
// * FUNCTION DI DALAM OBJECT (METHODS)
// ===================================================================
const kalkulator = {
  tambah(a: number, b: number): number {
    return a + b;
  },
  kurang: (a: number, b: number): number => a - b
};
console.log(kalkulator.tambah(5, 2)); // ✅ 7

// ===================================================================
// * BEST PRACTICES
// ===================================================================
// ✅ Selalu beri tipe untuk parameter dan return
// ✅ Gunakan default parameter jika ada nilai umum
// ✅ Hindari `any` dalam function
// ✅ Gunakan function type untuk parameter fungsi
// ✅ Gunakan arrow function untuk callback atau fungsi sederhana
// ✅ Gunakan overload jika fungsi menerima beberapa jenis parameter

// ===================================================================
// * KEUNTUNGAN MENGGUNAKAN FUNCTION DI TYPESCRIPT
// ===================================================================
// ✅ Lebih aman: tidak akan salah kirim tipe argumen
// ✅ Lebih mudah dibaca, jelas apa yang diterima dan dikembalikan
// ✅ Lebih mudah dirawat dalam jangka panjang
// ✅ IDE bisa bantu autocomplete & validasi saat menulis

// ===================================================================
// * KESIMPULAN
// ===================================================================
// - Function = blok kode untuk tugas tertentu
// - Bisa menerima parameter dan mengembalikan nilai
// - TypeScript memungkinkan kita mendefinisikan tipe untuk:
//    → parameter, return, dan keseluruhan bentuk fungsi
// - Fungsi bisa berupa deklarasi, expression, arrow, atau method
// - Fungsi mendukung overload, rest parameter, default, optional, dan signature
// - Sangat penting untuk reusable dan modularisasi kode
