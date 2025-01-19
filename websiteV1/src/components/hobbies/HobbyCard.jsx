import React, { useState, useEffect } from 'react';

// HobbyCard Component
const HobbyCard = ({ language }) => {
  const [hobbies, setHobbies] = useState([]);

  // Fetch the hobbies details based on the selected language (English or Chinese)
  useEffect(() => {
    const fetchHobbiesData = async () => {
      const filePath = language === 'zh' ? '/data/hobbies/details/zh.json' : '/data/hobbies/details/en.json';
      const response = await fetch(filePath);
      const data = await response.json();
      setHobbies(data.hobbies);
    };

    fetchHobbiesData();
  }, [language]);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // 3 square boxes
        gap: '1rem',
        padding: '2rem',
        borderRadius: '15px',
        backgroundColor: '#f4f8fb',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      {/* Dynamically render each hobby */}
      {hobbies.map((hobby) => (
        <div
          key={hobby.id}
          style={{
            position: 'relative',
            width: '100%',
            height: '250px',
            borderRadius: '10px',
            overflow: 'hidden',
            cursor: 'pointer',
          }}
        >
          {/* 3 images in the hobby card */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.5rem',
              width: '100%',
              height: '100%',
            }}
          >
            {hobby.images.map((image, index) => (
              <div
                key={index}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                  borderRadius: '10px',
                }}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
                {/* Overlay for hover effect */}
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: '0',
                    transition: 'opacity 0.3s ease',
                    borderRadius: '10px',
                  }}
                >
                  <p
                    style={{
                      fontSize: '1rem',
                      textAlign: 'center',
                      padding: '1rem',
                    }}
                  >
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HobbyCard;
