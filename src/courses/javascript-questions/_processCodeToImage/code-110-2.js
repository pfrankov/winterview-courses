// Преобразование числа в допустимый JSON, затем преобразование строки JSON в значение JavaScript:
const jsonNumber = JSON.stringify(4) // '4'
JSON.parse(jsonNumber) // 4

// Преобразование значения массива в допустимый JSON, затем разбор строки JSON в значение JavaScript:
const jsonArray = JSON.stringify([1, 2, 3]) // '[1, 2, 3]'
JSON.parse(jsonArray) // [1, 2, 3]

// Преобразование объекта в допустимый JSON, затем преобразование строки JSON в значение JavaScript:
const jsonArray = JSON.stringify({ name: "Lydia" }) // '{"name":"Lydia"}'
JSON.parse(jsonArray) // { name: 'Lydia' }