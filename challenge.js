/*Create a function that determines whether or not
*it's possible to split a pie fairly given these three 
*parameters:
*/ 
//let fullPie = 5;
//let pieEaters = 2;
//let slicesEaten = 2;
//workOut = pieEaters * slicesEaten;

//if (workOut == fullPie) {
//    console.log(true)
//} else{
//    console.log(false)
//}
//above is a basic set up to see if it true or false

const pieTime = (pieEatersOne, slicesEatenOne)=>{
    if (Number.isInteger(slicesEatenOne/pieEatersOne)) {
        return 'true'; 
    }
    return 'false'
    }
    console.log(pieTime(2,2))
    console.log(pieTime(27,2))
    console.log(pieTime(5,15))
