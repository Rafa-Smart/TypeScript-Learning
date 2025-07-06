"use strict";
{
    const data = [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9];
    function mymap2(array, // kita set bahwa yg dikirim itu harus si data:myarray
    fungsi) {
        let data = [];
        for (let i = 0; i < array.length; i++) {
            data.push(fungsi(array[i], i, array));
        }
        return data;
    }
    const hasil = mymap2(data, (el) => {
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
