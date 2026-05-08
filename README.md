# API REST Boxing

API REST desarrollada con Node.js, Express y MongoDB para gestionar boxeadores y combates, incluyendo relaciones entre colecciones y operaciones CRUD completas.

---

## Tecnologías

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- Nodemon
- Dotenv

---

## Instalación

Clonar repositorio:

```bash
git clone https://github.com/Guillepani/api-rest-boxing.git
```

Instalar dependencias:

```bash
npm install
```

Crear archivo `.env`:

```env
MONGO_URI=tu_uri_de_mongodb
```

---

## Scripts

| Script | Descripción |
|---|---|
| npm run dev | Inicia el servidor con nodemon |
| npm run seed | Ejecuta la semilla de fighters |

---

## Endpoints

### Fighters

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /fighters | Obtener todos los fighters |
| POST | /fighters | Crear fighter |
| PUT | /fighters/:id | Actualizar fighter |
| DELETE | /fighters/:id | Eliminar fighter |

---

### Fights

| Método | Endpoint | Descripción |
|---|---|---|
| GET | /fights | Obtener todos los fights |
| POST | /fights | Crear fight |
| PUT | /fights/:id | Actualizar fight |
| POST | /fights/:id/fighters | Añadir fighter a fight |
| DELETE | /fights/:id | Eliminar fight |

---

## Seed

Ejecutar:

```bash
npm run seed
```

---

## Características

- CRUD completo
- Relaciones entre colecciones
- Populate con Mongoose
- Validación de ObjectIds
- Prevención de referencias huérfanas
- Variables de entorno protegidas

---

## Autor

Guillem Paniagua