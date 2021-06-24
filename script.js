//SOLUTION 1: "convertFahrToCel"
function convertFahrToCelsius(fahr){

    let num = Number(fahr);
    if(num === num) {
        celsius = (fahr -32) * 5/9;
        let result = celsius.toFixed(4);
        console.log(result);

    }else{
        console.log(`${JSON.stringify(fahr)} is not a valid number but a/an ${typeof fahr}.`)
    }  
}

convertFahrToCelsius("rrr");


// SOLUTION 2: "checkYuGiOh" FUNCTION

function checkYuGiOh(n) {
    const myArr = [];
    if (isNaN(n)) {
      return `invalid parameter: ${n}`;
    }
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
        myArr.push("yu-gi-oh");
      } else if (i % 2 == 0 && i % 3 == 0) {
        myArr.push("yu-gi");
      } else if (i % 2 == 0 && i % 5 == 0) {
        myArr.push("yu-oh");
      } else if (i % 3 == 0 && i % 5 == 0) {
        myArr.push("gi-oh");
      } else if (i % 2 == 0) {
        myArr.push("yu");
      } else if (i % 3 == 0) {
        myArr.push("gi");
      } else if (i % 5 == 0) {
        myArr.push("oh");
      } else {
        myArr.push(i);
      }
    }
    return myArr;
  }
console.log(checkYuGiOh("fizzbuzz is meh"))




//Task Completed pushed to Github-Though deadline was not met hence was not sumbmited and graded
