let numArray;
function validateCard(card) {
  let multiple;
  let sum;
  let pushMultiple = [];
  let pushSum = [];
  numArray = (Array.from(`${card}`)).reverse();
  let over = [];
  let resultOne;
  let resultTwo;
  let less = [];
  console.log(numArray, "num");
  for (let i = 0; i < numArray.length; i++) {
    if (i % 2 !== 0) {
      multiple = numArray[i] * 2;

      pushMultiple.push(multiple);
    } else {
      sum = numArray[i] * 1;
   
      pushSum.push(sum);
    }
  }

  let combo = pushMultiple.concat(pushSum);

  for (let i = 0; i < combo.length; i++) {
    if (combo[i] > 9) {

      let lastNum = combo[i].toString();

      for (let j = 0; j < lastNum.length; j++) {
        over.push(+lastNum.charAt(j));

        resultOne = over.reduce((a, b) => {
          return a + b;
        });
      }
    } else {
  
      less.push(combo[i]);
  
      resultTwo = less.reduce((a, b) => {
        return a + b;
      });

    }
  }
let finalCard;
  if(isNaN(resultOne)){
    finalCard = resultTwo;

}
else{
   finalCard = resultOne + resultTwo
  console.log(finalCard, "second if")

}
if(!isNaN(card)){
    if(finalCard%10 === 0){
        console.log("It is a valid card");
        
card.value = null;
      } else{
        console.log("Invalid card!!!!")
      
      }
      console.log(finalCard)
} else{
  

}


}


// validateCard();

validateCard(1234567890123456); //should be false
validateCard(4408041234567893); //should be true
validateCard(38520000023237); //should be true
validateCard(4222222222222); //should be true