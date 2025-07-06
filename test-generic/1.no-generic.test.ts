// jadi generic adalah fitur di typescript
// yang memungkinkan kita untuk membuat kode yang sama, dan bisa digunakan berulang kali
// dengan menggunakan tipedata yang berbeda

// sebelumnya ketika kita inign membuat sebuah fungsi ini mendapat paramter yang bsia berbagai macam
// atau flexible, maka kita biasanya menggunakan tipe data any
// nah ini tidak disarankan
 
// nah jadi dengna fitur generic ini kita bisa melakukan perubahan tipedata ketika digunakan
// sehingga lebih aman karena tidak perlu menggunakan tipedata seperti any

// jadi ketika kita membuat misal fungsi, nah tipe data fungsi ini ktia tentukan dia sebagai generic
// lalu ketika kita magunakan fungsi ini, kita bisa menentukan tipe data yang kita inginkan bisa
// string, numbre, atau tipedata buatan kita sendiri

// jadi ketika kita gunakan berulangkali,kita bsia bebas memilih tipe data yang kita inginkan
// karena di fungis ini sudha kita tentukan bahwa dia adalah generic



// ini contoh kasus nyatanya (problem)

// jadi gini,misal kita ingin membuat class yang berisi tipedata yang berbeda beda
// kita harus menggunakan tipedata any

// contoh
it('testing', () =>{ 
    class Data {
        public value:any;
        constructor(value:any){
            this.value = value;
        }
    }
    // nah ini tidak disarankan karena menggunakan tipedata any
    const data1 = new Data('rafa'); // ini awalnya adalah number
    console.log(data1) // bisa
    // tapi bisa kita ubah ubah
    data1.value = 10;
    console.log(data1) // bisa

    // tapi ketika kita coba mengakses fungis yang hanya ada pada tipe data string
    // maka aga akan error pas di kode, tapi error pas dijalankan
    console.log(data1.value.toUpperCase())
    // TypeError: data1.value.toUpperCase is not a function
    // ini akan errorkteika dijalankan,
    // jadi errornya kalo kita mau akses atau pake dnegna fungis lain
    // tapi pas dirubahnya itu ga error
    // karena ga ada pengecekannya

    // jadi tpedata any ini 

    data1.value = true;
    console.log(data1) // bisa
    
})

