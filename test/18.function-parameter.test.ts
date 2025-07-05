// jdai di ts itu, kalo kita ingin emngginkana fungsi
// sebagai parametr pada fungsi lagi, maka kita harus memeberi tahu
// bahwa fungsi ini adalah fungsi di paramternya

// kita juga bisa menggunakan function interface, atau bisa langusng sebutkan
// pada parameternya, jumlah parameter dari return value function yang dibutuhkan

// jadi kalo sederhana mah ga perlu pake interface

console.clear();

it("testing...", () => {
  function toUpper(nama: string): string {
    return `hello ${nama.toUpperCase()}`;
  }

  function sayHello(nama: string, filter: (nama: string) => string): string {
    return filter(nama);
  }

  const data: string = sayHello("rafa", toUpper);
  console.log(data);
});

it("anonymous function", () => {
  function sayHello(nama: string, filter: (nama: string) => string): string {
    return `hello ${filter(nama)}`;
  }

  // jadi kita kasih function tanpa nama
  const data: string = sayHello("rafa", (nama):string => {
    return nama.toUpperCase();
  });
  console.log(data);
  const data2: string = sayHello("rafa", function(nama):string{
    return nama.toUpperCase()
  });
  console.log(data2);
});


// coba kalo pake interface

it('testing', () => {
  interface fungsi {
    (a:string):string
  }

  function sayHello(nama:string, fn:fungsi){
    return fn(nama) // jadi nama disini itu dikirim
    // ke fungsi fn, nah jadi nanti kaloa da yang akses sayhello, maka nanti fungi fn ini
    // akan punya parameter nama
  }


  console.log(sayHello('rafa', (nama) => {
    return nama.toUpperCase()
  }))


  // coba lagi

  interface fungsi2{
    (a:number, b:number):number
  }


  function kali(angka1:number, angka2:number, fn:fungsi2){
    return fn(angka1, angka2)
  }

  console.log(kali(5,5, ((a,b) => {
    return a * b
  })))

})
