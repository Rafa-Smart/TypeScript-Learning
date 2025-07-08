// jadi sama aja seperti array yang ada di js
// tapi kita harus mendeklarasikan bahwa ini adalah array

// jadi ktia bsia pake
// tipedata[] / Array<tipedata>(generik)

it("testing 1...", () => {
  const mhs: string[] = ["rafa", "jamal", "siti"];
  console.group(mhs);
});

it('read only array', () => {
    // jadi disini kita akn membuat data array
    // yag hanya bsia di baca saja
    // jadi tidak bisa di ubah ubah lagi
    // dengan cara tipe data readonly

    // meskipun ketika nanti kodenya diubah ke js, ini akan tetap bisa diubah
    // jadi yang menjaganya itu adaalh si tsnya

    // jadi kalo liat di kodejsnya tetap sama aja
    // tapi di js bisa dirubah, tapi ketika di file ts akan dijaga oleh si tsnya

    interface ReadonlyArray<T> {
      push(...items: T[]): number;
    }

    let dataArray1: ReadonlyArray<number> = [1,2,3];
    dataArray1.push()
    // tuh jadi ga bisa, karena method push ini ga ada di interface ReadonlyArray, tapi kita bisa gini
    // ohh jadi defaultnya kalo kita ga pake ReadonlyArray ini
    // maka nanti kita akan menggunakan interface Array<T>

    // jadi karena kita pake interface si ReadonlyArray
    // jadi kita hanay bisa membaca arrray ini saja
    // dan tidak bisa diubah ubah
    // karena keterbatasan akses untuk merubah 
    // karena kita menggunakan interface ReadonlyArray ini

    // jadi sama kyak extends, jadi kita new dari si Array<T>
    // tapi kita mneggunakn interface yang lain yang tidak selengkap si
    // Array, dan apakah dengn kita mengguakan interface yang terbatas
    // tapi kita new dari Array<T> yang sudah lengkap methodnya
    // tapi ketik buat instance objek nya kita mengikuti interface ReadonlyArray
    // yang lebih sedikit method arraynya

    console.log(dataArray1) // bisa

    // harusnya gini 
    // jadi penjelasa untuk Readonly ada di file 6.tipe-data-tuple
    // dan itu juga masih belum lengkap
    let dataArray2: readonly number[] = [1,2,3];
    console.log(dataArray2)
    

    // dataArray1.push(4) // ga bisa 

})



// Array adalah struktur data yang digunakan untuk menyimpan sekumpulan nilai dalam satu variabel.
// Di TypeScript (dan JavaScript), array bersifat ordered (terurut berdasarkan indeks), dan indeks dimulai dari 0.

// Mengapa menggunakan Array?
// - Menyimpan banyak data dalam satu tempat.
// - Memungkinkan pengolahan data secara efisien (loop, sort, filter, dll).
// - Cocok untuk menyimpan list, kumpulan objek, angka, string, dsb.
// - Mempermudah manajemen data dinamis dan kompleks.

// Bagaimana Cara Kerja Array?
// Array menyimpan elemen dalam indeks (mulai dari 0).
// Akses elemen dilakukan dengan notasi bracket: array[index]
// TypeScript menambahkan keamanan dengan mendefinisikan tipe data dari elemen dalam array.

// Bentuk Umum Penulisan Array di TypeScript:
// 1. Dengan tanda kurung siku:
let angka: number[] = [1, 2, 3, 4, 5];

// 2. Dengan generik:
let kata: Array<string> = ["satu", "dua", "tiga"];

// 3. Dengan union type:
let campuran: (number | string)[] = [1, "dua", 3, "empat"];

// Elemen array dapat bertipe apa saja, tetapi TypeScript menyarankan agar kamu mendefinisikan tipe elemen secara eksplisit untuk menjaga konsistensi dan keamanan tipe.

// Contoh: array berisi data mahasiswa
let mahasiswa: string[] = ["Andi", "Budi", "Citra"];

// Akses elemen array
let mahasiswaPertama = mahasiswa[0]; // "Andi"

// Mengubah isi array
mahasiswa[1] = "Bagus"; // Sekarang isi mahasiswa: ["Andi", "Bagus", "Citra"]

// Menambahkan data
mahasiswa.push("Dian"); // ["Andi", "Bagus", "Citra", "Dian"]

// Menghapus data
mahasiswa.pop(); // menghapus "Dian"

// Panjang array
let jumlahMahasiswa = mahasiswa.length; // 3

// Looping array
for (let i = 0; i < mahasiswa.length; i++) {
//   console.log(mahasiswa[i]);
}

// Menggunakan for-of
for (let nama of mahasiswa) {
//   console.log(nama);
}

// Array multidimensi (array di dalam array)
let matriks: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// Akses elemen dalam array 2 dimensi
let elemen = matriks[1][0]; // 3

// Type inference vs type annotation:
// TypeScript bisa mengira tipe elemen array jika kita langsung mengisi nilainya,
// tetapi disarankan tetap mendefinisikan tipe secara eksplisit agar lebih aman.

// Array kosong tapi bertipe number
let nilai: number[] = [];
nilai.push(100);
nilai.push(200);

// Array dengan tipe objek
type Produk = { id: number; nama: string };
// jadi kita gunakan tipe data Produk pada setiap
// elemen di arraynya

// sama kayak number[]
// jadi setiap elemen pada arraynya itu bertipe data number
let daftarProduk: Produk[] = [
  { id: 1, nama: "Laptop" },
  { id: 2, nama: "Mouse" },
];

// Menambahkan objek ke array
daftarProduk.push({ id: 3, nama: "Keyboard" });

// Array readonly (tidak bisa diubah)
let konstanta: readonly number[] = [1, 2, 3];
// konstanta.push(4) // Error: Property 'push' does not exist on type 'readonly number[]'

// Beberapa method penting pada array:
// - push()     → menambah elemen di akhir
// - pop()      → menghapus elemen terakhir
// - shift()    → menghapus elemen pertama
// - unshift()  → menambah elemen di awal
// - map()      → mengubah elemen menjadi bentuk baru
// - filter()   → menyaring elemen berdasarkan kondisi
// - find()     → mencari elemen pertama yang cocok
// - forEach()  → melakukan sesuatu untuk tiap elemen
// - includes() → mengecek apakah elemen ada dalam array
// - sort()     → mengurutkan elemen
// - reverse()  → membalik urutan elemen

// Contoh penggunaan map() dan filter()
let angkaBaru = angka.map((x) => x * 2); // [2, 4, 6, 8, 10]
let genap = angka.filter((x) => x % 2 === 0); // [2, 4]

// Kesimpulan:
// - Array adalah struktur penting untuk menyimpan banyak data
// - Di TypeScript, kamu bisa menentukan tipe array secara eksplisit
// - Array dapat digunakan untuk data sederhana maupun kompleks
// - Gunakan method array untuk memanipulasi data dengan elegan
// - TypeScript menjaga agar semua elemen array sesuai dengan tipe yang ditentukan

// Tips:
// - Selalu definisikan tipe array secara eksplisit
// - Gunakan array readonly untuk data tetap
// - Gunakan fungsi-fungsi array agar kode lebih bersih dan deklaratif
