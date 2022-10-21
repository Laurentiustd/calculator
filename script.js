const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

const reduceMultipleZerosAndDecimalsToOne = (input) => {
  const processedInput = [];
  for (let i = 0; i < input.length; i++) {
    const item = input[i];

    if ((item.match(/[.]/g) || []).length > 1) {
      // if item has multiple decimals between numbers 5.5.5
      if (item.match(/^[0-9]\.[0-9]\.[0-9]$/)) {
        const item2 = item.replace(/[.]/g, " ").trim().replace(/\s+/, "."); // replace multiple ... with one .
        const item3 = item2.replace(/\s+/, ""); // replace remaning whitespace
        // console.log(item3);
        if (item3) {
          processedInput.push(item3);
        }
      } else {
        //if item has multiple decimals between numbers eg 5...55
        // console.log(item);
        const item2 = item.replace(/[.]/g, " ").trim().replace(/\s+/, "."); // replace multiple ... with one .
        // console.log(item2);
        if (item2) {
          processedInput.push(item2);
        }
      }
    } else if (item.match(/^0+/g)) {
      const item2 = item.replace(/^0+/g, 0); // replace multiple 0ss before a number to one zero
      if (item2) {
        processedInput.push(Number(item2));
        //   console.log(item2);
      }
    } else if (Number(item) == 0) {
      const item2 = Number(item); // convert multiple 0s to one 0
      if (item2) {
        processedInput.push(item2);
      }
    } else {
      processedInput.push(item);
    }
  }
  return processedInput;
};

let regex1;
let regex2;
let unWanted;
let wanted;

// a function to make input to be -X if preceded by - sign after /X+-
const correctFormatNegativeNumbers = (input, clickedMethods) => {
  const regex1 = /[0-9],[\/|X|+|-],-,[0-9]/g; // test if input has negative number and is preceded with /X+-
  const regex2 = /^(-,[0-9],[\/|X|+|-],[0-9])/g; // test if input has negative number and is followed with /X+-
  const regex3 = /^(-,[0-9],[\/|X|+|-](.*?))/g; // test if input has a starting negative number and is followed with /X+- then anything
  const regex4 = /((.*?)[\/|X|+|-],-,[0-9](.*?))/g; // test if input has negative number that is preceded with anyhting and /X+- and is followed with /X+-

  if (regex3.test(input) || regex4.test(input)) {
    const unWanted1 = "-,";
    const wanted1 = "-";
    const unWanted2 = ",-,";
    const wanted2 = ",-";

    const input2 = input
      .slice()
      .toString()
      .replace(unWanted1, wanted1)
      .replace(unWanted2, wanted2);

    //drop - from methods
    const newMethods = input2
      .replace(/[0-9]|-[0-9]/g, "")
      .replace(/,-,/g, ",")
      .replace(/-,/g, "");

    const processedItems = [input2.split(","), newMethods];
    return processedItems;

    // change -, input to -input
  } else if (regex1.test(input)) {
    console.log("Regex is regex1");
    const unWanted = ",-,";
    const wanted = ",-";

    const input2 = input.slice().toString().replace(unWanted, wanted);
    console.log(input2);

    //drop - from methods
    const newMethods = input2
      .replace(/[0-9]|-[0-9]/g, "")
      .replace(/,-,/g, ",")
      .replace(/-,/g, "");

    const processedItems = [input2.toString().split(","), newMethods];
    return processedItems;

    // change -, input to -input
  } else if (regex2.test(input)) {
    console.log("Regex is regex2");
    const unWanted = "-,";
    const wanted = "-";

    const input2 = input.slice().toString().replace(unWanted, wanted);
    // console.log(input2);

    //drop - from methods
    const newMethods = input2
      .replace(/[0-9]|-[0-9]/g, "")
      .replace(/,-,/g, ",")
      .replace(/-,/g, "");
    // console.log(newMethods);

    const processedItems = [input2.split(","), newMethods];
    return processedItems;

    // change -, input to -input
  } else if (
    regex1.test(input) == false ||
    regex2.test(input) == false ||
    regex3.test(input) == false ||
    regex4.test(input) == false
  ) {
    console.log(input + " doesnt have regex");
    // console.log(input);
    const processedItems = [input.toString().split(","), clickedMethods];
    return processedItems;
  }
};

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

const stringNum = "5.2.2.3.4";
let arrayStringNum = Array.from(stringNum);
let dot = [];
let notDot = [];
arrayStringNum.filter((response) => {
  if (response == ".") {
    dot.push(response);
  }else if(response !== "."){
    notDot.push(response)
  }
});
if(dot.length >1){
  dot = dot.slice(0,1)
}
console.log(dot)
console.log(notDot)
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
