import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import useContentLoader from '../hooks/useContentLoader';

function Hobbies() {
  const content = useContentLoader('hobbies');

  return (
    <>
      <NavBar />
      <main style={{ padding: '1rem' }}>
        <h1>{content.heading || 'Hobbies'}</h1>

        {content.sections?.map((section, i) => (
          <section key={i}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Hobbies;
