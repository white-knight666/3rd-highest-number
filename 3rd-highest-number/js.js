function thirdNumberInArray(arr){
    let firstNumber = 0;
    let secondNumber = 0;
    let thirdNumber = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] > firstNumber) {
            thirdNumber = secondNumber
            secondNumber = firstNumber
            firstNumber = arr[i]
        } else if (arr[i] > secondNumber && arr[i] < firstNumber){
            thirdNumber = secondNumber
            secondNumber = arr[i]
        } else if(arr[i] > thirdNumber && arr[i] < secondNumber){
            thirdNumber = arr[i]
        }
    }
    console.log(thirdNumber)
}

let myArray = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31, 15, 22];
thirdNumberInArray(myArray)