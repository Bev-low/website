import React from "react";

const LearningList = ({ learning }) => {
  return (
    <section
      style={{
        padding: "2rem",
        background: "#f9f9f9",
        borderRadius: "15px",
        marginBottom: "2rem",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          color: "#0078d7",
          fontWeight: "bold",
        }}
      >
        Currently Mastering!
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        {learning.map((item, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector(".hover-content").style.opacity = "1";
              e.currentTarget.querySelector(".hover-content").style.visibility = "visible";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector(".hover-content").style.opacity = "0";
              e.currentTarget.querySelector(".hover-content").style.visibility = "hidden";
            }}
          >
            {/* Background Content */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "1rem",
                background: "#fff",
                height: "100%",
                transition: "filter 0.3s",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <h3
                style={{
                  fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
                  marginTop: "0.5rem",
                  textAlign: "center",
                }}
              >
                {item.name}
              </h3>
            </div>

            {/* Hover Overlay */}
            <div
              className="hover-content"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 120, 215, 0.9)",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "1rem",
                opacity: "0",
                visibility: "hidden",
                transition: "opacity 0.3s, visibility 0.3s",
                overflowY: "auto", // Enables scrolling if content is too large
                boxSizing: "border-box", // Ensures padding does not exceed dimensions
              }}
            >
              <p
                style={{
                  fontSize: "clamp(0.8rem, 1vw, 1rem)",
                  lineHeight: "1.5",
                  margin: "0",
                  textAlign: "center",
                  paddingTop: "2.5rem", // Adds spacing at the top to avoid clipping
                }}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningList;
