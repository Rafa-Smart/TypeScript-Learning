{
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

  interface Sendiri {
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
