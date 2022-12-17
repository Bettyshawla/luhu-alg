function validateCard(card) {
  let multiple;
  let sum;
  let pushMultiple = [];
  let pushSum = [];
  let numArray = Array.from(`${card}`);
  let over = [];
  let resultOne;
  let resultTwo;
  let less = [];
  console.log(numArray);
  for (let i = 0; i < numArray.length; i++) {
    if (i % 2 !== 0) {
      multiple = numArray[i] * 2;
      console.log(multiple, "multiple");
      pushMultiple.push(multiple);
    } else {
      sum = numArray[i] * 1;
      console.log(sum, "sum");
      pushSum.push(sum);
    }
  }

  let combo = pushMultiple.concat(pushSum);
  //   console.log(combo, "combo");

  for (let i = 0; i < combo.length; i++) {
    if (combo[i] > 9) {
      console.log(combo[i]);
      let lastNum = combo[i].toString();

      for (let j = 0; j < lastNum.length; j++) {
        over.push(+lastNum.charAt(j));
        console.log(over, "over last");

        resultOne = over.reduce((a, b) => {
          return a + b;
        });

        console.log(resultOne, "result");
      }
    } else {
  
      less.push(combo[i]);
        console.log(less, "lessssss")
      resultTwo = less.reduce((a, b) => {
        return a + b;
      });

        console.log(resultTwo, "result 2");
    }
  }
  let finalCard = resultOne + resultTwo
  console.log(finalCard)
  if(finalCard%10 === 0){
    console.log("It is a valid card");
  } else{
    console.log("Invalid card!!!!")
  }
}

validateCard(4222222222222);

