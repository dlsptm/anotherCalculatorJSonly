
const main = document.createElement('main');
document.body.appendChild(main);

const sumDisplay = document.createElement('input');
sumDisplay.type = "text";
sumDisplay.readOnly = true;

main.appendChild(sumDisplay);


const buttonsValues = [ 'AC', 'DE', '/',
                  '7', '8', '9', '*',
                  '4', '5', '6', '-',
                  '3', '2', '1', '+',
                  '0', '.', '='];


buttonsValues.forEach(btn => {
  const button = document.createElement('button');
  button.textContent = btn;
  main.appendChild(button);

  const modifiedBtn = btn
                          .replace('-', 'minus')
                          .replace('+', 'add')
                          .replace('*', 'multiply')
                          .replace('=', 'equal')
                          .replace('.', 'dot')
                          .replace('/', 'devide');

  
  button.classList.add(`btn-${modifiedBtn}`);


  button.addEventListener('click', () => {
    switch(btn) {
      case 'AC':
        sumDisplay.value = '';
        break;
      case 'DE': 
        sumDisplay.value = sumDisplay.value.slice(0, -1);
        break;
      case '=':
        sumDisplay.value = eval(sumDisplay.value)
        break;
      case '%':
        sumDisplay.value = (parseFloat(sumDisplay.value) / 100).toString();
        break;
      default:
        sumDisplay.value += btn;
    }
  })
})

