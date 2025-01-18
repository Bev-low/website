import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import useContentLoader from '../hooks/useContentLoader';

function Projects() {
  // Load "projects" page content
  const content = useContentLoader('projects');

  return (
    <>
      <NavBar />
      <main style={{ padding: '1rem' }}>
        <h1>{content.heading || 'Projects'}</h1>

        {/* Filter Buttons */}
        <div>
          <button>{content.filters?.software}</button>
          <button>{content.filters?.hardware}</button>
          <button>{content.filters?.all}</button>
        </div>

        {/* Project Cards */}
        <div>
          {content.projectsList?.map((proj, i) => (
            <div key={i} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <p>Category: {proj.category}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Projects;
