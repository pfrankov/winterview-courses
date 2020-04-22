import { ICourse } from '../typings';
import { linksList } from './_links/methodsLinks';
import { taskList } from './_tasks/methodsTasks';

function getButtons(argument: string[]) {
  return [
    [
      {
        action: 'sendMethodsLinks',
        argument: argument[0],
        text: '😎 Ссылки на MDN!',
      },
      {
        action: 'sendTask',
        argument: argument[1],
        text: '✅ Отправить задание!',
      },
    ],
  ];
}

function getHeader(day: string | number, methods: string) {
  return `👨‍🏫 <b>День ${day}. Методы: ${methods}</b>`;
}

async function sendLinks({ argument, send }: any) {
  if (!argument) {
    return;
  }

  let newLinksListArray: any = [];

  Object.keys(linksList).map(function (key) {
    if (key === argument) {
      let x = linksList[key];
      newLinksListArray = Object.entries(x);
    }
  });

  await send({
    message: [
      `<b>Дополнительные ссылки на методы (MDN)</b>`,
      '',
      `<b>1. Метод ${newLinksListArray[0].shift()}()</b> - <i><a href=${
        newLinksListArray[0]
      }
      }>Ссылка</a></i>`,
      '',
      `<b>2. Метод ${newLinksListArray[1].shift()}()</b> - <i><a href=${
        newLinksListArray[1]
      }
      }>Ссылка</a></i>`,
      '',
      `<b>3. Метод ${newLinksListArray[2].shift()}()</b> - <i><a href=${
        newLinksListArray[2]
      }
      }>Ссылка</a></i>`,
      '',
      `<b>4. Метод ${newLinksListArray[3].shift()}()</b> - <i><a href=${
        newLinksListArray[3]
      }
      }>Ссылка</a></i>`,
      '',
      `<b>4. Метод ${newLinksListArray[4].shift()}()</b> - <i><a href=${
        newLinksListArray[4]
      }
      }>Ссылка</a></i>`,
    ].join('\n'),
  });
}

async function sendTask({ argument, send }: any) {
  if (!argument) {
    return;
  }
  let newTasksArray: any = [];

  Object.keys(taskList).map(function (key) {
    if (key === argument) {
      let x = taskList[key];
      newTasksArray = Object.entries(x);
    }
  });
  await send({
    message: [
      `💻 <b>Проверочное задание №${newTasksArray[0].shift()}</b>`,
      '',
      `${newTasksArray[0]}`,
      '',
      `Пока что это задание для самостоятельного выполнения, вы можете просто скопировать код и посмотреть что выведется в консоль, а затем проверить себя: понимаете ли вы почему так, или нет`,
    ].join('\n'),
  });
}

export default {
  id: 'arrayMethodsCourse',
  name: 'Изучение JS методов массива',
  active: true,
  description: () => {
    return [
      '💻 <b>  JS методов массива за 6 дней</b>',
      '',
      `Надоело каждый раз идти на <i>StackOverflow</i> за очередным примером кода, пытаясь вспомнить что делает <b>filter()</b> или <b>reduce()</b>? Чем отличается <b>splice()</b> и <b>slice()</b>?`,
      '',
      'Пройдите этот небольшой курс и выучите все методы массива в JavaScript',
      '',
      'На протяжении 6 дней Вам будут приходить по 5 методов с описанием и примерами кода, так что вы можете их повторить самостоятельно.',
      '',
      'После прочтения Вы можете запросить у бота доп. ссылки на MDN про прочитанные методы или взять тестовое задание для самостоятельного выполняния',
      '',
      'В дальнейшем, задания можно будет выполнять напрямую в боте в виде теста',
    ].join('\n');
  },
  state: {
    methods: {},
    tasks: {},
  },
  initial: 'start',
  blocks: {
    start: {
      execute: async ({ state, setState, transition }) => {
        const allMethods = [
          'methods1',
          'methods2',
          'methods3',
          'methods4',
          'methods5',
          'methods6',
        ];

        const allTasks = ['task1', 'task2', 'task3', 'task4', 'task5', 'task6'];

        const restMethods = allMethods.filter(
          (method) => state.methods[method] == null
        );
        const restTasks = allTasks.filter((task) => state.tasks[task] == null);

        if (restMethods.length <= 0) {
          await transition('end');
        } else {
          let nextMethods = restMethods[0];
          let nextTasks = restTasks[0];

          if (!Object.keys(state.methods).length) {
            nextMethods = 'methods1';
            nextTasks = 'task1';
          }

          await setState({
            methods: Object.assign({}, state.methods, {
              [nextMethods]: false,
            }),
            tasks: Object.assign({}, state.tasks, {
              [nextTasks]: false,
            }),
          });

          await transition(nextMethods);
        }
      },
    },
    end: {
      final: true,
      execute: async ({ send }) => {
        await send({
          message: [
            `🔥 <b>Поздравляем! Вы выучили 30 JS методов массива</b>`,
            `Попробуйте постоянно использовать их, чтобы оставаться в тонусе.`,
            'Удачного кодинга!',
            '<i><a href="https://t.me/winterview_contact_bot">Оставьте отзыв о курсе: что понравилось, а что нужно улучшить.</a></i>',
            'Контакты автора курса @dalvelab',
          ].join('\n'),
        });
      },
    },
    methods1: {
      execute: async ({ state, send, transition }) => {
        await send({
          message: [
            getHeader(
              Object.keys(state.methods).length,
              'Методы: find, findIndex, includes, indexOf, lastIndexOf'
            ),
            `<b>1. find()</b> - возвращает первое значение для которого условие является верным`,
            '',
            `<b>2. findIndex()</b> - возвращает первый индекс значения для которого условие является верным`,
            '',
            '<b>3. includes()</b> - возвращает true или false в зависимости от того, содержит ли массив заданное значение или нет',
            '',
            '<b>4. indexOf()</b> - возвращает ближайший индекс значения двигаясь с начала массива. Выводит -1 при значении, которого нет в массиве',
            '',
            '<b>5. lastIndexOf()</b> - то же самое что и indexOf, но двигается с конца массива и находит ближайший индекс значения с конца',
          ].join('\n'),
          image: `codeImages/methods1.png`,
          buttons: getButtons(['methods1', 'task1']),
        });

        await transition('start');
      },
    },
    methods2: {
      wait: true,
      execute: async ({ state, send, transition }) => {
        await send({
          message: [
            getHeader(
              Object.keys(state.methods).length,
              'Методы: filter, every, entries, sort, reverse'
            ),
            `<b>1. filter()</b> - создает новый массив с элементами, которые удовлетворяют условию`,
            '',
            `<b>2. every()</b> - проверяет соответствуют ли все элементы массива заданному условию`,
            '',
            `<b>3. entries()</b> - возвращает объект, который содержит массив с итератором и значением`,
            '',
            `<b>4. sort()</b> - сортирует элементы массива в алфавитном и возрастающем порядке, но как строки (поэтому для сортировки чисел нужна дополнительная функция)`,
            '',
            `<b>5. reverse()</b> - возвращает массив с «развернутыми» значениями`,
          ].join('\n'),
          image: `codeImages/methods2.png`,
          buttons: getButtons(['methods2', 'task2']),
        });
        await transition('start');
      },
    },
    methods3: {
      wait: true,
      execute: async ({ state, send, transition }) => {
        await send({
          message: [
            getHeader(
              Object.keys(state.methods).length,
              'Методы: copyWithIn, fill, map, from, join'
            ),
            `<b>1. copyWithIn()</b> - заменяет элемент массива выбранным элементом массива`,
            '',
            `<b>2. fill()</b> - заполняет массив заданным значением с определенного индекса по число длины массива (value, start[], end.length)`,
            '',
            `<b>3. map()</b> - создает новый массив на основе той функции, которая находится внутри метода`,
            '',
            `<b>4. from()</b> - создает массив из введенной строки`,
            '',
            `<b>5. join()</b> - возвращает строку, разделяя элементы массива символом, введенным внутри метода`,
          ].join('\n'),
          image: `codeImages/methods3.png`,
          buttons: getButtons(['methods3', 'task3']),
        });

        await transition('start');
      },
    },
    methods4: {
      wait: true,
      execute: async ({ state, send, transition }) => {
        await send({
          message: [
            getHeader(
              Object.keys(state.methods).length,
              'Методы: toString, pop, push, shift, unshift'
            ),
            `<b>1. toString()</b> - преобразует массив в строку`,
            '',
            `<b>2. pop()</b> - убирает последний элемент массива`,
            '',
            `<b>3. push()</b> - добавляет новый элемент в конец массива и возвращает новую длину массива`,
            '',
            `<b>4. shift()</b> - убирает первый элемент массива и возвращает его значение`,
            '',
            `<b>5. unshift()</b> - добавляет новый элемент в начало массива и возвращает новую длину массива`,
          ].join('\n'),
          image: `codeImages/methods4.png`,
          buttons: getButtons(['methods4', 'task4']),
        });

        await transition('start');
      },
    },
    methods5: {
      wait: true,
      execute: async ({ state, send, transition }) => {
        await send({
          message: [
            getHeader(
              Object.keys(state.methods).length,
              'Методы: splice, values, forEach, slice, some'
            ),
            `<b>1. splice()</b> - удаляет или добавляет элементы в массив, возвращает убранные элементы. (index [], кол-во убрать, 'добавить')`,
            '',
            `<b>2. values()</b> - возвращает объект, содержащий значения для каждого индекса массива`,
            '',
            `<b>3. forEach()</b> - выполняет функцию внутри метода для всех элементов массива`,
            '',
            `<b>4. slice()</b> - возвращает выбранные элементы массива в виде нового массива. slice ([начальный_индекс], [конечный_индекс - не включая значение])`,
            '',
            `<b>5. some()</b> - проверяет, есть ли хоть одно значение, которое удовлетворяет функции внутри метода`,
          ].join('\n'),
          image: `codeImages/methods5.png`,
          buttons: getButtons(['methods5', 'task5']),
        });

        await transition('start');
      },
    },
    methods6: {
      wait: true,
      execute: async ({ state, send, transition }) => {
        await send({
          message: [
            getHeader(
              Object.keys(state.methods).length,
              'Методы: keys, reduce, reduceRight, concat, valueOf'
            ),
            `<b>1. keys()</b> - возвращает объект с массивом, который содержит все итераторы`,
            '',
            `<b>2. reduce()</b> - приводит все элементы массива к одному значению (двигаясь справа налево). Метод принимает минимум два значения: аккумулятор (значение, которое возвращает callback после очередного элемента) и текущее значение (текущий обрабатываемый элемент массива)`,
            '',
            `<b>3. reduceRight()</b> - то же самое что и reduce, но двигается по элементам массива справа налево`,
            '',
            `<b>4. concat()</b> - создает новый массив путем соединения двух других массивов`,
            '',
            `<b>5. valueOf()</b> - возвращает значение массива`,
          ].join('\n'),
          image: `codeImages/methods6.png`,
          buttons: getButtons(['methods6', 'task6']),
        });

        await transition('start');
      },
    },
  },

  actions: {
    sendTask: async ({ notify, state, setState, send, argument }) => {
      if (!argument) {
        return;
      }
      const motivateTasks = [
        'Отлично!😉 А теперь попробуйте ответить на вопрос!',
        'Замечательно!😃 Уверен Вам не составит труда ответить на этот вопрос',
        'Вы очень быстро схватываете!🧤 Как насчет небольшого вопроса?',
      ];

      await notify(
        motivateTasks[Math.floor(Math.random() * motivateTasks.length)]
      );

      // await setState({
      //   tasks: {
      //     ...state.tasks,
      //     [argument]: true
      //   }
      // });

      await sendTask({ argument, send });
    },
    sendMethodsLinks: async ({
      argument,
      state,
      setState,
      notify,
      edit,
      send,
    }) => {
      if (!argument) {
        return;
      }

      const motivateLinks = [];

      await notify(`Продолжайте изучение!`);

      await setState({
        methods: {
          ...state.methods,
          [argument]: true,
        },
      });

      await sendLinks({ argument, send });
    },
  },
} as ICourse;
