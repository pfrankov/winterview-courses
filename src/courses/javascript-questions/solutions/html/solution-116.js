module.exports = () => `Функции <code>changeAge</code> и <code>changeAgeAndName</code> имеют параметр по умолчанию, а именно <i>вновь</i> созданный объект <code>{ ...person }</code>. Этот объект имеет копии всех ключей/значений объекта <code>person</code>.

Сначала мы вызываем функцию <code>changeAge</code> и передаем объект <code>person</code> в качестве аргумента. Эта функция увеличивает значение свойства <code>age</code> на 1. <code>person</code> теперь <code>{name: "Lydia", age: 22}</code>.

Затем мы вызываем функцию <code>changeAgeAndName</code>, однако мы не передаем параметр. Вместо этого значение <code>x</code> равно новому объекту: <code>{ ... person }</code>. Поскольку это новый объект, он не влияет на значения свойств объекта <code>person</code>. <code>person</code> по-прежнему равен <code>{name: "Lydia", age: 22}</code>.
`;