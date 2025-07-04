function myReverse(array){

    for(let i = 0; i< array.length; i++){
        array[0+i] = array[(array.length-1) - i]
    }
    return array
}

let data2 = [1,2,3,4,5,6,7,8,9,10];
console.log(myReverse(data2))

let array = [1, 2, 3, 4, 5];
let data = array.pop()
console.log(data) // 5
console.log(array) // [1,2,3,4]


// jadi kitaa tuker 10 jadi 1, 1 jadi 10, dst...