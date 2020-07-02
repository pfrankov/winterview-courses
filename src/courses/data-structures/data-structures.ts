import {ICourse} from "../typings";

const getTaskHeader = (day: number) => {
  return day === -1 ? 
    `<b>Структуры данных. Курс закончился</b>\n`:
    `<b>Структуры данных. День ${day}</b>\n`;
};

const getFinalText = (userAnswers: [], questions: number) => {
  const correctAnswers = userAnswers.filter((answer) => answer === true);
  const correctAnswersQuantity = correctAnswers.length;
  let message;

  if (correctAnswersQuantity === questions) {
    message = `Вы правильно ответили на все вопросы! Так держать!`;      
  } else if (correctAnswersQuantity >= Math.floor(questions / 2)) {
    message = `Правильных ответов: ${correctAnswersQuantity} из ${questions}. У вас хороший результат!`; 
  } else {
    message = `Правильных ответов: ${correctAnswersQuantity} из ${questions}. Не огорчайтесь. Наверняка, вы узнали что-то новое! `
  }

  return `${message} 
  
Если захотите ещё раз проверить свои знания, возвращайтесь! Скоро мы добавим новые задания в курс.`
}

const answers: {[index: string]:any} = {
  '1': [
    {
      isCorrect: true,
      text: `Правильно! Стек позволяет записывать новые элементы в конец и получать их в первую очередь. Как с историей браузера: при переходе «назад» мы попадаем на последнюю посещённую страницу.
    
Стек часто используется для хранения данных. Например, ваши действия в редакторе кода записываются в стек. Вы нажимаете <code>ctrl+z</code> и последнее действие отменяется.
      
Такой принцип называется «последний вошел, первый вышел» (Last-In-First-Out или LIFO). Можно провести аналогию с лифтом. Обычно пассажир, который зашёл позже всех, выходит первым, потому что стоит ближе всех к двери. Ну или с пачкой чипсов Pringles: чтобы добраться до дна упаковки, надо съесть все чипсы сверху (если вы не читер, который высыпает все чипсы в тарелку).`
    },
    {
      isCorrect: false,
      text: `Не угадали. Очередь — тоже структура данных (о ней поговорим попозже), но правильный ответ — <b>стек</b>.

Стек позволяет записывать новые элементы в конец и получать их в первую очередь. Как с историей браузера: при переходе «назад» мы попадаем на последнюю посещённую страницу.
      
Стек часто используется для хранения данных. Например, ваши действия в редакторе кода записываются в стек. Вы нажимаете <code>ctrl+z</code> и последнее действие отменяется.
      
Такой принцип называется «последний вошел, первый вышел» (Last-In-First-Out или LIFO). Можно провести аналогию с лифтом. Обычно пассажир, который зашёл позже всех, выходит первым, потому что стоит ближе всех к двери. Ну или с пачкой чипсов Pringles: чтобы добраться до дна упаковки, надо съесть все чипсы сверху (если вы не читер, который высыпает все чипсы в тарелку).
      
А очередь работает наоборот, по принципу «первый пришёл — первый вышел» (FIFO, First In — First Out).`
    },
    {
      isCorrect: false,
      text: `Не совсем. Дерево — тоже структура данных (мы поговорим о деревьях позже), но правильный ответ — <b>стек</b>.

Стек позволяет записывать новые элементы в конец и получать их в первую очередь. Как с историей браузера: при переходе «назад» мы попадаем на последнюю посещённую страницу.
      
Стек часто используется для хранения данных. Например, ваши действия в редакторе кода записываются в стек. Вы нажимаете <code>ctrl+z</code> и последнее действие отменяется.
      
Такой принцип называется «последний вошел, первый вышел» (Last-In-First-Out или LIFO). Можно провести аналогию с лифтом. Обычно пассажир, который зашёл позже всех, выходит первым, потому что стоит ближе всех к двери. Ну или с пачкой чипсов Pringles: чтобы добраться до дна упаковки, надо съесть все чипсы сверху (если вы не читер, который высыпает все чипсы в тарелку).`
    },
    {
      isCorrect: false,
      text: `Ничего, сейчас разберёмся! Правильный ответ — <b>стек</b>.

Стек позволяет записывать новые элементы в конец и получать их в первую очередь. Как с историей браузера: при переходе «назад» мы попадаем на последнюю посещённую страницу.
      
Стек часто используется для хранения данных. Например, ваши действия в редакторе кода записываются в стек. Вы нажимаете <code>ctrl+z</code> и последнее действие отменяется.

Такой принцип называется «последний вошел, первый вышел» (Last-In-First-Out или LIFO). Можно провести аналогию с лифтом. Обычно пассажир, который зашёл позже всех, выходит первым, потому что стоит ближе всех к двери. Ну или с пачкой чипсов Pringles: чтобы добраться до дна упаковки, надо съесть все чипсы сверху (если вы не читер, который высыпает все чипсы в тарелку).`
    }
  ],

  '2': [
    {
      isCorrect: false,
      text: `Не угадали. Метод <code>pop</code> удаляет последний элемент массива и возвращает его значение. Его можно использовать для получения элементов из стека. 

А что с другими вариантами? Метод <code>unshift</code> записывает новые элементы в начало массива, а в стеке обычно новые элементы записываются в конец. Помните, «последний пришёл, первый вышел»? 
      
Зато метод <code>push</code> записывает новые элементы в конец массива. То,что нужно для стека!
      
В целом вы можете использовать <code>unshift</code>, чтобы записывать новые данные в начало массива. А потом и брать элементы из начала, но это не оптимально для производительности. С добавлением и удалением каждого элемента, массив будет сдвигаться, будут пересчитываться индексы всех элементов.`
    },
    {
      isCorrect: true,
      text: `Да, всё верно! Метод <code>push</code> добавляет новые элементы в конец массива. То, что нужно для стека!
      
А что с другими вариантами? Метод <code>pop</code> удаляет последний элемент массива и возвращает его значение. Его можно использовать для получения элементов из стека. Метод <code>unshift</code> записывает новые элементы в начало массива. А в стеке обычно новые элементы записываются в конец. Помните, «последний пришёл, первый вышел»?

В целом вы можете записывать новые данные в начало массива и брать элементы оттуда, но это не оптимально для производительности. С добавлением и удалением каждого элемента, массив будет сдвигаться, будут пересчитываться индексы всех элементов.`
    },
    {
      isCorrect: false,
      text: `Почти. Метод <code>unshift</code> записывает новые элементы в начало массива. А в стеке обычно новые элементы записываются в конец. Помните, «последний пришёл, первый вышел? Поэтому здесь лучше всего подойдёт метод <code>push</code>, который записывает новые элементы в конец массива.

В целом вы можете записывать новые данные в начало массива и брать элементы оттуда, но это не оптимально для производительности. С добавлением и удалением каждого элемента, массив будет сдвигаться, будут пересчитываться индексы всех элементов.

А что насчёт метода <code>pop</code>? Он удаляет последний элемент массива и возвращает его значение. Его можно использовать для получения элементов из стека.`
    },
    {
      isCorrect: false,
      text: `Ничего, сейчас всё будет! Посмотрим на все предложенные методы

Метод <code>pop</code> удаляет последний элемент массива и возвращает его значение. Его можно использовать для получения элементов из стека. 
      
Метод <code>unshift</code> записывает новые элементы в начало массива, а в стеке обычно новые элементы записываются в конец. Помните, «последний пришёл, первый вышел»? 
      
Зато метод <code>push</code> записывает новые элементы в конец массива. То, что нужно для стека!
      
В целом вы можете использовать <code>unshift</code>, чтобы записывать новые данные в начало массива. А потом и брать элементы из начала, но это не оптимально для производительности. С добавлением и удалением каждого элемента, массив будет сдвигаться, будут пересчитываться индексы всех элементов.`
    }
  ],

  '3': [
    {
      isCorrect: true,
      text: `Да! Именно метод <code>pop</code> нам и нужен, чтобы получить последние добавленные в массив элементы. Метод удаляет последний элемент массива и возвращает его значение.

А для чего остальные методы? Метод <code>push</code>, как вы уже знаете из предыдущего вопроса, записывает новые элементы в конец массива. Он подходит для добавления элементов в стек, а не получения.
      
Метод <code>shift</code> удаляет первый элемент из массива и возвращает его значение. Для стека это не очень подходит — новые элементы записываются в конец, поэтому и получать элементы надо из конца массива.`
    },
    {
      isCorrect: false,
      text: `Немного перепутали. Метод <code>push</code>, как вы уже знаете из предыдущего вопроса, занимается записью элементов в массив, а вот <code>pop</code> удаляет последний элемент из массива и возвращает его значение.

А что делает метод <code>shift</code>? Он удаляет первый элемент из массива и возвращает его значение. Для стека это не очень подходит — новые элементы записываются в конец, поэтому и получать элементы надо из конца массива.`
    },
    {
      isCorrect: false,
      text: `Почти, но нет. Метод <code>shift</code> удаляет первый элемент из массива и возвращает его значение. Для стека это не очень подходит — новые элементы записываются в конец, поэтому и получать элементы надо из конца массива. Для этого подходит метод <code>pop</code> — он удаляет последний элемент массива и возвращает его значение.

Метод <code>push</code>, как вы уже знаете из предыдущего вопроса, записывает новые элементы в конец массива и подходит для добавления элементов в стек, а не получения.`
    },
    {
      isCorrect: false,
      text: `Ничего! Помните, стек работает по принципу «последний пришёл, первый вышел»? Новые элементы записываются в конец стека, в нашем случае массива. Поэтому и получать последние добавленные элементы надо из конца массива. Для этого подходит метод <code>pop</code> — он удаляет последний элемент массива и возвращает его значение.
      
А для чего остальные методы? Метод <code>push</code>, как вы уже знаете из предыдущего вопроса, записывает новые элементы в конец массива. Он подходит для добавления элементов в стек, а не получения.
      
Метод <code>shift</code> удаляет первый элемент из массива и возвращает его значение. Для стека это не очень подходит — новые элементы записываются в конец, поэтому и получать элементы надо из конца массива.`
    }
  ],

  '4': [
    {
      isCorrect: false,
      text: `Звучит неплохо, но нет. Такой механизм называется <b>стеком вызовов</b> (call stack) или стеком выполнения. Давайте разбираться на примере, как он работает. У нас есть такой фрагмент кода (да, он простой, чтобы было проще разобраться, подыграйте):
      
<pre><code>const countPlates = (guests) => { 
  return guests * 2; 
};
const createDinner = (guests) => { 
  return &#715;Для \${guests} гостей надо 
  приготовить \${countPlates(guests)} тарелок&#715; 
};
      
console.log(createDinner(7)); 
// Для 7 гостей 
// надо приготовить 
// 14 тарелок</code></pre>
      
JavaScript выделяет глобальный контекст выполнения — в нём выполняется весь наш скрипт. Затем он разбирает наш код построчно, сверху вниз. Сначала он фиксирует объявление двух функций (<code>createDinner</code> и <code>countPlates</code>).

После этого JS встречает вызов <code>console.log</code>. Действие этого вызова приостанавливается. Да, вывод в консоль не срабатывает сразу. Движок создаёт <b>контекст выполнения</b> для этой функции. В нём находится информация о конкретном месте функции в коде, локальные переменные функции, значение <code>this</code> и другие служебные данные. Этот контекст помещается в стек вызовов.

Дальше движок встречает вложенный вызов функции <code>createDinner</code>. Для неё происходит всё то же самое, что и для вывода в консоль: вызов приостанавливается, создаётся контекст вызова функции и помещается в стек вызовов. Прямо после контекста <code>console.log</code>.

Потом то же самое происходит для функции <code>countPlates</code>, которая вызывается из функции <code>createDinner</code>.

В итоге в стеке три контекста. В самом начале <code>console.log</code>, потом <code>сreateDinner</code> и в конце <code>countPlates</code>.

Когда все контексты найдены и собраны в стек, движок начинает разматывать клубок: сначала проиcходит вызов последней функции в стопке — <code>countPlates</code>. После выполнения кода, контекст этой функции достаётся из стека. А результат передаётся в контекст следующей функции — <code>createDinner</code>. Эта функция срабатывает, её контекст удаляется из стека, и, наконец-то, происходит вывод в консоль. Такие дела.

Можно представить аналогию со стопкой блинов. Новые блины (они же контексты вызова функций) кладутся наверх стопки. И чтобы добраться до нижних блинов, надо убрать блины сверху.`
    },
    {
      isCorrect: true,
      text: `Верно! Стек вызовов хранит контексты выполнения функций. Чем больше вложенных функций, там больше данных в стеке. Движок разбирает эти контексты с конца, постепенно удаляя уже вызванные функции.
      
Рассмотрим по шагам. У нас есть такой фрагмент кода (да, он простой, чтобы было проще разобраться, подыграйте):
      
<pre><code>const countPlates = (guests) => { 
  return guests * 2; 
};
const createDinner = (guests) => { 
  return &#715;Для \${guests} гостей надо 
  приготовить \${countPlates(guests)} тарелок&#715; 
};
      
console.log(createDinner(7)); 
// Для 7 гостей 
// надо приготовить 
// 14 тарелок</code></pre>
      
JavaScript выделяет глобальный контекст выполнения — в нём выполняется весь наш скрипт. Затем он разбирает наш код построчно, сверху вниз. Сначала он фиксирует объявление двух функций (<code>createDinner</code> и <code>countPlates</code>).

После этого JS встречает вызов <code>console.log</code>. Действие этого вызова приостанавливается. Да, вывод в консоль не срабатывает сразу. Движок создаёт <b>контекст выполнения</b> для этой функции. В нём находится информация о конкретном месте функции в коде, локальные переменные функции, значение <code>this</code> и другие служебные данные. Этот контекст помещается в стек вызовов.

Дальше движок встречает вложенный вызов функции <code>createDinner</code>. Для неё происходит всё то же самое, что и для вывода в консоль: вызов приостанавливается, создаётся контекст вызова функции и помещается в стек вызовов. Прямо после контекста <code>console.log</code>.

Потом то же самое происходит для функции <code>countPlates</code>, которая вызывается из функции <code>createDinner</code>.

В итоге в стеке три контекста. В самом начале <code>console.log</code>, потом <code>сreateDinner</code> и в конце <code>countPlates</code>.

Когда все контексты найдены и собраны в стек, движок начинает разматывать клубок: сначала проиcходит вызов последней функции в стопке — <code>countPlates</code>. После выполнения кода, контекст этой функции достаётся из стека. А результат передаётся в контекст следующей функции — <code>createDinner</code>. Эта функция срабатывает, её контекст удаляется из стека, и, наконец-то, происходит вывод в консоль. Такие дела.

Можно представить аналогию со стопкой блинов. Новые блины (они же контексты вызова функций) кладутся наверх стопки. И чтобы добраться до нижних блинов, надо убрать блины сверху.`
    },
    {
      isCorrect: false,
      text: `Хорошая версия, но нет. Такой механизм называется <b>стеком вызовов</b> (call stack) или стеком выполнения.

Давайте разбираться на примере, как он работает. У нас есть такой фрагмент кода (да, он простой, чтобы было проще разобраться, подыграйте):
      
<pre><code>const countPlates = (guests) => { 
  return guests * 2; 
};
const createDinner = (guests) => { 
  return &#715;Для \${guests} гостей надо 
  приготовить \${countPlates(guests)} тарелок&#715; 
};
      
console.log(createDinner(7)); 
// Для 7 гостей 
// надо приготовить 
// 14 тарелок</code></pre>
      
JavaScript выделяет глобальный контекст выполнения — в нём выполняется весь наш скрипт. Затем он разбирает наш код построчно, сверху вниз. Сначала он фиксирует объявление двух функций (<code>createDinner</code> и <code>countPlates</code>).

После этого JS встречает вызов <code>console.log</code>. Действие этого вызова приостанавливается. Да, вывод в консоль не срабатывает сразу. Движок создаёт <b>контекст выполнения</b> для этой функции. В нём находится информация о конкретном месте функции в коде, локальные переменные функции, значение <code>this</code> и другие служебные данные. Этот контекст помещается в стек вызовов.

Дальше движок встречает вложенный вызов функции <code>createDinner</code>. Для неё происходит всё то же самое, что и для вывода в консоль: вызов приостанавливается, создаётся контекст вызова функции и помещается в стек вызовов. Прямо после контекста <code>console.log</code>.

Потом то же самое происходит для функции <code>countPlates</code>, которая вызывается из функции <code>createDinner</code>.

В итоге в стеке три контекста. В самом начале <code>console.log</code>, потом <code>сreateDinner</code> и в конце <code>countPlates</code>.

Когда все контексты найдены и собраны в стек, движок начинает разматывать клубок: сначала проиcходит вызов последней функции в стопке — <code>countPlates</code>. После выполнения кода, контекст этой функции достаётся из стека. А результат передаётся в контекст следующей функции — <code>createDinner</code>. Эта функция срабатывает, её контекст удаляется из стека, и, наконец-то, происходит вывод в консоль. Такие дела.

Можно представить аналогию со стопкой блинов. Новые блины (они же контексты вызова функций) кладутся наверх стопки. И чтобы добраться до нижних блинов, надо убрать блины сверху.`
    },
    {
      isCorrect: false,
      text: `Давайте разбираться! Такой механизм называется <b>стеком вызовов</b> (call stack) или стеком выполнения. Посмотрим на примере, как он работает. У нас есть такой фрагмент кода (да, он простой, чтобы было проще разобраться, подыграйте):
      
<pre><code>const countPlates = (guests) => { 
  return guests * 2; 
};
const createDinner = (guests) => { 
  return &#715;Для \${guests} гостей надо 
  приготовить \${countPlates(guests)} тарелок&#715; 
};
      
console.log(createDinner(7)); 
// Для 7 гостей 
// надо приготовить 
// 14 тарелок</code></pre>
      
JavaScript выделяет глобальный контекст выполнения — в нём выполняется весь наш скрипт. Затем он разбирает наш код построчно, сверху вниз. Сначала он фиксирует объявление двух функций (<code>createDinner</code> и <code>countPlates</code>).

После этого JS встречает вызов <code>console.log</code>. Действие этого вызова приостанавливается. Да, вывод в консоль не срабатывает сразу. Движок создаёт <b>контекст выполнения</b> для этой функции. В нём находится информация о конкретном месте функции в коде, локальные переменные функции, значение <code>this</code> и другие служебные данные. Этот контекст помещается в стек вызовов.

Дальше движок встречает вложенный вызов функции <code>createDinner</code>. Для неё происходит всё то же самое, что и для вывода в консоль: вызов приостанавливается, создаётся контекст вызова функции и помещается в стек вызовов. Прямо после контекста <code>console.log</code>.

Потом то же самое происходит для функции <code>countPlates</code>, которая вызывается из функции <code>createDinner</code>.

В итоге в стеке три контекста. В самом начале <code>console.log</code>, потом <code>сreateDinner</code> и в конце <code>countPlates</code>.

Когда все контексты найдены и собраны в стек, движок начинает разматывать клубок: сначала проиcходит вызов последней функции в стопке — <code>countPlates</code>. После выполнения кода, контекст этой функции достаётся из стека. А результат передаётся в контекст следующей функции — <code>createDinner</code>. Эта функция срабатывает, её контекст удаляется из стека, и, наконец-то, происходит вывод в консоль. Такие дела.

Можно представить аналогию со стопкой блинов. Новые блины (они же контексты вызова функций) кладутся наверх стопки. И чтобы добраться до нижних блинов, надо убрать блины сверху.`
    }
  ],

  '5': [
    {
      isCorrect: false,
      text: `Не угадали. Со стеком мелодия будет проигрываться задом наперёд — с конца в начало. Помните, стек работает по принципу «последний вошел, первый вышел»? А для нашей задачи мелодия должна играть привычным способом — с начала и до конца. Тут подойдёт <b>очередь</b>.

Очередь позволяет записывать новые элементы в конец и получать их после остальных — в порядке очереди. Как в задаче с музыкой — последняя нота будет и проиграна последней.
      
А ещё очередь используется в движке JavaScript — события, которые нужно выполнить, выстраиваются в очередь. Такая очередь называется «очередью макрозадач» (macrotask queue).
      
Очередь работает по принципу «первый пришёл — первый вышел» (First In — First Out или FIFO). Можно провести аналогию с любой привычной нам очередью: в банке или в больнице. Первый в очереди первым и зайдёт. А вот внезапно ворваться с «только спросить» тут не получится.`
    },
    {
      isCorrect: false,
      text: `Ничего, сейчас узнаете! Правильный ответ — <b>очередь</b>.

Очередь позволяет записывать новые элементы в конец и получать их после остальных — в порядке очереди. Как в задаче с музыкой — последняя нота будет и проиграна последней.
      
А ещё очередь используется в движке JavaScript — события, которые нужно выполнить, выстраиваются в очередь. Такая очередь называется «очередью макрозадач» (macrotask queue).
      
Очередь работает по принципу «первый пришёл — первый вышел» (First In — First Out или FIFO). Можно провести аналогию с любой привычной нам очередью: в банке или в больнице. Первый в очереди первым и зайдёт. А вот внезапно ворваться с «только спросить» тут не получится.

Почему для решения не подойдёт стек? Со стеком мелодия будет проигрываться задом наперёд — с конца в начало. Помните, стек работает по принципу «последний вошел, первый вышел»? А для нашей задачи мелодия должна играть привычным способом — с начала и до конца.`
    },
    {
      isCorrect: false,
      text: `Не угадали. До хеш-таблиц мы ещё доберёмся в будущем, это очень полезная структура данных. Но в этой задаче правильный ответ — <b>очередь</b>.

Очередь позволяет записывать новые элементы в конец и получать их после остальных — в порядке очереди. Как в задаче с музыкой — последняя нота будет и проиграна последней.
      
А ещё очередь используется в движке JavaScript — события, которые нужно выполнить, выстраиваются в очередь. Такая очередь называется «очередью макрозадач» (macrotask queue).
      
Очередь работает по принципу «первый пришёл — первый вышел» (First In — First Out или FIFO). Можно провести аналогию с любой привычной нам очередью: в банке или в больнице. Первый в очереди первым и зайдёт. А вот внезапно ворваться с «только спросить» тут не получится.

Почему для решения не подойдёт стек? Со стеком мелодия будет проигрываться задом наперёд — с конца в начало. Помните, стек работает по принципу «последний вошел, первый вышел»? А для нашей задачи мелодия должна играть привычным способом — с начала и до конца.`
    },
    {
      isCorrect: true,
      text: `Верно! Очередь позволяет записывать новые элементы в конец и получать их после остальных — в порядке очереди. Как в задаче с музыкой — последняя нота будет и проиграна последней. Такой принцип называется «первый пришёл — первый вышел» (First In — First Out или FIFO).

А ещё очередь используется в движке JavaScript — события, которые нужно выполнить, выстраиваются в очередь. Такая очередь называется «очередью макрозадач» (macrotask queue).

Почему для решения не подойдёт стек? Со стеком мелодия будет проигрываться задом наперёд — с конца в начало. Помните, стек работает по принципу «последний вошел, первый вышел»? А для нашей задачи мелодия должна играть привычным способом — с начала и до конца.`
    }
  ],

  '6': [
    {
      isCorrect: false,
      text: `Неа. Метод <code>pop</code> удаляет последний элемент массива и возвращает его значение. Его можно использовать для получения элементов из стека. А вот записывает новый элемент в конец массива метод <code>push</code>. Помните, все новички встают в конец очереди? Тут всё по-честному — «первый пришёл — первый вышел».

Обратите внимание, что для записи новых элементов в очередь и стек можно использовать одинаковый метод.

А что насчёт <code>unshift</code>? Этот метод записывает новые элементы в начало массива. А в очереди, как и в стеке, новые элементы обычно записываются в конец. Здесь всё, как в настоящей очереди в магазине. Пришёл последним — вставай за всеми.`
    },
    {
      isCorrect: false,
      text: `Не угадали. Метод <code>unshift</code> записывает новые элементы в начало массива. А в очереди, как и в стеке, новые элементы обычно записываются в конец. Здесь всё, как в настоящей очереди в магазине. Пришёл последним — вставай за всеми. Поэтому здесь лучше всего подойдёт метод <code>push</code>, который записывает новые элементы в конец массива.
      
А что насчёт <code>pop</code>? Этот метод удаляет последний элемент массива и возвращает его значение. Его можно использовать для получения элементов из стека.`
    },
    {
      isCorrect: true,
      text: `Бинго! Метод <code>push</code> добавляет новые элементы в конец массива. То, что нужно для очереди! И для стека.
      
А что насчёт <code>pop</code>? Этот метод удаляет последний элемент массива и возвращает его значение. Его можно использовать для получения элементов из стека.

А <code>unshift</code>? Метод записывает новые элементы в начало массива. А в очереди, как и в стеке, новые элементы обычно записываются в конец. Здесь всё, как в настоящей очереди в магазине. Пришёл последним — вставай за всеми.`
    },
    {
      isCorrect: false,
      text: `Давайте выяснять! Помните, очередь работает по принципу «первый пришёл — первый вышел»? Это значит, что новички, которые «пришли» позже всех, встают в конец очереди, то есть в конец массива. Поэтому здесь лучше всего подойдёт метод <code>push</code>, который как раз и записывает новые элементы в конец массива.
    
А что насчёт <code>pop</code>? Этот метод удаляет последний элемент массива и возвращает его значение. Его можно использовать для получения элементов из стека.

А <code>unshift</code>? Метод записывает новые элементы в начало массива. А в очереди, как и в стеке, новые элементы обычно записываются в конец. Здесь всё, как в настоящей очереди в магазине. Пришёл последним — вставай за всеми.`
    }
  ],

  '7': [
    {
      isCorrect: false,
      text: `Нет. Метод <code>pop</code> удаляет последний элемент массива и возвращает его значение. Это отлично работает для стека, но не для очереди.

В очереди первые элементы «пришли» раньше остальных и должны удаляться первыми. Значит, нужен метод, который удаляет первый элемент массива и возвращает его значение. Это метод <code>shift</code>.

Ну а про <code>push</code> вы уже знаете. Он добавляет новые элементы в конец массива, а не удаляет их.`
    },
    {
      isCorrect: false,
      text: `Неа. Метод <code>push</code> занимается записью элементов в конец массива, а нам нужно получать первые элементы. Помните, «первый пришёл, первый вышел»? Поэтому тут нужен метод <code>shift</code>, который удаляет первый элемент массива и возвращает его значение.
      
Почему не <code>pop</code>? Он удаляет последний элемент массива и возвращает его значение. Это отлично работает для стека, но не для очереди.`
    },
    {
      isCorrect: true,
      text: `Верно! То, что нужно! Именно этот метод удаляет первый элемент массива и возвращает его значение.
      
Почему не <code>pop</code>? Он удаляет последний элемент массива и возвращает его значение. Это отлично работает для стека, но не для очереди.

Ну а про <code>push</code> вы уже знаете. Он добавляет новые элементы в конец массива, а не удаляет их.`
    },
    {
      isCorrect: false,
      text: `Давайте узнавать!
В очереди первые элементы «пришли» раньше остальных и должны удаляться первыми. Значит, нужен метод, который может удалить первый элемент массива и вернуть его значение. Это метод <code>shift</code>.

Почему не <code>pop</code>? Он удаляет последний элемент массива и возвращает его значение. Это отлично работает для стека, но не для очереди.

Ну а про push вы уже знаете. Он добавляет новые элементы в конец массива, а не удаляет их.`
    }
  ]
};

const getAnswer = (day: string, answerId: string | undefined = '') => answers[day][answerId];

export default {
  id: 'empty',
  name: 'Структуры данных',
  active: true, // Не забудьте сменить на true
  description: () => {
    return [
      '<b>Cтруктуры данных. Основы</b>',
      '',
      'В этом курсе вы познакомитесь с базовыми структурами данных.',
      'Узнаете, какие бывают структуры и для чего используются.',
      'Если вы совсем новичок, вам как раз сюда!',
      '',
      'Курс идёт неделю, каждый день вам будет приходить новый вопрос. Вы должны выбрать вариант ответа. Нестрашно, если ошибётесь. К любому выбранному варианту вы получите подробное объяснение и сможете узнать правильный ответ.',
      '',
      'Погнали!',
      '',
      '',
      'Для начала давайте выясним, что вообще такое эти <b>структуры данных</b>?',
      '',
      'По сути это разные способы хранить информацию. И этих способов много. У каждой структуры есть свои особенности — она может быть эффективна в одних случаях и не очень эффективна в других. Задача разработчика — выбрать наиболее подходящую структуру данных для задачи.',
      '',
      'Обычно этим занимаются не начинающие разработчики, а ребята с уровнем middle и senior. Но про структуры данных часто спрашивают на собеседованиях и junior-разработчиков. А понимание того, как эффективно можно хранить данные, даст вам +100 очков к карьерному развитию.',
      '',
      'Ниже вас уже ждёт первый вопрос по структурам данных. Удачи!'
    ].join('\n');
  },
  state: {
    day: 1,
    answers: []
  },
  initial: 'day1',
  blocks: {
    end: {
      final: true,
      wait: true,
      execute: async ({ state, send }) => {
        await send({
          message: [
            getTaskHeader(-1),
            getFinalText(state.answers, 7)
          ].join('\n')
        });
      }
    },
    day1: {
      execute: async ({transition, send}) => {
        await send({
          message: [
            getTaskHeader(1),
            'Какую структуру данных лучше всего использовать для хранения истории браузера, где <b>предыдущая (последняя) посещённая страница</b> показывается <b>первой</b> после перехода «назад»?'
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Стек',
                action: 'checkAnswer',
                argument: '1/0'
              },
              {
                text: 'Очередь',
                action: 'checkAnswer',
                argument: '1/1'
              }
            ],
            [
              {
                text: 'Дерево',
                action: 'checkAnswer',
                argument: '1/2'
              },
              {
                text: 'Не знаю',
                action: 'checkAnswer',
                argument: '1/3'
              }
            ]
          ]
        });
        await transition('day2');
      },
    },
    day2: {
      wait: true,
      execute: async ({transition, setState, send}) => {
        await send({
          message: [
            getTaskHeader(2),
            'В JavaScript нет специальной структуры для стеков, как в Java, C+ и C#. Поэтому для реализации стека можно использовать массивы. Какой метод подойдёт для записи новых элементов?',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'pop',
                action: 'checkAnswer',
                argument: '2/0'
              },
              {
                text: 'push',
                action: 'checkAnswer',
                argument: '2/1'
              }
            ],
            [
              {
                text: 'unshift',
                action: 'checkAnswer',
                argument: '2/2'
              },
              {
                text: 'не знаю',
                action: 'checkAnswer',
                argument: '2/3'
              }
            ]
          ]
        });
        await transition('day3');
      },
    },
    day3: {
      wait: true,
      execute: async ({transition, setState, send}) => {
        await send({
          message: [
            getTaskHeader(3),
            'Какой метод массива подойдёт для получения последних добавленных элементов, если мы используем массив, как стек?',
          ].join('\n'),
          buttons: [
            [
              {
                text:'pop',
                action: 'checkAnswer',
                argument: '3/0'
              },
              {
                text: 'push',
                action: 'checkAnswer',
                argument: '3/1'
              }
            ],
            [
              {
                text: 'shift',
                action: 'checkAnswer',
                argument: '3/2'
              },
              {
                text: 'не знаю',
                action: 'checkAnswer',
                argument: '3/3'
              }
            ]
          ]
        });
        await transition('day4');
      },
    },
    day4: {
      wait: true,
      execute: async ({transition, setState, send}) => {
        await send({
          message: [
            getTaskHeader(4),
            `Какое слово пропущено в тексте?

____ вызовов — механизм, который помогает интерпретатору отслеживать текущее выполнение кода и хранить контексты выполнения всех функций из скрипта.`,
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Очередь',
                action: 'checkAnswer',
                argument: '4/0'
              },
              {
                text: 'Стек',
                action: 'checkAnswer',
                argument: '4/1'
              }
            ],
            [
              {
                text: 'Переадресация',
                action: 'checkAnswer',
                argument: '4/2'
              },
              {
                text: 'Не знаю',
                action: 'checkAnswer',
                argument: '4/3'
              }
            ]
          ]
        });
        await transition('day5');
      },
    },
    day5: {
      wait: true,
      execute: async ({transition, setState, send}) => {
        await send({
          message: [
            getTaskHeader(5),
            'Представьте, что вы пишите приложение для интерактивного обучения игре на синтезаторе. Пользователь может выбрать мелодию и посмотреть, как она играется, нота за нотой, нужные клавиши будут подсвечиваться на экране. Какую структуру данных вы выберете для хранения нот?',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Стек',
                action: 'checkAnswer',
                argument: '5/0'
              },
              {
                text: 'Не знаю',
                action: 'checkAnswer',
                argument: '5/1'
              }
            ],
            [
              {
                text: 'Хеш-таблица',
                action: 'checkAnswer',
                argument: '5/2'
              },
              {
                text: 'Очередь',
                action: 'checkAnswer',
                argument: '5/3'
              }
            ]
          ]
        });
        await transition('day6');
      },
    },
    day6: {
      wait: true,
      execute: async ({transition, setState, send}) => {
        await send({
          message: [
            getTaskHeader(6),
            'Как и со стеками, в JavaScript нет специальной структуры для очередей. Для их реализации можно использовать массивы. Какой метод подойдёт для записи новых элементов?',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'pop',
                action: 'checkAnswer',
                argument: '6/0'
              },
              {
                text: 'unshift',
                action: 'checkAnswer',
                argument: '6/1'
              }
            ],
            [
              {
                text: 'push',
                action: 'checkAnswer',
                argument: '6/2'
              },
              {
                text: 'не знаю',
                action: 'checkAnswer',
                argument: '6/3'
              }
            ]
          ]
        });
        await transition('day7');
      },
    },
    day7: {
      wait: true,
      execute: async ({transition, setState, send}) => {
        await send({
          message: [
            getTaskHeader(7),
            'Какой метод подойдёт для получения старых добавленных элементов, если мы используем массив, как очередь?',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'pop',
                action: 'checkAnswer',
                argument: '7/0'
              },
              {
                text: 'push',
                action: 'checkAnswer',
                argument: '7/1'
              }
            ],
            [
              {
                text: 'shift',
                action: 'checkAnswer',
                argument: '7/2'
              },
              {
                text: 'не знаю',
                action: 'checkAnswer',
                argument: '7/3'
              }
            ]
          ]
        });
        await transition('end');
      },
    },
  },

  actions: {
    checkAnswer: async ({ setState, state, edit, argument, send }) => {
      if (typeof argument === 'undefined') {
        argument = '1/1';
      } 
      
      const splitedArgument = argument.split('/');
      const day = splitedArgument[0];
      const selectedOption = splitedArgument[1];

      const answer = getAnswer(day, selectedOption);

      await edit({
        buttons: []
      });

      await send({
        message: answer.text
      });

      await setState({ 
        day: day,
        answers: [...state.answers, answer.isCorrect]
      });

    }
  }
} as ICourse;