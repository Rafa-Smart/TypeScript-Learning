describe("testing", () => {
  it("test", () => {
    console.log("test");
  });
  //   pertanyaan saya:
  // Apa fungsi yang benar-benar membedakan polymorphism dibanding fitur OOP lainnya?

  // JAWABAN INTI:
  // Polymorphism membolehkan kamu memanggil method yang sama di objek berbeda, dan mereka merespons dengan cara berbeda

  // ANALOGI:
  // Kamu punya 3 objek:
  // - Kucing: bersuara() => "Meong"
  // - Anjing: bersuara() => "Guk guk"
  // - Sapi: bersuara() => "Moo"

  // Dengan polymorphism, kamu cukup buat satu fungsi umum:

  //   function suaraSemua(hewan) {
  //     hewan.bersuara();
  //   }

  //   // Fungsi ini bisa dipakai untuk SEMUA jenis hewan,
  //   // meskipun masing-masing punya implementasi `bersuara()` yang berbeda

  //   // TANPA polymorphism, kamu harus tulis banyak fungsi berbeda:

  //   function suaraKucing(kucing) {
  //     kucing.bersuara();
  //   }
  //   function suaraAnjing(anjing) {
  //     anjing.bersuara();
  //   }
  //   function suaraSapi(sapi) {
  //     sapi.bersuara();
  //   }

  // BEDANYA DENGAN FITUR OOP LAIN:
  // - Class: struktur atau cetak biru objek
  // - Interface: kontrak atau bentuk yang harus diikuti objek
  // - Inheritance: mewarisi properti dan method dari class lain
  // - Polymorphism: menjalankan method yang sama, tapi hasilnya berbeda tergantung objeknya

  // CONTOH PENGGUNAAN PALING KUAT:
  // Misal kita punya interface Pembayaran

  class Pembayaran {
    bayar():void {
      console.log("Melakukan pembayaran umum");
    }
  }

  class QRIS extends Pembayaran {
    bayar() {
      console.log("Bayar pakai QRIS");
    }
  }

  class BankTransfer extends Pembayaran {
    bayar() {
      console.log("Bayar via transfer bank");
    }
  }

  class PayPal extends Pembayaran {
    bayar() {
      console.log("Bayar dengan PayPal");
    }
  }

  // Fungsi polymorphik:

  function prosesPembayaran(pembayaran: Pembayaran) {
    pembayaran.bayar();
  }

  // Sekarang kita bisa memanggil satu fungsi untuk banyak jenis pembayaran:
  prosesPembayaran(new QRIS()); // Bayar pakai QRIS
  prosesPembayaran(new BankTransfer()); // Bayar via transfer bank
  prosesPembayaran(new PayPal()); // Bayar dengan PayPal

  // KEKUATAN UTAMA POLYMORPHISM:
  // 1. Kode lebih abstrak dan fokus ke APA YANG DILAKUKAN, bukan SIAPA YANG MELAKUKAN
  // 2. Kode tidak perlu diubah ketika ada class baru (misal Tambah ShopeePay tinggal buat class baru saja)
  // 3. Mendukung pola desain modern (seperti Strategy, State, Command), yang sangat bergantung pada polymorphism

  // TANPA POLYMORPHISM:
  // - Harus menulis banyak fungsi manual
  // - Banyak if/switch cek tipe objek => boros, rawan error
  // - Tidak scalable, tidak clean

  // PERUMPAMAAN:
  // Kamu punya satu tombol: "Mainkan Musik"
  // Tombol itu bisa memainkan Spotify, YouTube, File Lokal
  // Objek-nya berbeda, tapi tombolnya tetap sama

  // Itulah polymorphism: satu interface/fungsi/tombol, banyak perilaku tergantung objek di belakangnya

  // KESIMPULAN AKHIR:
  // Polymorphism = menyediakan satu interface umum untuk banyak implementasi berbeda
  // Ciri khas: method yang sama, tapi perilaku berbeda tergantung objek
  // Kegunaan utama: menyederhanakan kode, menghindari duplikasi, mempermudah perluasan sistem
});
