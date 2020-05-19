import {ICourse} from "../typings";

export default {
  id: 'empty',
  name: 'Название курса',
  active: false, // Не забудьте сменить на true
  description: () => {
    return [
      '<b>Описание курса</b>',
    ].join('\n');
  },
  state: {

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
            '<b>Курс такой-то. День 1</b>',
          ].join('\n')
        });
        await transition('day2');
      },
    },
    day2: {
      wait: true,
      execute: async ({transition, setState}) => {
        await setState({
          value: 1,
        });
        await transition('end');
      },
    },
  },

  actions: {

  }
} as ICourse;