import React, { useState } from "react";

const ProjectCard = ({ project, onViewMore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        transform: isHovered ? "scale(1.03)" : "scale(1)",
        boxShadow: isHovered
          ? "0 8px 16px rgba(0, 0, 0, 0.2)"
          : "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "300px",
        height: "300px",
        position: "relative",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ongoing Status Label */}
      {project.status === "ongoing" && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            padding: "5px 10px",
            backgroundColor: "#ff9800",
            color: "#fff",
            fontSize: "0.8rem",
            fontWeight: "bold",
            borderRadius: "3px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          }}
        >
          Ongoing
        </div>
      )}

      {/* Blurred Content */}
      <div
        style={{
          width: "100%",
          height: "100%",
          filter: isHovered ? "blur(3px)" : "none", // Blur the content
          transition: "filter 0.3s",
        }}
      >
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: "100%",
            height: "140px",
            objectFit: "cover",
          }}
        />

        {/* Project Content */}
        <div
          style={{
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <h3
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              color: "#0078d7",
              marginBottom: "0.3rem",
            }}
          >
            {project.name}
          </h3>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#666",
              fontStyle: "italic",
              marginBottom: "0.3rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {project.technologies.join(", ")}
          </p>
          <p
            style={{
              fontSize: "0.8rem",
              color: "#555",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {project.description}
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
            transform: "translate(-50%, -50%)",
            zIndex: 10, // Ensure it stays above the blurred content
            padding: "0.6rem 1.2rem",
            background: "linear-gradient(135deg, #0078d7, #005bb5)", // Gradient background
            color: "#fff",
            fontSize: "1rem", // Slightly larger font
            fontWeight: "bold", // Bold font for better emphasis
            borderRadius: "20px", // Rounded edges
            cursor: "pointer",
            transition: "all 0.3s ease", // Smooth hover effect
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
          }}
          onClick={() => onViewMore(project)}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #005bb5, #003f88)";
            e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "linear-gradient(135deg, #0078d7, #005bb5)";
            e.currentTarget.style.transform = "translate(-50%, -50%)";
          }}
        >
          View More
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
