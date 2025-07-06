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

  interface MyArray2 extends Array<number> {
    [index: number]: number;
  }

  const data: MyArray2 = [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9];

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
