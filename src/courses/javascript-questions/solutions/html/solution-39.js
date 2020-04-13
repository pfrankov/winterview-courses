module.exports = () => `В JavaScript есть только примитивы и объекты.

Типы примитивов: <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>bigint</code>, <code>number</code>, <code>string</code>, и <code>symbol</code>.

Отличием примитива от объекта является то, что примитивы не имеют свойств или методов. Тем не менее, <code>'foo'.toUpperCase()</code> преобразуется в <code>'FOO'</code> и не вызывает <code>TypeError</code>. Это происходит потому, что при попытке получения свойства или метода у примитива (например, строки), JavaScript неявно обернет примитив объектом, используя один из классов-оберток (например, <code>String</code>), а затем сразу же уничтожит обертку после вычисления выражения. Все примитивы кроме <code>null</code> и <code>undefined</code> ведут себя таким образом.
`;