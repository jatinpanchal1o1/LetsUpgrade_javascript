
for(i=1;i<=100;i++){
  a=i/15
  b=i/3
  c=i/5
  if(Number.isInteger(a)){        //check whether the number is divisible by 15
    console.log("FizzBuzz")
  } 
  else if(Number.isInteger(b)){   //check whether the number is divisible by 3
    console.log("Fizz")
  } 
  else if(Number.isInteger(c)){   //check whether the number is divisible by 5
    console.log("Buzz")
  } 
  else{                          //if it is not divisible by 3,5 or 15 it prints that number
    console.log(i)
  }
}