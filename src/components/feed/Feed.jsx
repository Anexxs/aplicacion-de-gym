import React from 'react';
import './Feed.css';

function Feed({ posts }) {
  return (
    <div className="feed">
      <h2>Feed de Entrenamientos</h2>
      {posts.map(post => (
        <div key={post.id} className="post">
          {/* Header del post - información del usuario */}
          <div className="post-header">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="avatar"
            />
            <div className="author-info">
              <h4>{post.author.name}</h4>
              <p>@{post.author.username}</p>
            </div>
          </div>

          {/* Contenido del post */}
          <div className="post-content">
            <p>{post.content}</p>
            {post.image && (
              <img 
                src={post.image} 
                alt="Post" 
                className="post-image"
              />
            )}
          </div>

          {/* Footer del post - likes y comentarios */}
          <div className="post-footer">
            <button className="like-btn">
              ❤️ {post.likes}
            </button>
            <button className="comment-btn">
              💬 {post.comments}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Feed;