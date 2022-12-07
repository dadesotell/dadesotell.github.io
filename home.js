const elementOne = document.getElementById("first-section")
const elementTwo = document.getElementById("second-section")
const backgroundColors = ['palevioletred', 'seagreen', 'rebeccapurple'];

let iterator = 0

const onIteration = () => {
  const color = iterator % backgroundColors.length;

  elementOne.style.background = backgroundColors[color];
  elementTwo.style.background = backgroundColors[color - 1];
  iterator++;
}

setInterval(onIteration, 3000);