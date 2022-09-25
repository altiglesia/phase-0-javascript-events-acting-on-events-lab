const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#FF69B4";
dodger.style.bottom = "0px";
dodger.style.left = "50px";

// document.addEventListener("keydown", function (event) { // event listener detects a keydown event => moving dodger to the left
//     if (event.key === "ArrowLeft") { // check to see if the key property of the event object has the value "ArrowLeft"
//       const leftNumbers = dodger.style.left.replace("px", ""); // String replace() method to strip out the 'px' then store the result in leftNumbers
//       const left = parseInt(leftNumbers, 10); // parse leftNumbers as an integer and store the result in left

//       dodger.style.left = `${left - 1}px`; // update the dodget's style.left property using string interpolation, injecting the current value minus 1
//     }
//   });

  // Update an Element's Position on the Page Conditionally

function moveDodgerLeft() { // function to ensure dodger does not move past the black square
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (event) { // event listener detects a keydown event => moving dodger to the left
    if (event.key === "ArrowLeft") { // check to see if the key property of the event object has the value "ArrowLeft"
      moveDodgerLeft();
    }
  });

  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360 ) {
        dodger.style.left = `${left + 1}px`
    }
  }

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
});

