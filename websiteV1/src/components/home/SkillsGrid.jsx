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
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '1rem',
          justifyItems: 'center',
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
              width: '120px',
              height: '120px',
              backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e6f7ff', // Alternate colors
              borderRadius: '10px',
              padding: '0.5rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{
                width: '40px',
                height: '40px',
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
    </section>
  );
};

export default SkillsGrid;
