import React from "react";

const ExpandButton = ({ onClick, isExpanded }) => {
  const styles = {
    button: {
      margin:'0 0 10 0',
      width: "60px",
      height: "60px",
      backgroundColor: "#af55ea", // Button color
      border: "none",
      borderRadius: "50%", // Circular shape
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      transition: "background-color 0.3s ease, transform 0.3s ease", // Smooth hover effect
    },
    buttonHover: {
      backgroundColor: "#ffff", // Darker shade on hover
      transform: "scale(1.1)", // Slightly enlarge on hover
    },
    arrow: {
      display: "inline-block",
      border: "solid white", // Arrow color
      borderWidth: "0 3px 3px 0",
      padding: "5px",
      transform: isExpanded ? "rotate(40deg)" : "rotate(-140deg)", // Toggle direction
      transition: "transform 0.3s ease", // Smooth arrow rotation
    },
    arrowHover: {
        display: "inline-block",
        border: "solid white", // Arrow color
        borderWidth: "0 3px 3px 0",
        padding: "5px",
        transform: isExpanded ? "rotate(140deg)" : "rotate(-140deg)", // Toggle direction
        transition: "transform 0.3s ease", // Smooth arrow rotation
    },
  };

  return (
    <button
      style={styles.button}
      onClick={onClick}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
        e.target.style.transform = styles.buttonHover.transform;
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = styles.button.backgroundColor;
        e.target.style.transform = "scale(1)";
      }}
    >
      <div style={styles.arrow} onMouseOver={(e)=>{
        e.target.style.backgroundColor = styles.arrowHover.backgroundColor;
      }}></div>
    </button>
  );
};

export default ExpandButton;
