module.exports = () => `С помощью <code>!!name</code> мы определяем, является ли значение <code>name</code> истинным или ложным. Если имя истинное, которое мы хотим проверить, то <code>!name</code> возвращает <code>false</code>. А <code>!false</code> (это то, чем на самом деле является <code>!! name</code>) возвращает <code>true</code>.

Устанавливая <code>hasName</code> равным <code>name</code>, вы устанавливаете <code>hasName</code> равным любому значению, которое вы передали функции <code>getName</code>, а не логическому значению <code>true</code>.

<code>new Boolean (true)</code> возвращает объектную оболочку, а не само логическое значение.

<code>name.length</code> возвращает длину переданного аргумента, независимо от того, является ли он <code>true</code>.
`;