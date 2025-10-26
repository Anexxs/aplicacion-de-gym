import React, { useState } from 'react';
import { currentUser, userAchievements } from '../../data/userMockData';
import './Profile.css';

function Profile() {
  const [activeTab, setActiveTab] = useState('posts');
  
  // Formatear la fecha de registro
  const joinDate = new Date(currentUser.joinDate).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long'
  });

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  return (
    <div className="profile">
      {/* Header del perfil con imagen de portada */}
      <div className="profile-header">
        <div className="cover-image">
          <img src={currentUser.coverImage} alt="Portada" />
        </div>
        
        <div className="profile-info">
          <div className="avatar-container">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name}
              className="profile-avatar"
            />
          </div>
          
          <div className="user-details">
            <h1>{currentUser.name}</h1>
            <p className="username">@{currentUser.username}</p>
            <p className="bio">{currentUser.bio}</p>
            
            <div className="user-meta">
              <span className="location">📍 {currentUser.location}</span>
              <span className="join-date">📅 Se unió en {joinDate}</span>
              {currentUser.website && (
                <span className="website">🌐 {currentUser.website}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="stats-section">
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-number">{formatNumber(currentUser.stats.posts)}</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{formatNumber(currentUser.stats.followers)}</span>
            <span className="stat-label">Seguidores</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{formatNumber(currentUser.stats.following)}</span>
            <span className="stat-label">Siguiendo</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{currentUser.stats.workouts}</span>
            <span className="stat-label">Entrenamientos</span>
          </div>
        </div>
        
        {/* Streak destacado */}
        <div className="streak-badge">
          🔥 {currentUser.stats.streak} días consecutivos
        </div>
      </div>

      {/* Tabs de navegación */}
      <div className="profile-tabs">
        <button 
          className={`tab ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          Posts
        </button>
        <button 
          className={`tab ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Logros
        </button>
        <button 
          className={`tab ${activeTab === 'fitness' ? 'active' : ''}`}
          onClick={() => setActiveTab('fitness')}
        >
          Fitness
        </button>
      </div>

      {/* Contenido de tabs */}
      <div className="tab-content">
        {activeTab === 'posts' && (
          <div className="posts-grid">
            {currentUser.userPosts.map(post => (
              <div key={post.id} className="post-card">
                {post.image && (
                  <img src={post.image} alt="Post" className="post-thumbnail" />
                )}
                <div className="post-overlay">
                  <div className="post-stats">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
                <p className="post-preview">{post.content}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="achievements-grid">
            {userAchievements.map(achievement => (
              <div key={achievement.id} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <span className="achievement-date">
                  {new Date(achievement.unlockedDate).toLocaleDateString('es-ES')}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'fitness' && (
          <div className="fitness-info">
            <div className="info-section">
              <h3>🎯 Objetivos</h3>
              <ul>
                {currentUser.fitnessInfo.goals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-section">
              <h3>💪 Ejercicios Favoritos</h3>
              <ul>
                {currentUser.fitnessInfo.favoriteExercises.map((exercise, index) => (
                  <li key={index}>{exercise}</li>
                ))}
              </ul>
            </div>
            
            <div className="info-section">
              <h3>🏋️ Información</h3>
              <div className="fitness-details">
                <p><strong>Gimnasio:</strong> {currentUser.fitnessInfo.gymName}</p>
                <p><strong>Nivel:</strong> {currentUser.fitnessInfo.experienceLevel}</p>
                <p><strong>Frecuencia:</strong> {currentUser.fitnessInfo.workoutFrequency}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;