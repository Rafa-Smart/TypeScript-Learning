"use strict";
it("testing", () => {
    class Entry {
        constructor(nama, umur) {
            this.nama = nama;
            this.umur = umur;
        }
    }
    const data = new Entry('rafa', 15);
    console.log(data.nama);
    console.log(data.umur);
    class Triple {
        constructor(nama, umur, hobi) {
            this.nama = nama;
            this.umur = umur;
            this.hobi = hobi;
        }
    }
    // gini juga bisa, karena sudah ada di constructor
    // jadi tipenya lagsung otomatis dibaca dari constructornya
    const hasil = new Triple('rafa', 15, true);
    console.log(hasil);
    // tapi kalo misalkan tidak ad di dalam constructor maka 
    // ts tidak bisa otomatis cek bahwa dia tipenya itu apa
    // dan akan otomatis mnejadi any
    class SimpleGeneric {
        setValue(value) {
            this.value = value;
        }
        getValue() {
            return this.value;
        }
    }
    it('should create simple generic', async () => {
        const simple = new SimpleGeneric();
        simple.setValue("Jamal");
        // ini akan erorr kalo misalkan kita tntukan
        // tipe genericnya
        // misal tiep genericnya menjadi string
        // simple.setValue(100);
        // simple.setValue(true);
        expect(simple.getValue().toUpperCase()).toBe("Jamal"); // bisa
        expect(simple.getValue()?.toUpperCase()).toBe("Jamal"); // bisa
        // tanda ! artinya Saya yakin hasilnya adalah string, bukan undefined. 
        // Jadi lanjutkan saja tanpa komplain.
        // dan bedanya dengan ? adlah
        // jika const data:(undefined|string) = 'rafa'
        // ! = artinya kita menetapkan bahwa nilai tersebut
        // itu pasti string, jadi kayak assertion
        // tapi kalo ? itu 
        // jika dia tidak undefined atu null maka berati string, dan jalankan methodnya
        // jika dia beneran stirng maka tetap jalankan methodnya
    });
    console.log('===================');
    // Multiple Generic Function adalah fungsi generic yang memiliki
    // lebih dari satu parameter tipe (type parameter).
    // Dengan kata lain, kita dapat menggunakan dua atau lebih jenis
    // generic dalam satu fungsi untuk menangani data dari berbagai tipe,
    // sekaligus menjaga fleksibilitas dan keamanan tipe (type safety).
    // Mengapa perlu multiple generic?
    // -------------------------------
    // Kadang, satu parameter generic tidak cukup untuk merepresentasikan struktur data
    // atau relasi antar tipe data. Misalnya:
    // - pasangan key-value
    // - transformasi tipe dari input ke output
    // - fungsi penggabung dua nilai yang tipenya berbeda
    // - pemetaan atau hubungan antar entitas yang tipenya berbeda
    // Sintaks umum:
    // function namaFungsi<T, U>(param1: T, param2: U): ReturnType { ... }
    // T dan U adalah nama-nama type parameter. Kita bisa pakai nama lain seperti K, V, X, Y, dsb.
    // Contoh paling sederhana:
    function combine(a, b) {
        return { first: a, second: b };
    }
    // Pemakaian:
    const hasil1 = combine(10, "sepuluh"); // T = number, U = string
    const hasil2 = combine(true, 99); // T = boolean, U = number
    // TypeScript tahu hasilnya akan berupa objek dengan property `first` dan `second` yang sesuai tipe-nya
    // Cara kerja:
    // -----------
    // Saat fungsi dipanggil, TypeScript akan mencoba menyimpulkan (infer) tipe dari masing-masing parameter.
    // Jika tidak diberikan secara eksplisit, maka TypeScript akan melihat dari argumen yang dikirim.
    // Bisa juga diberikan eksplisit seperti:
    // combine<string, boolean>("ya", false);
    // Contoh fungsi multiple generic dengan relasi:
    // ---------------------------------------------
    function mapValue(key, value) {
        const map = new Map();
        map.set(key, value);
        return map;
    }
    const myMap = mapValue(1, "satu");
    // Dalam contoh di atas, fungsi `mapValue` bisa bekerja untuk semua kombinasi key-value
    // tanpa harus membuat fungsi untuk tiap tipe secara manual
    // Contoh fungsi multiple generic yang menggabungkan dua array berbeda:
    function mergeArrays(arr1, arr2) {
        return [...arr1, ...arr2];
    }
    const angka = [1, 2, 3];
    const huruf = ["a", "b", "c"];
    const digabung = mergeArrays(angka, huruf); // tipe: (number | string)[]
    // Contoh fungsi dengan constraint pada salah satu generic:
    // --------------------------------------------------------
    function getProperty(obj, key) {
        return obj[key];
    }
    const user = { id: 1, name: "Rafa" };
    const namaUser = getProperty(user, "name"); // T = { id: number, name: string }, K = "name"
    // Di sini, K harus merupakan key dari T. Ini adalah bentuk penggunaan multiple generic dengan relasi antar tipe.
    // Contoh dengan callback function transform
    function transform(input, fn) {
        return fn(input);
    }
    const result = transform("123", (s) => parseInt(s)); // T = string, U = number
    // Kenapa harus pakai multiple generic?
    // ------------------------------------
    // - Karena tipe dari parameter dan return value seringkali saling tergantung satu sama lain
    // - Karena banyak fungsi utilitas atau library seperti React, RxJS, Lodash, dan lain-lain menggunakan ini
    // - Membuat kode lebih reusable, fleksibel, scalable
    // - Menyediakan pengalaman autocomplete & type-checking yang sangat kuat
    // Contoh nyata di dunia nyata:
    // ----------------------------
    // - `Promise<T>` dan `Record<K, V>` adalah bentuk penggunaan generic tunggal dan ganda
    // - Saat bekerja dengan form, request-response, relasi antar entitas
    // Contoh utility: swap posisi dua nilai berbeda
    function swap(a, b) {
        return [b, a];
    }
    const tukar = swap("first", 123); // hasil: [123, "first"]
    function makePair(key, value) {
        return { key, value };
    }
    const pasangan = makePair("usia", 25);
    // Penambahan default generic type:
    // -------------------------------
    // Kita bisa memberikan default untuk type parameter:
    function withDefault(a, b) {
        return [a, b];
    }
    const def1 = withDefault("hello", 99); // T = string, U = number
    const def2 = withDefault(undefined, 88); // tetap valid karena default T = string
    // Kesimpulan:
    // -----------
    // - Multiple Generic Function = fungsi dengan lebih dari 1 type parameter (T, U, dsb)
    // - Sangat berguna untuk menggambarkan relasi antar tipe data yang berbeda
    // - TypeScript akan meng-infer tipe, atau kamu bisa tulis secara eksplisit
    // - Dapat dikombinasikan dengan constraint (`extends`) dan default value (`= ...`) agar fleksibel dan aman
    // - Banyak digunakan di fungsi utility, pemetaan, API, data pipeline, collection handler, dll
    // - Sangat disarankan dalam proyek besar untuk menjaga type-safety dan keterbacaan kode
    // Best Practice:
    // --------------
    // - Gunakan nama parameter tipe yang konsisten dan deskriptif jika kompleks (misalnya: TKey, TValue, TResult)
    // - Tambahkan constraint jika ada dependensi antar tipe
    // - Hindari membuat terlalu banyak type parameter jika tidak benar-benar dibutuhkan (keep simple)
    // ================================================
    // Itulah penjelasan lengkap tentang multiple generic
    // function di TypeScript dalam satu file
    // ================================================
});
