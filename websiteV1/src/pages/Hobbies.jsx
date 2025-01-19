import React, { useState } from "react";
import useContentLoader from "../hooks/useContentLoader";
import HobbyCard from "../components/hobbies/HobbyCard"; // Import the HobbyCard component

function Hobbies() {
  const content = useContentLoader("hobbies"); // Load data from `data/hobbies/en.json` or `zh.json`
  const [selectedHobby, setSelectedHobby] = useState(null); // State to track selected hobby

  if (!content || !content.items) {
    return <div>Loading...</div>;
  }

  const handleClick = (hobby) => {
    setSelectedHobby(hobby); // Set the selected hobby
  };

  const closeModal = () => {
    setSelectedHobby(null); // Close the modal by resetting the selected hobby
  };

  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "#0078d7",
          padding: "1rem 0",
        }}
      >
        {content.title}
      </h1>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem",
        }}
      >
        {content.items.map((hobby, index) => (
          <div
            key={hobby.id}
            style={{
              position: "relative",
              width: "100%",
              height: "300px",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => handleClick(hobby)} // Trigger the modal on click
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            {/* Background Image */}
            <img
              src={hobby.image}
              alt={hobby.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(70%)", // Darken the image for better text readability
              }}
            />

            {/* Overlay Content */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
              }}
            >
              {/* Hobby Title */}
              <h2
                style={{
                  fontSize: "2rem",
                  marginBottom: "1rem",
                  fontWeight: "bold",
                }}
              >
                {hobby.title}
              </h2>

              {/* Hobby Description */}
              <p
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Hobbies;
