// penamaan fungsi di inteface

{
  // 1.

  //   jadi ini fungsi sebagai property pada objek
  interface satu {
    tambah: (a: string) => void;
  }

  //   ini sebagai method dalam objke
  interface dua {
    tambah(a: string): void;
  }

  // cara pakenya
  const data1: satu = {
    tambah: (a: string): void => {
      console.log(`halo ${a}`);
    },
  };

  class satuClass implements satu {
    tambah(a: string) {
      console.log("halo");
    }
  }

  // 2

  //   ga bisa, karena interface ini itu untuk method didalam objek
  //   const data2:dua = (a:string):void => {
  //     console.log(`haloo ${a}`)
  //   }
  //   baru bisa
  const data2: dua = {
    tambah(a: string): void {
      console.log(`haloo ${a}`);
    },
  };

  class duaClass implements dua {
    tambah(a: string) {
      console.log("halo");
    }
  }
}

// ini perbandingnan yang benarnya

{
  // kalo gini berati kita buat property yang isinya method di objek
  // dan dia tidak bisa mengakses this didalam objeknya
  // makanya jangan pake ini di class
  interface satu {
    tambah: (a: string) => void;
  }

  //   kalo gini ktia buas method langusng didalam objeknya
  // dan dai bisa emngakses this ke objeknya
  interface dua {
    tambah(a: string): void;
  }

  const obj1: satu = {
    tambah: function (a) {
      console.log(this); // ❌ 'this' di sini undefined (strict mode)
    },
  };

  const obj2: dua = {
    tambah(a) {
      console.log(this); // ✅ 'this' mengacu ke obj2
    },
  };
}

{
  // kalo ini tanpa nama
  interface Hitung {
    (a: number, b: number): number;
  }

  interface HitungTambah extends Hitung {}

  // const tambah: HitungTambah = (x, y) => x + y;

  //   dan kalo tanpa namanya ada 2 di satu interface, atau dia extends
  // maka itu annti implementasinya di fungsinya ita kasih seluruh paramternya dan kasih any
  //   karena kita memaksa untuk implementasi 2 fngsi ini dalam satu fungsi
  // lihat di file 3 overload
  //   tapi ini bukan overload, karena kita pake any, jadi tidak ada batasan
}
