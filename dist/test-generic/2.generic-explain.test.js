"use strict";
it("testing", () => {
    // APA ITU GENERIC?
    // Generic adalah fitur di TypeScript yang memungkinkan kita menulis kode yang reusable
    // dan tetap mempertahankan tipe datanya secara fleksibel.
    // Dengan generic, kita bisa membuat fungsi, class, interface, atau tipe yang bisa
    // menangani berbagai tipe data tanpa kehilangan informasi tipe aslinya.
    // Analoginya seperti fungsi matematika f(x), di mana 'x' bisa diganti nilai berapa pun.
    // Dalam TypeScript, kita pakai generic seperti <T>, di mana T bisa mewakili tipe apa pun.
    // KENAPA HARUS MENGGUNAKAN GENERIC?
    // - Agar kode lebih fleksibel dan reusable tanpa kehilangan keamanan tipe (type safety).
    // - Menghindari duplikasi fungsi untuk berbagai tipe (seperti number, string, dst).
    // - Meningkatkan keterbacaan dan pemeliharaan kode.
    // - Mendapatkan intellisense dan autocomplete dari tipe data yang tepat.
    // CARA PENULISAN GENERIC
    // Biasanya generic ditulis dengan huruf kapital seperti <T>, <U>, <K>, <V>, dst,
    // tetapi sebenarnya huruf apa pun bisa digunakan.
    // Contoh fungsi tanpa generic:
    // function echo(value) {
    //   return value;
    // }
    // Ini fleksibel tapi tidak aman, karena tidak tahu tipe hasilnya:
    // const result = echo("hello"); // TypeScript tidak tahu ini string atau bukan
    // CONTOH DENGAN GENERIC:
    function genericEcho(value) {
        return value;
    }
    // Penjelasan:
    // - <T> adalah parameter generic
    // - 'value: T' artinya parameter bertipe T
    // - 'return value: T' artinya hasilnya juga bertipe T
    const result1 = genericEcho("hello"); // hasilnya bertipe string
    const result2 = genericEcho(123); // hasilnya bertipe number
    const result3 = genericEcho(true); // TypeScript otomatis tahu ini boolean
    // GENERIC DI FUNCTION MULTI PARAMETER
    function combine(a, b) {
        return [a, b];
    }
    const tuple = combine("age", 25); // hasil: ["age", 25]
    function logLength(item) {
        console.log("Length:", item.length);
        return item;
    }
    // Karena dibatasi harus punya 'length', maka hanya string, array, atau objek tertentu yang valid
    logLength("hello");
    logLength([1, 2, 3]);
    const numberBox = { value: 100 };
    const stringBox = { value: "TypeScript" };
    // GENERIC DI CLASS
    class DataStore {
        constructor() {
            this.data = [];
        }
        add(item) {
            this.data.push(item);
        }
        getAll() {
            return this.data;
        }
    }
    const stringStore = new DataStore();
    stringStore.add("apple");
    stringStore.add("banana");
    console.log(stringStore.getAll()); // ["apple", "banana"]
    const numberStore = new DataStore();
    numberStore.add(10);
    numberStore.add(20);
    console.log(numberStore.getAll()); // [10, 20]
    // GENERIC DENGAN DEFAULT VALUE
    // Kita bisa memberi nilai default jika tidak diberikan secara eksplisit
    function identity(value) {
        return value;
    }
    const def1 = identity("default"); // string
    const def2 = identity(123); // number
    const point = { first: 10, second: 20 };
    const nameAge = { first: "Rafa", second: 23 };
    // GENERIC DI PROMISE
    function fetchData(url) {
        return fetch(url).then((res) => res.json());
    }
    // fetchData<User>("https://api.example.com/user/1").then(data => {
    //   console.log(data.id); // data dijamin bertipe User
    // });
    // GENERIC DENGAN KEYOF DAN IN OPERATOR
    function getProperty(obj, key) {
        return obj[key];
    }
    const user = { id: 1, name: "Rafa" };
    const userName = getProperty(user, "name"); // hasil: "Rafa"
    // GENERIC DI FUNCTION YANG MENERIMA CALLBACK
    function mapArray(arr, fn) {
        return arr.map(fn);
    }
    const numbers = [1, 2, 3];
    const strings = mapArray(numbers, (n) => `No.${n}`); // hasil: ["No.1", "No.2", "No.3"]
    const tree = {
        value: "root",
        children: [
            { value: "child1" },
            { value: "child2", children: [{ value: "grandchild1" }] },
        ],
    };
    // RANGKUMAN MANFAAT MENGGUNAKAN GENERIC:
    // - Menjaga fleksibilitas kode tanpa kehilangan type safety
    // - Menghindari pengulangan kode untuk tipe berbeda
    // - Mendukung autocompletion & pengecekan error otomatis
    // - Meningkatkan abstraksi dan kebersihan kode
    // GENERIC adalah salah satu fitur paling kuat dan penting dalam TypeScript,
    // dan menjadi landasan bagi banyak library modern seperti React, Redux, RxJS, dsb.
    // REKOMENDASI PENGGUNAAN:
    // Gunakan generic saat:
    // - Menulis fungsi atau class yang reusable untuk berbagai tipe
    // - Membuat data structure (seperti Stack<T>, Queue<T>, Tree<T>)
    // - Mengatur interaksi API atau manipulasi objek kompleks
});
