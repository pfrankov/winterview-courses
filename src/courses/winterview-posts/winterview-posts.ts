import {ICourse, IExecuteParams} from "../typings";

const posts = [6, 11, 18, 19, 44, 49, 35, 45, 46, 13, 41, 32];

async function go ({ send, forward, transition, setState, state }: IExecuteParams, nextDay: string) {
  const notViewedPosts = posts.filter(post => !state.viewed.includes(post));
  const post = notViewedPosts[Math.floor(Math.random() * notViewedPosts.length)];


  await send({
    message: `⭐️ <b>Лучшие посты. День ${state.viewed.length + 1}</b>`
  });

  await forward({
    fromChatId: '@winterview',
    messageId: post,
  });

  await setState({
    viewed: [...state.viewed, post],
  });

  await transition(nextDay);
}

export default {
  id: 'winterviewPosts',
  order: 10,
  name: 'Лучшие посты Winterview',
  active: true,
  description: ({history}) => {
    return [
      '⭐️ <b>Лучшие посты Winterview</b>',
      '',
      'На канале @winterview вышло довольно много постов. Какие-то получились отличными, другие же оказались не очень полезными.',
      'Этот курс поможет прочитать и перечитывать только лучшие посты с канала.',
      '',
      'Каждый день в течение недели вы будете получать по одному случайному посту. Это немного, но поможет ознакомиться с основными темами на канале.',
      'Скорее всего, именно в этих темах вы найдёте самую ценную информацию о собеседованиях и резюме.',
    ].join('\n');
  },
  state: {
    viewed: []
  },
  initial: 'day1',
  blocks: {
    end: {
      final: true,
      wait: true,
      execute: async ({ state, send }) => {
        await send({
          message: [
            '⭐️ <b>Лучшие посты Winterview. Завершено</b>',
            '',
            `Вы справились! Возвращайтесь сюда раз в пару месяцев: так материал лучше запомнится.`,
            '',
            '<i><a href="https://t.me/winterview_contact_bot">Оставьте отзыв о курсе: что понравилось, а что нужно улучшить.</a></i>',
          ].join('\n')
        });
      }
    },
    day1: {
      execute: async (params) => {
        await go(params, 'day2');
      },
    },
    day2: {
      wait: true,
      execute: async (params) => {
        await go(params, 'day3');
      },
    },
    day3: {
      wait: true,
      execute: async (params) => {
        await go(params, 'day4');
      },
    },
    day4: {
      wait: true,
      execute: async (params) => {
        await go(params, 'day5');
      },
    },
    day5: {
      wait: true,
      execute: async (params) => {
        await go(params, 'day6');
      },
    },
    day6: {
      wait: true,
      execute: async (params) => {
        await go(params, 'day7');
      },
    },
    day7: {
      wait: true,
      execute: async (params) => {
        await go(params, 'end');
      },
    },
  },

  actions: {}
} as ICourse;