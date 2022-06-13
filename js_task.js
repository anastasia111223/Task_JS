// 1. Тип null означает, что знаяения нет, используется для проверов, когда 
// переменной намеренно задают null (let a = null;)
// Тип indefined - будет у переменной, которая объявлена, но не присвоено ей никакой значение, 
// у функции, которая ничего не возвращает, и у несуществующего свойства объекта

// 2. const obj = {};
// console.log(obj.someprop.x); - получим ошибку т.к. выводим знчение свойства х у cвойства, 
// которого нет у объекта, т.е. хотиv получить свойство от indefined

// 3. Array.isArray([]); - вернет true, используется для проверки на массив

// 4.Проверить, является ли целое число квадратом, не используя математические функции.
let squareRoot = function(a) {
    if (a===0) {
        return 0;
    } else if (a===1) {
        return 1;
    } else {
        let arr = [];
        for (let e=1; e<=a/2; e++) {
            arr.push(e);
        }
       arr = arr.filter((elem) => elem*elem===a);
       if (arr.length===0) return `У числа ${a} нет корня квадратного`;
       else return arr[0];
    }
}
console.log(squareRoot(225));
console.log(squareRoot(1));
console.log(squareRoot(5));

// 5. Написать функцию, которая принимает в качестве аргумента строку 
// и возвращает значение true, если строка является палиндромом.
let palindrome = function(str) {
    let rts = str.split('').reverse().join('');
    if (str===rts) {
        return true;
    } else {
        return false;
    }
}
console.log(palindrome('racecar'));  //вернет true
console.log(palindrome('Table'));  //вернет false

// 6. Напишите функцию, которая возвращает n-ую запись в последовательности 
// Фибоначчи, где n — это число, которое вы передаёте в качестве аргумента функции.
let fibonacci = function(n) {
    let arr =[0,1];
    for (let i=2; i<=n; i++){
        arr.push(arr[i-1]+arr[i-2]);
    } return arr[n]
}
console.log('fibanachi');
console.log(fibonacci(3));  //вернет 2

// 7. const nums = [0, 39, 28, 34, 1, 3, 6, 8, 4, 72, 7];
// nums.forEach(num => {
// 	setTimeout(() => {console.log(num)}, num);
// });  - код выводит с задержкой в 11 мс (11- длина массива) элементы массива

// 8. Выбрать элемент с атрибутом id="rootID" и добавить класс "rootClass"
let text = document.querySelector('#rootID');
text.className = "rootClass";
// Выбрать все дочерние элементы с атрибутом class="someClassName" у элемента 
// с атрибутом id="rootID" на первом уровне вложенности
var parentElem = document.querySelector('#rootID');
let childElems = [];
for (let i = 0; i < parentElem.children.length; i++) {
    if (parentElem.children[i].className === "someClassName") {
        childElems.push(parentElem.children[i]);
    }        
}
// Выбрать все дочерние элементы с атрибутом class="someClassName" у элемента 
// с атрибутом id="rootID" на любом уровне вложенности 
let elements = parentElem.querySelectorAll(".someClassName");
// Выбрать элементы с атрибутом class="someClassName" и аттрибутом oid = "newDoc"
let items = document.querySelectorAll('.someClassName');
let poisk = [];
for (var i = 0; i < items.length; i++)       {
    if (items[i].hasAttribute('oid') && items[i].getAttribute('oid') ==="newDoc") { 
            poisk.push(items[i]);
    }
}
// Выбрать последний дочерний элемент с атрибутом class="someClassName" у элемента
//  с атрибутом id="rootID" и заменить текст в параграфе (p) на "Последняя строка"
// используется часть кода из п. 2:
childElems[childElems.length-1].querySelector('p').innerText = "Последняя строка";
