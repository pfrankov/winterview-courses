В JavaScript все ключи объекта являются строками (кроме Symbol). И хотя мы не _набираем_ их как строки, они всегда преобразовываются к строкам под капотом.

JavaScript интерпретирует (или распаковывает) операторы. При использовании квадратных скобок JS замечает `[` и продолжает пока не встретит `]`. Только после этого он вычислит то, что находится внутри скобок.

`mouse[bird.size]`: Сперва определяется `bird.size`, которое равно `"small"`. `mouse["small"]` возвращает `true`.

Но с записью через точку так не происходит. У `mouse` нет ключа `bird`. Таким образом, `mouse.bird` равно `undefined`. Затем мы запрашиваем ключ `size`, используя точечную нотацию: `mouse.bird.size`. Так как `mouse.bird` это `undefined`, мы запрашиваем `undefined.size`. Это не является валидным, и мы получаем ошибку типа `Cannot read property "size" of undefined`.
