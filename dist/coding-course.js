"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getButtons(argument) {
    return [
        [
            {
                action: 'done',
                argument: argument,
                text: '✅ Решил'
            },
            {
                action: 'failed',
                argument: argument,
                text: '❌ Не решил'
            },
        ]
    ];
}
function getHeader(day) {
    return `⭐️ <b>День ${day}</b>`;
}
exports.default = {
    id: 'codingCourse',
    name: 'Задачки каждый день',
    active: true,
    description: ({ history }) => {
        return [
            '👨‍🏫 <b>Задачки каждый день</b>',
            '',
            'Держите свой мозг в тонусе: сформируйте привычку решать по одной крайне популярной задачке каждый день.',
            'Представьте: через неделю вы будете уметь решать на 7 типовых задачек больше, чем сейчас.',
            '',
            'В течение недели вы будете получать новую задачку в одно и то же время.',
            '<i>Помните об последовательности решения:</i>',
            '<i>1. Решите задачку влоб</i>',
            '<i>2. Перепишите на более оптимальное решение</i>',
            '',
            'Отвечать на сообщения не нужно: как минимум, это неудобно.',
        ].join('\n');
    },
    state: {
        tasks: {}
    },
    initial: 'start',
    blocks: {
        start: {
            execute: async ({ state, setState, transition }) => {
                const allTasks = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
                const restTasks = allTasks.filter(task => state.tasks[task] == null);
                if (restTasks.length <= 0) {
                    await transition('end');
                }
                else {
                    let nextTask = restTasks[Math.floor(Math.random() * restTasks.length)];
                    if (!Object.keys(state.tasks).length) {
                        nextTask = 'day1';
                    }
                    await setState({
                        tasks: Object.assign({}, state.tasks, {
                            [nextTask]: false,
                        })
                    });
                    await transition(nextTask);
                }
            }
        },
        end: {
            final: true,
            wait: true,
            execute: async ({ state, send }) => {
                await send({
                    message: [
                        '👨‍🏫 <b>Вот и прошла неделя</b>',
                        '',
                        `Вы выполнили ${Object.values(state.tasks).filter(x => x).length} из 7 задач`,
                        '',
                        `Повторяйте чаще, чтобы оставаться в тонусе.`,
                    ].join('\n')
                });
            }
        },
        day1: {
            execute: async ({ state, send, transition }) => {
                await send({
                    message: [
                        getHeader(Object.keys(state.tasks).length),
                        'Напишите аналог _.get в lodash/underscore.',
                        '',
                        `Примеры:`,
                        `<code>get({ a: { b: 1 } }, 'a.b') // 1</code>`,
                        `<code>get({ a: { b: 1 } }, 'a.c') // undefined</code>`,
                        `<code>get({ }, 'a.c') // undefined</code>`,
                        '',
                        `https://jsbin.com/wevotijida/edit?js,console,output`,
                    ].join('\n'),
                    buttons: getButtons('day1'),
                });
                await transition('start');
            },
        },
        day2: {
            wait: true,
            execute: async ({ state, send, transition }) => {
                await send({
                    message: [
                        getHeader(Object.keys(state.tasks).length),
                        'Напишите функцию-валидатор скобок.',
                        '',
                        `Примеры:`,
                        `<code>check('{[()]}') // true</code>`,
                        `<code>check('{[(])}') // false</code>`,
                        '',
                        `https://jsbin.com/zemucivogu/edit?js,console,output`,
                    ].join('\n'),
                    buttons: getButtons('day2'),
                });
                await transition('start');
            },
        },
        day3: {
            wait: true,
            execute: async ({ state, send, transition }) => {
                await send({
                    message: [
                        getHeader(Object.keys(state.tasks).length),
                        `Разверните многомерный массив.`,
                        '',
                        'Примеры:',
                        `<code>flat([1, 2, [3, 4]]); // [1, 2, 3, 4]</code>`,
                        `<code>flat([1, 2, [3, [4]]]); // [1, 2, 3, 4]</code>`,
                        `<i>Вложенность не ограничена.</i>`,
                        '',
                        `https://jsbin.com/dedixiluzu/edit?js,console,output`,
                    ].join('\n'),
                    buttons: getButtons('day3'),
                });
                await transition('start');
            },
        },
        day4: {
            wait: true,
            execute: async ({ state, send, transition }) => {
                await send({
                    message: [
                        getHeader(Object.keys(state.tasks).length),
                        `Напишите функцию, которая проверяет, что в отсортированном массиве встречается такая пара чисел, которая даёт нужную сумму.`,
                        '',
                        'Примеры:',
                        `<code>check([1, 2, 3, 6], 9) // true: 6+3=9</code>`,
                        `<code>check([1, 1, 3, 4], 2) // true: 1+1=2</code>`,
                        `<code>check([-1, 1, 4, 8], 3) // true: -1+4=3</code>`,
                        `<code>check([1, 4, 8, 9], 6) // false</code>`,
                        '',
                        'https://jsbin.com/getubeqoke/edit?js,console,output',
                    ].join('\n'),
                    buttons: getButtons('day4'),
                });
                await transition('start');
            },
        },
        day5: {
            wait: true,
            execute: async ({ state, send, transition }) => {
                await send({
                    message: [
                        getHeader(Object.keys(state.tasks).length),
                        `Напишите функцию, которая проверяет переданную строку на палиндром.`,
                        '',
                        'Примеры:',
                        `<code>isPalindrome('Коту тащат утоК'); // true</code>`,
                        `<code>isPalindrome('Мало кукле дел – к уколам'); // true</code>`,
                        `<code>isPalindrome('Другая строка'); // false</code>`,
                        '',
                        'https://jsbin.com/bexaciveke/edit?js,console,output',
                    ].join('\n'),
                    buttons: getButtons('day5'),
                });
                await transition('start');
            },
        },
        day6: {
            wait: true,
            execute: async ({ state, send, transition }) => {
                await send({
                    message: [
                        getHeader(Object.keys(state.tasks).length),
                        `Напишите функцию, которая сжимает символы в строке.`,
                        '',
                        'Примеры:',
                        `<code>compress('aaabbc') // 'a3b2c1'</code>`,
                        `<code>compress('aabbcca') // 'a2b2c2a1'</code>`,
                        '',
                        'https://jsbin.com/tomukofoxe/edit?js,console,output',
                    ].join('\n'),
                    buttons: getButtons('day6'),
                });
                await transition('start');
            },
        },
        day7: {
            wait: true,
            execute: async ({ state, send, transition }) => {
                await send({
                    message: [
                        getHeader(Object.keys(state.tasks).length),
                        `Напишите функцию, которая вернёт n-ное самое большое число.`,
                        '',
                        'Примеры:',
                        `<code>largestN([2, 4, 1, 5, 3], 1) // 5</code>`,
                        `<code>largestN([2, 4, 1, 5, 3], 2) // 4</code>`,
                        `<code>largestN([1, 8, 3, 2], 4) // 1</code>`,
                        '',
                        'https://jsbin.com/kavonezazi/edit?js,console,output',
                    ].join('\n'),
                    buttons: getButtons('day7'),
                });
                await transition('start');
            },
        },
    },
    actions: {
        done: async ({ argument, state, setState, edit, transition, notify }) => {
            if (!argument) {
                return;
            }
            notify(`Отлично!`);
            await setState({
                tasks: Object.assign(Object.assign({}, state.tasks), { [argument]: true })
            });
            await edit({
                buttons: []
            });
        },
        failed: async ({ argument, state, setState, edit, transition, notify }) => {
            if (!argument) {
                return;
            }
            notify(`Очень жаль!`);
            await edit({
                buttons: []
            });
        }
    }
};
