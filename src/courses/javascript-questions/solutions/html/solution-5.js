module.exports = () => `В JavaScript все ключи объекта являются строками (кроме Symbol). И хотя мы не <i>набираем</i> их как строки, они всегда преобразовываются к строкам под капотом.

JavaScript интерпретирует (или распаковывает) операторы. При использовании квадратных скобок JS замечает <code>[</code> и продолжает пока не встретит <code>]</code>. Только после этого он вычислит то, что находится внутри скобок.

<code>mouse[bird.size]</code>: Сперва определяется <code>bird.size</code>, которое равно <code>"small"</code>. <code>mouse["small"]</code> возвращает <code>true</code>.

Но с записью через точку так не происходит. У <code>mouse</code> нет ключа <code>bird</code>. Таким образом, <code>mouse.bird</code> равно <code>undefined</code>. Затем мы запрашиваем ключ <code>size</code>, используя точечную нотацию: <code>mouse.bird.size</code>. Так как <code>mouse.bird</code> это <code>undefined</code>, мы запрашиваем <code>undefined.size</code>. Это не является валидным, и мы получаем ошибку типа <code>Cannot read property "size" of undefined</code>.
`;