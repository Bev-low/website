import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard'; // Import the ProjectCard component

const ProjectsList = ({ projects }) => {
  return (
    <section
      style={{
        padding: '2rem',
        backgroundColor: '#f1f7ff',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '2rem',
        position: 'relative', // Required for positioning the "View More" button
      }}
    >
      {/* Title and View More Button Container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Centers the title
          alignItems: 'center',
          position: 'relative',
          marginBottom: '2rem',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            color: '#0078d7',
            fontWeight: 'bold',
            textAlign: 'center', // Ensures the title is visually centered
          }}
        >
          Projects
        </h2>

        {/* View More Button */}
        <Link
          to="/projects"
          style={{
            position: 'absolute',
            right: '0', // Aligns the button to the right edge
            fontSize: '1rem',
            backgroundColor: '#0078d7',
            color: '#fff',
            textDecoration: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            fontWeight: 'bold',
            transition: 'transform 0.3s, background-color 0.3s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#005bb5';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#0078d7';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          View More →
        </Link>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          justifyContent: 'center', // Centers the grid
        }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} /> // Use the ProjectCard component
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
