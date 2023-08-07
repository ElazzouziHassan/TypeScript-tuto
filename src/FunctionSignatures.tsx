let sayHello: (text: string) => void;

sayHello = (text: string) => {
  console.log(`${text}, World!`);
}


let addOperation: (numberOne: number, numberTwo: number, action: string) => void;

addOperation = (a: number, b: number, action: string) => {
  if (action === 'add') return a + b;
  if (action === 'soust') return a - b;
  if (action === 'mult') return a * b;
  if (action === 'divise') return a / b;
  else return 'invalide operation';
}

console.log(addOperation(2,4,'add'))