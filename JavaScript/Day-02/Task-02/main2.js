//task2

function capitalizeFromUser() {
  var input = prompt("Enter a sentence:");
  if (!input) return alert("No input provided.");

  var result = input
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  alert(`Capitalized: ${result}`);
}

capitalizeFromUser();