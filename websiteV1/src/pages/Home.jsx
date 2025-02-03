import React from 'react';
import useContentLoader from '../hooks/useContentLoader';
import IntroCard from '../components/home/IntroCard';
import SkillsGrid from '../components/home/SkillsGrid';
import ExperienceList from '../components/home/ExperienceList';
import ProjectsList from '../components/home/ProjectList';
import LearningList from '../components/home/LearningList';

function Home() {
  const content = useContentLoader('home');

  if (!content.greeting) {
    return <div>Loading...</div>;
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', color: '#333' }}>
      <IntroCard greeting={content.greeting} about={content.about} photoSrc="/path/to/your-photo.jpg" />
      <LearningList learning={content.learning}></LearningList>
      <SkillsGrid title={content.skills.title} skills={content.skills.items} />
      <ExperienceList experience={content.experience} />
      <ProjectsList projects={content.projects} />
    </main>
  );
}

export default Home;
