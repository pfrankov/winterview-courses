let numsArray = [22, 134, 144, 45, 200, 55, 72];
let frameworksArray = ['React', 'Vue', 'Angular', 'Ember'];

// Метод toString() - преобразует массив в строку
frameworksArray.toString(); // Вывод: React,Vue,Angular,Ember

// Метод pop() - убирает последний элемент массива
numsArray.pop(); // Вывод: 72 | Новый массив: [22, 134, 144, 45, 200, 55]

// Метод push() - добавляет новый элемент в конец массива и возвращает length массива
numsArray.push(10); // Вывод: 8 | Новый массив: [22, 134, 144, 45, 200, 55, 72, 10]

// Метод shift() - убирает первый элемент массива и возвращает его значение
frameworksArray.shift(); // Вывод: React | Новый массив: ['Vue', 'Angular', 'Ember'];

// Метод Unshift() - добавляет новый элемент в начало массива и возвращает новую длину массива
frameworksArray.unshift('Meteor'); //Вывод: 5 | Новый массив: ['Meteor', 'React', 'Vue', 'Angular', 'Ember']
