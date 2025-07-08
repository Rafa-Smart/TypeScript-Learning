"use strict";
it("testing", () => {
    // ===================================================================
    // Penjelasan sangat lengkap tentang COLLECTION GENERIC FUNCTION
    // ===================================================================
    // Apa itu Collection Generic Function?
    // ------------------------------------
    // Collection Generic Function adalah fungsi generic yang beroperasi
    // pada struktur data koleksi, seperti array, set, map, atau object
    // yang menyimpan banyak item.
    // Collection = kumpulan item (data), seperti:
    // - Array<T>     → list berurutan
    // - Set<T>       → kumpulan unik
    // - Map<K, V>    → pasangan key-value
    // - Record<K, V> → object dengan key dinamis dan value tertentu
    // Tujuan Collection Generic Function:
    // - Menangani berbagai jenis koleksi data dengan cara yang fleksibel
    // - Menjaga type safety terhadap elemen dalam koleksi
    // - Menulis fungsi reusable untuk transformasi, filter, pencarian, konversi, dll
    // -----------------------------------------------------------
    // Contoh 1: Fungsi generic yang menerima array dan mengembalikannya
    // -----------------------------------------------------------
    function identityArray(arr) {
        return arr;
    }
    const numbers = identityArray([1, 2, 3]); // T = number[]
    const words = identityArray(["a", "b"]); // T = string[]
    // TypeScript tahu isi array berdasarkan T
    // -----------------------------------------------------------
    // Contoh 2: Fungsi map custom untuk array generic
    // -----------------------------------------------------------
    function mapCollection(items, transform) {
        const result = [];
        for (const item of items) {
            result.push(transform(item));
        }
        return result;
    }
    const hasil = mapCollection([1, 2, 3], (x) => x.toString()); // T = number, U = string
    // hasil = ["1", "2", "3"]
    // -----------------------------------------------------------
    // Contoh 3: Fungsi filter generic untuk array
    // -----------------------------------------------------------
    function filterCollection(items, predicate) {
        const result = [];
        for (const item of items) {
            if (predicate(item)) {
                result.push(item);
            }
        }
        return result;
    }
    const ganjil = filterCollection([1, 2, 3, 4], (x) => x % 2 !== 0); // [1, 3]
    // -----------------------------------------------------------
    // Contoh 4: Fungsi reduce generic untuk array
    // -----------------------------------------------------------
    function reduceCollection(items, reducer, initial) {
        let result = initial;
        for (const item of items) {
            result = reducer(result, item);
        }
        return result;
    }
    const total = reduceCollection([1, 2, 3], (sum, val) => sum + val, 0); // hasil: 6
    // -----------------------------------------------------------
    // Contoh 5: Menggunakan generic pada Set
    // -----------------------------------------------------------
    function setToArray(input) {
        return Array.from(input);
    }
    const dataSet = new Set([10, 20, 30]);
    const arrayFromSet = setToArray(dataSet); // [10, 20, 30]
    // -----------------------------------------------------------
    // Contoh 6: Menggunakan generic pada Map
    // -----------------------------------------------------------
    function mapValues(map, transform) {
        const result = new Map();
        for (const [key, value] of map.entries()) {
            result.set(key, transform(value, key));
        }
        return result;
    }
    const angkaMap = new Map([
        ["a", 1],
        ["b", 2],
    ]);
    const mapHasil = mapValues(angkaMap, (val) => val * 10); // Map { "a" => 10, "b" => 20 }
    // -----------------------------------------------------------
    // Contoh 7: Menggunakan Record<K, V> (object berbasis key generic)
    // -----------------------------------------------------------
    function objectValues(obj) {
        return Object.values(obj);
    }
    const orang = {
        user1: { name: "Rafa", age: 20 },
        user2: { name: "Jamal", age: 25 },
    };
    const daftarOrang = objectValues(orang); // Array<{ name: string; age: number }>
    // -----------------------------------------------------------
    // Kenapa harus pakai Collection Generic Function?
    // -----------------------------------------------------------
    // - Karena koleksi data bisa memiliki berbagai tipe elemen
    // - Dengan generic, kita bisa menjaga agar transformasi/akses/operasi tetap type-safe
    // - Bisa digunakan kembali untuk array string, number, objek, dst tanpa duplikasi
    // - Cocok untuk data pipelines, utility tools, dan framework yang fleksibel
    // Tanpa generic, kita akan perlu buat fungsi duplikat:
    // function mapString(arr: string[], fn: (s: string) => string) { ... }
    // function mapNumber(arr: number[], fn: (n: number) => number) { ... }
    // → padahal bisa 1 fungsi generic saja
    // -----------------------------------------------------------
    // Manfaat Collection Generic Function
    // -----------------------------------------------------------
    // - Meningkatkan reusability
    // - Menjaga keamanan tipe (type safety) dari setiap item dalam koleksi
    // - Mengurangi error runtime karena kesalahan tipe data
    // - Mempercepat pengembangan karena TypeScript bantu deteksi kesalahan saat coding
    // - Memberikan pengalaman autocomplete yang akurat
    // -----------------------------------------------------------
    // Kesimpulan:
    // -----------------------------------------------------------
    // - Collection Generic Function = fungsi yang beroperasi pada koleksi (array, set, map, record) secara generic
    // - Menggunakan type parameter seperti T, K, V, U untuk menentukan tipe item
    // - Bisa digunakan untuk map, filter, reduce, konversi, ekstraksi, dst
    // - Sangat bermanfaat untuk membuat tools pemrosesan data yang fleksibel dan aman
    // - Banyak digunakan di library umum, helper function, bahkan framework besar seperti React dan RxJS
    // -----------------------------------------------------------
    // Tips Best Practice:
    // -----------------------------------------------------------
    // - Selalu gunakan generic jika fungsi beroperasi pada array atau struktur data fleksibel
    // - Tambahkan constraint (extends) jika kamu butuh akses property tertentu (misalnya .id, .length, dll)
    // - Gunakan nama parameter tipe yang jelas (T, U, V, K) untuk readability
    // - Hindari hardcoded tipe seperti any[], object[] jika kamu bisa gunakan generic
    // ===================================================================
    // Itulah penjelasan sangat amat lengkap tentang Collection Generic Function
    // ===================================================================
});
