import React from "react";

const ExperienceModal = ({ experience, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1000",
        overflowY: "auto", // Allows scrolling for long content
        padding: "1rem",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "15px",
          padding: "2rem",
          width: "90%",
          maxWidth: "600px",
          textAlign: "center",
          position: "relative",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          &times;
        </button>

        {/* Title */}
        <h2 style={{ color: "#0078d7", marginBottom: "1rem" }}>
          {experience.title}
        </h2>

        {/* Image */}
        {experience.image && (
          <img
            src={experience.image}
            alt={experience.title}
            style={{
              width: "100%",
              height: "auto", // Automatically adjust height to preserve aspect ratio
              maxHeight: "250px",
              objectFit: "contain", // Ensures the full image is visible without cropping
              borderRadius: "10px",
              marginBottom: "1rem",
              backgroundColor: "#f9f9f9",
              padding: "0.5rem",
            }}
          />
        )}

        {/* Company and Duration */}
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "1rem",
            fontSize: "1rem",
            color: "#555",
          }}
        >
          {experience.company} | {experience.duration}
        </p>

        {/* Detailed Description as Styled Bullet Points */}
        {experience.detailedDescription && (
          <ul
            style={{
              textAlign: "left",
              color: "#333",
              lineHeight: "1.8",
              margin: "1rem 0",
              paddingLeft: "1.5rem",
              listStyle: "none", // Remove default bullet points
            }}
          >
            {experience.detailedDescription.map((point, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "0.75rem",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    marginTop: "0.35rem",
                    marginRight: "10px",
                    backgroundColor: "#0078d7",
                    borderRadius: "50%", // Circle bullet point
                  }}
                ></div>
                <span style={{ fontSize: "1rem", color: "#555" }}>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceModal;
