# Webpack Project

Этот проект демонстрирует настройку `Webpack` с хешированием имен файлов и поддержкой различных ресурсов. Он включает в себя:

- Хеширование имен файлов для предотвращения проблем с кэшированием.
- Поддержку локальных шрифтов.
- Обработку изображений.
- Интеграцию CSS стилей.
- Оптимизацию внешних библиотек.

## Структура проекта

- `src/` - Исходные файлы проекта:
  - `index.js` - Основной JavaScript файл.
  - `style.css` - Основной CSS файл.
  - `images/` - Директория для изображений.
  - `fonts/` - Директория для шрифтов.
  - `index.html` - Шаблон HTML файла.
- `dist/` - Сгенерированные файлы после сборки.
- `webpack.config.js` - Конфигурационный файл Webpack.

## Установка

Установите зависимости проекта, следующей командой:

```
npm install
```

## Сборка проекта

Для сборки проекта выполните команду:
```
npx webpack --config webpack.config.js 
``` 
### или воспользуйтесь готовым скриптом в package.json:
```
npm run build (for production mode)
or
npm run start (for development mode)
```
После сборки файлы будут находиться в папке `dist/.`

## Использование
`CSS:` Добавляйте CSS файлы в src/ или src/styles/ и импортируйте их в index.js.
`Изображения:` Помещайте изображения в src/images/ и используйте их в коде.
`Шрифты:` Размещайте шрифты в src/fonts/.
`HTML:` Внесенные изменения в src/index.html будут учтены при следующей сборке.

## Плагины и зависимости
- [Webpack](https://webpack.js.org/) - Модульный сборщик.
- [HtmlWebpackPlugin](https://github.com/jantimon/html-webpack-plugin) - Плагин для генерации HTML файла.
- [MiniCssExtractPlugin](https://github.com/webpack-contrib/mini-css-extract-plugin) - Плагин для извлечения CSS в отдельные файлы.
- [CleanWebpackPlugin](https://github.com/johnagan/clean-webpack-plugin) - Плагин для очистки директории перед сборкой.