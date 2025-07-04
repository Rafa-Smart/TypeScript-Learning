
// ohhh berati SETIAP AKLI KITA MAU MEMBUAT FILE TS MAU ITU .TEST.TS ATAU BIASA
// KITA HARUS MENGGUNAKAN npx tsc --watch, JADI INI AKAN REALTIME
// SETIAP KALI ADA PERUBAHAN MAKA AKAN LANGUSNG DI COMPILE DANKALO ADA YANG ERROR
// MAKA AKN TERLIHAT




it("testing error", () => {
    // error yang harusnya terjadi di sini
    // karena ktia mengganti data sampai tipe datanya
    // tapi tidak error, kalo di jest
    // karena di jest itu menghapus kode ts lalu mengubahnya menjadi js

    // jadi error yang harusnya terjadi di ts ini
    // malah tidka terdeteksi

    // contoh
    let nama:string = "Rafa";
    let umur:number = 16;

    console.log(nama);
    console.log(umur);

    // nah disini coba kita ubah, yang harusnya ketika dijalankan errornya
    // harusnya adalah error

    // nama = 123;
    // umur = "Rafa";

    // nah kalo kita ga komen
    // kalo kita jalankan dengan npx tsc maka error

    // tapi ketika
    // dijalankan npx jest
    // ini ga error

    // karena yang dijalankan itu file jsnya bukan tsnya
    // karena file tsnya itu sudah dihapus


    // makanya ketika setiap kali kita akn test, kia harus npx tsc dulu
    // untuk memastikan bahwa kdoe tsnya ini ga error



})



// atau ktia bsia menggunakan perintah ini 
// npx tsc --watch

// jadi setiap perubahan yang kita lakukan di kode program kita, maka secara otomatis akan 
// dicompile, jadi langusng ketahuan saat itu kalo ada yang error

// [21.34.39] Starting compilation in watch mode...

// test/4.test-error.test.ts:20:5 - error TS2322: Type 'number' is not assignable to type 'string'.

// 20     nama = 123;
//        ~~~~

// test/4.test-error.test.ts:21:5 - error TS2322: Type 'string' is not assignable to type 'number'.

// 21     umur = "Rafa";
//        ~~~~

// [21.34.40] Found 2 errors. Watching for file changes.






