import React from 'react';
import { HomeIcon, SearchIcon, GymIcon, EventsIcon, MessageIcon, ProfileAvatar } from './Icons.jsx';
import { currentUser } from '../../data/userMockData';
import './BottomNav.css';

function BottomNav({ activeTab, onTabChange }) {
  const navItems = [
    { id: 'home', label: 'Inicio', icon: HomeIcon },
    { id: 'search', label: 'Buscar', icon: SearchIcon },
    { id: 'gyms', label: 'Gimnasios', icon: GymIcon },
    { id: 'events', label: 'Eventos', icon: EventsIcon },
    { id: 'messages', label: 'Mensajes', icon: MessageIcon },
    { id: 'profile', label: 'Perfil', icon: ProfileAvatar, isAvatar: true }
  ];

  return (
    <nav className="bottom-nav">
      <div className="nav-container">
        {navItems.map(item => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(item.id)}
              aria-label={item.label}
            >
              <div className="icon-container">
                {item.isAvatar ? (
                  <IconComponent 
                    active={isActive} 
                    userAvatar={currentUser.avatar}
                    userName={currentUser.name}
                  />
                ) : (
                  <IconComponent active={isActive} />
                )}
              </div>
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default BottomNav;