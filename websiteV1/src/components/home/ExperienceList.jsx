import React from "react";
import { Link } from "react-router-dom";
import ExperienceCard from "./ExperienceCard";

const ExperienceList = ({ experience }) => {
  return (
    <section
      style={{
        marginBottom: "3rem",
        padding: "2rem 0",
        position: "relative",
        backgroundColor: "#f9f9f9",
        borderRadius: "15px",
      }}
    >
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "2rem",
          color: "#0078d7",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Experience
      </h2>

      {/* Timeline Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Horizontal Timeline */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%)", // Ensures the line is centered
            width: "100%",
            height: "4px",
            backgroundColor: "#d0d0d0",
            zIndex: 0,
          }}
        ></div>

        {/* Experience Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            width: "100%",
            zIndex: 1,
            paddingTop: "3rem", // Add some space between cards and line
          }}
        >
          {experience.map((item, index) => (
            <ExperienceCard
              key={index}
              role={item.role}
              company={item.company}
              duration={item.duration}
              description={item.description}
              image={item.image}
              isEven={index % 2 === 0}
            />
          ))}
        </div>

        {/* See More Button */}
        <Link
          to="/experience"
          style={{
            marginTop: "2rem",
            backgroundColor: "#0078d7",
            color: "#fff",
            borderRadius: "30px",
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s, box-shadow 0.3s, background-color 0.3s",
            zIndex: 1,
            whiteSpace: "nowrap",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.3)";
            e.currentTarget.style.backgroundColor = "#005bb5";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            e.currentTarget.style.backgroundColor = "#0078d7";
          }}
        >
          <span>See More</span>
          <span style={{ fontSize: "1.5rem" }}>→</span>
        </Link>
      </div>

      {/* Divider */}
      <div
        style={{
          marginTop: "3rem",
          height: "2px",
          backgroundColor: "#e0e0e0",
          width: "100%",
        }}
      ></div>
    </section>
  );
};

export default ExperienceList;
