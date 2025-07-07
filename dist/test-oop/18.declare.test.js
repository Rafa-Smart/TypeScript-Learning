"use strict";
it("testing", () => {
    console.log('ta');
    // DECLARE HANYA BISA DIDEKLARASIKAN DI TOP LEVEL
    // Apa itu `declare`?
    // -------------------
    // `declare` adalah keyword (kata kunci) di TypeScript yang digunakan untuk memberi tahu compiler
    // bahwa variabel, fungsi, class, module, atau objek tertentu sudah didefinisikan di tempat lain.
    // Biasanya di lingkungan eksternal (misalnya: library dari JavaScript, file .d.ts, atau global scope).
    // Tujuan utamanya adalah untuk memberikan "tipe" (type) kepada sesuatu yang SUDAH ADA,
    // tapi tidak didefinisikan dalam source code TypeScript kita.
    // Tanpa `declare`, TypeScript akan menganggap bahwa sesuatu belum pernah didefinisikan,
    // dan akan memberikan error bahwa variabel atau fungsi tidak ditemukan.
    // Bagaimana cara kerjanya?
    // ------------------------
    // `declare` hanya memberi tahu TypeScript tentang bentuk/struktur sesuatu,
    // tapi tidak akan menghasilkan kode JavaScript dalam hasil build (output).
    // Jadi ini hanya berlaku saat compile-time, bukan run-time.
    // Kapan dan kenapa harus pakai `declare`?
    // ---------------------------------------
    // - Saat menggunakan library JavaScript murni tanpa dukungan TypeScript secara native
    // - Saat bekerja dengan script global dari browser (seperti: window, document, dll)
    // - Saat membuat definisi tipe eksternal secara manual
    // - Saat membuat file .d.ts (type declaration file)
    // CONTOH-CONTOH PENGGUNAAN:
    // --------------------------------------------
    // 1. declare var — Untuk variabel global
    // --------------------------------------------
    // Misalnya kamu tahu bahwa ada variabel `PI` yang sudah didefinisikan di script lain (global),
    // maka kamu bisa memberi tahu TS agar tidak error saat menggunakannya.
    //   declare var PI: number;
    //   // Sekarang bisa pakai PI seolah-olah sudah ada
    //   const kelilingLingkaran = 2 * PI * 10;
    //   // --------------------------------------------
    //   // 2. declare function — Untuk fungsi global
    //   // --------------------------------------------
    //   // Misalnya di HTML ada fungsi JS global seperti ini:
    //   // <script> function sayHello(name) { alert(name); } </script>
    //   // Di TypeScript kita hanya ingin beri tahu bentuknya:
    //   declare function sayHello(name: string): void;
    //   // Kita bisa pakai di TypeScript, tanpa error
    //   sayHello("TypeScript!");
    //   // --------------------------------------------
    //   // 3. declare class — Untuk class eksternal
    //   // --------------------------------------------
    //   // Misalnya ada class JavaScript dari file lain yang global:
    //   declare class ExternalPerson {
    //     name: string;
    //     constructor(name: string);
    //     greet(): void;
    //   }
    //   // Kita bisa pakai di kode TypeScript kita
    //   const orang = new ExternalPerson("Rafa");
    //   orang.greet();
    //   // --------------------------------------------
    //   // 4. declare const/let — Untuk konstanta global
    //   // --------------------------------------------
    //   declare const API_BASE_URL: string;
    //   fetch(API_BASE_URL + "/users");
    //   // --------------------------------------------
    //   // 5. declare namespace — Untuk group global
    //   // --------------------------------------------
    //   // Misal kamu pakai library JS lama yang pakai pola namespace, seperti:
    //   // const MyLib = { utils: { sum: function(a, b) { return a + b; } } };
    //   declare namespace MyLib {
    //     namespace utils {
    //       function sum(a: number, b: number): number;
    //     }
    //   }
    // Sekarang bisa akses seperti ini:
    //   const hasil = MyLib.utils.sum(3, 4);
    // --------------------------------------------
    // 6. declare module — Untuk definisi module
    // --------------------------------------------
    // Misalnya kamu ingin memberitahu TS tentang module JS murni yang tidak ada tipe-nya
    //   declare module "some-js-library" {
    //     export function doSomething(value: string): void;
    //     export const version: string;
    //   }
    // Sekarang kita bisa import modul itu tanpa error
    // import { doSomething, version } from "some-js-library";
    // --------------------------------------------
    // 7. declare global — Untuk menambah ke global scope
    // --------------------------------------------
    // Digunakan di file .d.ts jika ingin menambahkan ke global scope
    // declare global {
    //   var myGlobal: string;
    // }
    // --------------------------------------------
    // Perbedaan declare dengan export/import biasa:
    // --------------------------------------------
    // - `declare` tidak menghasilkan kode JavaScript (tidak ada hasil setelah compile)
    // - `declare` hanya memberitahu TypeScript bentuk dari sesuatu, bukan implementasi nyata
    // - Digunakan saat kamu TIDAK PUNYA akses ke implementasi, hanya ingin beri tahu tipe-nya saja
    // --------------------------------------------
    // Kesimpulan:
    // --------------------------------------------
    // - `declare` sangat berguna saat bekerja dengan kode JavaScript murni di dalam proyek TypeScript
    // - Memungkinkan kita untuk tetap dapat manfaat dari TypeScript (seperti type-checking dan autocompletion)
    //   meskipun tidak punya akses ke implementasi sebenarnya
    // - Biasanya digunakan di file `.d.ts`, tapi juga bisa langsung di file `.ts` biasa jika perlu
    // --------------------------------------------
    // Tips tambahan:
    // --------------------------------------------
    // Jika kamu menggunakan library dari JavaScript, coba cari definisi tipe-nya di DefinitelyTyped:
    // https://github.com/DefinitelyTyped/DefinitelyTyped
    // Atau install langsung dari npm, contoh:
    // npm install --save-dev @types/lodash
    // Setelah itu kamu TIDAK perlu `declare` sendiri, karena definisi tipe sudah disediakan otomatis
    // --------------------------------------------
    // Sekian penjelasan lengkap tentang `declare` di TypeScript.
    // Sekarang kamu bisa menggunakannya dengan percaya diri, dan tahu kapan harus menggunakannya.
});
