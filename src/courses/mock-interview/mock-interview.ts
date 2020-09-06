import {ICourse} from "../typings";

export default {
  id: 'mockInterview',
  name: 'Тестовое собеседование',
  active: true,
  description: () => {
    return [
      '<b>Тестовое собеседование</b>',
      '',
    ].join('\n');
  },
  state: {

  },
  initial: 'day1',
  blocks: {
    day1: {
      execute: async ({send, transition}) => {

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
    },
  }
} as ICourse