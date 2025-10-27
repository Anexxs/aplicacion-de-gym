import React, { useState } from 'react';
import { videosMockData } from '../../../data/videosmockdata';
import './hits.css'; // AGREGADO: Importar los estilos

function Queveo() {
    // CORREGIDO: Cambié los tipos de datos correctos
    const [Tipo, setTipo] = useState(''); // String - guarda la categoría seleccionada
    const [Videos, setVideos] = useState(false); // Boolean - controla qué pantalla mostrar
    const [quevideo, setquevideo] = useState(0); // Número - índice del video actual
    const [isTransitioning, setIsTransitioning] = useState(false); // AGREGADO: Estado para la animación
    
    // AGREGADO: Filtrar videos según el tipo seleccionado
    const videosFiltrados = Tipo ? videosMockData.filter(video => video.tipo === Tipo) : [];
    
    // AGREGADO: Obtener el video actual basado en el índice
    const videoActual = videosFiltrados[quevideo];

    // AGREGADO: Función para cambiar video con animación
    const cambiarVideo = (direccion) => {
        setIsTransitioning(true);
        
        setTimeout(() => {
            if (direccion === 'arriba') {
                setquevideo((prev) => (prev - 1 + videosFiltrados.length) % videosFiltrados.length);
            } else {
                setquevideo((prev) => (prev + 1) % videosFiltrados.length);
            }
            
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50); // Pequeño delay para que se vea la transición
        }, 150); // Duración de la animación de salida
    };

    // CORREGIDO: Mover el return DENTRO de la función
    return (
        <div className="hits-container">
            {!Videos ? (
                // Pantalla de selección de categorías
                <div>
                    <h1>¿Qué quieres ver hoy?</h1> {/* CORREGIDO: Eliminé los <> innecesarios */}
                    <div className="Categorias">
                        <button onClick={() => {
                            setTipo('rutina'); // CORREGIDO: Solo guarda el tipo como string
                            setVideos(true);   // Cambia a pantalla de videos
                            setquevideo(0);    // AGREGADO: Resetea al primer video
                        }}>Rutina</button>
                        
                        <button onClick={() => {
                            setTipo('consejos');
                            setVideos(true);
                            setquevideo(0);
                        }}>Consejos</button>
                        
                        <button onClick={() => {
                            setTipo('Alimentacion');
                            setVideos(true);
                            setquevideo(0);
                        }}>Alimentación</button>
                        
                        <button onClick={() => {
                            setTipo('Humor');
                            setVideos(true);
                            setquevideo(0);
                        }}>Humor</button>
                    </div>
                </div>
            ) : (
                // Pantalla de videos
                <div className="Videos-list">
                    {/* Video actual con reproductor */}
                    {videoActual ? (
                        <div className={`video-container ${isTransitioning ? 'transitioning' : ''}`}>
                            {/* Reproductor de video */}
                            <video 
                                className="video-player"
                                controls
                                autoPlay
                                muted
                                loop
                                src={videoActual.url}
                                key={videoActual.url} // AGREGADO: Key para forzar recreación del video
                            >
                                Tu navegador no soporta el elemento video.
                            </video>
                            
                            {/* Información del video */}
                            <div className="video-info">
                                <h2>{videoActual.title}</h2>
                                <p className="video-creator">{videoActual.creador}</p>
                                <p className="video-description">{videoActual.description}</p>
                                
                                {/* Estadísticas */}
                                <div className="video-stats">
                                    <span>⏱️ {videoActual.duracion}</span>
                                    <span>👀 {videoActual.views}</span>
                                    <span>❤️ {videoActual.likes}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="no-videos">
                            <p>🚫 No hay videos disponibles para esta categoría</p>
                        </div>
                    )}
                    
                    {/* CORREGIDO: Botones de navegación con animación */}
                    {videosFiltrados.length > 1 && (
                        <div className="botones-navegacion">
                            <button className='ARRIBA' onClick={() => cambiarVideo('arriba')}>↑</button>
                            <button className='ABAJO' onClick={() => cambiarVideo('abajo')}>↓</button>
                        </div>
                    )}
                    
                    {/* AGREGADO: Indicador de posición */}
                    <p>Video {quevideo + 1} de {videosFiltrados.length}</p>
                    
                    {/* AGREGADO: Botón para volver */}
                    <button id = 'volver-categorias' onClick={() => {
                        setVideos(false);
                        setTipo('');
                        setquevideo(0);
                    }}>Volver a categorías</button>
                </div>
            )}
        </div>
    );
}

export default Queveo; // AGREGADO: Export para poder usar el componente
