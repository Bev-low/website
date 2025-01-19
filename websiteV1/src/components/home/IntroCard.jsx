import React, { useState } from 'react';

const IntroCard = ({ greeting, picture }) => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

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
          {['#aspiring entrepreneur', '#hardware lover', '#risk taker', '#growth mindset'].map((tag, index) => (
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
            onClick={openResumeModal}
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
            onClick={openContactModal}
          >
            Contact Me
          </button>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1000',
          }}
          onClick={closeResumeModal}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '10px',
              width: '80%',
              maxWidth: '800px',
              textAlign: 'center',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeResumeModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>
            <iframe
              src="/assets/home/resume.pdf"
              title="Resume"
              style={{
                width: '100%',
                height: '500px',
                border: 'none',
              }}
            />
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '1000',
          }}
          onClick={closeContactModal}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '10px',
              width: '80%',
              maxWidth: '500px',
              textAlign: 'center',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeContactModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>

            <h2 style={{ color: '#0078d7', marginBottom: '1rem' }}>Contact Information</h2>
            <p style={{ marginBottom: '1rem', color: 'black' }}>
              <strong>Phone:</strong> +65 97671314
            </p>
            <p style={{ marginBottom: '1rem', color: 'black' }}>
              <strong>Email:</strong> low_beverly@u.nus.edu
            </p>
            <p style={{ marginBottom: '1rem', color: 'black' }}>
              <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/beverly-low-b6b1b423a/" target="_blank" rel="noopener noreferrer">View Profile</a>
            </p>
            <p style={{ marginBottom: '1rem', color: 'black' }}>
              <strong>GitHub:</strong> <a href="https://github.com/Bev-low" target="_blank" rel="noopener noreferrer">View Profile</a>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default IntroCard;
