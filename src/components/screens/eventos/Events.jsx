import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { mockEvents, mapFilters } from '../../../data/eventMockData';
import 'leaflet/dist/leaflet.css';
import './Events.css';

// Configurar iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Iconos personalizados por categoría
const createCustomIcon = (category) => {
  const colors = {
    competition: '#ff4757', // Rojo para competencias
    class: '#2ed573',       // Verde para clases
    workshop: '#3742fa'     // Azul para talleres
  };
  
  const color = colors[category] || '#ffa502';
  
  return L.divIcon({
    html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);"></div>`,
    className: 'custom-marker',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
};

function Events() {
  const [filters, setFilters] = useState({
    city: 'all',
    district: 'all',
    activity: 'all',
    sport: 'all'
  });

  // Filtrar eventos según los filtros seleccionados
  const filteredEvents = mockEvents.filter(event => {
    return (
      (filters.city === 'all' || event.city === filters.city) &&
      (filters.district === 'all' || event.district === filters.district) &&
      (filters.activity === 'all' || event.category === filters.activity) &&
      (filters.sport === 'all' || event.sport === filters.sport)
    );
  });

  // Función para actualizar filtros
  const updateFilter = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  // Formatear fecha
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  return (
    <div className="events-map-container">
      <div className="events-header">
        <h2>📅 Eventos</h2>
      </div>

      {/* Panel de filtros */}
      <div className="filters-panel">
        <h3>Filtros</h3>
        
        <div className="filter-group">
          <label>📍 Ciudad</label>
          <select 
            value={filters.city} 
            onChange={(e) => updateFilter('city', e.target.value)}
          >
            {mapFilters.cities.map(city => (
              <option key={city.id} value={city.id}>{city.name}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>🏘️ Comunas</label>
          <select 
            value={filters.district} 
            onChange={(e) => updateFilter('district', e.target.value)}
          >
            {mapFilters.districts.map(district => (
              <option key={district.id} value={district.id}>{district.name}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>🎯 Tipo de actividad</label>
          <select 
            value={filters.activity} 
            onChange={(e) => updateFilter('activity', e.target.value)}
          >
            {mapFilters.activities.map(activity => (
              <option key={activity.id} value={activity.id}>{activity.name}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>🏃‍♂️ Deporte</label>
          <select 
            value={filters.sport} 
            onChange={(e) => updateFilter('sport', e.target.value)}
          >
            {mapFilters.sports.map(sport => (
              <option key={sport.id} value={sport.id}>{sport.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Mapa */}
      <div className="map-section">
        <MapContainer
          center={[40.4168, -3.7038]} // Madrid centro
          zoom={12}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {filteredEvents.map(event => (
            <Marker 
              key={event.id}
              position={event.coordinates}
              icon={createCustomIcon(event.category)}
            >
              <Popup>
                <div className="event-popup">
                  <div className="popup-header">
                    <h4>{event.title}</h4>
                    <span className="popup-price">
                      {event.price === 0 ? 'GRATIS' : `€${event.price}`}
                    </span>
                  </div>
                  
                  <div className="popup-details">
                    <p><strong>📅</strong> {formatDate(event.date)} - {event.time}</p>
                    <p><strong>📍</strong> {event.location}</p>
                    <p><strong>🏃‍♂️</strong> {event.sport}</p>
                    <p><strong>👥</strong> {event.currentParticipants}/{event.maxParticipants} participantes</p>
                  </div>
                  
                  <p className="popup-description">{event.description}</p>
                  
                  <div className="popup-actions">
                    <button className="btn-popup-primary">Ver detalles</button>
                    <button className="btn-popup-secondary">Inscribirse</button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Contador de eventos */}
      <div className="events-counter">
        Mostrando {filteredEvents.length} de {mockEvents.length} eventos
      </div>
    </div>
  );
}

export default Events;