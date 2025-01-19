import React, { useState, useEffect } from "react";
import useContentLoader from "../hooks/useContentLoader";
import ExperienceCard from "../components/experience/ExperienceCard";
import ExperienceModal from "../components/experience/ExperienceModal";

function Experience() {
  const content = useContentLoader("experience"); // Load experience data from `data/experience/en.json` or `zh.json`
  const [selectedExperience, setSelectedExperience] = useState(null); // State for modal

  if (!content || !content.items) {
    return <div>Loading...</div>;
  }

  const openModal = (experience) => {
    setSelectedExperience(experience); // Open modal for selected experience
  };

  const closeModal = () => {
    setSelectedExperience(null); // Close the modal
  };

  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "#0078d7",
        }}
      >
        {content.title} {/* Use title from JSON */}
      </h1>

      {/* Vertical Timeline Container */}
      <div
        id="experience-timeline"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Vertical Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            width: "4px",
            height: "100%", // Full height of container
            backgroundColor: "#0078d7",
            zIndex: 0, // Ensure it stays behind the circles
          }}
        ></div>

        {/* Experience Cards */}
        {content.items.map((experience, index) => (
          <div
            key={experience.id}
            style={{
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
              alignItems: "center",
              position: "relative",
              width: "100%",
              marginBottom: "2rem",
            }}
          >
            {/* Connector Circle */}
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "16px",
                height: "16px",
                backgroundColor: "#fff",
                border: "4px solid #0078d7", // Circle border color matches the timeline line
                borderRadius: "50%",
                zIndex: 1,
              }}
            ></div>

            {/* Experience Card */}
            <ExperienceCard
              experience={experience}
              onViewMore={openModal}
              isLeft={index % 2 !== 0} // Alternate left and right
            />
          </div>
        ))}
      </div>

      {/* Experience Modal */}
      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={closeModal}
        />
      )}
    </main>
  );
}

export default Experience;
