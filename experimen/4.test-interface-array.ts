{
  // interface MyArray2 extends Array<number> {
  //   [index: number]: number;
  // },
  // kalo begini berati ketika ada orang yang membua array dngan tipe
  // data myarray2 maka ketika array tersebut menggunakna fngsi fungsi
  // bawaan dari array, kan ga bisa, tapi kalo pake extends Array<number>
  // jadi nanti ketika si arraynya itu pake fungsi bawaan dari array maka
  //   pertama dicari dulu apakah fungsi ini di miliki oleh si interface myarray
  // kalo engga maka bakal dicari lagi ke interface yang di extend oleh myarray

  // jadi gini loh yang benernya
  // [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9] -> ini adalah bentuk dari instance Array yang asli
  // yang punya banyak method dan interfacenya
  //   Kamu membuat custom interface MyArray2 yang menuntut dua hal:
  // Harus bisa diakses seperti array ([index]: number)
  // Harus punya properti length
  // Array asli (Array<number>) memenuhi semua ini, jadi array tsb valid dipakai sebagai MyArray2 menurut aturan structural typing TypeScript

  // jadi disini itu kita mengecek sekaligus menget bahwa [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9]
  // itu bertipe MyArray2, dan haislnya iya bertul
  // karena di internanya itu si [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9] sudah memiliki property length dan
  // juga [index:number]: number

  // nah kalo kita definisikan interface baru yang isinya [index: number]: number;
  // sebenarnya di karena [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9] itu adalah instance dari Array
  // maka sebenarnya dia suadh punya [index: number]: number; jadi
  // pas kita set bahwa data: MyArray ini adlah polymorphism jadi gini
  // sebenarynya yag terjadi di baris 29 adalah
  it("tst", () => {
    const data: MyArray2 = new Array<number>(
      1,
      5,
      6,
      7,
      7,
      4,
      1,
      3,
      5,
      6,
      7,
      9
    );
  });

  // nah jadi kalo kita test MyArray2 ini bertipe data Array, ini juga akan true
  // itulah sebabnya kita bisa bilang kalo sebenarya data itu adalah array
  // meskipun dia tipe datanya adlah MyArray2
  //   Array<number> ini di TypeScript sudah mengimplementasikan interface Array<number>
  // Maka dia memiliki:
  // Method: .map(), .filter(), .toString(), dll
  // Property: .length, [index], dst

  interface MyArray2 { // jaid ga perlu extends si Array<number> karena kita hanya butuh length dan [index: number]: number;
    [index: number]: number;
    length: number;
    // kalo yang diatas ini dimatikan
    // atau dikomen, nah nanti aka error pas kita mau akses length dari tipedata MyArray
    // tapi kalo kita pake length:number
    // maka itu artnya interface ini sudah punya property length
    // yang dimana property length ini sebenarnya sudah ada di [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9]
    // jadi interface itukan hanya membuat kontrak, dan pas kita pake kontrak sendiri
    // jadi pas mau pae fungsi bawaan dari si array
    // kita cukup bilang di interface baru kita kalo kita punya property length:number
    // yang implementasinya sebenarnya sudah ad di [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9]
    // tapi kan ini hanya kontrak

    // jadi [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9] -> mengikuti kontrak Array


    // data:MyArray2 -> mengikuti kontrak MyArray2
    // Ini adalah polymorphism via structural typing, bukan polymorphism via inheritance.
    // data adalah instance dari Array<number>
    // Kamu memberinya type annotation MyArray2, dan karena array itu secara struktural cocok, maka TypeScript tidak protes
    // Tapi di runtime, dia tetap objek asli dari Array

    // jadi polimorphism itu akna cocok jika strukturnya cocok
  }

  const data: MyArray2 = [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9];
  // nah ini secara struktur interface, si [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9] sudah cocok
  // dengan MyArray2, kaerna array [1,2,3,4...] itu sudah punya interface sendisi dan sudah punya clasnya lagi
  // yang interfacenya itu sudah punya length dan [index: number]: number;

  function mymap2(
    array: MyArray2, // kita set bahwa yg dikirim itu harus si data:myarray
    fungsi: (elemen: number, index: number, array: MyArray2) => number
  ): number[] {
    let data: number[] = [];
    for (let i = 0; i < array.length; i++) {
      data.push(fungsi(array[i], i, array));
    }
    return data;
  }

  const hasil: number[] = mymap2(data, (el) => {
    return el * 5;
  });
  console.log(hasil);
}

// jadi kesimpulannya beresin dulu kdoenya baru cek erronrya
// karena ini error padahal cuma karena belum beres nulis kodenyaaaaaaaaaaa

// Interface ini hanya menyatakan:
// "Data ini bisa diakses dengan indeks angka seperti array[0], dan hasilnya harus number."
// TAPI tidak mendeklarasikan properti array lainnya seperti:
// .length
// .map()
// .forEach()

// jadi kita harus extend dulu dengna si interface Array<number>
// nahh baru bisaaa


it('nihh baca', () => {
  interface BisaMakan {
  makan(): void;
}
// Lalu kamu punya objek:


const manusia = {
  makan() { console.log("nyam"); },
  tidur() { console.log("zzz"); }
}
// Sekarang kamu tulis:


const x: BisaMakan = manusia;
// ✅ Ini sah karena manusia secara struktural cocok dengan BisaMakan.
// Tapi manusia tetap objek dengan makan dan tidur, cuma TypeScript memperlakukannya sebagai objek BisaMakan.

x.makan() // ada
// x.tidur() tidak ada karena sudah dibatasi oelh interface bisamakan

// jadi interface yang isinya hanya sebih sedikit dari interface yang lebih banyak dan yang interface
// dikit ini punya beberapa property atau method yang sama dengan interface yang banyak
// maka kalo dites

// const tes:interfaceDikit = ObjekDariInterfaceBanyak (sudah imlpementasi)
// ah ini bsia, karena ts secara struktural cocok

// nah ini yang terjadi pada myArray2 dengan [1,2,3,4,5,6,7,8,9,0]
// myArray2 = interface dikit 
//  [1,2,3,4,5,6,7,8,9,0] = interface banyak dan sduah implemenasi

})