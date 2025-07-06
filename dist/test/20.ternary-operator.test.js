"use strict";
console.clear();
// sama aja kayak di js
// Ternary operator (juga dikenal sebagai conditional operator) adalah
// bentuk singkat dari if-else, yang menulis ekspresi kondisi dalam satu baris.
// Disebut "ternary" karena melibatkan **tiga bagian**:
// 1. Kondisi (condition)
// 2. Nilai jika kondisi benar (true)
// 3. Nilai jika kondisi salah (false)
// ===================================================================
// * BAGAIMANA CARA KERJANYA?
// ===================================================================
// Format umum ternary operator:
// kondisi ? nilaiJikaTrue : nilaiJikaFalse
// Cara kerjanya:
// - Kondisi dievaluasi terlebih dahulu
// - Jika hasilnya true → ekspresi akan menghasilkan nilaiJikaTrue
// - Jika hasilnya false → ekspresi akan menghasilkan nilaiJikaFalse
// ===================================================================
// * CONTOH DASAR TERNARY OPERATOR
// ===================================================================
// let umur: number = 20;
// let status: string = umur >= 18 ? "Dewasa" : "Anak-anak";
// console.log(status); // ✅ Output: Dewasa
// Sama dengan if-else biasa:
// if (umur >= 18) {
//   status = "Dewasa";
// } else {
//   status = "Anak-anak";
// }
// ===================================================================
// * MENGAPA HARUS PAKAI TERNARY OPERATOR?
// ===================================================================
// ✅ Menulis logika if-else sederhana dalam satu baris
// ✅ Kode lebih ringkas dan jelas
// ✅ Cocok untuk ekspresi atau penugasan nilai
// ✅ Umumnya digunakan dalam React/Angular/templating logic
// ===================================================================
// * CONTOH PENGGUNAAN DALAM OUTPUT LANGSUNG
// ===================================================================
// let login: boolean = true;
// console.log(login ? "Selamat datang!" : "Silakan login dulu.");
// // Output: Selamat datang!
// ===================================================================
// * TERNARY BERSARANG (NESTED TERNARY)
// ===================================================================
// Boleh digunakan, tapi harus hati-hati agar tetap terbaca
// let nilai: number = 82;
// let grade: string = nilai >= 90
//   ? "A"
//   : nilai >= 80
//   ? "B"
//   : nilai >= 70
//   ? "C"
//   : "D";
// console.log(grade); // ✅ Output: B
// Ini setara dengan:
// if (nilai >= 90) grade = "A";
// else if (nilai >= 80) grade = "B";
// else if (nilai >= 70) grade = "C";
// else grade = "D";
// ===================================================================
// * TERNARY UNTUK MENENTUKAN NILAI DEFAULT
// ===================================================================
let namaPengguna = undefined;
let namaFinal = namaPengguna ? namaPengguna : "Tamu";
console.log(namaFinal); // Output: Tamu
// Ini juga bisa disingkat dengan operator logika `||`:
// let namaFinal = namaPengguna || "Tamu";
// ===================================================================
// * TERNARY UNTUK RETURN LANGSUNG DI FUNGSI
// ===================================================================
function cekGanjilGenap(n) {
    return n % 2 === 0 ? "Genap" : "Ganjil";
}
console.log(cekGanjilGenap(7)); // Ganjil
console.log(cekGanjilGenap(10)); // Genap
// ===================================================================
// * CONTOH TERNARY DI DALAM JSX (React) — (opsional untuk frontend)
// ===================================================================
// {isLoggedIn ? <Dashboard /> : <Login />}
// ===================================================================
// * PERBANDINGAN IF-ELSE vs TERNARY
// ===================================================================
// let gaji = 4000000;
// let hasil =
//   gaji >= 5000000
//     ? "Gaji Tinggi"
//     : gaji >= 3000000
//     ? "Gaji Cukup"
//     : "Gaji Rendah";
// console.log(hasil); // Output: Gaji Cukup
// Sangat ringkas dibandingkan if-else panjang
// ===================================================================
// * KESALAHAN UMUM SAAT MENGGUNAKAN TERNARY
// ===================================================================
// ❌ Menggunakan ternary untuk logika kompleks atau banyak percabangan
// ❌ Menggunakan ternary hanya untuk efek samping (tanpa assignment atau return)
// ❌ Tidak menggunakan kurung untuk memperjelas logika bersarang
// Contoh buruk:
umur >= 18
    ? console.log("Dewasa")
    : console.log("Anak-anak"); // valid tapi tidak disarankan
// Lebih baik pakai if biasa untuk logika seperti itu
// ===================================================================
// * BEST PRACTICES TERNARY OPERATOR
// ===================================================================
// ✅ Gunakan untuk kondisi singkat (satu baris)
// ✅ Hindari ternary bersarang terlalu dalam
// ✅ Gunakan kurung `()` jika perlu memperjelas ekspresi
// ✅ Gunakan ternary untuk return, assignment, atau output
// ❌ Hindari ternary hanya untuk mengeksekusi efek samping
// ===================================================================
// * KESIMPULAN
// ===================================================================
// - Ternary operator adalah cara singkat untuk menulis if-else
// - Format: kondisi ? hasilJikaTrue : hasilJikaFalse
// - Cocok untuk logika sederhana dan ekspresi nilai
// - Tidak cocok untuk logika kompleks
// - Menjadikan kode lebih ringkas dan expressive
