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
