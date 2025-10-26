import React, { useState } from 'react'
import Feed from './components/feed/Feed'
import Profile from './components/profile/Profile'
import Events from './components/screens/eventos/Events'
import BottomNav from './components/navigation/BottomNav'
import ThemeToggle from './components/screens/ThemeToggle'
import { mockPosts } from './data/mockData'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Componentes temporales para las pestañas que aún no hemos creado
  const SearchScreen = () => (
    <div className="coming-soon">
      <h2>🔍 Búsqueda</h2>
      <p>Esta función estará disponible pronto</p>
    </div>
  );

  const GymsScreen = () => (
    <div className="coming-soon">
      <h2>🏋️ Gimnasios</h2>
      <p>Encuentra gimnasios cerca de ti</p>
    </div>
  );

  // Ahora Events es un componente completo, no una pantalla temporal

  const MessagesScreen = () => (
    <div className="coming-soon">
      <h2>💬 Mensajes</h2>
      <p>Chatea con otros usuarios</p>
    </div>
  );

  // Función para renderizar el contenido según la pestaña activa
  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return <Feed posts={mockPosts} />;
      case 'search':
        return <SearchScreen />;
      case 'gyms':
        return <GymsScreen />;
      case 'events':
        return <Events />;
      case 'messages':
        return <MessagesScreen />;
      case 'profile':
        return <Profile />;
      default:
        return <Feed posts={mockPosts} />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-text">
            <h1>💪 GymSocial</h1>
            <p>La red social para los amantes del fitness</p>
          </div>
          <ThemeToggle />
        </div>
      </header>
      
      <main className="main-content">
        {renderContent()}
      </main>

      <BottomNav 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  )
}

export default App
