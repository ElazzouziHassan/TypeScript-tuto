"use strict";
let sayHello;
sayHello = (text) => {
    console.log(`${text}, World!`);
};
let addOperation;
addOperation = (a, b, action) => {
    if (action === 'add')
        return a + b;
    if (action === 'soust')
        return a - b;
    if (action === 'mult')
        return a * b;
    if (action === 'divise')
        return a / b;
    else
        return 'invalide operation';
};
console.log(addOperation(2, 4, 'add'));
