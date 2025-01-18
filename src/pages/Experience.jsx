import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import useContentLoader from '../hooks/useContentLoader';

function Experience() {
  const content = useContentLoader('experience');

  return (
    <>
      <NavBar />
      <main style={{ padding: '1rem' }}>
        <h1>{content.heading || 'Experience'}</h1>

        <div>
          {content.timeline?.map((job, i) => (
            <div key={i} style={{ marginBottom: '1rem' }}>
              <h3>{job.jobTitle}</h3>
              <p>{job.dateRange}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Experience;
