{


    // jadi kesimpulannya dari pengetesan ini adalah
    // jadi meskipun extends, bukan berati harus extends yang benar benar turunan
    // tapi itu benar tapi juga bisa
    // jadi extends itu kayak bare minimum, sebuah objek bisa masuk atu sesuatu bsia masuk
    // dan disini bare minimumnya itu adlah sebuah objek yang mempunyai property id

  // sebelumnya kan kalo mau pake constraint di generic
  // jadi tipe data yang masuk itu hanya tipedata itu dan juga turunannya
  // nah kita coba untuk yang interface yang aneh dikit

  interface PunyaID {
    id: number;
  }
  // ini yang turunan
  interface User extends PunyaID {
    id: number;
    nama: string;
  }

  // ini yang bukan turunan dari PunyaId tapi
  // dia punya proprty id

  interface Sendiri { // dia berdiri sendiri dan tidak extends apapun
    id: number;
    kelas: string;
  }

  function cekId<T extends PunyaID>(item: T): void {
    console.log(item.id);
  }

  // disin ceknya pake fungsi
  const data: PunyaID = {
    id: 123,
  };
  const data2: User = {
    id: 990,
    nama: "rafa",
  };
  const data3: Sendiri = {
    id: 889,
    kelas: "10pplg2",
  };

  cekId(data);
  cekId(data2); // bisa karena punya property id dna dia extends
  cekId(data3); // bisa karena punya property id meskipun bukan extends

  // disini kita cek pake class
  class Person<T extends PunyaID> {
    item: T;
    constructor(item: T) {
      this.item = item;
    }

    cekID(): void {
      console.log(this.item.id);
    }
  }

  const dataClass = new Person<PunyaID>(data);
  const dataClass2 = new Person<PunyaID>(data2);
  const dataClass3 = new Person<PunyaID>(data3);

  console.log(dataClass)
  console.log(dataClass2)
  console.log(dataClass3)
  dataClass.cekID()
  dataClass2.cekID()
  dataClass3.cekID()
}
