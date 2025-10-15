//--------task2----------

 var sum = 0;
var value;
    while (true) {
      value = prompt("Enter a number :");
      if (value === null)
         break;
      value = parseInt(value);
      if (isNaN(value)) {
        alert("Please enter a valid number!");
        continue;
        }
      if (value === 0 || sum + value > 100) {
        break;
      }
      sum += value;
    }
    alert("Total sum of entered values is: " + sum);
