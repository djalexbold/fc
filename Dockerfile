FROM ubuntu:latest
LABEL authors="djale"

ENTRYPOINT ["top", "-b"]

# --- Этап 1: Сборка фронтенда (Vue) ---
FROM node:22.19.0-alpine as frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Этап 2: Сборка бэкенда (PHP) ---
FROM php:8.2-fpm-alpine

# Установка системных зависимостей
RUN apk add --no-cache \
    libpng-dev \
    libzip-dev \
    zip \
    unzip \
    git \
    oniguruma-dev

# Установка расширений PHP
RUN docker-php-ext-install pdo_mysql mbstring zip exif pcntl bcmath gd

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Копируем проект
COPY . .
# Копируем собранный фронтенд из первого этапа
COPY --from=frontend-builder /app/public/build ./public/build

# Установка зависимостей Laravel
RUN composer install --no-dev --optimize-autoloader

# Настройка прав
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache

EXPOSE 9000
CMD ["php-fpm"]
