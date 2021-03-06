import {IButton, ICourse} from "../typings";

interface CourseState {
  task11: boolean,
  task21: boolean,
  task22: boolean,
  task23: boolean,
  task31: boolean,
  task32: boolean,
  task41: boolean,
  task51: boolean,
  task52: boolean,
  task53: boolean,
  task61: boolean,
  task62: boolean,
  task63: boolean,
  task71: boolean,
  task72: boolean,
  task73: boolean,

  totalValue: number,
  totalMaxValue: number
}

const cheers = ['Молодец!', 'Так держать!', 'Отлично!', 'Класс!', 'Превосходно!', 'Круто!'];

function getDayTasksByTaskId(taskId: string): string[] {
  const match = taskId.match(/task(\d)/);

  if (!match || !match[1]) {
    return []
  }

  const day = match[1] as unknown as number;

  const taskByDay = [[], ['task11'], ['task21', 'task22', 'task23'] , ['task31', 'task32'], ['task41'],
    ['task51', 'task52', 'task53'], ['task61', 'task62', 'task63'], ['task71', 'task72', 'task73']];

  return taskByDay[day] || []
}

function getResultText(completedPercentage: number): string {
  if (completedPercentage > 1 || completedPercentage < 0) {
    return ''
  }

  if (completedPercentage === 1) {
    return 'Вы выполнили все задания курса. Так держать!\n' +
      'С таким подходом, я уверен, у вас все получилось и вы нашли (или очень скоро найдете) работу своей мечты.'
  }

  if (completedPercentage === 0) {
    return 'Вы не выполнили ни одного задания из курса.\n' +
      'Теория — это всегда хорошо, но без применения информации на практике, она бесполезна.\n' +
      'Рекомендую вам пройти курс заново, выполняя задания.'
  }

  if (completedPercentage > 0.5) {
    return 'Вы выполнили большую часть заданий из курса.\n' +
      'Я верю, что эта информация поможет вам найти работу мечты.'
  }

  if (completedPercentage < 0.5) {
    return 'Вы выполнили некоторые задания курса.\n' +
      'Надеюсь эта информация была для вас полезна.\n' +
      'Для более глубокой проработки рекомендую пройти этот курс еще раз.'
  }

  return 'Вы выполнили половину заданий курса.\n' +
    'Надеюсь это информация поможет вам найти работу мечты.'
}

function getAdditionalRecommendations(result: CourseState): string {
  const recommendations: string[] = [];

  if (!result.task11) {
    recommendations.push(
      'Модуль с определением ваших желаний — один из самых важных в этом курсе.\n' +
      'Уделите время и поразмышляйте над предложенными там вопросами.'
    )
  }

  if (!result.task21 && !result.task22) {
    recommendations.push(
      'Крайне рекомендую создать профиль в деловых социальных сетях, а так же указать, над чем вы хотите работать.\n' +
      'Это гораздо увеличит вероятность найти подходящую вам работу.'
    )
  }

  if (!result.task41) {
    recommendations.push(
      'Не стоит надеятся на свою память при выборе вакансий.\n' +
      'Лучше запишите хотя бы какой-то минимум информации которую вы получили от представителей компании.\n' +
      'Поверьте, в будущем вы скажете себе "Спасибо".'
    )
  }

  if (!result.task52 && !result.task62) {
    recommendations.push(
      'Лучше все-таки составить список вопросов для рекрутера и технического специалиста.\n' +
      'Без такого списка вы обязательно забудете спросить что-то очень важное.'
    )
  }

  if (recommendations.length === 0) {
    return '';
  }

  return '\nДополнительные рекомендации:\n\n' + recommendations.join('\n\n') + '\n'
}

function getButtons(tasks: string[]) {
  return tasks.map((task, index) => {
    return {
      action: 'done',
      argument: task,
      text: `Выполнил ${index + 1}`
    }
  })
}

export default {
  id: 'jobSelection',
  order: 5,
  name: 'Поиск работы мечты',
  active: true,
  description: () => {
    return [
      '<b>Поиск работы мечты</b>',
      '',
      'В текущей ситуации нехватки разработчиков, рынок просто изобилует предложениями о работе.',
      'Но порой сложно понять, что вам больше всего подходит из всей этой массы вакансий.',
      'В рамках этого курса я постараюсь вам в этом помочь.',
      '',
      '<i>Это курс наиболее подходит для людей, имеющих опыт разработки (то есть middle+), желающих сменить свою работу.</i>',
      '',
      'Возможно некоторые из рекомендаций могут показаться вам излишними, но в любом случае рекомендую вам принять их во внимание.',
      '',
      'В конце каждого модуля есть список рекомендованных действий, которые помогут вам применить описанный материал.',
    ].join('\n');
  },
  state: {
    task11: false,
    task21: false,
    task22: false,
    task23: false,
    task31: false,
    task32: false,
    task41: false,
    task51: false,
    task52: false,
    task53: false,
    task61: false,
    task62: false,
    task63: false,
    task71: false,
    task72: false,
    task73: false,

    totalValue: 0,
    totalMaxValue: 16
  },
  initial: 'day1',
  blocks: {
    day1: {
      execute: async ({send, transition}) => {
        await send({
          message: [
            '<b>Определение своих желаний</b>',
            '',
            'Прежде чем, искать непосредственно работу, нужно понять, что вы по-настоящему хотите, что вы будете искать.',
            '',
            'Первый большой вопрос — это то, в какой области разработки вы хотите работать: фронтенд, бекенд, мобильная разработка и так далее.',
            'Конечно важно иметь более или менее релевантный опыт и навыки, чтобы претендовать на соответствующую позицию.',
            '',
            'Второй вопрос — это предметная область.',
            'Важно понять в какой сфере вам бы хотелось работать. Это может быть разработка игр, электронная коммерция, медицина, да мало ли что еще.',
            '',
            'Следующий момент, на которым стоит подумать — это чем именно вы хотите заниматься (какие задачи решать), а также с какими технологиями работать.',
            'С точки зрения задач это может быть, например, шифрование, 3D-графика, анимация, архитектура приложения.',
            'С точки зрения технологий: какие-то конкретные языки программирования и/или фреймворки.',
            '',
            'Для того, чтобы ответить на эти вопросы, вы можете обратить внимание на следующие моменты:',
            '',
            '— Вспомнить какие именно задачи вам приносили наибольшее удовольствие на вашей работе, чем вам нравилось заниматься',
            '',
            '— Посмотреть на ваши пет-проекты (если они есть), почему вы стали их делать, почему вы выбрали эту тему и такой стек технологий',
            '',
            '— Посмотреть на то, на какие темы вы читаете статьи и смотрите доклады (какие темы вам нравятся и больше всего интересуют)',
            '',
            '— Для расширения кругозора можно посмотреть также доклады, где люди рассказывают о том, какие задачи они решают на своей работе. Можно пообщаться с живыми людьми по этому поводу. Возможно, вас что-то заинтересует',
            '',
            'Самое главное — не стоит ограничивать себя чем-то одним.',
            'Мыслите шире: соберите побольше вариантов, чтобы совсем не ограничить себя в выборе.',
            '',
            'После этого у вас будет четкое понимание того, чего вы хотите и что вы будете искать.',
            'Кроме того, можно так же обдумать то, чем вы точно не хотите заниматься',
            '',
            '<b>Рекомендуемые действия:</b>',
            '1. Определите, чего вы хотите исходя их тех советов, что предложено'
          ].join('\n'),
          buttons: getButtons(['task11']),
        });

        await transition('day2');
      }
    },

    day2: {
      wait: true,
      execute: async ({send, transition}) => {
        await send({
          message: [
            '<b>Поиск вакансий</b>',
            '',
            'Итак, теперь есть понимание (хотя бы примерное) того, что искать.',
            'Первое, что стоит сделать исходя из этого понимания — это написать о нем в своем резюме.',
            'То есть конкретно указать те моменты (технологии, область разработки, задачи), которые для вас важны в будущей работе.',
            '',
            'К этому моменту у вас уже должно быть готовое резюме (или заполненная анкета на одном из сайтов по поиску работы).',
            'О том, как лучше написать резюме можете посмотреть, например, <a href="https://vas3k.ru/blog/go_to_berlin/#scroll30">у Вастрика</a>',
            '',
            'Есть два способа для поиска работы: активный и пассивный.',
            '',
            '<b>Пассивный поиск работы</b>',
            'Вы публикуете свое резюме в открытом доступе на одной из площадок и ждёте откликов от рекрутеров.',
            '',
            'В целом я считаю, что полезно всегда находится в пассивном поиске, так как иногда могут возникать очень интересные предложения, о которых в ином случае вы бы никогда не узнали.',
            'Для этого очень хорошо подходят деловые социальные сети (вроде LinkedIn, Хабр карьера), либо личный сайт.',
            '',
            'Но это работает совсем иначе для специализированных платформ для поиска работы вроде HeadHunter.',
            'Будьте готовы, что, опубликовав свое резюме на такой площадке, вы будете буквально завалены предложениями, которые не всегда релевантны тому, что вы ищите.',
            '',
            '<b>Активный поиск работы</b>',
            'При таком поиске вы сами отправляете свое резюме интересующим вас компаниям.',
            '',
            'Это вариант более точен, так как вы сами отбираете компании и вакансии, которые уже предварительно вас чем-то заинтересовали.',
            'Минус здесь в том, что не все компании публикуют свои вакансии на популярных сайтах, так что некоторые потенциально интересные предложения вы можете упустить.',
            '',
            '<b>Что выбрать?</b>',
            'Как это обычно и бывает — истина где-то посередине.',
            '',
            'Я рекомендую заниматься активным поиском и рассылать свои резюме понравившимся компаниям.',
            'Кроме того, лучше иметь активный аккаунт на сайтах вроде LinkedIn.',
            '',
            'В том случае, если вы не хотите ограничивать себя и рассмотреть максимальное количество вариантов, смело публикуйте свое резюме на сайтах для поиска работы.',
            'Но будьте готовы, что вам придется отвергнуть не один десяток предложений и принять дюжину звонков от рекрутеров, для уточнения деталей.',
            '',
            '<b>Рекомендуемые действия:</b>',
            '1. Заведите / актуализируйте профиль на LinkedIn (то же самое можно сделать на хабр карьера и каких-то других локальных ресурсах)',
            '2. Укажите то, что вы ищете в своем резюме',
            '3. Выберите стратегию для поиска',
          ].join('\n'),
          buttons: getButtons(['task21', 'task22', 'task23']),
        });

        await transition('day3');
      }
    },

    day3: {
      wait: true,
      execute: async ({send, transition}) => {
        await send({
          message: [
            '<b>Отбор вакансий</b>',
            '',
            'Теперь у вас есть понимание, что и как вы будете искать.',
            '',
            'Для поиска работы стоит использовать сайты компаний, в которых вы хотели бы работать, а также специализированные сайты с базами вакансий (вроде hh.ru).',
            'Правда зачастую вакансии просто неотличимы друг от друга, многие написаны как будто под копирку и сложно понять, чем одна отличается от другой.',
            '',
            'Для того, чтобы отсечь неподходящие варианты, нужно четко понимать, что для вас критично в работе.',
            'Помимо области разработки и технологий есть еще множество параметров, на которые стоит обратить внимание и определить их важность для вас.',
            '',
            'Какие это могут быть параметры:',
            '',
            '— Тип компании: аутсорсинг/продуктовая, стартап/энтерпрайз',
            'Некоторые принципиально не рассматривают аутсорсинг, для кого-то очень важен дух стартапа, а кто-то уже слишком стар для всего этого :)',
            '',
            '— Описание компании',
            'Чем она занимается, как о ней отзываются клиенты, а также сотрудники.  Для вас может играть роль размер компании, расположение головного офиса и т.п.',
            '',
            '— Описание проекта',
            'Какие проблемы он решает? Интересно ли вам работать в этой области? Это продукт для массового пользования или для закрытого? По возможности постарайтесь им попользоваться.',
            '',
            '— Другие параметры',
            'Тут может быть все что угодно: наличие гибкого графика, обучения, ДМС и так далее.',
            '',
            'Очень полезно ориентироваться на ваш прошлый опыт: что вам нравилось и чего вам не хватало на предыдущей работе (работах).',
            '',
            'Кроме того, было бы хорошо понимать, что для вас критически важно и из-за чего вы точно готовы сказать “нет”.',
            'Например: я точно не хочу работать в стартапе, для меня неприемлемы переработки, для меня крайне важно чтобы зарплата была полностью белой. ',
            '',
            '<b>Рекомендуемые действия:</b>',
            '1. Определите для себя те критерии, которые для вас критически важны',
            '2. Начните отбирать вакансии исходя из этих критериев',
          ].join('\n'),
          buttons: getButtons(['task31', 'task32']),
        });

        await transition('day4');
      }
    },

    day4: {
      wait: true,
      execute: async ({send, transition}) => {
        await send({
          message: [
            '<b>Составление профиля компании</b>',
            '',
            'После того, как вы отобрали некоторое количество вакансий лучше всего где-то зафиксировать ту информацию, которая у вас есть.',
            'Я предлагаю составить профиль на компанию, где будет указана вся имеющаяся у вас информация.',
            'Как это можно сделать я опишу ниже.',
            '',
            'Если же вам кажется это излишним — вы можете просто где-то записать то, что вы уже увидели и проговорили.',
            'Это важно, так как иначе информация забудется, а в голове перемешаются данные по разным вакансиям.',
            'Для того, чтобы убрать это хаос, лучше все записать.',
            '',
            'Я предлагаю фиксировать максимум информации.',
            'Благодаря этому у вас будет полная картина.',
            'Это так же позволит перед каждым новым этапом общения с компанией освежать все, что вам о ней известно.',
            '',
            'Более того, если вы когда-то в будущем опять будете искать работу, у вас уже будут данные о некоторых компаниях и вам будет проще вести поиск.',
            '',
            'Что важно записать:',
            '- Имя HR',
            'Это позволит вам понимать, когда вам звонит или пишет рекрутер, о какой компании и вакансии идет речь.',
            '- Стек технологий',
            '- Информация о самой компании',
            'Это может быть размер компании, чем она занимается, какая у нее репутация, отзывы.',
            '- Информация о проекте/продукте',
            '- Бонусы, которая компания предоставляет',
            'Обучение, конференции, ДМС, релокация и т.п.',
            '- Особенности',
            'Чем вас это предложение зацепило',
            '- Минусы, которые вы видете в вакансии',
            '',
            'Кроме того, очень важно знать, как в компании устроены те моменты, которые для вас критичны в работе, то, что обсуждалось в прошлом модуле.',
            '',
            'Вы можете составить шаблон на основе той информации, которая вас интересует и заполнять при работе с каждой компанией.',
            '<a href="https://docs.google.com/document/d/1NSJOZFSwBse1z_ZqDwsZUoF_uCVt2cjdw2NWX9zNgTQ/edit?usp=sharing">Пример такого шаблона</a>',
            '',
            '<b>Рекомендуемые действия:</b>',
            '1. Зафиксируйте информацию об отобранных вакансиях',
          ].join('\n'),
          buttons: getButtons(['task41']),
        });

        await transition('day5');
      }
    },

    day5: {
      wait: true,
      execute: async ({send, transition}) => {
        await send({
          message: [
            '<b>Разговор с рекрутером</b>',
            '',
            'Теперь у вас есть какая-то базовая информация, далее нужно заполнить пробелы, которые образовались.',
            'Далеко не все, что вас интересует можно взять из описания вакансии и открытых источников.',
            '',
            'Я предлагаю составить список вопросов на основе той информации, которой вам не хватает для заполнения профиля.',
            '',
            'После этого вы можете договориться с рекрутером о звонке (либо же переписке), где вы сможете задать все интересующие вас вопросы.',
            'Так, ваш разговор будет гораздо продуктивнее.',
            '',
            'Так же, будьте готовы, что во время разговора вам тоже будут задавать вопросы о вашем прошлом опыте и причинах смены работы.',
            '',
            'Стоит отметить, что рекрутерам имеет смысл задавать вопросы, которые не касаются технических моментов: вопросы о самой компании и условиях работы.',
            'Тут же можно попытаться узнать более подробную информацию о проекте и вашей роли в ней, но не каждый рекрутер сможет дать вам полноценный ответ.',
            '',
            'После того, как вы узнали все, что вас интересовало, лучше сначала свести всю информацию воедино, и только после этого принимать решение о том, готовы ли продолжать общение с компанией.',
            '',
            'Не бойтесь отказывать рекрутерам, техническое собеседование — это очень трудоемкая вещь и невозможно пройти со всеми компаниями.',
            'Если вы уже видите, что это работа вам не подходит, так и скажите HR, указав на те причины, по которым вы приняли это решение.',
            '',
            '<b>Рекомендуемые действия:</b>',
            '1. Договоритесь о разговорах с рекрутерами',
            '2. Составьте список вопросов для заполнения пробелов и задайте их',
            '3. Дополните профили компаний',
          ].join('\n'),
          buttons: getButtons(['task51', 'task52', 'task53']),
        });

        await transition('day6');
      }
    },

    day6: {
      wait: true,
      execute: async ({send, transition}) => {
        await send({
          message: [
            '<b>Собеседование</b>',
            '',
            'После того, как прошел разговор с рекрутером далее, как правило, идет собеседование.',
            'Конечно на собеседовании нужно быть готовым ответить на практические вопросы по вашей специальности, но кроме того важно узнать все технические аспекты будущей работы.',
            '',
            'Как правило, техническая часть собеседования проходит с будущим руководителем.',
            'У технического специалиста лучше всего будет уточнить следующие моменты:',
            '',
            '— Получить более подробную информацию о проекте, о том какие задачи вы преимущественно будете в нем выполнять',
            '',
            '— Узнать информацию о том, как настроены различные процессы: сборка и доставка кода (CI/CD), тестирование и прочее',
            '',
            '— Получить информацию о самой команде: количество людей, средний возраст, как устроены процессы взаимодействия внутри команды, между командами т.п',
            '',
            '— Планы на дальнейшее развитие проекта',
            '',
            'Всю полученную информацию стоит зафиксировать в профиле компании.',
            '',
            'Обязательно обратите внимание на то, насколько вам приятно и легко общаться с будущим руководителем/коллегой.',
            'Это важно, поскольку в будущем вам предстоит плотно работать друг с другом и вам должно быть комфортно находится вместе.',
            'Кроме этого обратите внимание на технический уровень и бэкграунд собеседующего.',
            '',
            'После собеседования у вас будет полная информацию о будущей работе.',
            'На основе нее вы уже можете понять насколько вам бы хотели там работать.',
            '',
            'Единственное, что также может повлиять на ваше решение, это то предложение, которое вам сделает компания.',
            '',
            '<b>Рекомендуемые действия:</b>',
            '1. Договоритесь о собеседованиях',
            '2. Составьте список вопросов для технического специалиста и задайте их',
            '3. Зафиксируйте полученную информацию',
          ].join('\n'),
          buttons: getButtons(['task61', 'task62', 'task63']),
        });

        await transition('day7');
      }
    },

    day7: {
      wait: true,
      execute: async ({send, transition}) => {
        await send({
          message: [
            '<b>Выбор оффера</b>',
            '',
            'Вы прошли несколько собеседований, и уже получили несколько офферов. ',
            'Все, что осталось — это выбрать подходящее предложение.',
            '',
            'Прежде всего, не стоит принимать оффер сразу, как только вы его получили.',
            'Правильным шагом будет взять время для обдумывания.',
            'Это поможет вам более трезво взглянуть на предложение, а также сравнить его с другими.',
            '',
            'При выборе оффера вам очень помогут профили компаний, которые вы ранее составляли.',
            'Благодаря им у вас будет вся информация для принятия решения.',
            'Кроме этого предложение от компании часто включает в себя какие-то бонусы (релокация, подъемные, страхование и пр.), и различный уровень зарплаты.',
            '',
            'Для того, чтобы было удобнее сравнить предложения можно составить таблицу, в которую можно внести информацию о всех полученных офферах.',
            'Это позволит разом оглянуть их все и принять окончательное решение.',
            '<a href="https://docs.google.com/spreadsheets/d/1fOyffssM_-QFc3-IFZGcnWpW02JleE8rvsFmkVUS3bQ/edit?usp=sharing">Пример такой таблицы</a>',
            '',
            '<b>Рекомендуемые действия:</b>',
            '1. Соберите все офферы',
            '2. Внесите их в сводную таблицу',
            '3. Выберите работу мечты!',
          ].join('\n'),
          buttons: getButtons(['task71', 'task72', 'task73']),
        });

        await transition('end');
      }
    },

    end: {
      wait: true,
      final: true,
      execute: async ({state, send, transition}) => {
        await send({
          message: [
            '<b>Курс по поиску работы мечты завершен.</b>',
            '',
            getResultText(state.totalValue / state.totalMaxValue),
            getAdditionalRecommendations(state as CourseState),
            'Спасибо, что уделили ваше время!',
            '',
            '<i>Контакты автора курса: @fukarim</i>',
          ].join('\n'),
        });
        await transition('end2');
      }
    },

  },
  actions: {
    done: async ({argument, state, setState, notify, edit}) => {
      if (!argument || state[argument]) {
        return;
      }

      await notify(cheers[Math.floor(Math.random() * cheers.length)]);

      await edit({
        buttons: getDayTasksByTaskId(argument).map((t, index) => {
          if (!state[t] && t !== argument) {
            return {
              action: 'done',
              argument: t,
              text: `Выполнил ${index + 1}`
            }
          }
        }).filter(Boolean) as IButton[],
      });

      await setState({
        [argument]: true,
        totalValue: state.totalValue + 1
      });
    },
  }
} as ICourse