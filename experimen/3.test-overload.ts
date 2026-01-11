
// pengetesan overload di ts
// antara interface dnegan type

// jadi kesimpulannya kit ga bisa menggunakna overlaod dengan 
// menggunakan interface atau type yang mempunyai 2 fungsi atau lebih yang tidak punya nama 
// karena itu ketika di panggil makakita memaksa agar menjadi 1 fungsi, darikedua fungis tersebut
// makanya tipenya itu adalah any


// jadi harusnya kalo overload itu kita membatasi paramter yang amsuk
// berdasarkan signature yang ada

// kalo ini kan any, jadi tidak dibatasi


// yang dibawah ini bkan overload karena
// data12("rafa");   // ✅ jalan
// data12(2, 3);     // ✅ jalan
// data12(true);     // ❌ juga jalan! 
//  TypeScript tidak membatasi ke dua pola pemanggilan spesifik — karena signature-nya jadi sangat longgar (any).

interface Hitung {
  (a: number, b: number): number;
}

interface HitungTambah extends Hitung {}

// ini kalo yang pertmaa
// const tambah: HitungTambah = (a: number, b: number): number => {
//   return a + b;
// };

// ini yang kedua
interface sayHello extends HitungTambah {
  (nama: string): void;
}

// ini juga bisa utuk yang interface
const data12: sayHello = (a: any, b?: any): any => {
  if (typeof a === "string") {
    return `halo ${a}`;
  } else {
    return a * b;
  }
};

// nah coba kamu hover di atas function data12
console.log(data12('rafa'))
console.log(data12(5,5))

// const data:sayHello = (nama:string):void => {
//   console.log(`haloo ${nama}`)
// }

// ini ga bisa, karena kamu melakukan overlaod fungsi
// jadi pada interface HitungTambah, kamu emndefinisikan fungsi dengan 2 paramter
// dan kamu membuat interface lain yang extends dari HitungTambah
// yang mempunyai fungsi dengan hanya 1 paramer saja, dan itu beda tipedata
// maka ini akan error, karena tidak tahu inign meggunakan fungis yang mana

// ==============================

// solusi salah

type HitungTambahType = {
  (a: number, b: number): number;
};

type HItungKaliType = {
  (nama: string): string;
} & HitungTambahType;

// ini juga ga bisa sebenarnya, jadi harus kita cek dulu
// const data:HItungKaliType = (a:number, b:number):number =>{
//   return a * b
// }

// cara salah 1 karena
// Type Intersection (&) untuk Function Type tidak berarti overload!
// const data:HItungKaliType = (a:(string | number), b:number):(string|number) => {
//   if(typeof nama == "string"){
//     return `halo ${nama}`
//   } else {
//     return a * b
//   }
// }

// maka pake cara ini
type HitungLagi = {
  (a: number, b: number): number;
  (nama: string): string;
};

// jadi kalo udah pake overload, jadi harus ada 1 fungis yang mencoba seluruh alurnya
// dan ternyata arrow fungis a bisa pake over load
// const data:HitungLagi = (param1:(string|number), param2?:number):string|number => {
//   if(typeof param2 == 'number' && typeof param1 == 'number'){
//     return param1 * param2
//   } else if(typeof param1 == "string" && typeof param2 == 'undefined'){
//     return `halo ${param1}`
//   } else {
//     return ``
//   }
// }

// Overload di TypeScript berarti kamu mendefinisikan beberapa
// "signature" berbeda untuk satu fungsi, agar saat fungsi itu
// dipanggil dengan argumen yang berbeda-beda, TypeScript tahu
// apa yang diharapkan, secara type-safe.

// nah jadi ini bukan eoverload
// Ini bukan overload karena:
// Kamu hanya punya satu implementasi
// Kamu mengetik seluruhnya dengan any
// TypeScript tidak tahu bahwa fungsi ini menerima string atau (number, number)

// ini bukan overlaod karena tidka dibatasi paramternya sesuai dengan signatrure yang ada
// jadi kita bisa masukan true, yg ini bakal bisa masuk
// padahal tidak ada signature yang mengatur paramter true ini
const data6: HItungKaliType = (a: any, b?: any): any => {
  if (typeof a === "string") {
    return `halo ${a}`;
  } else {
    return a * b;
  }
};

// nah kalo mau coba ovreload, kit bisa pke ini
// signature itu maksudnya adalah template simplenya
// jadi kita punya banyak definisi signature kedalam 1 fungsi

// jadi harus gini, baru overload yang asli
// karena satu fungsi, yang fungsi tersebut mempunyai banyak signature (template)
{
  function data9(a: number, b: number): number;
  function data9(nama: string): string;
  function data9(param1: string | number, param2?: number): string | number {
    if (typeof param2 === "number" && typeof param1 === "number") {
      return param1 * param2;
    } else if (typeof param1 === "string" && typeof param2 === "undefined") {
      return `halo ${param1}`;
    } else {
      return "";
    }
  }
}

// jadi gini
// type HitungLagi = {
//   (a: number, b: number): number;
//   (nama: string): string;
// };

// kalo saya menggunakna tipe data ini
// untuk sebuah variable maka variable ini akna mengimplementasikan fungsiyang mana?
// sementara type ini punya 2 fungsi tanpa nama

// jadi jawabnnya itu adlah
// Semua signature dalam HitungLagi adalah kontrak yang harus dipenuhi oleh satu implementasi.
// Dalam hal ini, HitungLagi bukan “dua fungsi”, melainkan: -> nah jadi ini bukan overload
// Satu fungsi yang dapat dipanggil dalam dua cara berbeda (dengan overload).

// jdai kalo kamumau pake signature dati type Hitunglagi
// maka begini jadinya
// jadi kita baut variable yang itu adalah fungsi yang bsia emncoba seluruh signature dari si Hitungkali
type sayHello2 = HitungTambah & {
  (nama:string):string
}


const data11: sayHello2 = (a: any, b?: any): any => {
  if (typeof a === "string") {
    return `halo ${a}`;
  } else {
    return a * b;
  }
};

// const data11: (nama: string) => string (+1 overload)
// jadi fungsi data11 ini itu overload
// jadi dia bisa dipanggil dalam 2 cara berbeda

console.log(data11('rafa'))
console.log(data11(5,5))

// jadi yg data11 ini bukan overload, tapi ts meanggapnya overload karena
// Karena & (intersection) artinya:
// "Harus menjadi satu fungsi yang bisa dipanggil dengan kedua cara secara bersamaan."
// Padahal: -> jadi kayak dipaksa, makanya pake any
// Fungsi (a: number, b: number) => number ≠ (nama: string) => string
// Tidak ada satu fungsi yang bisa langsung memenuhi dua bentuk itu sekaligus.

// Overload Sejati:
// Overload adalah:
// Satu fungsi yang bisa dipanggil dengan beberapa cara berbeda (pilih salah satu saat memanggil).