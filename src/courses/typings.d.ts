interface IState {
    [key: string]: any;
}

interface ICourseData {
    /* Время в ISO 8601 начала курса */
    startDate: string,
    /* Последнее пользовательское состояние */
    state: IState,
    current: {
        /* Последний выбранный блок */
        block: string;
        /* Время в ISO 8601 перехода к блоку */
        transitionedDate: string;
    }
}

interface IButton {
    /* Текст на кнопке */
    text: string;
    /* Ключ action'а /^[a-zA-Z0-9-]$/ */
    action: string;
    /* Текстовый аргумент, который можно потом прочитать внутри action'а /^[a-zA-Z0-9-]$/ */
    argument?: string;
}

type Buttons = IButton | Buttons[];

export interface IMessageObject {
    buttons?: Buttons[];
    message: string;
}

export interface IImageObject {
    buttons?: Buttons[];
    message?: string;
    image: string;
}

interface IEditMessageObject {
    /* Набор кнопок, которыми нужно заменить кнопки сообщения, на котором нажали кнопку */
    buttons?: Buttons[];
    /* Сообщение, которым нужно заменить то, на котором нажали кнопку */
    message?: string;
}
interface IForwardOptions {
    /* Чат с сообщением */
    fromChatId: string;
    /* Сообщение, из чата `fromChatId` */
    messageId: number;
}

interface IExecuteParams {
    /* Текущее пользовательское состояние */
    state: IState;
    send(messageObject: IMessageObject | IImageObject): Promise<void>;
    /* Переход на другой блок. Блоки сами не переходят между собой. Нужно явно указать, какой блок запустить дальше. Переход происходит сразу. Исполнение блока может быть отсрочено */
    transition(block: string): Promise<void>;
    /* Установить новое состояние. Внутри выполняется { ...oldState, ...state } */
    setState(state: IState): Promise<IState>;
    /* Переслать сообщение из другого чата. Бот должен быть админом в чате */
    forward(forwardOptions: IForwardOptions): Promise<void>;
}

interface IBlock {
    /* Задержка перед исполнением блока. Форматы: '21:43' — локальное время пользователя (по-умолчанию, UTC+3); true — завтра, в то же время */
    wait?: string | true,
    /* Завершить курс после выполнения этого блока */
    final?: boolean;
    /* Блок доступен только для Патронов */
    paywall?: boolean;
    /* Метод исполнения блока */
    execute(params: IExecuteParams): Promise<void>,
}

interface IActionParams extends IExecuteParams {
    /* Тот самый текстовый аргумент, который можно было задать при описании кнопки */
    argument?: string;
    /* Редактировать сообщение, на котором нажали на кнопку */
    edit(messageObject: IEditMessageObject): Promise<void>;
    /* Отправить всплывающее уведомление */
    notify(notification: string): Promise<void>;
}


export interface ICourse {
    /* Уникальный id курса. Чем короче и проще — тем лучше */
    id: string;
    /* Текст на кнопке в разделе Курсов */
    name: string;
    /* Показывать ли курс в меню Курсов? */
    active: boolean;
    /* Описание курса */
    description(params: { history: ICourseData[] }): string;
    /* Начальные данные для каждого пользователя */
    state: IState;
    /* Указывает на первый блок курса */
    initial: string;
    blocks: {
        [key: string]: IBlock;
    };
    /* Actions должны быть уникальными, потому как могут быть вызваны в любое время. */
    actions: {
        [key: string]: (params: IActionParams) => Promise<void>;
    };
}
