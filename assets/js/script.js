// function createCalculator() {
//   return {
//     display: document.querySelector('.display'),
//     btnClear: document.querySelector('.clear'),

//     start() {
//       this.display.focus();
//       this.clickButton();
//       this.clearDisplay();
//       this.pressEnter();
//     },
//     clickButton() {
//       document.addEventListener('click', (e) => {
//         //arrow function não possui this, portanto continua sendo o this de createCalculator
//         const element = e.target;
//         if (element.classList.contains('btn-num')) {
//           this.toDisplay(element.innerText);
//         }
//         if (element.classList.contains('btn-clear')) {
//           this.clearDisplay();
//         }
//         if (element.classList.contains('btn-del')) {
//           this.deleteOne();
//         }
//         if (element.classList.contains('btn-eq')) {
//           this.performOperation();
//         }
//       });
//     },
//     performOperation() {
//       let operation = this.display.value;
//       try {
//         operation = eval(operation);
//         if (!operation) {
//           alert('Conta inválida');
//           return;
//         }
//         this.display.value = operation;
//       } catch (error) {
//         alert('Conta inválida');
//         return;
//       }
//     },
//     pressEnter() {
//       this.display.addEventListener('keyup', (e) => {
//         if (e.keyCode === 13) {
//           this.performOperation();
//         }
//       });
//     },
//     toDisplay(value) {
//       this.display.value += value;
//     },
//     clearDisplay() {
//       this.display.value = '';
//     },
//     deleteOne() {
//       this.display.value = this.display.value.slice(0, -1);
//     },
//   };
// }

// const calculator = createCalculator();
// calculator.start();

function Calculator() {
  this.display = document.querySelector('.display');

  this.start = function () {
    this.display.focus();
    this.clickButton();
    this.pressEnter();
  };

  this.clickButton = () => {
    document.addEventListener('click', (e) => {
      const element = e.target;
      if (element.classList.contains('btn-num')) {
        this.toDisplay(element);
      }
      if (element.classList.contains('btn-clear')) {
        this.clearDisplay();
      }
      if (element.classList.contains('btn-del')) {
        this.deletOne();
      }
      if (element.classList.contains('btn-eq')) {
        this.operation();
      }
    });
  };

  this.pressEnter = () => {
    document.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.operation();
      }
    });
  };

  this.operation = () => {
    try {
      const conta = eval(this.display.value);
      if (isNaN(conta)) {
        alert('Conta inválida!');
        return;
      }
      this.display.value = conta;
    } catch (error) {
      alert('Conta inválida!');
      return;
    }
  };

  this.toDisplay = (value) => {
    this.display.value += value.innerText;
    this.display.focus();
  };

  this.clearDisplay = () => {
    this.display.value = '';
  };

  this.deletOne = () => {
    this.display.value = this.display.value.slice(0, -1);
  };
}

const calculator = new Calculator();
calculator.start();
