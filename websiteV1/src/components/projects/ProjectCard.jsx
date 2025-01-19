import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        overflow: "hidden",
        position: "relative",
        transition: "transform 0.3s, box-shadow 0.3s",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.name}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
        }}
      />

      {/* Project Content */}
      <div style={{ padding: "1rem" }}>
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#0078d7",
            marginBottom: "0.5rem",
          }}
        >
          {project.name}
        </h3>
        <p
          style={{
            fontSize: "1rem",
            color: "#666",
            fontStyle: "italic",
            marginBottom: "0.5rem",
          }}
        >
          {project.technologies.join(", ")}
        </p>
        <p style={{ fontSize: "1rem", color: "#555" }}>{project.description}</p>
      </div>

      {/* View More Button */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0078d7",
          color: "#fff",
          fontSize: "1rem",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#005bb5")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0078d7")}
      >
        View More
      </div>
    </div>
  );
};

export default ProjectCard;
