const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");


document.addEventListener("click", (e) => {
  // switch (e.target.innerText) {
  //   case "C":
  //     display.innerHTML = "";
  //     break;
  //   case "=":
  //     try {
  //       display.innerHTML = eval(display.innerHTML);
  //     } catch {
  //       display.innerHTML = "Error";
  //     }
  //     break;
  //   case "←":
  //     if (display.innerHTML) {
  //       display.innerHTML = display.innerHTML.slice(0, -1);
  //     }
  //     break;
  //   default:
  //     display.innerHTML += e.target.innerHTML;
  // }
  if (e.target.innerHTML == "C") {
    display.innerHTML = "";
  } else if (e.target.innerHTML == "=") {
    try {
      display.innerHTML = eval(display.innerHTML);
    } catch {
      display.innerHTML = "Error";
    }
  } else if (e.target.innerHTML == "←") {
    // console.log("ok");
    if (display.innerHTML) {
      display.innerHTML = display.innerHTML.slice(0, -1);
    }
  } else if (e.target.classList.contains("button")) {
    // display.innerHTML = "";
    display.innerHTML += e.target.innerHTML;
  }
  if (display.innerHTML == "000") {
    display.innerHTML = "0";
  }
});


// console.log(arrayStringNum);

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     switch (e.target.innerText) {
//       case "C":
//         display.innerHTML = "";
//         break;
//       case "=":
//         try {
//           display.innerHTML = eval(display.innerHTML);
//         } catch {
//           display.innerHTML = "Error";
//         }
//         break;
//       case "←":
//         if (display.innerHTML) {
//           display.innerHTML = display.innerHTML.slice(0, -1);
//         }
//         break;
//       default:
//         display.innerHTML += e.target.innerHTML;
//     }
//   });
// });
