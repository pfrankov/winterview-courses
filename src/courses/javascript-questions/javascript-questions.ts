import {ICourse} from "../typings";

const tasks = require('./tasks.js');

function getHeader(day: string | number, task: any, tasksPerDay: any) {
    return [
        `🟨 <b>JavaScript. День ${day}</b>`,
        tasksPerDay > 1 && `<i>Задача ${task} из ${tasksPerDay}</i>`,
    ].filter(x=>x).join('\n') + '\n';
}

const TOTAL_TASKS = Object.keys(tasks).length;
const TOTAL_DAYS = 7;

export default {
    id: 'javascriptQuestions',
    name: '🎟 Вопросы по JavaScript',
    active: false,
    description: () => {
        return [
            '🟨 <b>Вопросы по JavaScript</b>',
            '',
            'Насколько хорошо вы знаете JavaScript?',
            'Готовы ли вы к вопросам «Что выведет этот код»?',
            'Проверьте свои знания и узнайте много нового о JavaScript в этом курсе.',
            '',
            'Курс длится неделю. Каждый день вы будете получать несколько вопросов по JavaScript с вариантами ответа. Только один из них — верный.',
            `Количество вопросов в день специально ограничено, поскольку ответить на все <b>${TOTAL_TASKS} вопросов</b> за раз — просто нереально.`,
            'При каждом перезапуске курса, вопросы подбираются случайным образом.',
        ].join('\n');
    },
    state: {
        freeSolutions: 8,
        tasksPerDay: 3,
        tasksSent: 0,
        tasks: {},
        day: 1,
    },
    initial: 'start',
    blocks: {
        promotePatreon: {
            paywall: true,
            execute: async ({ setState, send, transition }) => {
                await send({
                    message: [
                        '🎉 <b>Добро пожаловать, патрон!</b>',
                        'Все ограничения сняты'
                    ].join('\n')
                });
                await setState({
                    freeSolutions: TOTAL_TASKS,
                });
                await transition('nextTask');
            }
        },

        start: {
            execute: async ({ send }) => {
                await send({
                    message: [
                        '<b>Выберите количество вопросов в день</b>',
                        '',
                        'Чем меньше вопросов — тем выше шансы дойти до конца.',
                    ].join('\n'),
                    buttons: [
                        {
                            text: '1 вопрос — 7 за неделю',
                            argument: 'ONE',
                            action: 'selectNumberOfQuestions'
                        },
                        {
                            text: '3 вопроса — 21 за неделю',
                            argument: 'THREE',
                            action: 'selectNumberOfQuestions'
                        },
                        {
                            text: '5 вопросов — 35 за неделю',
                            argument: 'FIVE',
                            action: 'selectNumberOfQuestions'
                        }
                    ]
                });
            }
        },

        nextTask: {
            execute: async ({ send, state, setState, transition }) => {
                let tasksSent = state.tasksSent;
                if (tasksSent >= state.tasksPerDay) {
                    if (state.day === TOTAL_DAYS) {
                        return transition('end');
                    }

                    return transition('newDay');
                }

                const taskKey = Object.keys(state.tasks)[(state.day - 1) * state.tasksPerDay + tasksSent];

                await Promise.all(tasks[taskKey].question.map(async (mes: any, index: number, messages: any[]) => {
                    await send({
                        message: [getHeader(state.day, tasksSent + 1, state.tasksPerDay), mes.message].join('\n'),
                        image: mes.image || undefined,
                        buttons: messages.length - 1 === index ? [[
                            {
                                action: 'answer',
                                argument: `${taskKey}-A`,
                                text: 'A'
                            },
                            {
                                action: 'answer',
                                argument: `${taskKey}-B`,
                                text: 'B'
                            },
                            {
                                action: 'answer',
                                argument: `${taskKey}-C`,
                                text: 'C'
                            },
                            {
                                action: 'answer',
                                argument: `${taskKey}-D`,
                                text: 'D'
                            }
                        ]] : []
                    });

                    await setState({
                        tasksSent: tasksSent + 1,
                    });
                }));
            }
        },

        newDay: {
            wait: true,
            execute: async ({ state, setState, transition }) => {
                await setState({
                    tasksSent: 0,
                    day: state.day + 1
                });

                await transition('nextTask');
            },
        },

        end: {
            final: true,
            wait: true,
            execute: async ({ state, send }) => {
                const totalQuestions =  Object.keys(state.tasks).length;
                const answered = Object.keys(state.tasks).filter(key => state.tasks[key]).length;
                const percents = Math.round(answered / totalQuestions * 100);

                const empty = '░';
                const full = '█';
                const lineWidth = 20;

                const filled = Math.round(lineWidth / 100 * percents);
                const progress = full.repeat(filled) + empty.repeat(lineWidth - filled);


                let additionalMessage = '';


                if (percents <= 0) {
                    if (totalQuestions === Object.keys(state.tasks).filter(key => state.tasks[key] === null).length) {
                        additionalMessage = 'Когда будете проходить курс ещё раз, знайте: чтобы выбрать вариант — нужно нажать на соответствующую кнопку под сообщением.';
                    } else {
                        additionalMessage = 'Кажется, вы специально отвечали неправильно. И вам это удалось!';
                    }
                }
                if (percents >= 1) {
                    additionalMessage = 'Постарайтесь заканчивать начатые дела. <a href="https://t.me/winterview/61">Почитайте пост об этом</a>.';
                }
                if (percents >= 20 && percents < 30) {
                    additionalMessage = 'Такой результат должен получиться при совершнно случайном выборе ответов. В худшем случае, из вас выйдет отличный генератор случайных чисел.';
                }
                if (percents >= 30) {
                    additionalMessage = 'Похоже, что вы только начинаете учить JavaScript. Не бросайте изучение, уделяйте больше внимания практике и попробуйте пройти ещё раз.';
                }
                if (percents >= 51) {
                    additionalMessage = 'Чуть больше половины — это уже достойный результат. Но явно есть куда расти.';
                }
                if (percents >= 70) {
                    additionalMessage = 'Уверен, вы можете и лучше. Попробуйте ещё разок.';
                }
                if (percents >= 90) {
                    additionalMessage = 'Только что вы продемонстрировали отличные знания JavaScript. Так держать! 👍';
                }
                if (percents >= 100) {
                    if (totalQuestions > TOTAL_DAYS) {
                        additionalMessage = 'Невероятно! Вы знаете JavaScript, как свои шесть пальцев 👽. Пожалуйста, не захватывайте все рабочие места!';
                    } else {
                        additionalMessage = 'Это было просто, правда? Почему бы не взять больше вопросов?'
                    }
                }

                await send({
                    message: [
                        '🟨 <b>Результаты</b>',
                        '',
                        `${progress} <b>${percents}%</b>`,
                        `Вы правильно ответили на <b>${answered}</b> из ${totalQuestions} вопросов.`,
                        `${additionalMessage}`,
                        '',
                        'Поделитесь вашими достижениями в <a href="https://t.me/joinchat/BIV8GhdjiNVL4UobGuC5TA">чате Winterview</a>.',
                    ].join('\n')
                });
            },
        }
    },
    actions: {
        answer: async ({ state, setState, send, edit, transition, argument, notify, isPatron }) => {
            if (!argument) {
                return;
            }

            const matches = argument.match(/^task(\d+)-([ABCD])$/);
            if (!matches) {
                return;
            }

            const taskNum = matches[1];
            const answer = matches[2];

            const isCorrect = tasks[`task${taskNum}`].answer === answer;

            await edit({
               buttons: [
                   [
                       ...['A', 'B', 'C', 'D'].map((char) => {
                           //let text = (answer === char || tasks[`task${taskNum}`].answer === char) ? (isCorrect ?  : char) : ' ';
                           let text = ' ';

                           if ((answer === char && isCorrect) || tasks[`task${taskNum}`].answer === char) {
                               text = '✅ ' + char;
                           } else if (answer === char) {
                               text = '❌ ' + char;
                           }

                           return {
                               action: 'noop',
                               text,
                           }
                       })

                   ]
               ],
            });

            const rightAnswers = ['Верно', 'Точно', 'Отлично', 'Правильно', 'Похоже на правду', 'Вы знали!'];
            const wrongAnswers = ['Не похоже', 'Вряд ли', 'Сомнительно', 'Не правильно', 'Hе угадали'];
            await notify(isCorrect ? '✅ ' + rightAnswers[Math.floor(Math.random() * rightAnswers.length)] : '❌ ' + wrongAnswers[Math.floor(Math.random() * wrongAnswers.length)]);

            state.tasks[`task${taskNum}`] = isCorrect;
            await setState({
                tasks: state.tasks
            });

            if (state.freeSolutions > 0) {
                try {
                    await Promise.all(tasks[`task${taskNum}`].solution.map(async (mes: any) => {
                        await send({
                            ...mes,
                        });
                    }));
                } catch(e) {}

                await setState({
                    freeSolutions: state.freeSolutions - 1
                });
            }

            if (state.freeSolutions === 1) {
                const isActivePatron = await isPatron();

                if (isActivePatron) {
                    await setState({
                        freeSolutions: TOTAL_TASKS,
                    });
                } else {
                    await send({
                        message: [
                            '🟨 <b>Это было последнее решение на этой неделе.</b>',
                            '',
                            '🎟 <b>Подписчикам на Патреоне доступны решения для всех задач</b>',
                            '',
                            '‼️ <i>Если нажать на кнопку с 🎟 — курс будет ждать вашей авторизации ИЛИ отмены курса.</i>',
                        ].join('\n'),
                        buttons: [
                            [
                                {
                                    text: '🎟 Пустите, я патрон!',
                                    action: 'promotePatreon',
                                },
                                {
                                    text: 'Продолжить курс',
                                    action: 'continueCourse',
                                },
                            ]
                        ]
                    })
                }
            }

            await transition('nextTask');
        },
        selectNumberOfQuestions: async ({setState, argument, transition, edit}) => {
            if (!argument) {
                return;
            }

            // @ts-ignore
            const selected = {
                'ONE': 1,
                'THREE': 3,
                'FIVE': 5,
            }[argument];

            if (!selected) {
                return;
            }

            await edit({
                buttons: [],
            });

            const taskNumbers = Array(TOTAL_TASKS).fill(1).map((x, i) => i + 1).sort(() => 0.5 - Math.random()).slice(0, selected * TOTAL_DAYS);

            await setState({
                tasks: taskNumbers.reduce((acc, taskNumber) => {
                    // @ts-ignore
                    acc[`task${taskNumber}`] = null;

                    return acc;
                }, {}),

                tasksPerDay: selected,
            });

            await transition('nextTask');
        },
        promotePatreon: async ({setState, argument, transition, edit}) => {
            await edit({
               buttons: [],
            });
            await transition('promotePatreon');
        },
        continueCourse: async ({setState, argument, transition, edit}) => {
            await edit({
                buttons: [],
            });
            await transition('nextTask');
        },
        noop: async ({notify}) => {
            const reasons = ['Ставки сделаны. Ставок больше нет', 'Здесь не на что смотреть', 'Выбор нельзя отменить', '👍 Лайк за настойчивость'];

            return notify(reasons[Math.floor(Math.random() * reasons.length)]);
        }
    }
} as ICourse;