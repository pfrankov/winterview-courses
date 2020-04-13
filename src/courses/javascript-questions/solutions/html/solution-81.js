module.exports = () => `По умолчанию аргументы имеют значение <code>undefined</code>, если только значение не было передано функции. В этом случае мы не передали значение для аргумента <code>name</code>. <code>name</code> равно логгируемому <code>undefined</code>.

В ES6 мы можем перезаписать значение по умолчанию <code>undefined</code> параметрами по умолчанию. Например:

<code>function sayHi(name = "Lydia") { ... }</code>

В этом случае, если мы не передали значение или если мы передали <code>undefined</code>, <code>name</code> всегда будет равно строке <code>Lydia</code>
`;