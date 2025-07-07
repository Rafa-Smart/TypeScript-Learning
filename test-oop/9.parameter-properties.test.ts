describe("test", () => {
  it("test", () => {

    // kesimpulan
    // jaid penulisan field dan penulisan this.nama = nama
    // itu wajib dua duanya
    // atau bsia juga tidak sama sekali
    // tapi kalo hanya salah satunya ditulis, maka error

    // dan penulisan public,private,protected di constructor itu adalah
    // sama seprti menuliskan dekarasi property di field

    // jadi kita bisa buat constructor lebih simple
    // tanpa harus mendeklarasikannya dulu sebagai filed public


    // contoh
    // ini cara biasa
    // class Person1 {

    // jaid kalo kita ga pake field
    // dan ga pake this.nama = nama
    // maka nanti akna Person1 {}, lihat

    // //   nama: string;
    // //   public umur: number;
    //   constructor(nama: string, umur: number) {
    //     // this.nama = nama;
    //     // this.umur = umur;
    //   }

    //   // jadi harus buat dulu fielndya, kalo engga bakalan error
    // }

    // const jamal = new Person1('jamal', 15)
    // karena parameter nama dan umur ini tidak di tarud di objeks instancenya 
    // dengan cara this.nama = nama, this itu merujuk objek instance
    // console.log(jamal) // Person1 {}


    class Person1 {
      nama: string;
      public umur: number;
      constructor(nama: string, umur: number) {
        this.nama = nama;
        this.umur = umur;
      }

      // jadi harus buat dulu fielndya, kalo engga bakalan error
    }

    const jamal = new Person1('jamal', 15)
    console.log(jamal) // Person1 {}

    // ini cara yang lebih mudah

    class Person2 {

      constructor(
        public nama: string,
        private umur: number,
        public kelas: string = "10plg2"
      ) {


        // bisa pake ini, bsia pake juga tidak
        //   this.nama = nama;
        //   this.umur = umur;
        // kalo di constructornya ga pake public
        // maka harus pake
        //   this.nama = nama;
        //   this.umur = umur;
        // jadi sudah otomatis
      }
    }

    const rafa = new Person2("rafa", 15);
    console.log(rafa); //    Person2 { nama: 'rafa', umur: 15, kelas: '10plg2' } 
    console.log("-----------------------");
  });
});
