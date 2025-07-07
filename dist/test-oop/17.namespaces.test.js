"use strict";
{
    // Penjelasan Lengkap Tentang namespace di TypeScript
    // Apa itu namespace?
    // Namespace adalah fitur di TypeScript yang digunakan untuk mengelompokkan variabel, fungsi, kelas, interface, dan lainnya ke dalam satu ruang lingkup (scope) yang sama.
    // Ini berguna untuk mengorganisasi kode agar tidak terjadi konflik nama (name conflict) terutama dalam proyek besar.
    // Namespace sering disebut sebagai internal modules karena digunakan untuk pengelompokan dalam satu file atau antar file yang dikompilasi bersama.
    // Perbedaan dengan module:
    // - Namespace bersifat internal dan digunakan dalam satu ruang lingkup atau dalam beberapa file yang dikompilasi bersamaan.
    // - Module bersifat eksternal dan menggunakan sistem import/export serta lebih cocok untuk project skala besar modern.
    // - Namespace tidak menggunakan import/export dan cocok digunakan dalam file yang saling tergabung dalam 1 bundel.
    // - Namespace cocok dipakai untuk kode yang akan dikompilasi jadi satu file JS tanpa modul eksternal.
    // Cara kerja namespace:
    // Saat kita mendefinisikan sesuatu di dalam namespace, maka semua entitas (fungsi, kelas, interface, dll) akan berada dalam lingkup namespace itu.
    // Jika ingin mengaksesnya dari luar, maka kita harus menggunakan nama namespace sebagai prefix.
    // Sintaks dasar:
    //   NAMESPACE HANYA BISA DIGUNAKAN DI TOP LEVEL, JADI GA BISA DI GUNAKAN DI {}
    //   namespace MyNamespace {
    //     export function sayHello(name: string) {
    //       console.log(`Halo, ${name}`);
    //     }
    //     export class Person {
    //       constructor(public nama: string) {}
    //       sapa() {
    //         console.log(`Halo dari ${this.nama}`);
    //       }
    //     }
    //     // Jika tidak memakai export, maka entitas tidak bisa diakses dari luar namespace
    //     function privateHelper() {
    //       console.log("Fungsi ini hanya bisa dipanggil di dalam namespace");
    //     }
    //   }
    //   // Cara memanggil fungsi/kelas dari namespace di luar namespace-nya:
    //   MyNamespace.sayHello("Rafa");
    //   const orang = new MyNamespace.Person("Khadafi");
    //   orang.sapa();
    // Kenapa harus menggunakan namespace?
    // 1. Menghindari tabrakan nama (name collisions) dalam ruang lingkup global.
    //    Misalnya jika kita memiliki banyak fungsi dengan nama yang sama di berbagai file, namespace bisa membantu agar tidak bentrok.
    // 2. Mengorganisasi kode dengan lebih rapi dan terstruktur.
    //    Kita bisa mengelompokkan semua fungsi/kode terkait ke dalam 1 namespace tertentu, seperti MathUtil, App.Services, dll.
    // 3. Mempermudah pemeliharaan kode karena semuanya terkelompok dengan jelas berdasarkan fungsinya.
    // 4. Namespace mendukung nested/bertingkat: namespace di dalam namespace lainnya.
    // Contoh namespace bersarang (nested namespace):
    //   namespace Aplikasi {
    //     export namespace Utils {
    //       export function toUpper(text: string) {
    //         return text.toUpperCase();
    //       }
    //     }
    //     export namespace Model {
    //       export class User {
    //         constructor(public nama: string) {}
    //       }
    //     }
    //     export namespace Service {
    //       export function login(user: Model.User) {
    //         console.log(`Login user: ${user.nama.toUpperCase()}`);
    //       }
    //     }
    //   }
    //   // Cara memanggil nested namespace:
    //   const user = new Aplikasi.Model.User("rafa");
    //   console.log(Aplikasi.Utils.toUpper(user.nama));
    //   Aplikasi.Service.login(user);
    //   // Namespace bisa dideklarasikan terpisah (split declaration):
    //   namespace Config {
    //     export let appName = "MyApp";
    //   }
    //   namespace Config {
    //     export let version = "1.0.0";
    //   }
    //   console.log(Config.appName);
    //   console.log(Config.version);
    // Bagaimana namespace dikompilasi?
    // TypeScript akan mengubah namespace menjadi objek dalam JavaScript, dan semua entitas akan menjadi properti dari objek itu.
    // Misalnya, namespace MyNamespace dengan fungsi `sayHello` akan dikompilasi menjadi objek MyNamespace dengan method sayHello di dalamnya.
    // Jadi, namespace itu sebenarnya hanyalah objek biasa yang digunakan untuk menyatukan logika dalam 1 konteks.
    // Kapan tidak disarankan memakai namespace?
    // - Jika kita menggunakan module system berbasis import/export seperti ESModule atau CommonJS, sebaiknya menggunakan `module` (yaitu file sebagai modul).
    // - Namespace tidak kompatibel dengan sistem modul modern tanpa bundling khusus, karena tidak menggunakan import/export.
    // - Di project modern (seperti React, Angular, Node.js), penggunaan `module` lebih direkomendasikan dibanding `namespace`.
    // Kesimpulan:
    // - Namespace adalah cara untuk mengorganisasi kode secara internal di TypeScript.
    // - Cocok untuk proyek kecil hingga menengah, terutama yang tidak menggunakan sistem module modern.
    // - Namespace membantu mencegah tabrakan nama dan membuat kode lebih terstruktur.
    // - Namespace bisa diekspor dengan kata kunci `export`, dan hanya bisa diakses dari luar jika di-export.
    // - Namespace bisa bertingkat dan bisa dipisah ke beberapa deklarasi yang disatukan oleh TypeScript.
    // Itulah penjelasan sangat lengkap tentang namespace di TypeScript dalam satu file.
}
