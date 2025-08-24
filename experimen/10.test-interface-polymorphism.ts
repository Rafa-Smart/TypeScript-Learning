{
    // jadi disini kita akan test, apakah polymorphism itu
    // selain bisa dilakukan di class, bisa jga dilakukan di interface


    interface hasID {
        id:number
    }

    interface User extends hasID {
        id:number,
        nama:string
    }
    interface Person {
        id:number,
        nama:string,
        kelas:string
    }



    // sekarang kita coba di class
    function PunyaID(obj:hasID){
        console.log(obj.id)
    }

    let data:hasID = {
        id:123
    }
    let data2:User = {
        id:1232323,
        nama:'rafa'
    }
    let data3:Person = {
        id:5343,
        nama:'jamal',
        kelas:'xpplg2'
    }

    PunyaID(data) // bisa
    PunyaID(data2) // bisa
    PunyaID(data3) // bisa


    // jadi kesimpulannya, interface ini bisa dijadikan poly, mekipun bukan turunan / extends
    // tapi yang pneting mempunyai property atau method yang di syaratkan pada parameter fungsinya

}


// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test
// test