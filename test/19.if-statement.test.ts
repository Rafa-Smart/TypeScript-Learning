

console.clear();



it('test...', () => {
    console.log('test')
})



// jadi sebenarnya itu sama aja kayak di js


// `if` statement adalah struktur kendali (control flow) dalam pemrograman
// yang digunakan untuk **mengeksekusi blok kode hanya jika suatu kondisi bernilai true**.

// ===================================================================
// * MENGAPA MENGGUNAKAN IF STATEMENT?
// ===================================================================
// ✅ Untuk membuat keputusan dalam program
// ✅ Untuk mengontrol alur logika berdasarkan kondisi tertentu
// ✅ Untuk menangani situasi yang bervariasi secara fleksibel
// ✅ Untuk menghindari eksekusi kode yang tidak perlu

// ===================================================================
// * STRUKTUR DASAR IF STATEMENT
// ===================================================================

// let angka: number = 10;

// if (angka > 5) {
//   console.log("Angka lebih besar dari 5"); // ✅ ini akan dijalankan
// }

// ===================================================================
// * IF - ELSE
// ===================================================================

// let nilai: number = 60;

// if (nilai >= 75) {
//   console.log("Lulus");
// } else {
//   console.log("Tidak Lulus");
// }

// ===================================================================
// * IF - ELSE IF - ELSE
// ===================================================================

let skor: number = 85;

if (skor >= 90) {
  console.log("A");
} else if (skor >= 80) {
  console.log("B"); // ✅ akan dijalankan
} else if (skor >= 70) {
  console.log("C");
} else {
  console.log("D");
}

// ===================================================================
// * CARA KERJA IF STATEMENT
// ===================================================================
// 1. Kondisi di dalam tanda kurung `()` akan dievaluasi
// 2. Jika hasilnya adalah `true`, maka blok `{}` akan dijalankan
// 3. Jika hasilnya `false`, maka blok akan dilewati
// 4. Jika ada `else`, blok `else` akan dijalankan saat kondisi sebelumnya `false`

// ===================================================================
// * OPERATOR LOGIKA UNTUK IF
// ===================================================================
// - Perbandingan: >, <, >=, <=, ==, ===, !=, !==
// - Logika: && (dan), || (atau), ! (tidak)

// Contoh:

let umur: number = 25;

if (umur >= 18 && umur <= 60) {
  console.log("Usia produktif");
}

// ===================================================================
// * IF DENGAN BOOLEAN LANGSUNG
// ===================================================================

let login: boolean = true;

if (login) {
  console.log("Selamat datang!");
}

// ===================================================================
// * IF DI DALAM FUNGSI
// ===================================================================

// function cekGanjilGenap(n: number): string {
//   if (n % 2 === 0) {
//     return "Genap";
//   } else {
//     return "Ganjil";
//   }
// }

console.log(cekGanjilGenap(7)); // Ganjil
console.log(cekGanjilGenap(10)); // Genap

// ===================================================================
// * IF BERSARANG (NESTED IF)
// ===================================================================

let pengguna = {
  nama: "Rafa",
  login: true,
  role: "admin"
};

if (pengguna.login) {
  if (pengguna.role === "admin") {
    console.log("Akses admin diberikan");
  } else {
    console.log("Akses user diberikan");
  }
} else {
  console.log("Silakan login terlebih dahulu");
}

// ===================================================================
// * IF DALAM TERNARY (ALTERNATIF SINGKAT)
// ===================================================================
// Format: kondisi ? nilai_jika_true : nilai_jika_false

// let usia: number = 17;
// let status = usia >= 18 ? "Dewasa" : "Anak-anak";
// console.log(status); // Anak-anak

// ===================================================================
// * BEST PRACTICES
// ===================================================================
// ✅ Gunakan === daripada == untuk perbandingan tipe yang ketat
// ✅ Gunakan if-else untuk pilihan logika yang jelas
// ✅ Hindari nested if terlalu dalam — bisa dipecah jadi fungsi
// ✅ Gunakan ternary hanya untuk kondisi sederhana
// ✅ Gunakan kurung kurawal `{}` bahkan untuk blok satu baris agar aman dan konsisten

// ===================================================================
// * KESIMPULAN
// ===================================================================
// - `if` digunakan untuk mengontrol alur eksekusi berdasarkan kondisi
// - Bisa dikombinasikan dengan `else` dan `else if`
// - Bisa digunakan dalam fungsi, objek, dan kontrol logika lainnya
// - Digunakan hampir di semua program untuk membuat keputusan
// - Sangat penting dikuasai oleh setiap programmer








