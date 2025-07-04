// jdai di ts itu, kalo kita ingin emngginkana fungsi
// sebagai parametr pada fungsi lagi, maka kita harus memeberi tahu
// bahwa fungsi ini adalah fungsi di paramternya

// kita juga bisa menggunakan function interface, atau bisa langusng sebutkan
// pada parameternya, jumlah parameter dari return value function yang dibutuhkan

// jadi kalo sederhana mah ga perlu pake interface

console.clear()

it("testing...", () => {
  function toUpper(nama: string): string {
    return `hello ${nama.toUpperCase()}`;
  }

  function sayHello(nama: string, filter: (nama: string) => string): string {
    return filter(nama);
  }

  const data: string = sayHello("rafa", toUpper);
  console.log(data)
});



