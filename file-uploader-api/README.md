###run in docker container

```docker-compose up -d```

```cp .env.example .env```

```docker-compose exec app php composer.phar install```

```docker-compose exec app php artisan key:generate```

```docker-compose exec app php artisan migrate```

```npm run dev```
