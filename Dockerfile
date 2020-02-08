# Родительский образ
FROM node:10.16.3-alpine
# Рабочая директория
WORKDIR /app
# Копируем зависимости
COPY package.json /app/package.json
# Устанавливаем зависимости
RUN npm install --silent
RUN npm install react-scripts -g --silent
# Запускаем приложение
CMD ["npm", "start"]
