import React, { useState } from 'react';
import useContentLoader from '../hooks/useContentLoader';
import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
  const content = useContentLoader('projects'); // Load data from `src/data/projects`
  const [filter, setFilter] = useState('all'); // State to manage the active filter

  if (!content || !content.items) {
    return <div>Loading...</div>;
  }

  // Filter projects based on selected type
  const filteredProjects = content.items.filter((project) =>
    filter === 'all' ? true : project.type === filter
  );

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      {/* Page Title */}
      <h1
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          color: '#0078d7',
        }}
      >
        Projects
      </h1>

      {/* Filter Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: '2rem',
        }}
      >
        <button
          style={{
            padding: '0.8rem 1.5rem',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: filter === 'all' ? '#0078d7' : '#e0e0e0',
            color: filter === 'all' ? '#fff' : '#333',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          style={{
            padding: '0.8rem 1.5rem',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: filter === 'software' ? '#0078d7' : '#e0e0e0',
            color: filter === 'software' ? '#fff' : '#333',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onClick={() => setFilter('software')}
        >
          Software
        </button>
        <button
          style={{
            padding: '0.8rem 1.5rem',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: filter === 'hardware' ? '#0078d7' : '#e0e0e0',
            color: filter === 'hardware' ? '#fff' : '#333',
            cursor: 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.3s',
          }}
          onClick={() => setFilter('hardware')}
        >
          Hardware
        </button>
      </div>

      {/* Project Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
        }}
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
