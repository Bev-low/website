import React from 'react';

const SkillsGrid = ({ title, skills }) => {
  return (
    <section style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0078d7', marginBottom: '1rem' }}>
        {title}
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', // Adjusted min-width for better alignment
          gap: '1.5rem', // Increased gap for consistency
          justifyItems: 'center',
          width: '100%', // Ensures grid fills container width
        }}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#f1f7ff', // Alternating colors
              borderRadius: '10px',
              padding: '1rem',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              width: '100%', // Ensure it uses available width
              height: '120px', // Uniform height for all cards
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'contain',
                marginBottom: '0.5rem',
              }}
            />
            <p
              style={{
                fontSize: '0.9rem',
                fontWeight: '500',
                color: '#333',
                textAlign: 'center',
                margin: 0,
              }}
            >
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div
        style={{
          marginTop: '3rem',
          height: '2px',
          backgroundColor: '#e0e0e0',
          width: '100%',
        }}
      ></div>
    </section>
  );
};

export default SkillsGrid;
