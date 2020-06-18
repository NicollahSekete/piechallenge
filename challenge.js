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

const pieTime = (fullPie,pieEatersOne, slicesEatenOne)=>{
    let workOut = pieEatersOne* slicesEatenOne
    //let X = slicesEatenOne % pieEatersOne
    if (workOut ==fullPie) {
        return 'true'; 
    }
    return 'false'
    }
    console.log(pieTime(14,3,5));
    console.log(pieTime(10,5, 3));
    console.log(pieTime(10,2,5))
    
    
