Оператор `delete` возвращает логическое значение: `true` при успешном удалении, иначе он вернет `false`. Однако переменные, объявленные с ключевым словом `var`,` const` или `let`, не могут быть удалены с помощью оператора` delete`.

Переменная `name` была объявлена ​​с ключевым словом `const`, поэтому ее удаление не было успешным: возвращается `false`. Когда мы устанавливаем `age` равным `21`, мы фактически добавляем свойство с именем `age` к глобальному объекту. Вы можете успешно удалить свойства из объектов, в том числе из глобального объекта, поэтому `delete age` возвращает `true`.
