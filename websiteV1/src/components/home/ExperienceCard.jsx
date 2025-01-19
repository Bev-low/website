import React from 'react';

const ExperienceCard = ({ role, company, duration, description, isEven, image }) => {
  return (
    <div
      style={{
        flex: '0 0 280px',
        height: '380px', // Fixed height for the card
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
        justifyContent: 'space-evenly', // Even distribution of content within the card
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
          textAlign: 'center',
        }}
      >
        {role}
      </h3>

      {/* Experience Image */}
      <div
        style={{
          height: '150px', // Fixed height for the image container
          width: '100%', // Full width
          borderRadius: '5px', // Rounded corners for the image
          overflow: 'hidden', // Ensures image doesn't overflow the container
          marginBottom: '1rem',
          border: '3px solid #0078d7', // Adding a border around the image
        }}
      >
        <img
          src={image} // Dynamically setting the image based on the experience data
          alt={role}
          style={{
            width: '100%', // Ensures the image fills the width of the container
            height: '100%', // Ensures the image fills the height of the container
            objectFit: 'cover', // Ensures the image covers the container without stretching or overflowing
          }}
        />
      </div>

      {/* Company */}
      <p
        style={{
          fontSize: '0.9rem',
          marginBottom: '0.3rem',
          color: '#555',
          fontStyle: 'italic',
          textAlign: 'center',
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
          textAlign: 'center',
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
          textAlign: 'center',
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default ExperienceCard;
