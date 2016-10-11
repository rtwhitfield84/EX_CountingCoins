
/*
take a given amount and see if it can be divided evenly by the value of each coin
     if so add 1 of each type of coin to the coinpurse 
          tell the user the amount of each type of coin 
*/

var quarter = 0.25;
var dime = 0.10;
var nickel = 0.05;
var penny = 0.01;
var remainder;
var button = document.getElementById("btn");
var inputField = document.getElementById("input");
      
      function coinCounter (amount) {
        amount = document.getElementById("input").value;
          var coinPurse = {
          quarters: 0,
          dimes: 0,
          nickels: 0,
          pennies: 0
          };
        
        if (amount % quarter) {
            coinPurse.quarters = Math.floor(amount / quarter);
            remainder = amount - (coinPurse.quarters * quarter).toFixed(2);
            console.log("q remainder",remainder.toFixed(2)); 
        }
        if (remainder % dime) {
            coinPurse.dimes = Math.floor(remainder / dime);
            remainder =  remainder - (coinPurse.dimes * dime).toFixed(2);
            console.log("d remainder",remainder.toFixed(2));
        }
        if (remainder % nickel) {
            coinPurse.nickels = Math.floor(remainder / nickel);
            remainder = remainder - (coinPurse.nickels * nickel).toFixed(2);
            console.log("n remainder",remainder.toFixed(2));
        }

        if (remainder % penny) {
            coinPurse.pennies = Math.round(remainder / penny);
            remainder = remainder - (coinPurse.pennies * penny).toFixed(2);
            console.log("p remainder",remainder.toFixed(2));
        } 
            var insert = document.getElementById("moneyBags"); 

            insert.innerHTML = ("You have " + coinPurse.quarters + " quarters, " + coinPurse.dimes + " dimes, " + coinPurse.nickels + " nickels, and " + coinPurse.pennies + " pennies in your coin purse (so European of you). Go get yourself a soda or two!");
        }

      inputField.addEventListener("keyup", function(event){ 
        if (event.keyCode === 13) {
          coinCounter();
        }
        console.log("event", event);
      });

button.addEventListener("click",coinCounter);

















