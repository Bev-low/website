import React, { useState } from "react";

const ExperienceCard = ({ experience, onViewMore, isLeft }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-end" : "flex-start",
        width: "100%",
        padding: "1rem 0",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div
        style={{
          position: "relative", // Parent container for absolute positioning
          width: "300px",
        }}
      >
        {/* Experience Card */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            padding: "1rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "left", // Force text alignment to the left
            filter: isHovered ? "blur(1.5px)" : "none", // Apply blur to card content
            transition: "filter 0.3s",
            position: "relative",
          }}
        >
          {/* Title Centered */}
          <h3
            style={{
              color: "#0078d7",
              textAlign: "center", // Center the title
              marginBottom: "1rem",
            }}
          >
            {experience.title}
          </h3>

          {/* Skewed Content */}
          <div
            style={{
              textAlign: "left", // Ensure all other text is aligned to the left
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "0.5rem",
              }}
            >
              {experience.company}
            </p>
            <p
              style={{
                marginBottom: "0.5rem",
                fontStyle: "italic",
                color: "#666",
              }}
            >
              {experience.duration}
            </p>
            <p style={{ marginBottom: "1rem", color: "#555" }}>
              {experience.description}
            </p>
          </div>
        </div>

        {/* View More Button */}
        {isHovered && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)", // Center the button
              zIndex: 10, // Ensure it stays above the blurred card
              padding: "0.8rem 1.5rem",
              background: "linear-gradient(135deg, #0078d7, #005bb5)", // Gradient background
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
              borderRadius: "20px", // Rounded edges
              cursor: "pointer",
              transition: "all 0.3s ease", // Smooth hover effect
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
            }}
            onClick={() => onViewMore(experience)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #005bb5, #003f88)";
              e.currentTarget.style.transform =
                "translate(-50%, -50%) scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background =
                "linear-gradient(135deg, #0078d7, #005bb5)";
              e.currentTarget.style.transform = "translate(-50%, -50%)";
            }}
          >
            View More
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;
