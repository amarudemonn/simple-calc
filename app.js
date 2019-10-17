const calculator = document.querySelector('#calculator');
const output = document.querySelector('#output input');

let isDotClicked = false;

calculator.addEventListener('click', e => {

  const target = e.target.parentElement.id;

  switch (target) {
    case 'zero':
      if (output.value !== '0') {
        output.value += '0';
      }
      break;

    case 'one':
      if (output.value !== '0') {
        output.value += '1';
      } else {
        output.value = '1';
      }
      break;

    case 'two':
      if (output.value !== '0') {
        output.value += '2';
      } else {
        output.value = '2';
      }
      break;

    case 'three':
      if (output.value !== '0') {
        output.value += '3';
      } else {
        output.value = '3';
      }
      break;

    case 'four':
      if (output.value !== '0') {
        output.value += '4';
      } else {
        output.value = '4';
      }
      break;

    case 'five':
      if (output.value !== '0') {
        output.value += '5';
      } else {
        output.value = '5';
      }
      break;

    case 'six':
      if (output.value !== '0') {
        output.value += '6';
      } else {
        output.value = '6';
      }
      break;

    case 'seven':
      if (output.value !== '0') {
        output.value += '7';
      } else {
        output.value = '7';
      }
      break;

    case 'eight':
      if (output.value !== '0') {
        output.value += '8';
      } else {
        output.value = '8';
      }
      break;

    case 'nine':
      if (output.value !== '0') {
        output.value += '9';
      } else {
        output.value = '9';
      }
      break;
    
    case 'clear':
      output.value = '0';
      isDotClicked = false;
      break;
    
    case 'dot':
      if (!isDotClicked) {
        output.value += '.';
        isDotClicked = true;
      }
      break;

  }
});
