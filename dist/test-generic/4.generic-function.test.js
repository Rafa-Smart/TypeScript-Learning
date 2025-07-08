"use strict";
console.clear();
// jadi itereble itu adlah interface dan sebuah kontrak
// NANTI LIAT LAGI ISI DARI ARRAY<T> keren banget
it("testing", () => {
    // interface arr extends Array<number> {
    //     [index: number]: number;
    //     [Symbol.iterator](): IterableIterator<number>;
    // }
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Versi lebih type-safe dari fungsi myMap7
    function myMap7(data, 
    // data: Iterable<T>, bisa juga
    fn) {
        let hasil = [];
        let index = 0;
        for (const elemen of data) {
            hasil.push(fn(elemen, index));
            index++;
        }
        return hasil;
    }
    // Pemanggilan yang benar
    //   const hasil7 = myMap7(data, (elemen: number) => elemen.toString());
    // Atau lebih eksplisit:
    const hasil7 = myMap7(data, (elemen) => {
        return elemen.toString();
    });
    console.log(hasil7); // ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    // Generic Function (fungsi generic) adalah fungsi yang dirancang
    // untuk bekerja dengan berbagai macam tipe data tanpa kehilangan
    // informasi tipe (type safety).
    // Dengan generic, kita bisa menulis satu fungsi yang fleksibel
    // dan dapat digunakan untuk berbagai tipe data.
    // Tujuan utama generic function:
    // - Menghindari penulisan kode yang berulang untuk tiap tipe
    // - Menjaga keamanan tipe (type safety) tanpa mengorbankan fleksibilitas
    // - Mendukung reusability dan maintainability yang lebih baik
    // Sintaks dasar:
    // function namaFungsi<T>(param: T): T {
    //   return param;
    // }
    // T (atau bisa juga pakai nama lain seperti U, K, V, dsb) disebut sebagai "type parameter"
    // Ini bukan nilai nyata, tapi placeholder untuk jenis data yang akan digunakan saat pemanggilan
    //   coba lagi
    //   elemen ini T karena ikut dari si data[i] nah data itu kan T jadi data[i] sama dengan T
    function mymap8(data, fungsi) {
        let hasil = [];
        for (let i = 0; i < data.length; i++) {
            hasil.push(fungsi(data[i], i, data));
        }
        return hasil;
    }
    let data8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const hasil8 = mymap8(data8, (elemen) => {
        return elemen.toString();
    });
    console.log(hasil8);
    // Contoh paling dasar:
    function identity(value) {
        return value;
    }
    // Pemakaian:
    // Tipe T akan otomatis diprediksi dari argumen:
    const angka = identity(123); // T = number
    const teks = identity("Hello"); // T = string
    // Kita juga bisa secara eksplisit mendefinisikan tipe-nya saat memanggil:
    const manual = identity("TypeScript");
    // Tanpa generic, kita mungkin menulis fungsi berbeda untuk setiap tipe:
    // function identityNumber(value: number): number { return value; }
    // function identityString(value: string): string { return value; }
    // Generic menyederhanakan semuanya dalam satu fungsi
    // Bagaimana cara kerjanya?
    // ------------------------
    // Saat fungsi dipanggil, TypeScript akan "mengikat" (infer) tipe `T`
    // berdasarkan tipe dari argumen yang diberikan.
    // Maka, tipe `T` bisa berubah-ubah tergantung dari panggilan fungsi.
    // Kita bisa menambahkan banyak type parameter jika perlu:
    function pair(key, value) {
        return { key, value };
    }
    const data1 = pair("id", 101); // key = string, value = number
    const data2 = pair(true, "aktif");
    // Mengapa harus pakai generic function?
    // -------------------------------------
    // - Karena membantu kita menulis fungsi yang fleksibel tanpa kehilangan manfaat dari type checking
    // - Cocok untuk utilitas seperti array, filter, transformasi data, handler, pembungkus (wrapper), dsb
    // - Memungkinkan kita membuat komponen reusable yang aman untuk digunakan dengan tipe apa pun
    // Contoh fungsi generic yang menerima array dan mengembalikannya:
    function firstElement(arr) {
        return arr[0];
    }
    const elemen1 = firstElement([1, 2, 3]); // 1
    const elemen2 = firstElement(["a", "b", "c"]); // "a"
    // TypeScript tahu elemen dalam array adalah number atau string secara otomatis
    // Contoh fungsi generic dengan constraint (pembatasan)
    // ----------------------------------------------------
    // Kadang kita ingin type parameter hanya boleh memiliki sifat tertentu
    // Kita bisa pakai `extends` untuk membatasi
    function getLength(item) {
        return item.length;
    }
    getLength("hello"); // OK, string punya length
    getLength([1, 2, 3]); // OK, array juga punya length
    // getLength(123); // Error: number tidak punya property length
    // Contoh generic dengan default type parameter
    // --------------------------------------------
    function wrapValue(value) {
        return { data: value };
    }
    const nilai1 = wrapValue(123); // { data: number }
    //   const nilai2 = wrapValue(); // dianggap sebagai { data: string }
    // Generic juga sangat sering digunakan di library/library besar:
    // Contoh:
    function mapArray(array, transform) {
        const result = [];
        for (const item of array) {
            result.push(transform(item));
        }
        return result;
    }
    const asal = [1, 2, 3];
    const hasil = mapArray(asal, (x) => x.toString()); // hasil: ["1", "2", "3"]
    // T = number, U = string
    // TypeScript tahu bahwa fungsi transform menerima number dan mengembalikan string,
    // maka hasil akhirnya adalah string[]
    // Bisa juga digunakan untuk callback, promise, dan data fetcher:
    function fetchData(url) {
        return fetch(url).then((res) => res.json());
    }
    // fetchData<UserType>("https://...").then((user) => user.id);
    // Kesimpulan penting:
    // -------------------
    // - Generic Function memungkinkan kita menulis satu fungsi untuk banyak tipe
    // - Menjaga type-safety sambil tetap fleksibel
    // - Sering digunakan untuk membuat fungsi utilitas, manipulasi data, callback, dan API
    // - Bisa dikombinasikan dengan constraint (`extends`) dan default value (`=`) untuk lebih fleksibel
    // - Sangat krusial dalam membangun aplikasi TypeScript yang kuat, reusable, dan scalable
    // Tips Best Practice:
    // -------------------
    // - Gunakan nama type parameter yang jelas jika ada banyak (T, U, K, V, dll)
    // - Gunakan constraint untuk membatasi agar tetap aman
    // - Gunakan generic jika tipe data hasil bisa bervariasi tergantung input
    // - Hindari over-generic jika sebenarnya tidak dibutuhkan
    // ==========================================
    // Sekian penjelasan super lengkap tentang
    // Generic Function di TypeScript
    // ==========================================
});
