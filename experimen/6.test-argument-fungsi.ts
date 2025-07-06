{
  // ini ga bisa, karena harus sama antara paramter dan argument yang dikasih
  //   function tes(a: number): number[] {
  //     let data:number[] = [];
  //     for(let i of arguments) {
  //         data.push(data[i]);
  //     }
  //     return data
  //   }
  //   console.log(tes(1,2,3,4,5,6,8,8,9,9,4))
}

{

    // ini bisa karena pake rest paramter

  function tes(...values:number[]): number[] {
    let data: number[] = [];
    for (let i of values) {
      data.push(data[i]);
    }
    return data;
  }

  console.log(tes(1, 2, 3, 4, 5, 6, 8, 8, 9, 9, 4));
}
