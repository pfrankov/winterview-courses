let numsArray = [22, 134, 144, 45, 200, 55, 72];
let frameworksArray = ['React', 'Vue', 'Angular', 'Ember'];

// Метод splice() - удаляет или добавляет элементы в массив, возвращает убранные элементы. (index [], кол-во убрать, 'добавить')
frameworksArray.splice(0, 2, 'Ionic', 'Meteor'); // [ 'React', 'Vue' ] - убирает эти элементы и добавляет на их место новые
// Вывод: [ 'Ionic', 'Meteor', 'Angular', 'Ember' ]

// Метод values() - возвращает объект, содержащий значения для каждого индекса массива
const iterator = frameworksArray.values();
for (const value of iterator) {
  console.log(value);
}
// Вывод:
// "React"
// "Vue"
// "Angular"
// "Ember"

// Метод forEach() - выполняет функцию внутри метода для всех элементов массива
const copyFrameworksArray = []; // в этот массив будут копироваться значения
frameworksArray.forEach((x) => {
  copyFrameworksArray.push(x); // Вывод: ['React', 'Vue', 'Angular', 'Ember']
});

// Метод slice() - возвращает выбранные элементы массива в виде нового массива. slice ([начальный_индекс], [конечный_индекс - не включая значение])
frameworksArray.slice(1, 3); // Вывод: [ 'Vue', 'Angular' ]

// Метод some() - проверяет, есть ли хоть одно значение, которое удовлетворяет функции внутри метода
numsArray.some((x) => x > 199); // Вывод: true
