module.exports = () => `Асинхронная функция всегда возвращает обещание. <code>await</code> все еще должен ждать разрешения обещания: ожидаемое обещание возвращается, когда мы вызываем <code>getData()</code>, чтобы установить <code>data</code> равным ему.

Если бы мы хотели получить доступ к разрешенному значению <code>"I made it"</code>, мы могли бы использовать метод <code>.then()</code> для <code>data</code>:

<code>data.then(res => console.log(res))</code>

Тогда это бы вывело <code>"I made it!"</code>
`;