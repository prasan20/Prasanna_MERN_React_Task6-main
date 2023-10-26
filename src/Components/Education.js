import React from 'react';
import './Education.css'; 

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-content">
        <h2>Education</h2>
        <div className="education-item">
          <h3>VIT Chennai</h3>
          <p>Third Year Engineering Student</p>
        </div>
        <div className="education-item">
          <h3>Narayana Junior College (2021)</h3>
          <p>Grade 12 - 89.2%</p>
        </div>
        <div className="education-item">
          <h3>Narayana Olympiad School (2019)</h3>
          <p>Grade 10 - 95.2%</p>
        </div>
      </div>
    </section>
  );
}

export default Education;
