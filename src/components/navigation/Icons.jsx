// Iconos SVG para la barra de navegación
import React from 'react';

// 🏠 Icono de Casa (Inicio)
export const HomeIcon = ({ active = false }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill={active ? 'var(--accent)' : 'var(--text-muted)'}
  >
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

// 🔍 Icono de Lupa (Buscar)
export const SearchIcon = ({ active = false }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={active ? 'var(--accent)' : 'var(--text-muted)'} 
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8"/>
    <path d="21 21l-4.35-4.35"/>
  </svg>
);

// 🏋️ Icono de Mancuerna (Gimnasios)
export const GymIcon = ({ active = false }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill={active ? 'var(--accent)' : 'var(--text-muted)'}
  >
    <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
  </svg>
);

// 💬 Icono de Mensajes
export const MessageIcon = ({ active = false }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={active ? 'var(--accent)' : 'var(--text-muted)'} 
    strokeWidth="2"
  >
    <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/>
  </svg>
);

// � Icono de Eventos
export const EventsIcon = ({ active = false }) => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={active ? 'var(--accent)' : 'var(--text-muted)'} 
    strokeWidth="2"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
    <circle cx="8" cy="16" r="1"/>
    <circle cx="12" cy="16" r="1"/>
    <circle cx="16" cy="16" r="1"/>
  </svg>
);

// 👤 Componente de Avatar de Perfil (reemplaza el icono SVG)
export const ProfileAvatar = ({ active = false, userAvatar, userName }) => (
  <div className={`profile-avatar-nav ${active ? 'active' : ''}`}>
    <img 
      src={userAvatar} 
      alt={userName}
      width="24"
      height="24"
    />
  </div>
);