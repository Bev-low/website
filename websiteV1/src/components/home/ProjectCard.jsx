import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '15px',
        padding: '1.5rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, box-shadow 0.3s',
        margin: '0 auto', // Ensures individual cards are centered
        maxWidth: '300px', // Restricts card width for consistent centering
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
      {/* Project Name */}
      <h3
        style={{
          fontSize: '1.5rem',
          color: '#0078d7',
          marginBottom: '0.8rem',
          fontWeight: 'bold',
        }}
      >
        {project.name}
      </h3>

      {/* Project Technologies */}
      <p
        style={{
          fontSize: '1rem',
          marginBottom: '0.5rem',
          color: '#666',
          fontStyle: 'italic',
        }}
      >
        {project.technologies}
      </p>

      {/* Project Description */}
      <p
        style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          color: '#555',
        }}
      >
        {project.description}
      </p>
    </div>
  );
};

export default ProjectCard;
