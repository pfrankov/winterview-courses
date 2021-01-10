import { ICourse, IImageObject, IMessageObject } from "../typings";

interface ITasks {
  [taskNumber: string]: IImageObject | IMessageObject; 
}

interface IAnswer {
  [answerType: string]: string;
}

interface IAnswers {
  [taskNumber: string]: IAnswer;
}

const tasks: ITasks = {
  '2': {
    image: 'images/2.png',
    message: [
      'Давай посмотрим, как у них используется роль на реальном примере.',
      'Это хорошее упражнение, чтобы научиться обращать внимание на ARIA атрибуты.',
      'Выполнив это задание, откройте дев тулзы, самостоятельно пройдитесь поиском по ролям, которые есть на сайте и подумайте, правильно они используются или нет.',
      'А сейчас посмотрите на скриншот и скажите, правильно ли в данном случае использована роль?',
      '',
      'P.S.',
      'Вы можете поискать эту роль на <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles">MDN</a>, там обычно пишут, в каких случаях ее можно использовать, и какой тег уже использует роль по дефолту, если такой есть.'
    ].join('\n'),
    buttons: [
      {
        text: 'Правильно',
        action: 'checkAnswer',
        argument: '2/wrong',
      },
      {
        text: 'Роль не нужна',
        action: 'checkAnswer',
        argument: '2/correct',
      },    
      {
        text: 'Заменить на "heading"',
        action: 'checkAnswer',
        argument: '2/wrong',
      },
      {
        text: 'Заменить на "navigation"',
        action: 'checkAnswer',
        argument: '2/wrong',
      },    
    ]
  },
};

const anwsers: IAnswers = {
  '1': {
    'wrong': handleWrongAnswer(),
    'correct': handleCorrectAnswer(),
  },
  '2': {
    'wrong': handleWrongAnswer(),
    'correct': handleCorrectAnswer(),
  },
  '3': {
    'wrong': [
      'Правильный ответ <code>tabindex="0"</code>.',
      '<code>tabindex="0"</code> - делает элемент фокусируемым, порядок навигации остается исходным.',
      '<code>tabindex="1"</code> (положительное значение) - переопределяет порядок навигации по элементам, то есть почти всегда плохая идея.',
      '<code>tabindex="-1"</code> - делает элемент недоступным с помощью клавиатуры, но его можно сфокусировать с помощью Javascript.',
    ].join('\n'),
    'correct': [
      'Да, верно!',
      '<code>tabindex="0"</code> - делает элемент фокусируемым, порядок навигации остается исходным.',
      '<code>tabindex="1"</code> (положительное значение) - переопределяет порядок навигации по элементам, то есть почти всегда плохая идея.',
      '<code>tabindex="-1"</code> - делает элемент недоступным с помощью клавиатуры, но его можно сфокусировать с помощью Javascript.',
    ].join('\n'),
  },
  '4': {
    'wrong': 'Тут свойство использовано правильно.',
    'correct': [
      'Да, тут ошибка.',
      'Не путайте этот атрибут с <code>aria-pressed</code>. <code>aria-selected</code> можно использовать только вместе с определенными ролями (например, <code>role = "tablist"</code>).'
    ].join('\n'),
  }
}

function getHeader(day: number, topic: string) {
  return `<b>Web Accessibility. День ${day} - ${topic}</b>\n`;
}

function handleWrongAnswer() {
  const messages = [
    'Попробуй еще раз!',
    'Неа, попробуй еще.',
    'Увы, но нет.',
    'Это неправильный ответ, но сейчас точно все получится!'
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}

function handleCorrectAnswer() {
  const messages = [
    'Правильно, ты молодец!',
    'Да, отлично!',
    'Это правильный ответ!',
    'Да!',
    'Это правильно!'
  ];

  return messages[Math.floor(Math.random() * messages.length)];
}

export default {
  id: 'accessibility',
  name: 'Основы веб доступности',
  order: 70,
  active: true,
  description: () => {
    return [
      '<b>Web Accessibility</b>',
      'Тема веб доступности очень объемная, и мне кажется, многие могут не понимать с какой стороны к ней лучше подступиться. Возможно, этот курс будет хорошим началом!',
      'Курс длится 9 дней и включает в себя блоки с теорией и небольшие задачки. В задачах, где нужно выбрать правильный вариант, не бойтесь ошибиться, вы можете выбирать ответ до тех пор, пока он не окажется правильным.',
      'Успехов! 🤓'
    ].join('\n');
  },
  state: {},
  initial: 'day1',
  blocks: {
    end: {
      final: true,
      wait: true,
      execute: async ({ send }) => {
        await send({
          message: [
            getHeader(9, 'Последний день, про тестирование'),
            'Что нужно тестировать?',
            '',
            '– Доступность сайта с клавиатуры',
            '– Контрастность цветов',
            '– Удобно ли пользоваться сайтом, используя screen reader',
            '– Как сайт выглядит без стилей',
            '',
            'Все это можно проверять используя, например, такие инструменты:',
            '',
            '– <a href="https://wave.webaim.org/extension/">WAVE Evaluation Tool</a>',
            '– Accessibility в Chrome DevTools',
            '– Screen readers (JAWS, NVDA, VoiceOver)',
            '',
            'Обязательно посмотрите <a href="https://webaim.org/resources/evalquickref/">вот этот гайд</a>, там более подробно про то, что и как нужно тестировать.',
            '',
            'Спасибо, что дошли до последнего дня, вы - супер! 🚀 Я очень надеюсь, что вся эта информация была для вас полезна, и вы узнали что-то новое.',
            'Всех обнимаю, будьте здоровы и берегите себя 💘',
            'А, ну и в <a href="https://twitter.com/yourbestpine">твиттере</a> подписывайтесь!',
          ].join('\n'),
        });
      }
    },
    day1: {
      execute: async ({transition, send}) => {
        await send({
          message: [
            getHeader(1, 'Общая информация'),
            'А давай сразу к делу?',
            'Я предлагаю послушать сайт гитхаба. Это поможет и легче усваивать дальнейшую информацию, и лучше понять пользователей для которых мы делаем сайты доступными.',
            'Задание такое:',
            '',
            '– Открой в браузере главную страницу <a href="https://github.com/">гитхаба</a> и включи скрин ридер. Если у тебя мак, то тебе поможет моя подсказка с нужными для задания VoiceOver хоткеями',
            '– Открой список всех ссылок',
            '– Найди ссылку "Code" и перейди на нее',
            '– Теперь фокус на этой ссылке, давай активируем ее. Тут внимательно послушайте скрин ридер, он подскажет что нужно нажать',
            '– Фокус переместился на блок с заголовком "Give your code a home in the cloud", далее идем вперед по элементам и находим там ссылку "Sign up for GitHub"',
            '',
            'Внимание, вопрос!',
            'Под заголовком какого уровня находится ссылка "Sign up for GitHub"?',
          ].join('\n'),
          image: 'images/prompt.jpg',
          buttons: [
            [
              {
                text: '1',
                action: 'checkAnswer',
                argument: '1/wrong',
              },
              {
                text: '2',
                action: 'checkAnswer',
                argument: '1/wrong',
              }
            ],
            [
              {
                text: '3',
                action: 'checkAnswer',
                argument: '1/correct',
              },
              {
                text: '4',
                action: 'checkAnswer',
                argument: '1/wrong',
              }
            ]
          ]
        });
        await transition('day2');
      },
    },
    day2: {
      wait: true,
      execute: async ({ transition, send }) => {
        await send({
          message: [
            getHeader(2, 'Что же такое ARIA? Роли'),
            'WAI-ARIA - это техническая спецификация, которая предоставляет основу для улучшения доступности веб-приложений.',
            'Важно помнить, что можно легко сделать доступность и хуже, если неправильно использовать ARIA. В <a href="https://www.w3.org/TR/wai-aria-practices-1.2/">гайде WAI-ARIA Authoring Practices</a> об этом тоже говорится. Один из первых заголовков звучит как "No ARIA is better than Bad ARIA".',
            'Кстати, вот <a href="https://webaim.org/blog/aria-cause-solution/">статья</a> про то, какие могут быть пролемы и как их решать.',
            '',
            'Ну а теперь, давай посмотрим на несколько базовых терминов, которые описывает ARIA.',
          ].join('\n'),
        });
        await send({
          message: [
            '<b>Роли (Roles)</b>',
            'ARIA роли говорят, что это за элемент (или что элемент делает).',
            'Важно помнить, что во многих HTML тегах по дефолту обозначены роли, поэтому чаще всего нужно просто использовать семантические теги. Несколько примеров ролей:',
            '',
            '– <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Search_role">search</a>',
            '– <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role">dialog</a>',
            '– <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role">tab</a>',
          ].join('\n'),
          buttons: [
            {
              text: 'Выполнить задание',
              action: 'getTask',
              argument: '2'
            },
          ]
        })
        await transition('day3');
      },
    },
    day3: {
      wait: true,
      execute: async ({ transition, send }) => {
        await send({
          message: [
            getHeader(3, 'Tabindex'),
            'С помощью чего элемент можно сделать фокусируемым с клавиатуры?'
          ].join('\n'),
          buttons: [
            {
              text: 'tabindex="1"',
              action: 'checkAnswer',
              argument: '3/wrong'
            },
            {
              text: 'tabindex="0"',
              action: 'checkAnswer',
              argument: '3/correct'
            },            
            {
              text: 'tabindex="-1"',
              action: 'checkAnswer',
              argument: '3/wrong'
            },
            {
              text: 'Не знаю',
              action: 'checkAnswer',
              argument: '3/wrong'
            },
          ]
        });
        await transition('day4');
      },
    },
    day4: {
      wait: true,
      execute: async ({ transition, send }) => {
        await send({
          image: 'images/4.png',
          message: [
            getHeader(4, 'Что же такое ARIA? Свойства (Properties) и Состояния (States)'),
            'Свойства ARIA - атрибуты, которые расширяют семантику, недопустимую в стандартном HTML.',
            'Состояния ARIA - это атрибуты, которые определяют текущее состояние элемента.',
            'Например, <code>aria-disabled="true"</code>.',
            'Программа чтения с экрана озвучит, что инпут видимый, но не интерактивный.',
            '',
            'А теперь посмотрите на изображение и скажите, на какой строчке ARIA атрибут использован <b>не</b>правильно?'
          ].join('\n'),
          buttons: [
            [
              {
                text: '2',
                action: 'checkAnswer',
                argument: '4/wrong'
              },
              {
                text: '4',
                action: 'checkAnswer',
                argument: '4/wrong'
              },    
            ],
            [
              {
                text: '6',
                action: 'checkAnswer',
                argument: '4/wrong'
              },
              {
                text: '8',
                action: 'checkAnswer',
                argument: '4/correct'
              },    
            ],
          ]
        });
        await transition('day5');
      },
    },
    day5: {
      wait: true,
      execute: async ({ transition, send }) => {
        await send({
          message: [
            getHeader(5, 'Как же сделать веб-приложение доступным? Часть 1.'),
            'Многие все еще использую дивы вместе кнопок. Поэтому не устану повторять, что <i>первое правило доступного веба - семантическая верстка</i>.',
            '',
            'Сегодня не будем выбирать правильный или неправильный вариант ответа. Так как основная идея сегодняшней теории - использовать семантическую верстку, то задание будет такое (верю в людей и надеюсь, что кто-то сделает):',
            'Найдите в верстке вашего текущего проекта место, где используется див вместо семантического тега и исправьте это, заменив див на более подходящий тег.',
            'Сегодня спасаем интернет так, да 🙌',
          ].join('\n'),
        });
        await transition('day6');
      },
    },
    day6: {
      wait: true,
      execute: async ({ transition, send }) => {
        await send({
          message: [
            getHeader(6, 'Формы'),
            'Используем ARIA для <b>недоступного</b> HTML. Я покажу несколько примеров, на которых можно увидеть, когда и как можно применять ARIA. Но, конечно, все случаи не описать, нужно больше тренироваться в использовании и, самое главное, тестировать приложения на доступность. Об этом я тоже расскажу. А пока вернемся к примерам.',
            'С формами я встречаюсь буквально на каждом проекте, и, думаю, что очень многие с ними работают, поэтому хочу начать именно с подсказок для форм.',
            '',
            '– Добавляйте лейблы для полей ввода – тег <code>label</code>',
            '– Группируйте элементы – теги <code>fieldset</code> и <code>legend</code>',
            '– Делайте структуру формы четкой и понятной - должно быть всегда понять, что ожидает поле ввода',
            '– Помните про мобилки - на мобильных устройствах ваши формы тоже должны выглядеть хорошо и быть удобными',
            '',
            'Этот и следующие два дня будут без практики, я хочу оставить их в таком формате с  подсказками. Но я бы крайне рекомендовала вам заготовить шаблоны с помощью этих подсказок и использовать их в будущем в своих проектах.',
            'Завтра подробнее про лейблы!',
          ].join('\n'),
        });
        await transition('day7');
      },
    },
    day7: {
      wait: true,
      execute: async ({ transition, send }) => {
        await send({
          image: 'images/7.png',
        });
        await send({
          message: [
            getHeader(7, 'Чуть подробнее про лейблы'),
            'Как можно видеть на изображении, лейблы можно и нужно связывать с полями ввода.',
            'Обратите внимание на <code>id</code> и <code>for</code>. В инпуте не забываем про <code>id</code>, а в лейбле добавляем <code>for</code>. Таким образом скрин ридеры будут знать, что к чему относится.',
            '',
            '<b>ARIA лейблы</b>',
            'ARIA лейблы использовать нужно, но с умом. Следите, чтобы такие лейблы не перетерли какой-то другой важный текст, и чтобы информация не дублировалась.',
            'Если есть ссылка, но там нет текста (только картинка с пустым alt, например), то ридер может начать читать содержимое href, чтобы сказать хоть что-то. Тут использовать ARIA лейблы – хорошо.',
            'Кстати, про картинки. Прописывайте alt обязательно - либо с текстом, если изображение информативное, либо оставить пустым (но alt обязательно должен быть!). Если есть пустой alt, скрин ридер проигнорирует его (как и должно быть), но если атрибута не будет вообще, то ридер скажет о том, что есть какое-то изображение, или еще чего хуже, начнет читать название файла, откуда картинка тянется.'
          ].join('\n'),
        });
        await transition('day8');
      },
    },
    day8: {
      wait: true,
      execute: async ({ transition, send }) => {
        await send({
          message: [
            getHeader(8, 'Модальные окна'),
            'Я конечно не буду говорить про то, что модальные окна лучше не делать вообще, потому что зачастую это все-таки решают дизайнеры и менеджеры. Могу напомнить - не бойтесь подойти к дизайнеру или менеджеру и сказать, что так лучше не делать :) Итак, если вас не послушали и все-таки добавили модалку на сайт:',
            '',
            '– Автофокус на первый активный элемент в модальном окне (инпут, кнопка и тд.) - атрибут autofocus',
            '– Обработать нажатие кнопки esc - escape должен закрывать модальное окно',
            '– Добавить атрибуты <code>role="dialog"</code> и <code>aria-labelledby</code>',
            '– Задизеблить <b>все</b> активные элементы позади модального окна - пользователь должен быть только в контексте модалки, иначе с клавиатуры пользоваться будет невозможно. Тут можно пройтись по всем активным элементам и сделать всё, кроме модалки, недоступным с помощью клавиатуры (<code>tabindex="-1"</code> + <code>aria-hidden="true"</code>). Или можно подключить полифил и юзать <a href="https://github.com/WICG/inert">inert</a>',
            '– Вернуть фокус на тотже элемент после закрытия окна - если вы нажали на кнопку "Open Modal" для открытия окна, то после его закрытия фокус снова должен оказать на "Open Modal"',
            '',
            'Ну что, все еще стесняетесь подойти и спросить, точно ли нужна модалка на сайте? Ладно, на самом деле все не так страшно. Просто держите под рукой готовый шаблон, который можно всегда взять за основу.',
          ].join('\n'),
        });
        await transition('end');
      },
    },
  },

  actions: {
    checkAnswer: async ({ argument, edit, send }) => {
      if (argument) {
        const [ taskNumber, anwserType ] = argument.split('/');
        const answer = anwsers[taskNumber];

        if (anwserType === 'correct') {
          await edit({
            buttons: [],
          });
        }
        
        await send({
          message: answer[anwserType],
        });

      } else {
        await send({
          message: handleWrongAnswer(),
        });
      }
    },
    getTask: async ({ argument, send }) => {
      if (argument && tasks[argument]) {
        await send(tasks[argument]);
      }
    },
  }
} as ICourse;