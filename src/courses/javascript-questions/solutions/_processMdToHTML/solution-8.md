Функция `colorChange` является статичной. Статичные методы не имеют доступа к экземплярам класса. Так как `freddie` это экземпляр, то статичный метод там не доступен. Поэтому выбрасывается ошибка `TypeError`.