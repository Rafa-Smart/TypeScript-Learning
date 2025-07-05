describe("Static", () => {
  // ini sudah pernah dipelajari di js
  // dan sudah lebih lengkap disana

  // dan tidak ada bedanya
  // tapi dengan syarat

  // PERTANYAAN:
  // 1. Apakah benar static member hanya bisa mengakses static member lainnya, dan tidak bisa mengakses non-static?
  // 2. Apakah benar non-static bisa mengakses static member secara langsung?

  // JAWABAN:
  // 1.  BENAR: Static member hanya bisa mengakses static member lain dan
  //     TIDAK BISA mengakses non-static member secara langsung
  //
  // 2.  BENAR: Non-static member BISA mengakses static member secara langsung (dengan menyebutkan nama class)

  // ALASAN:
  // - Static member milik class, bukan milik instance (object)
  // - Non-static member milik instance
  // - Static context tidak tahu tentang instance yang spesifik, maka dia tidak bisa mengakses `this.property` yang bersifat instance
  // - Sebaliknya, instance punya akses penuh terhadap class-nya (termasuk static)

  // ===================== CONTOH VALIDASI DENGAN KODE =====================

  class Contoh {
    // Static property
    static nilaiStatic = 100;

    // Non-static property
    nilaiBiasa = 50;

    // Static method hanya boleh akses static property
    static tampilkanStatic() {
      console.log(`Static: ${Contoh.nilaiStatic}`); // ✅ BOLEH
      // console.log(`Non-Static: ${this.nilaiBiasa}`); // ❌ ERROR: Property 'nilaiBiasa' does not exist on type 'typeof Contoh'
    }

    // Non-static method bisa akses static dan non-static
    tampilkanSemua() {
      console.log(`Static (via class): ${Contoh.nilaiStatic}`); // ✅ BOLEH
      console.log(`Non-static: ${this.nilaiBiasa}`); // ✅ BOLEH
    }
  }

  // ===================== PEMBUKTIAN A =====================
  // Static method tidak bisa akses properti non-static

  Contoh.tampilkanStatic(); // ✅ Hanya bisa akses yang static

  // ===================== PEMBUKTIAN B =====================
  // Non-static method bisa akses keduanya

  const obj = new Contoh();
  obj.tampilkanSemua(); // ✅ Bisa akses static dan non-static sekaligus

  // ===================== KESIMPULAN =====================
  // - Static member hanya bisa akses static member lain karena berada dalam konteks class, bukan objek instance
  // - Non-static member (milik objek) bisa akses static member (milik class) karena class-nya pasti tersedia
  //
  // - Static tidak bisa gunakan `this.nilaiBiasa` karena `this` di static mengacu ke class, bukan instance
  // - Non-static bisa gunakan `Contoh.nilaiStatic` atau bahkan `this.constructor['nilaiStatic']` jika dibutuhkan

  // ✅ Jadi:
  // Static ➜ hanya bisa akses static
  // Non-static ➜ bisa akses static dan non-static

  class Configuration {
    static NAME: string = "Belajar TypeScript OOP";
    static VERSION: number = 1.0;
    static AUTHOR: string = "rafa khadafi";
  }

  class MathUtil {
    static sum(...values: number[]): number {
      let total = 0;
      for (const value of values) {
        total += value;
      }
      return total;
    }
  }

  it("should support static method", () => {
    console.info(MathUtil.sum(1, 2, 3, 4, 5));
  });

  it("should support", () => {
    console.info(Configuration.NAME);
    console.info(Configuration.VERSION);
    console.info(Configuration.AUTHOR);
  });
});
