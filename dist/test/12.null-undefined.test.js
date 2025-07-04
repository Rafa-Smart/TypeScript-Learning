"use strict";
// ketika kita menggunkan ? pada sebuahh variable atau parameter
// maka secara otomatis kita bisa mengirimkan data undefined
// jadi kalo 
it("testing", () => {
    const data = { id: 1234 };
    // maka sebenarnya nilai dari data
    // data.id = (number | undefined)
});
// tapi terkadang pada kasus ktia ingin mengirimkan data null, pada kasus ini kita juga 
// bisa mengirimkan tipedata null
// jadi kita bsia ngirim null
it("test undefined...", () => {
    function sayHello(nama) {
        if (nama) {
            console.log(`halo ${nama}`);
        }
        else { // jika falsy, undefied / null
            console.log('halo ga tau');
        }
    }
    let nama = 'rafa'; // sama kayak ?
    sayHello(nama);
    nama = undefined;
    sayHello(nama);
});
it("test null...", () => {
    function sayHello(nama) {
        if (nama) {
            console.log(`halo ${nama}`);
        }
        else if (typeof nama === 'undefined') {
            console.log('halo ga tau');
        }
        else {
            console.log('halo null');
        }
    }
    let nama = 'rafa'; // sama kayak ?
    sayHello(nama);
    nama = undefined;
    sayHello(nama);
    nama = null;
    sayHello(nama);
});
