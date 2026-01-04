import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card({ name, no, qno }) {
  const op = JSON.parse(localStorage.getItem('Checked' + no)) || [];
  
  const completedCount = new Set(op).size;
  const percentage = Math.round((completedCount * 100) / qno);

  return (
    <Link to={name} className="card-wrapper">
      <div className={`topic-card glass-effect ${percentage === 100 ? 'card-finished' : ''}`}>
        
        <div className="corner top-left"></div>
        <div className="corner bottom-right"></div>

        <div className="card-content">
          <h2 className="topic-name">{name}</h2>
          <p className="topic-total">Total Questions: {qno}</p>

          {percentage > 0 ? (
            <div className="progress-section">
              <div className="progress-circle">
                <svg width="40" height="40">
                  <circle className="bg" cx="20" cy="20" r="18"></circle>
                  <circle 
                    className="fg" 
                    cx="20" 
                    cy="20" 
                    r="18" 
                    style={{ strokeDashoffset: 113 - (113 * percentage) / 100 }}
                  ></circle>
                </svg>
                <span className="percentage-num">{percentage}%</span>
              </div>
              <span className="status-label">
                {percentage === 100 ? "COMPLETED" : "IN PROGRESS"}
              </span>
            </div>
          ) : (
            <p className="not-started">Not Yet Started</p>
          )}
        </div>
      </div>
    </Link>
  );
}