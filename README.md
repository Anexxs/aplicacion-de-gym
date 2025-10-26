# 🏋️ Gym Social - Red Social para Gimnasios

Una aplicación web moderna enfocada en crear una comunidad para personas que van al gimnasio. Desarrollada con React + Vite, con un diseño responsive y funcionalidades avanzadas.

## 🌟 Características

### 📱 **Interfaz Principal**
- **Feed de publicaciones** con interacciones sociales
- **Sistema de temas** (claro/oscuro) con detección automática del sistema
- **Navegación inferior** de 6 pestañas con iconos personalizados
- **Diseño responsive** optimizado para móviles y escritorio

### 🗺️ **Mapa de Eventos**
- **Mapa interactivo** con OpenStreetMap
- **Marcadores personalizados** por categoría de evento
- **Sistema de filtros avanzado**:
  - 📍 Por ciudad (Madrid, Barcelona, Valencia, etc.)
  - 🏘️ Por comunas/distritos
  - 🎯 Por tipo de actividad (competencias, clases, talleres)
  - 🏃‍♂️ Por deporte (Fitness, CrossFit, Yoga, etc.)
- **Popups informativos** con detalles completos de eventos
- **Contador en tiempo real** de eventos filtrados

### 👤 **Perfil de Usuario**
- **Información personal** completa
- **Estadísticas de fitness** con métricas detalladas
- **Sistema de logros** con badges y progreso
- **Tabs organizados**: Posts, Logros, Fitness
- **Avatar personalizado** integrado en la navegación

### 🎨 **Sistema de Diseño**
- **Paleta de colores cálidos** con tonos naranjas y rojos
- **Variables CSS personalizadas** para temas
- **Transiciones suaves** y animaciones
- **Iconos SVG optimizados** para rendimiento

## 🛠️ Tecnologías

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.12
- **Mapas**: React Leaflet + Leaflet + OpenStreetMap
- **Estilos**: CSS custom con variables de tema
- **Persistencia**: localStorage para configuraciones

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Anexxs/aplicacion-de-gym.git
cd aplicacion-de-gym

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Vista previa del build
npm run lint     # Verificar código con ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── feed/                 # Feed de publicaciones
│   │   ├── Feed.jsx
│   │   └── Feed.css
│   ├── navigation/           # Navegación y iconos
│   │   ├── BottomNav.jsx
│   │   ├── BottomNav.css
│   │   └── Icons.jsx
│   ├── profile/              # Perfil de usuario
│   │   ├── Profile.jsx
│   │   └── Profile.css
│   └── screens/
│       ├── eventos/          # Mapa de eventos
│       │   ├── Events.jsx
│       │   └── Events.css
│       ├── ThemeToggle.jsx   # Selector de tema
│       └── ThemeToggle.css
├── data/                     # Datos mock
│   ├── mockData.js          # Posts del feed
│   ├── userMockData.js      # Datos de usuario
│   └── eventMockData.js     # Eventos y filtros del mapa
├── styles/
│   └── colors.css           # Variables de tema
├── App.jsx                  # Componente principal
├── App.css                  # Estilos globales
└── main.jsx                 # Punto de entrada
```

## 🎯 Funcionalidades Implementadas

### ✅ Completadas
- [x] **Feed social** con posts y interacciones
- [x] **Sistema de temas** claro/oscuro
- [x] **Navegación completa** de 6 pestañas
- [x] **Mapa de eventos** con OpenStreetMap
- [x] **Filtros de eventos** por múltiples criterios
- [x] **Perfil de usuario** con estadísticas
- [x] **Diseño responsive** para móviles
- [x] **Persistencia de tema** en localStorage

### 🔄 En desarrollo
- [ ] Sistema de autenticación
- [ ] Chat/mensajería entre usuarios
- [ ] Búsqueda de gimnasios
- [ ] Sistema de seguimiento de usuarios
- [ ] Notificaciones push

## 🗺️ Uso del Mapa de Eventos

1. **Navegar a Eventos**: Toca el ícono 📅 en la barra inferior
2. **Aplicar filtros**: Usa los selectores para filtrar por:
   - Ciudad y comuna específica
   - Tipo de actividad (competencia, clase, taller)
   - Deporte específico
3. **Explorar eventos**: Los marcadores de colores indican:
   - 🔴 **Rojo**: Competencias
   - 🟢 **Verde**: Clases
   - 🔵 **Azul**: Talleres
4. **Ver detalles**: Toca cualquier marcador para ver información completa

## 🎨 Personalización de Temas

El sistema de temas utiliza variables CSS que se pueden personalizar:

```css
:root {
  --primary-color: #ff6b35;        /* Color principal */
  --primary-hover: #e55a2b;       /* Hover del principal */
  --primary-color-alpha: #ff6b3520; /* Principal transparente */
  --accent: #ff8c42;               /* Color de acento */
  /* ... más variables en src/styles/colors.css */
}
```

## 📱 Responsive Design

La aplicación está optimizada para:
- **Móviles**: 320px - 768px
- **Tablets**: 768px - 1024px
- **Escritorio**: 1024px+

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Desarrollo

Proyecto desarrollado paso a paso con enfoque en:
- **Arquitectura limpia** y componentes reutilizables
- **Experiencia de usuario** intuitiva y moderna
- **Rendimiento optimizado** con Vite y React
- **Código mantenible** con separación de responsabilidades

---

**¡Únete a la comunidad fitness más activa! 💪**
