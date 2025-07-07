"use strict";
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
        const data = new Array(1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9);
    });
    const data = [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9];
    // nah ini secara struktur interface, si [1, 5, 6, 7, 7, 4, 1, 3, 5, 6, 7, 9] sudah cocok
    // dengan MyArray2, kaerna array [1,2,3,4...] itu sudah punya interface sendisi dan sudah punya clasnya lagi
    // yang interfacenya itu sudah punya length dan [index: number]: number;
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
it('nihh baca', () => {
    // Lalu kamu punya objek:
    const manusia = {
        makan() { console.log("nyam"); },
        tidur() { console.log("zzz"); }
    };
    // Sekarang kamu tulis:
    const x = manusia;
    // ✅ Ini sah karena manusia secara struktural cocok dengan BisaMakan.
    // Tapi manusia tetap objek dengan makan dan tidur, cuma TypeScript memperlakukannya sebagai objek BisaMakan.
    // jadi interface yang isinya hanya sebih sedikit dari interface yang lebih banyak dan yang interface
    // dikit ini punya beberapa property atau method yang sama dengan interface yang banyak
    // maka kalo dites
    // const tes:interfaceDikit = ObjekDariInterfaceBanyak (sudah imlpementasi)
    // ah ini bsia, karena ts secara struktural cocok
    // nah ini yang terjadi pada myArray2 dengan [1,2,3,4,5,6,7,8,9,0]
    // myArray2 = interface dikit 
    //  [1,2,3,4,5,6,7,8,9,0] = interface banyak dan sduah implemenasi
});
