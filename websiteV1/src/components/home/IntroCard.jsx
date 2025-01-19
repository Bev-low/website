import React from 'react';

const IntroCard = ({ greeting, picture, }) => {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: '120px 1fr',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgb(28, 81, 128), rgb(42, 157, 244))',
        color: '#fff',
        borderRadius: '15px',
        padding: '2rem',
        marginBottom: '2rem',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Background Overlays */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.2), transparent)',
          zIndex: 0,
          transform: 'translate(50%, -50%)',
        }}
      ></div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.1), transparent)',
          zIndex: 0,
          transform: 'translate(-50%, 50%)',
        }}
      ></div>

      {/* Profile Image */}
      <img
        src={picture || '/assets/home/Me.jpg'}
        alt="Beverly's Portrait"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          border: '4px solid #fff',
          zIndex: 1,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          animation: 'float 3s ease-in-out infinite',
        }}
      />

      {/* Text Content */}
      <div style={{ zIndex: 1, marginLeft: '1.5rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          {greeting}
        </h1>

        {/* Personality Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem' }}>
          {['#aspiring entrepreneur', '#hardware lover', '#adventurous', '#curious'].map((tag, index) => (
            <span
              key={index}
              style={{
                fontSize: '0.9rem',
                padding: '0.3rem 0.6rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#fff',
                borderRadius: '10px',
                cursor: 'default',
                transition: 'transform 0.2s',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quote */}
        <blockquote
          style={{
            fontSize: '1rem',
            fontStyle: 'italic',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '1rem',
          }}
        >
          "A smooth sea never made a skilled sailor."
        </blockquote>

        {/* Call-to-Actions */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#fff',
              color: '#0078d7',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            View Resume
          </button>
          <button
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#fff',
              color: '#0078d7',
              border: 'none',
              borderRadius: '5px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#f0f0f0')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#fff')}
          >
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroCard;
