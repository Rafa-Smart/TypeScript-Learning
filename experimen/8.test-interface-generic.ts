{
  // disini kita akan cek apakah bisa di interface untuk di gunakan  generic

  interface User<T> {
    id: T;
    umur: T;
  }

  class Person<T> {
    item: User<T>;

    constructor(item: User<T>) {
      this.item = item;
    }

    kali(): number {
      // kamu harus pastikan bahwa T = number
      // atau beri constraint pada T
      return (this.item.id as any) * (this.item.umur as any);
    }
  }

  const data: User<number> = { id: 123, umur: 25 };
  const orang = new Person<number>(data);
  console.log(orang.kali()); // 3075

//   const rafa: User = new Person<number>(data);
  // ga bsia karena rafa bukan User
  // tapi instance dari si Person
}
