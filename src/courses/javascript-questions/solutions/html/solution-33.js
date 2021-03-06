module.exports = () => `В обоих случаях мы передаем объект, на который будет указывать <code>this</code>. Но <code>.call</code> <i>выполняется сразу же</i>!

<code>.bind</code> возвращает <i>копию</i> функции, но с привязанным контекстом. Она не выполняется незамедлительно.
`;