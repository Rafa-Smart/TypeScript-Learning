function myReverse(array) {
  for (let i = 0; i < array.length; i++) {
    // [array[0+i], array[(array.length-1) - i]] = [array[(array.length-1) - i],array[0+i]]

    let data1 = array[0 + 1];
    let data2 = array[array.length - 1 - i];

    array[0 + 1] = data2;
    array[array.length - 1 - i] = data1;
  }
  return array;
}
console.clear();
let data2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myReverse(data2));

let array = [1, 2, 3, 4, 5];
let data = array.pop();
console.log(data); // 5
console.log(array); // [1,2,3,4]

// jadi kitaa tuker 10 jadi 1, 1 jadi 10, dst...

function myReverse2(array) {
  for (let i = 0; i < array.length; i++) {
    let d = array.pop();
    array.unshift(d);
  }
  return array;
}
console.log("==========");
let data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(myReverse2(data3));

// lagii
let data4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function test(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length/2; j++) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
  return array;
}
console.log("============");
console.log(test(data4));


let data5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let f = data5.shift()
let t = []
console.log(f)
t.push(f)
console.log(t)
console.log('==========')
// oke ini tengah malem baru kepikiran
function reverseMalem(arr) {
  let data = [];
  // for(let i = 0; i < arr.length; i++){
  //   let d = arr.shift()
  //   console.log(d)
  //   data.push(d);
  // }

  for(let i of arr){
      data.push(i)
  }

  return data;
}
console.log('==============')
console.log(reverseMalem([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))



console.log('--------------')
console.log('--------------')
console.log('--------------')
// oke ini berhasil

function Beres(arr){
  let data = [];
  for(let i of arr){
    data.unshift(i)
  }
  return data
}
let data6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`sebelum: ${data6}`)
console.log(`sesudah: ${Beres(data6)}`)

// tet lagi
console.log('testj akanaa')

let data7 = [4,5,6,3,8,7,5,4,3,2]

function est4(array){
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length -1; j++){
        if(array[j] > array[j+1]){
          array[j+1] = array[j]
        }
    }
  }
  return array;
}

console.log(est4(data7))


console.log('tettete')

function testtt(data){
  let hasil = ''
  for(let i = 0; i < data.length; i ++){
    let sementara = data[i];
    let jumlah = 0
    for (let j = 0; j< sementara.length;j++){
        if(sementara[j] == sementara[j].toUpperCase()){
          jumlah ++
        }
      }
      hasil += `array ke ${sementara} jumlahnya = ${jumlah}`
  }
  return hasil;
}

console.log(testtt(["Arra", "AYHsss"]))


console.log('sssssssssss')

let anja22y= [1,2,3,4,5,6]
let hasilanja33y = anja22y.unshift(3)
console.log(anja22y)