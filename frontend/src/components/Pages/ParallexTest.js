import React from "react";
import { Parallax } from "react-parallax";

export default function Parallex() {
  return (
    <div>
      <Parallax bgImage="https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" strength={500}>
        <div style={{ height: 500 }}>
          {/* Content for the first parallax layer */}
        </div>
      </Parallax>

      <br /> <br />

      <Parallax bgImage="https://images.unsplash.com/photo-1682695795798-1b31ea040caf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" strength={500}>
        <div style={{ height: 500 }}>
          {/* Content for the second parallax layer */}
        </div>
      </Parallax>
      <div style={{ height: 500 }}>
        {/* Empty block for spacing */}
      </div>
    </div>
  );
}
