import {ICourse} from "../typings";

const getTaskHeader = (day: number) => {
  return day === -1 ? 
    `<b>Структуры данных. Курс закончился</b>\n`:
    `<b>Структуры данных. День ${day}</b>\n`;
};

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
    day: 0,
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
            'Какой-нибудь вопрос'
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
            getTaskHeader(2),
            'Какой-нибудь вопрос',
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
            getTaskHeader(3),
            'Какой-нибудь вопрос',
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
            getTaskHeader(4),
            'Какой-нибудь вопрос',
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
            getTaskHeader(5),
            'Какой-нибудь вопрос',
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
            getTaskHeader(6),
            'Какой-нибудь вопрос',
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
            getTaskHeader(7),
            'Какой-нибудь вопрос',
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

      console.log(state); 
      await setState({
        day: state.day + 1
      });
    }
  }
} as ICourse;