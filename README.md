# Constructora XYZ Website

Sitio web informativo y de blog para Constructora XYZ, empresa de construcciones.

## Tecnologías Utilizadas

- **Frontend**: Angular con PrimeNG
- **Backend**: Node.js con Express
- **Base de Datos**: PostgreSQL
- **Contenedorización**: Docker

## Estructura del Proyecto

```
constructora-xyz/
├── backend/          # API REST con Node.js
├── frontend/         # Aplicación Angular
├── docker-compose.yml
└── README.md
```

## Páginas

- **Inicio**: Página principal con información general
- **Proyectos**: Muestra proyectos divididos en categorías:
  - Edificaciones
  - Casas
  - Remodelaciones
- **Blog**: Artículos informativos (solo lectura)
- **Contacto**: Formulario de contacto

## Instalación y Ejecución

### Con Docker (Recomendado)

1. Asegúrate de tener Docker y Docker Compose instalados
2. Ejecuta: `docker-compose up --build`
3. Accede a la aplicación en:
   - Frontend: http://localhost:4200
   - Backend API: http://localhost:3000

### Desarrollo Local

#### Backend
```bash
cd backend
npm install
npm start
```

#### Frontend
```bash
cd frontend
npm install
ng serve
```

#### Base de Datos
Configura PostgreSQL localmente o usa Docker para la base de datos.

## API Endpoints

- `GET /api/projects` - Obtener todos los proyectos
- `GET /api/projects?category=edificaciones` - Filtrar por categoría
- `GET /api/blog` - Obtener posts del blog
- `POST /api/contact` - Enviar mensaje de contacto

## Características

- Diseño responsivo con PrimeNG
- Navegación por rutas de Angular
- Blog de solo lectura
- Formulario de contacto funcional
- Arquitectura modular y escalable# ladeconsa-web
