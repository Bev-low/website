import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import useContentLoader from '../hooks/useContentLoader';

function Home() {
  // Load "home" page content in the current language
  const content = useContentLoader('home');

  return (
    <>
      <NavBar />
      <main style={{ padding: '1rem' }}>
        <h1>{content.heroSection?.greeting || 'Loading...'}</h1>
        <p>{content.heroSection?.description}</p>

        <section>
          <h2>{content.skillsSection?.title}</h2>
          <ul>
            {content.skillsSection?.skillsList?.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
