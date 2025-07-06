class TestParent {
      namaDefaultParent= "rafa"; // nilai default
    }

    class TestChild extends TestParent {
        namaDefaultChild
      constructor(umur) {
        super()
        this.umur = umur;
        this.namaDefaultChild = this.namaDefaultParent
      }
    }

    const tes= new TestChild(4);
    console.log(tes);

// hasilnya
// TestChild {
//   namaDefaultParent: 'rafa',
//   namaDefaultChild: 'rafa',
//   umur: 4
// }


// jadi bisa tapi ga boleh pake constructor di parent nya
// jadi nanti di class childnya itu bisa ga pake constuctor


function mymap(array, callback){
  
}