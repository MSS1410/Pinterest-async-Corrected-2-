# Pinterest Async

**Remodelado del clon de Pinterest realizado en JavaScript

---

## Tabla de contenidos

- [Descripción](#descripción)  
- [Características](#características)  

- [Instalación](#instalación)  
- [Configuración](#configuración)  
- [Uso](#uso)  
- [Estructura del proyecto](#estructura-del-proyecto)  
- [Tecnologías](#tecnologías)  

- [Autor](#autor)

---

## Descripción

Esta aplicación es una réplica simplificada de Pinterest que permite buscar imágenes usando la API de Unsplash. Incluye:

- Búsqueda dinámica con sugerencias (fallback a “gatos”).  
- Componentes reutilizables y modularidad.  
- Persistencia de la primera búsqueda.  
- Modo oscuro integrado.  
- Diseño **full responsive** (móvil, tablet, desktop).  

---

## Características

- **Búsqueda** de imágenes por palabra clave.  
- **Fallback** automático a “gatos” si no hay resultados.  
- **Overlay con botón “Guardar”** al hacer hover sobre cada tarjeta.  
- **Masonry layout** con columnas CSS (`column-count`).  
- **Modo oscuro** que cambia el tema de la página.  
- **Persistencia** de la búsqueda inicial en `sessionStorage`.  
- **Footer** con créditos y año dinámico.  
- **Responsive**:  
  - Móvil (≤600px): 1 columna  
  - Tablet (601–900px): 2 columnas  
  - Desktop (≥901px): 3 columnas  




## Instalación

1. Clonar el repositorio:  
   ```bash
   git clone https://github.com/MSS1410/Pinterest-async-Corrected-2-.git
   cd Pinterest-async-Corrected-2-
2. Instalar dependencias :
   ```bash
      npm install
3.Iniciar servido d desarollo
 ```bash
    npm run dev
```

## Configuracion
  1.Crea un archivo .env en la raíz del proyecto con tu clave de Unsplash:

VITE_ACCESS_KEY=nDC3_4_pfKguepnTtZERJK_VbDXMXlLIp7brhdQpNMs

## Uso

- Al cargar, verás una búsqueda inicial (por defecto “calisthenics”).

- Escribe una palabra y presiona Enter para buscar.

- Si no hay resultados, muestra automáticamente resultados de “nature”.

- Haz clic en el logo para volver a la primera búsqueda.

- Usa el botón de la derecha para alternar modo oscuro.

- Al pasar el ratón sobre una imagen, aparece un botón “Guardar” (sin funcionalidad).

  ## Estructura del Proyecto

├── assets/
│   ├── pint.png
│   ├── oscuro.png
│   ├── perfil.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── fetchImages.js
│   │   ├── Header.js
│   │   ├── Gallery.js
│   │   ├── ImageCard.js
│   │   ├── messages.js
│   │   └── Footer.js
│   ├── css/
│   │   ├── style.css
│   │   ├── header.css
│   │   ├── gallery.css
│   │   ├── footer.css
│   │   └── responsive.css
│   ├── index.html
│   └── main.js
├── .env
├── package.json
└── README.md

## Autor
MSS1410
2025
