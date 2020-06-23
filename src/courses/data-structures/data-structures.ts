import {ICourse} from "../typings";

const getTaskHeader = (day: number) => {
  return day === -1 ? 
    `<b>Структуры данных. Курс закончился</b>\n`:
    `<b>Структуры данных. День ${day}</b>\n`;
};

const answers: {[index: string]:any} = {
  '1': [
    {
      isCorrect: true,
      text: 'Правильно! Стек позволяет записывать новые элементы в конец и получать их в первую очередь. Как с историей браузера: при переходе «назад» мы попадаем на последнюю посещённую страницу. Такой принцип называется «последний вошел, первый вышел» (Last-In-First-Out или LIFO).'
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
      text: 'Не угадали. Метод <code>pop</code> удаляет последний элемент массива и возвращает его значение. Его можно использовать для получения элементов из стека. А вот записывает новый элемент в конец массива метод <code>push</code>. Помните, «последний пришёл, первый вышел»?'
    },
    {
      isCorrect: true,
      text: `Да, всё верно! Метод <code>push</code> добавляет новые элементы в конец массива. То, что нужно для стека!`
    },
    {
      isCorrect: false,
      text: `Почти. Метод <code>unshift</code> записывает новые элементы в начало массива. А в стеке обычно новые элементы записываются в конец. Помните, «последний пришёл, первый вышел? Поэтому здесь лучше всего подойдёт метод <code>push</code>, который записывает новые элементы в конец массива.

В целом вы можете записывать новые данные в начало массива и брать элементы оттуда, но это не оптимально для производительности. С добавлением и удалением каждого элемента, массив будет сдвигаться, будут пересчитываться индексы всех элементов.`
    },
    {
      isCorrect: false,
      text: `Ничего, сейчас всё будет! Помните, стек работает по принципу «последний пришёл, первый вышел»? Новые элементы записываются в конец стека, в нашем случае массива. Для этого подойдёт метод <code>push</code>, он как раз записывает новые элементы в конец массивов.`
    }
  ],

  '3': [
    {
      isCorrect: true,
      text: `Да! Именно метод <code>pop</code> нам и нужен, чтобы получить последние добавленные в массив элементы. Метод удаляет последний элемент массива и возвращает его значение.`
    },
    {
      isCorrect: false,
      text: `Немного перепутали. Метод <code>push</code> занимается записью элементов в массив, а вот <code>pop</code> удаляет последний элемент из массива и возвращает его значение.`
    },
    {
      isCorrect: false,
      text: `Почти, но нет. Метод <code>shift</code> удаляет первый элемент из массива и возвращает его значение. Для стека это не очень подходит — новые элементы записываются в конец, поэтому и получать элементы надо из конца массива. Для этого подходит метод <code>pop</code> — он удаляет последний элемент массива и возвращает его значение.
      
В целом вы можете записывать новые данные в начало массива и брать элементы оттуда, но это не оптимально для производительности. С добавлением и удалением каждого элемента, массив будет сдвигаться, будут пересчитываться индексы всех элементов.`
    },
    {
      isCorrect: false,
      text: `Ничего! Помните, стек работает по принципу «последний пришёл, первый вышел»? Новые элементы записываются в конец стека, в нашем случае массива. Поэтому и получать последние добавленные элементы надо из конца массива. Для этого подходит метод <code>pop</code> — он удаляет последний элемент массива и возвращает его значение.`
    }
  ],

  '4': [
    {
      isCorrect: 'false',
      text: ``
    },
    {
      isCorrect: 'true',
      text: ``
    },
    {
      isCorrect: 'false',
      text: ``
    },
    {
      isCorrect: 'false',
      text: ``
    }
  ],

  '5': [
    {
      isCorrect: 'false',
      text: `Не угадали. Со стеком мелодия будет проигрываться задом наперёд — с конца в начало. Помните, стек работает по принципу «последний вошел, первый вышел»? А для нашей задачи мелодия должна играть привычным способом — с начала и до конца. Тут подойдёт <b>очередь</b>.

Очередь позволяет записывать новые элементы в конец и получать их после остальных — в порядке очереди. Как в задаче с музыкой — последняя нота будет и проиграна последней.
      
А ещё очередь используется в движке JavaScript — события, которые нужно выполнить, выстраиваются в очередь. Такая очередь называется «очередью макрозадач» (macrotask queue).
      
Очередь работает по принципу «первый пришёл — первый вышел» (First In — First Out или FIFO). Можно провести аналогию с любой привычной нам очередью: в банке или в больнице. Первый в очереди первым и зайдёт. А вот внезапно ворваться с «только спросить» тут не получится.`
    },
    {
      isCorrect: 'false',
      text: `Ничего, сейчас узнаете! Правильный ответ — <b>очередь</b>.

Очередь позволяет записывать новые элементы в конец и получать их после остальных — в порядке очереди. Как в задаче с музыкой — последняя нота будет и проиграна последней.
      
А ещё очередь используется в движке JavaScript — события, которые нужно выполнить, выстраиваются в очередь. Такая очередь называется «очередью макрозадач» (macrotask queue).
      
Очередь работает по принципу «первый пришёл — первый вышел» (First In — First Out или FIFO). Можно провести аналогию с любой привычной нам очередью: в банке или в больнице. Первый в очереди первым и зайдёт. А вот внезапно ворваться с «только спросить» тут не получится.`
    },
    {
      isCorrect: 'false',
      text: `Не угадали. До хеш-таблиц мы ещё доберёмся в будущем, это очень полезная структура данных. Но в этой задаче правильный ответ — <b>очередь</b>.

Очередь позволяет записывать новые элементы в конец и получать их после остальных — в порядке очереди. Как в задаче с музыкой — последняя нота будет и проиграна последней.
      
А ещё очередь используется в движке JavaScript — события, которые нужно выполнить, выстраиваются в очередь. Такая очередь называется «очередью макрозадач» (macrotask queue).
      
Очередь работает по принципу «первый пришёл — первый вышел» (First In — First Out или FIFO). Можно провести аналогию с любой привычной нам очередью: в банке или в больнице. Первый в очереди первым и зайдёт. А вот внезапно ворваться с «только спросить» тут не получится.`
    },
    {
      isCorrect: 'true',
      text: `Верно! Очередь позволяет записывать новые элементы в конец и получать их после остальных — в порядке очереди. Как в задаче с музыкой — последняя нота будет и проиграна последней. Такой принцип называется «первый пришёл — первый вышел» (First In — First Out или FIFO).

А ещё очередь используется в движке JavaScript — события, которые нужно выполнить, выстраиваются в очередь. Такая очередь называется «очередью макрозадач» (macrotask queue).`
    }
  ],

  '6': [
    {
      isCorrect: 'false',
      text: ``
    },
    {
      isCorrect: 'false',
      text: ``
    },
    {
      isCorrect: 'true',
      text: ``
    },
    {
      isCorrect: 'false',
      text: ``
    }
  ],

  '7': [
    {
      isCorrect: 'false',
      text: ``
    },
    {
      isCorrect: 'false',
      text: ``
    },
    {
      isCorrect: 'true',
      text: ``
    },
    {
      isCorrect: 'false',
      text: ``
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
      '<b>Описание курса</b>',
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
          ].join('\n')
        });
      }
    },
    day1: {
      execute: async ({transition, send}) => {
        await send({
          message: [
            getTaskHeader(1),
            'Какую структуру данных лучше всего использовать для хранения истории браузера, где <b>последняя посещённая страница</b> показывается <b>первой</b> после перехода «назад»?'
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Стек',
                action: 'checkAnswer',
                argument: '0'
              },
              {
                text: 'Очередь',
                action: 'checkAnswer',
                argument: '1'
              }
            ],
            [
              {
                text: 'Дерево',
                action: 'checkAnswer',
                argument: '2'
              },
              {
                text: 'Не знаю',
                action: 'checkAnswer',
                argument: '3'
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
                argument: '0'
              },
              {
                text: 'push',
                action: 'checkAnswer',
                argument: '1'
              }
            ],
            [
              {
                text: 'unshift',
                action: 'checkAnswer',
                argument: '2'
              },
              {
                text: 'не знаю',
                action: 'checkAnswer',
                argument: '3'
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
                argument: '0'
              },
              {
                text: 'push',
                action: 'checkAnswer',
                argument: '1'
              }
            ],
            [
              {
                text: 'shift',
                action: 'checkAnswer',
                argument: '2'
              },
              {
                text: 'не знаю',
                action: 'checkAnswer',
                argument: '3'
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
                argument: '0'
              },
              {
                text: 'Стек',
                action: 'checkAnswer',
                argument: '1'
              }
            ],
            [
              {
                text: 'Переадресация',
                action: 'checkAnswer',
                argument: '2'
              },
              {
                text: 'Не знаю',
                action: 'checkAnswer',
                argument: '3'
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
                argument: '0'
              },
              {
                text: 'Не знаю',
                action: 'checkAnswer',
                argument: '1'
              }
            ],
            [
              {
                text: 'Хеш-таблица',
                action: 'checkAnswer',
                argument: '2'
              },
              {
                text: 'Очередь',
                action: 'checkAnswer',
                argument: '3'
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
                argument: '0'
              },
              {
                text: 'unshift',
                action: 'checkAnswer',
                argument: '1'
              }
            ],
            [
              {
                text: 'push',
                action: 'checkAnswer',
                argument: '2'
              },
              {
                text: 'не знаю',
                action: 'checkAnswer',
                argument: '3'
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
                argument: '0'
              },
              {
                text: 'push',
                action: 'checkAnswer',
                argument: '1'
              }
            ],
            [
              {
                text: 'shift',
                action: 'checkAnswer',
                argument: '2'
              },
              {
                text: 'не знаю',
                action: 'checkAnswer',
                argument: '3'
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
      const answer = getAnswer(state.day, argument);

      await edit({
        buttons: []
      });

      await send({
        message: answer.text
      });

      await setState({ 
        day: state.day + 1,
        answers: [...state.answers, answer.isCorrect]
      });

    }
  }
} as ICourse;