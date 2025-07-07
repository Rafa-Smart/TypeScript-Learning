"use strict";
// penamaan fungsi di inteface
{
    // cara pakenya
    const data1 = {
        tambah: (a) => {
            console.log(`halo ${a}`);
        },
    };
    class satuClass {
        tambah(a) {
            console.log("halo");
        }
    }
    // 2
    //   ga bisa, karena interface ini itu untuk method didalam objek
    //   const data2:dua = (a:string):void => {
    //     console.log(`haloo ${a}`)
    //   }
    //   baru bisa
    const data2 = {
        tambah(a) {
            console.log(`haloo ${a}`);
        },
    };
    class duaClass {
        tambah(a) {
            console.log("halo");
        }
    }
}
// ini perbandingnan yang benarnya
{
    const obj1 = {
        tambah: function (a) {
            console.log(this); // ❌ 'this' di sini undefined (strict mode)
        },
    };
    const obj2 = {
        tambah(a) {
            console.log(this); // ✅ 'this' mengacu ke obj2
        },
    };
}
{
    // const tambah: HitungTambah = (x, y) => x + y;
    //   dan kalo tanpa namanya ada 2 di satu interface, atau dia extends
    // maka itu annti implementasinya di fungsinya ita kasih seluruh paramternya dan kasih any
    //   karena kita memaksa untuk implementasi 2 fngsi ini dalam satu fungsi
    // lihat di file 3 overload
    //   tapi ini bukan overload, karena kita pake any, jadi tidak ada batasan
}
