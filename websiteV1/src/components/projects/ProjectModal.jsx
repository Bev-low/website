import React from "react";

const ProjectModal = ({ project, onClose }) => {
  const handleBackdropClick = (e) => {
    // Close modal only if the backdrop (not the modal content) is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick} // Close modal on backdrop click
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
        animation: "fadeIn 0.3s ease",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "15px",
          width: "80%",
          maxWidth: "600px",
          maxHeight: "80%", // Limit the height of the modal
          padding: "2rem",
          position: "relative",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
          transform: "translateY(-10px)",
          animation: "slideDown 0.3s ease forwards",
          overflowY: "auto", // Enable vertical scrolling
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
            color: "#333",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#ff0000")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#333")}
        >
          &times;
        </button>

        {/* Project Details */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <img
            src={project.image}
            alt={project.name}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
              borderRadius: "10px",
              marginBottom: "1rem",
              backgroundColor: "#f0f0f0",
            }}
          />
          <h2
            style={{
              marginBottom: "1rem",
              background: "linear-gradient(135deg, #0078d7, #005bb5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.8rem",
              fontWeight: "bold",
            }}
          >
            {project.name}
          </h2>
        </div>

        {/* Technologies as Bubbles */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "10px", // Spacing between bubbles
            marginBottom: "1.5rem",
          }}
        >
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                padding: "0.5rem 1rem",
                backgroundColor: "#e3f2fd", // Light blue background
                color: "#0078d7",
                fontSize: "0.9rem",
                fontWeight: "bold",
                borderRadius: "20px", // Rounded edges
                cursor: "pointer",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s, box-shadow 0.3s", // Smooth transitions
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.2)"; // Slightly enlarge on hover
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.3)"; // Add shadow
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)"; // Reset size on mouse leave
                e.currentTarget.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)"; // Reset shadow
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <ul style={{ marginBottom: "1.5rem", fontSize: "1rem", color: "#333", lineHeight: "1.6" }}>
  {project.longDescription.map((item, index) => (
    <li key={index} style={{ marginBottom: "0.5rem" }}>
      {item}
    </li>
  ))}
</ul>

<div
style={{
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  gap: "1rem",
}}> 
  

        {/* Conditional Button */}
        {project.status === "ongoing" ? (
          <button
            disabled
            style={{
              display: "inline-block",
              padding: "0.8rem 1.5rem",
              backgroundColor: "#e0e0e0",
              color: "#999",
              borderRadius: "5px",
              border: "none",
              fontWeight: "bold",
              cursor: "not-allowed",
            }}
          >
            Coming Soon
          </button>
        ) : (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "0.8rem 1.5rem",
              backgroundColor: "#0078d7",
              color: "#fff",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background-color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#005bb5")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#0078d7")
            }
          >
            View Project Repository
          </a>
        )}

{project.video && project.video !== "" && (
  <a
    href={project.video}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      padding: "0.8rem 1.5rem",
      backgroundColor: "#0078d7",
      color: "#fff",
      borderRadius: "5px",
      textDecoration: "none",
      fontWeight: "bold",
      transition: "background-color 0.3s",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = "#005bb5")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = "#0078d7")
    }
  >
    View Project Video
  </a>
)}
</div>


      </div>
    </div>
  );
};

export default ProjectModal;
