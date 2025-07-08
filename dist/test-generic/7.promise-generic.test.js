"use strict";
it("test", () => {
    // Promise Generic Function adalah fungsi yang:
    // - Mengembalikan Promise
    // - Memiliki generic type parameter (seperti T, U, dsb)
    // - Jenis nilai (value) yang dibungkus dalam Promise itu bersifat generic/fleksibel
    // Secara sederhana:
    // Kita membuat fungsi async (atau fungsi biasa yang mengembalikan Promise),
    // dan menentukan tipe data di dalam Promise itu menggunakan generic.
    // Tujuan:
    // - Mengizinkan kita membuat fungsi async yang reusable untuk berbagai jenis data
    // - Menjaga type safety dari data async
    // - Menyediakan hasil dengan tipe yang tetap dikenali oleh TypeScript saat resolved
    // -----------------------------------------------------------
    // Sintaks Umum:
    // function namaFungsi<T>(...): Promise<T> {
    //   return Promise.resolve(data as T);
    // }
    // Atau versi async:
    // async function namaFungsi<T>(...): Promise<T> {
    //   return data as T;
    // }
    // -----------------------------------------------------------
    // Contoh 1: Fungsi promise generic sederhana
    // -----------------------------------------------------------
    function delayValue(value, ms) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(value), ms);
        });
    }
    // Pemakaian:
    delayValue("hello", 1000).then((res) => {
        console.log(res.toUpperCase()); // TypeScript tahu ini string
    });
    delayValue(123, 500).then((res) => {
        console.log(res.toFixed(2)); // TypeScript tahu ini number
    });
    // -----------------------------------------------------------
    // Contoh 2: Fungsi async generic
    // -----------------------------------------------------------
    async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    fetchData("https://api.example.com/user/1").then((user) => {
        console.log(user.name); // TypeScript tahu user adalah User
    });
    async function fetchEntity(url) {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }
    // Karena kita batasi T harus punya `id`, maka kita bisa pakai `entity.id` tanpa takut error
    fetchEntity("...").then((entity) => {
        console.log(entity.id); // aman karena constrained
    });
    // -----------------------------------------------------------
    // Contoh 4: Promise dengan Multiple Generic
    // -----------------------------------------------------------
    function apiResponse(success, data, error) {
        return new Promise((resolve) => {
            resolve({ success, data, error });
        });
    }
    apiResponse(true, "data berhasil").then((res) => {
        if (res.success && res.data) {
            console.log(res.data.toUpperCase()); // TypeScript tahu data adalah string
        }
    });
    // -----------------------------------------------------------
    // Catatan Penting:
    // -----------------------------------------------------------
    // - Saat kamu membuat Promise, kamu harus pastikan nilai yang direturn cocok dengan tipe `T`
    // - Kalau kamu tidak tahu pasti bentuk data yang dikembalikan, kamu bisa pakai T = unknown atau any
    // - Tapi sebaiknya selalu gunakan tipe eksplisit untuk keamanan
    // -----------------------------------------------------------
    // Kesimpulan:
    // -----------------------------------------------------------
    // - Promise Generic Function = fungsi yang mengembalikan Promise<T>
    // - T bisa berupa tipe apa saja: string, object, number, array, dll
    // - TypeScript akan menjaga type safety saat .then(), await, dsb
    // - Bisa dibuat async function atau function biasa yang return Promise
    // - Sangat berguna untuk operasi asynchronous seperti:
    //   fetch data, delay, API, simulasi async, manipulasi async
    // - Bisa dikombinasikan dengan constraint (extends), default generic,
    //   dan multiple generic untuk hasil lebih kuat
    // -----------------------------------------------------------
    // Best Practice:
    // -----------------------------------------------------------
    // - Gunakan generic di Promise saat data yang dikembalikan bervariasi tapi kamu ingin tetap type-safe
    // - Hindari penggunaan `any`, gunakan tipe yang jelas agar tidak kehilangan fitur TypeScript
    // - Tambahkan constraint jika fungsi kamu mengharuskan bentuk tertentu dari `T`
    // - Gunakan alias interface/type untuk data kompleks agar lebih terbaca dan maintainable
    // =====================================================================
    // Itulah penjelasan lengkap dan menyeluruh tentang Promise Generic Function
    // =====================================================================
});
