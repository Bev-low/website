import React from 'react';

const ExperienceCard = ({ role, company, duration, description, isEven }) => {
  return (
    <div
      style={{
        flex: '0 0 280px',
        height: '320px',
        backgroundColor: isEven ? '#ffffff' : '#f1f7ff',
        borderRadius: '10px',
        padding: '1rem',
        margin: '0 1rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        border: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
      }}
    >
      {/* Role */}
      <h3
        style={{
          fontSize: '1.2rem',
          color: '#0078d7',
          marginBottom: '0.5rem',
          fontWeight: 'bold',
        }}
      >
        {role}
      </h3>

      {/* Company */}
      <p
        style={{
          fontSize: '0.9rem',
          marginBottom: '0.3rem',
          color: '#555',
          fontStyle: 'italic',
        }}
      >
        {company}
      </p>

      {/* Duration */}
      <p
        style={{
          fontSize: '0.9rem',
          marginBottom: '0.5rem',
          color: '#777',
        }}
      >
        {duration}
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: '0.85rem',
          lineHeight: '1.4',
          color: '#555',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
