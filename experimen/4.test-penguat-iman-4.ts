it("test", () => {
  // jadi file ini tuh penguat dari file 4.test-interface-array.ts

  // jadi sebuah interface dikit itu bsia cocok dnegn interface banyak,
  // karena salahsatu property / method dari ineterface banyak
  // dimiliki oleh interface dikit

  interface Banyak {
    nama: string;
    umur: number;
    kelas: string;
  }

  interface Dikit {
    nama: string;
  }

  // nah secara struktur interface dikit itu sma dengan interface banyak
  // tapi interface bnyak tidak sama dengan interface dikit

  const databanyak: Banyak = {
    nama: "rafa",
    umur: 25,
    kelas: "10pplg2",
  };

  const dataDikit: Dikit = databanyak;

  // nah ini bsia, padahal secara keseluruhan interface Dikit ini tidak sama dnegna interface Banyak
  // tapi karena interface DIkit ini punya beberapa proprety dari interface Banyak
  // maka dianggap sama

  // ini yang ternjadi di file 4.test-interface-array.ts

  // nah kalo dibalik ini ga akn sama
  const data3: Dikit = {
    nama: "jamal",
  };
  // const data4:Banyak = data3
  // ga bisa -> error
});

it("testing", () => {
  interface MyArray2 {
    [index: number]: number;
    length: number;
  }

  // jadi yang terjadi di MyArray2

  const data: MyArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  //   ini bisa (seperti penjelasan diatas)

  //   dan sebenarnya itu adalah seperti ini
  const data2: MyArray2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

  //   nah si new Array ini sudah di implementasid an juga sudah implements dari si interface ArrayInterface
  // yait interface yang sudah punya banyak method dan property, dan
  // segala method dan property ini sudah digunakan / sudah di implementasi di clas Array ini

  //   jadi kalo pada data:MyArray2 2 dia ingin megakses length, dia hanya perlu menambhakan propperty length di
  // interafacenya
  // dan property lengthnya ini tidak perlu kita buat dulu implementasinya, karena sudah langusng menambil dari si
  // class Array yang sudah implements dari si ArrayInterface
});


// dan itu namanya adalah polymorphism