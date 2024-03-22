let n1 = 0;
let n2 = 0;
let op = '+'; //THIS HAS TO BE ABLE TO CHANGE TO THE INPUT OF THE USER

/*switch(op)
{
    case '+': add(n1, n2); break;
    case '-': subtract(n1, n2); break;
    case '*': multiply(n1, n2); break;
    case '/': divide(n1, n2); break;
}*/

function operate(op, n1, n2) 
{

}

const add = ((num1, num2) => num1 + num2);

const subtract = ((num1, num2) => num1 - num2);

const multiply = ((num1, num2) => num1 * num2);

const divide = ((num1, num2) => num1 / num2);

const sum = function(nums) 
{
  let result = 0;
	for(let i = 0; i < nums.length; i++)
  {
    result +=nums[i];
  }
  return result;
};

const power = function(num1, power) 
{
  let result = num1;
	for(let i = 2; i <= power; i++)
  {
    result *= num1;
  }
  return result;
};

const factorial = function(num) 
{
 //5! = 5x4x3x2x1 == 120	
 let result = num;
 for(let i = num -1; i > 0; i--)
 {
    result *= i;
 }

 if(num == 0) {result = 1;}
 return result;
};