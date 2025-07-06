"use strict";
// pengetesan overload di ts
// antara interface dnegan type
// ini juga bisa utuk yang interface
const data12 = (a, b) => {
    if (typeof a === "string") {
        return `halo ${a}`;
    }
    else {
        return a * b;
    }
};
// nah coba kamu hover di atas function data12
console.log(data12('rafa'));
console.log(data12(5, 5));
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
const data6 = (a, b) => {
    if (typeof a === "string") {
        return `halo ${a}`;
    }
    else {
        return a * b;
    }
};
// nah kalo mau coba ovreload, kit bisa pke ini
// signature itu maksudnya adalah template simplenya
// jadi kita punya banyak definisi signature kedalam 1 fungsi
// jadi harus gini, baru overload yang asli
// karena satu fungsi, yang fungsi tersebut mempunyai banyak signature (template)
{
    function data9(param1, param2) {
        if (typeof param2 === "number" && typeof param1 === "number") {
            return param1 * param2;
        }
        else if (typeof param1 === "string" && typeof param2 === "undefined") {
            return `halo ${param1}`;
        }
        else {
            return "";
        }
    }
}
const data11 = (a, b) => {
    if (typeof a === "string") {
        return `halo ${a}`;
    }
    else {
        return a * b;
    }
};
// const data11: (nama: string) => string (+1 overload)
// jadi fungsi data11 ini itu overload
// jadi dia bisa dipanggil dalam 2 cara berbeda
console.log(data11('rafa'));
console.log(data11(5, 5));
// jadi yg data11 ini bukan overload, tapi ts meanggapnya overload karena
// Karena & (intersection) artinya:
// "Harus menjadi satu fungsi yang bisa dipanggil dengan kedua cara secara bersamaan."
// Padahal: -> jadi kayak dipaksa, makanya pake any
// Fungsi (a: number, b: number) => number ≠ (nama: string) => string
// Tidak ada satu fungsi yang bisa langsung memenuhi dua bentuk itu sekaligus.
// Overload Sejati:
// Overload adalah:
// Satu fungsi yang bisa dipanggil dengan beberapa cara berbeda (pilih salah satu saat memanggil).
