let fanSpeed = 1;
let acStatus = false;
let temp = 16;

function toggleAc() {
  acStatus = !acStatus;
  console.log(acStatus);
}

function increment() {
  if (temp < 29 && acStatus) {
    temp++;
    console.log(`temperature is : ${temp}`);
  }
}
function decrement() {
  if (temp > 16 && acStatus) {
    temp--;
    console.log(`temperature is : ${temp}`);
  }
}

function fanToggle() {
  if (acStatus) {
    if (fanSpeed < 3) {
      fanSpeed++;
    } else {
      fanSpeed = 1;
    }
    console.log(fanSpeed);
  }
}
