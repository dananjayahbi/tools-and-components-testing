// Test.js
import React, { useState } from "react";
import "./css/collapseImages.css"; // Import the CSS styles from the file we created

export default function CollapseImages() {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    "https://images.unsplash.com/photo-1689890076926-afb4add0bc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://plus.unsplash.com/premium_photo-1675826774823-88bd1cf6809a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1550761829-8e2d7e0c8004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1656045795604-82f2c064eaa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1589399516942-c3fb650ae8b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
  ];


  const handleClick = (index) => {
    setActiveImage(index === activeImage ? null : index);
  };

  return (
    <div className="container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image ${activeImage === index ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: activeImage === index ? "center" : "50% 50%",
          }}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}
