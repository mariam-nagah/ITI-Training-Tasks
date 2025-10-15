//--------task3----------

    var text = prompt("Enter a string to count 'e':");
    if (text !== null) {
      var count = 0;
      for (var i = 0; i < text.length; i++) {
        if (text[i].toLowerCase() === 'e') {
          count++;
        }
      }

      alert("The number of 'e' characters is: " + count);
    } else {
      alert("No input provided.");
    }
