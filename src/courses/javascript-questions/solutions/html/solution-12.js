module.exports = () => `Для <code>sarah</code> мы не использовали ключевое слово <code>new</code>. Использование <code>new</code> приводит к созданию нового объекта. Но без <code>new</code> он указывает на <b>глобальный объект</b>!

Мы указали, что <code>this.firstName</code> равно <code>"Sarah"</code> и <code>this.lastName</code> равно <code>"Smith"</code>. На самом деле мы определили <code>global.firstName = 'Sarah'</code> и <code>global.lastName = 'Smith'</code>. <code>sarah</code> осталась <code>undefined</code>, поскольку мы не возвращаем значение из функции <code>Person</code>.
`;