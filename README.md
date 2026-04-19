# JS Logger

### Описание приложения

`Node.js` проект для логирования и интервального запуска задач.

Приложение состоит из трёх файлов:

1. config.js - хранит конфигурацию приложения: название проекта и интервал выполнения;

2. logger.js - инкапсулирует console.log и возвращает функцию-обертку для вывода отформатированного сообщения в консоль с названием приложения;

3. scheduler.js - планировщик задач, логирующий запуск приложения и создание новых задач по переданному интервалу.

### Демонстация работы

```bash
npm run start

> js-logger@1.0.0 start
> node scheduler.js

[js-logger] scheduler.js file started.
[js-logger] Task "run logger" with interval 10000 msec started.
[js-logger] running.
```
