# Alquila tu Cancha

## Introducción

¿Alguna vez soñaste con ver un partido de fútbol en donde se enfrenten tus jugadores favoritos? Imagina poder armar dos equipos de 5 jugadores cada uno, en donde no tengas ninguna limitación... posición, presupuesto, contrato, club, edad... tu mente es tu límite.

**Alquila tu Cancha** es una web app que te permite crear **"El partido de tus sueños"**, un partido de fútbol 5 en donde se enfrenten tus 10 jugadores favoritos.

## Funcionalidades

- Darle la bienvenida al usuario.
- Listar los equipos creados.
- Crear dos equipos.
- Darle un nombre a cada equipo y poder editarlo si es necesario.
- Eliminar un equipo creado.
- Impedir la creación de más de dos equipos.
- Ver el detalle de un equipo (listado de jugadores vinculado).
- Vincular jugadores a un equipo.
- Comunicar gráficamente cuando ambos equipos están "formados y completos".

## Precondiciones

- Se entiende como equipo formado a un equipo creado y nombrado.
- Se entiende como equipo completo al equipo que tiene 5 jugadores.
- El listado de jugadores disponible debe cargarse de la API https://apifootball.com/documentation/
- No puede crearse más de 2 equipos.
- No puede haber más de 5 jugadores en cada equipo.
- No puede repetirse un mismo jugador en el equipo ni en el equipo adversario.

## Tecnologías

- Next.js 14.2.5
- TypeScript
- Tailwind CSS
- Docker
- Git Flow

## Instalación y Ejecución

### Requisitos

- Node.js
- Docker y Docker Compose
- Git

### Pasos para la Instalación

-clonar el repo<
-crear .env y pegar dentro NEXT_PUBLIC_API_URL = ce057e13b31c9c06757ef249bd9b464490069f364a1fd931e3487acfdd11964b
-levantar con : docker run -p 3000:3000 fulvoproject
