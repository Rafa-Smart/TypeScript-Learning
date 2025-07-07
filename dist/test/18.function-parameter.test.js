"use strict";
// jdai di ts itu, kalo kita ingin emngginkana fungsi
// sebagai parametr pada fungsi lagi, maka kita harus memeberi tahu
// bahwa fungsi ini adalah fungsi di paramternya
// kita juga bisa menggunakan function interface, atau bisa langusng sebutkan
// pada parameternya, jumlah parameter dari return value function yang dibutuhkan
// jadi kalo sederhana mah ga perlu pake interface
console.clear();
it("testing...", () => {
    function toUpper(nama) {
        return `hello ${nama.toUpperCase()}`;
    }
    function sayHello(nama, filter) {
        return filter(nama);
    }
    const data = sayHello("rafa", toUpper);
    console.log(data);
});
it("anonymous function", () => {
    function sayHello(nama, filter) {
        return `hello ${filter(nama)}`;
        // nah filter(nama) => ini akna menjadi uppercase baru nanti
        // digabungkan dengan string `hello ${filter(nama)}`
    }
    // jadi kita kasih function tanpa nama
    const data = sayHello("rafa", (nama) => {
        return nama.toUpperCase();
        // jadi nanti ini akan dijadikan return value dari
        // si filter lalu dipakai di return value dari si fungsi sayHello 
    });
    console.log(data);
    const data2 = sayHello("rafa", function (nama) {
        return nama.toUpperCase();
    });
    console.log(data2);
});
// coba kalo pake interface
it('testing', () => {
    function sayHello(nama, fn) {
        return fn(nama); // jadi nama disini itu dikirim
        // ke fungsi fn, nah jadi nanti kaloa da yang akses sayhello, maka nanti fungi fn ini
        // akan punya parameter nama
    }
    console.log(sayHello('rafa', (nama) => {
        return nama.toUpperCase();
    }));
    function kali(angka1, angka2, fn) {
        return fn(angka1, angka2);
    }
    console.log(kali(5, 5, ((a, b) => {
        return a * b;
    })));
});
