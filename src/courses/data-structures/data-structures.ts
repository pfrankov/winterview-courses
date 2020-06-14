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
        await transition('day3');
      },
    },
    day3: {
      wait: true,
      execute: async ({transition, setState}) => {
        await setState({
          value: 1,
        });
        await transition('day4');
      },
    },
    day4: {
      wait: true,
      execute: async ({transition, setState}) => {
        await setState({
          value: 1,
        });
        await transition('day5');
      },
    },
    day5: {
      wait: true,
      execute: async ({transition, setState}) => {
        await setState({
          value: 1,
        });
        await transition('day6');
      },
    },
    day6: {
      wait: true,
      execute: async ({transition, setState}) => {
        await setState({
          value: 1,
        });
        await transition('day7');
      },
    },
    day7: {
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