//Task1

function secondLowestGreatestFromUser() {
  var input = prompt("Enter numbers likes (1,2,3,4,5):");
  if (!input) return alert("No input provided.");

  var arr = input
    .split(",")
    .map(num => Number(num.trim()))
    .filter(num => !isNaN(num));

  var uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
  var secondLowest = uniqueSorted[1];
  var secondGreatest = uniqueSorted[uniqueSorted.length - 2];

alert(`${secondLowest}, ${secondGreatest}`);
}

secondLowestGreatestFromUser();

