module.exports = () => `Все ключи объектов (кроме Symbols) являются строками, даже если заданы не в виде строк. Поэтому <code>obj.hasOwnProperty('1')</code> так же возвращает true.

Но это не работает для <code>set</code>. Значения <code>'1'</code> нет в <code>set</code>: <code>set.has('1')</code> возвращает <code>false</code>. Но <code>set.has(1)</code> вернет <code>true</code>.
`;