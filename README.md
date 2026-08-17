# Gym Web — React + Tailwind + Sistema de Gestión

## Estructura del proyecto

```
src/
├── context/
│   └── AuthContext.jsx       # Estado de autenticación del admin
├── pages/
│   ├── Home.jsx              # Página pública del gimnasio
│   ├── AdminLogin.jsx        # Login del administrador
│   └── AdminDashboard.jsx    # Panel admin con iframe al sistema Spring Boot
├── components/
│   ├── Navbar.jsx            # Navegación pública
│   ├── Hero.jsx              # Sección principal / portada
│   ├── Activities.jsx        # Actividades del gimnasio
│   ├── Schedule.jsx          # Horarios semanales
│   ├── Instructors.jsx       # Equipo de instructores
│   ├── Contact.jsx           # Información de contacto
│   └── Footer.jsx            # Pie de página
└── App.jsx                   # Rutas
```

## Setup

```bash
npm install
npm run dev
```

## Personalización — Checklist

### 1. Nombre del gimnasio
Buscar y reemplazar `GYMNAME` en:
- `Navbar.jsx`
- `Footer.jsx`
- `AdminLogin.jsx`
- `AdminDashboard.jsx`
- `index.html` → `<title>`

### 2. Conectar con el sistema Spring Boot
En `AdminDashboard.jsx`, línea 16:
```js
const SISTEMA_URL = 'http://localhost:8080' // → cambiá por tu URL real
```

### 3. Datos del gimnasio
Cada componente tiene un array al principio con datos de ejemplo.
Reemplazá con los datos reales o conectá con la API:
- `Activities.jsx` → array `actividades`
- `Schedule.jsx`   → array `horarios`
- `Instructors.jsx`→ array `instructores`
- `Contact.jsx`    → objeto `info`

### 4. Conectar la API (opcional)
Para que actividades, horarios e instructores se carguen dinámicamente
desde tu sistema Spring Boot, reemplazá los arrays estáticos con:

```js
// Ejemplo en Activities.jsx
const [actividades, setActividades] = useState([])

useEffect(() => {
  fetch('/api/actividades')
    .then(r => r.json())
    .then(setActividades)
}, [])
```

Necesitarás exponer endpoints públicos en tu backend (sin autenticación)
para estas secciones.

### 5. Google Maps
En `Contact.jsx`, reemplazá el placeholder con un embed real de Google Maps.

### 6. Autenticación real
En `AuthContext.jsx`, reemplazá la lógica hardcodeada con un fetch real
a tu endpoint de Spring Security `/login`.

## Colores (tailwind.config.js)
- `primary` → `#E8FF1A` (amarillo eléctrico) — acento principal
- `dark`    → `#0A0A0A` (negro profundo) — fondo
- `surface` → `#111111` (gris oscuro) — cards y sidebar
- `muted`   → `#888888` (gris) — texto secundario
