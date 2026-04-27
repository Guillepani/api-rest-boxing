# API REST Boxing

API REST desarrollada con Node.js, Express y MongoDB para gestionar boxeadores y combates.

## Tecnologías

- Node.js
- Express
- MongoDB
- Mongoose

## Endpoints

### Fighters

- GET /fighters → obtener todos
- POST /fighters → crear
- PUT /fighters/:id → actualizar
- DELETE /fighters/:id → eliminar

### Fights

- GET /fights → obtener todos (con fighters)
- POST /fights → crear
- DELETE /fights/:id → eliminar

## Seed

Ejecutar:
node src/utils/seed.js

## Autor

Guillem Paniagua
