// jadi tipe data primitif itu akan mencpyo nilainya saja
// tapi kalo non primitif itu akan mengcopy referensinya (array), coba baca penjelasan
// di file src/2.tipe-data-primitif.ts

// jadi sebenarnya itu sama aja, tapi yang membedakan itu adlah
// jadi bedanya degan js adaah tipe data ini harus di deklarasikan secara eksplisit

// jadi ketika sudah di deklarasikan tipedatanya
// dan nanti tidka bsia lagi diubah tipenya
// misal ketika kita sudah mendeklarasikan sebuah variable dengan tipe data string
// maka kita tidak bisa mengubahnya menjadi number, boolean, atau tipe data lainnya

// tapi meskipun begitu, ts sudah pintar, dan kalo kita lupa maka tipe datanya akan ditentukan dari tipe data
// dari nilai yang kita masukan ke variabel tersebut

// wihh kerennya lagi ketika kita kita punya 2 file typescript, maka jika ada 2 variable
// yang smaa namanya maaka akan erron
// jika sama sama di deklarasikan di gloobal scope pada filenya

describe("tipe data primitif", () => {


  it("test 1...", () => {
    const first_name: string = "Rafa";
    console.log(first_name);

    // jadi akan otomaris di deklarasikan tipe datanya kalo lupa
    // jadi kalo mau diubah nilai variable yang bisa merubah tipe datanya, maka akan error
    // misal

    let umur = 30;
    // umur = "tiga puluh"; // ini akan error karena umur sudah dideklarasikan sebagai number
    // meski ga dideklarasikan tipe datanya, ts akan otomatis mendeteksi tipe datanya

  });




  it("should declare a string variable", () => {
    const first_name: string = "Rafa";
    expect(first_name).toBe("Rafa");
  });

  it("should declare a number variable", () => {
    const age: number = 25;
    expect(age).toBe(25);
  });

  it("should declare a boolean variable", () => {
    const isActive: boolean = true;
    expect(isActive).toBe(true);
  });

  it("should declare a bigint variable", () => {
    const bigNumber: bigint = 9007199254740991n;
    expect(bigNumber).toBe(9007199254740991n);
  });
});
