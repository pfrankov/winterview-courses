module.exports = () => `Метод <code>.push</code> возвращает <i>новую длину</i> массива, а не сам массив! Устанавливая <code>newList</code> равным <code>[1, 2, 3].push(4)</code>, мы устанавливаем <code>newList</code> равным новой длине массива: <code>4</code>.

Затем мы пытаемся использовать метод <code>.push</code> для <code>newList</code>. Поскольку <code>newList</code> является числовым значением <code>4</code>, мы не можем использовать метод <code>.push</code>: выдается ошибка TypeError.
`;