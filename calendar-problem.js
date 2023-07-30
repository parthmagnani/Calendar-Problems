let num,finalNum,finalAns = 0, randomNum
let lastDigit,divideByFour, firstDate = 1, numberOfMonth = 0 , century = 6, sumOfFirstFive, finalToFinalAns
let finalArr = []
for(let i = 2014; i<=2050; i++){
    randomNum = i
    for(let j = 0; j<2; j++){
        num = randomNum % 10;
        finalNum = parseInt(num) *  Math.pow(10, j);
        finalAns = finalAns + finalNum
        randomNum = randomNum/10
        randomNum = parseInt(randomNum)
    }
    lastDigit = finalAns
    divideByFour = lastDigit/4
    divideByFour = parseInt(divideByFour)
    sumOfFirstFive = lastDigit + divideByFour + firstDate + numberOfMonth + century
    finalToFinalAns = sumOfFirstFive % 7
    if(finalToFinalAns == 0){
        finalArr.push(i)
    }
}
console.log(finalArr)