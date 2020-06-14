import {ICourse} from "../typings";

export default {
  id: 'empty',
  name: 'Структуры данных',
  active: false, // Не забудьте сменить на true
  description: () => {
    return [
      '<b>Описание курса</b>',
    ].join('\n');
  },
  state: {
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
            '<b>Курс такой-то. Конец</b>',
          ].join('\n')
        });
      }
    },
    day1: {
      execute: async ({transition, send}) => {
        await send({
          message: [
            '<b>Курс. День 1</b>',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Правильный ответ',
                action: 'checkAnswer',
                argument: '1'
              },
              {
                text: '2',
                action: 'checkAnswer',
                argument: '0'
              }
            ],
            [
              {
                text: '3',
                action: 'checkAnswer',
                argument: '0'
              },
              {
                text: '4',
                action: 'checkAnswer',
                argument: '0'
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
            '<b>Курс. День 2</b>',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Правильный ответ',
                action: 'checkAnswer',
                argument: '1'
              },
              {
                text: '2',
                action: 'checkAnswer',
                argument: '0'
              }
            ],
            [
              {
                text: '3',
                action: 'checkAnswer',
                argument: '0'
              },
              {
                text: '4',
                action: 'checkAnswer',
                argument: '0'
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
            '<b>Курс. День 3</b>',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Правильный ответ',
                action: 'checkAnswer',
                argument: '1'
              },
              {
                text: '2',
                action: 'checkAnswer',
                argument: '0'
              }
            ],
            [
              {
                text: '3',
                action: 'checkAnswer',
                argument: '0'
              },
              {
                text: '4',
                action: 'checkAnswer',
                argument: '0'
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
            '<b>Курс. День 4</b>',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Правильный ответ',
                action: 'checkAnswer',
                argument: '1'
              },
              {
                text: '2',
                action: 'checkAnswer',
                argument: '0'
              }
            ],
            [
              {
                text: '3',
                action: 'checkAnswer',
                argument: '0'
              },
              {
                text: '4',
                action: 'checkAnswer',
                argument: '0'
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
            '<b>Курс. День 5</b>',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Правильный ответ',
                action: 'checkAnswer',
                argument: '1'
              },
              {
                text: '2',
                action: 'checkAnswer',
                argument: '0'
              }
            ],
            [
              {
                text: '3',
                action: 'checkAnswer',
                argument: '0'
              },
              {
                text: '4',
                action: 'checkAnswer',
                argument: '0'
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
            '<b>Курс. День 6</b>',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Правильный ответ',
                action: 'checkAnswer',
                argument: '1'
              },
              {
                text: '2',
                action: 'checkAnswer',
                argument: '0'
              }
            ],
            [
              {
                text: '3',
                action: 'checkAnswer',
                argument: '0'
              },
              {
                text: '4',
                action: 'checkAnswer',
                argument: '0'
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
            '<b>Курс. День 7</b>',
          ].join('\n'),
          buttons: [
            [
              {
                text: 'Правильный ответ',
                action: 'checkAnswer',
                argument: '1'
              },
              {
                text: '2',
                action: 'checkAnswer',
                argument: '0'
              }
            ],
            [
              {
                text: '3',
                action: 'checkAnswer',
                argument: '0'
              },
              {
                text: '4',
                action: 'checkAnswer',
                argument: '0'
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
      await edit({
        buttons: []
      });

      await send({
        message: 'Ты не прав. Ща поясню'
      });

      // await setState({});
    }
  }
} as ICourse;