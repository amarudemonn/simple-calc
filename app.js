const calculator = document.querySelector('#calculator');
const output = document.querySelector('#output input');
const buttons = document.querySelectorAll('button:not(#clear-btn):not(#backspace-btn)');
const clearBtn = document.querySelector('#clear-btn');

let isDotClicked = false;
let isOperatorClicked = false;
let isDisabled = false;

calculator.addEventListener('click', e => {

  const target = e.target.parentElement.id;

  switch (target) {
    case 'zero':
      if (output.value !== '0') {
        output.value += '0';
      }
      isOperatorClicked = false;
      break;

    case 'one':
      if (output.value !== '0') {
        output.value += '1';
      } else {
        output.value = '1';
      }
      isOperatorClicked = false;
      break;

    case 'two':
      if (output.value !== '0') {
        output.value += '2';
      } else {
        output.value = '2';
      }
      isOperatorClicked = false;
      break;

    case 'three':
      if (output.value !== '0') {
        output.value += '3';
      } else {
        output.value = '3';
      }
      isOperatorClicked = false;
      break;

    case 'four':
      if (output.value !== '0') {
        output.value += '4';
      } else {
        output.value = '4';
      }
      isOperatorClicked = false;
      break;

    case 'five':
      if (output.value !== '0') {
        output.value += '5';
      } else {
        output.value = '5';
      }
      isOperatorClicked = false;
      break;

    case 'six':
      if (output.value !== '0') {
        output.value += '6';
      } else {
        output.value = '6';
      }
      isOperatorClicked = false;
      break;

    case 'seven':
      if (output.value !== '0') {
        output.value += '7';
      } else {
        output.value = '7';
      }
      isOperatorClicked = false;
      break;

    case 'eight':
      if (output.value !== '0') {
        output.value += '8';
      } else {
        output.value = '8';
      }
      isOperatorClicked = false;
      break;

    case 'nine':
      if (output.value !== '0') {
        output.value += '9';
      } else {
        output.value = '9';
      }
      isOperatorClicked = false;
      break;

    case 'clear':
      output.value = '0';
      refresh();
      if (isDisabled) {
        inable();
      }
      break;

    case 'dot':
      if (!isDotClicked) {
        output.value += '.';
        isDotClicked = true;
      }
      break;

    case 'plus':
      if (!isOperatorClicked) {
        output.value += '+';
        isOperatorClicked = true;
        isDotClicked = false;
      }
      break;

    case 'minus':
      if (!isOperatorClicked) {
        output.value += '-';
        isOperatorClicked = true;
        isDotClicked = false;
      }
      break;

    case 'times':
      if (!isOperatorClicked) {
        output.value += '*';
        isOperatorClicked = true;
        isDotClicked = false;
      }
      break;

    case 'divide':
      if (!isOperatorClicked) {
        output.value += '/';
        isOperatorClicked = true;
        isDotClicked = false;
      }
      break;

    case 'backspace-field':
    case 'backspace-btn':
      if (output.value !== '0') {
        const target = output.value[output.value.length - 1];
        output.value = output.value.slice(0, output.value.length - 1);

        if (output.value.length === 0) {
          output.value = '0';
        }

        if (target === '.') {
          isDotClicked = false;
        } else if (
          target === '+' ||
          target === '-' ||
          target === '*' ||
          target === '/'
        ) {
          isOperatorClicked = false;
        }
      }
      break;

    case 'eval':
      try {
        output.value = eval(output.value);
        
        refresh();

        if (!isFinite(output.value)) throw new Error();

        if (output.value.split('.').length === 2) {
          isDotClicked = true;
        }
      } catch {
        output.value = 'Error';
        disable();
      }
      break;
  }

});

function disable() {
  isDisabled = true;
  clearBtn.classList.add('error');
  buttons.forEach(button => {
    button.disabled = true;
  })
}

function inable() {
  isDisabled = false;
  clearBtn.classList.remove('error');
  buttons.forEach(button => {
    button.disabled = false;
  })
}

function refresh() {
  isDotClicked = false;
  isOperatorClicked = false;
}