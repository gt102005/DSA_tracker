import React from "react";
import Card from "./Card.js";
import { Link } from "react-router-dom";
import "./Lister.css";

export default function Lister({ count, setcount, Checked1, Checked2, Checked3, Checked4, Checked5, Checked6, Checked7, Checked8, Checked9, Checked10, Checked11, Checked12 }) {
  
  // Logic to calculate total progress from localStorage
  let counter = 0;
  for (let no = 0; no <= 12; no++) {
    let op = JSON.parse(localStorage.getItem('Checked' + `${no}`));
    if (op != null) {
      op = [...new Set(op)];
      for (let i = 0; i < op.length; i++) {
        if ((op[i] !== ',' && op[i] !== '/' && op[i] !== '"' && op[i] !== '[' && op[i] !== ']' && (op[i] < 'a' || op[i] > 'z') && op[i] !== "\\" && op[i] !== '+') || op.length === 3) {
          counter++;
        }
      }
    }
  }
  // Update parent state
  React.useEffect(() => {
    setcount(counter);
  }, [counter, setcount]);

  return (
    <div className="main-wrapper">
      <div className="dashboard-container">
        <header className="dashboard-header">
          <h1 className="main-title">DSA Tracker</h1>
          <p className="subtitle">Master Data Structures and Algorithms</p>
          
          <div className="global-progress-section">
            <div className="progress-labels">
              <span>Global Progress</span>
              <span className="percentage-text">{count}%</span>
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-fill" style={{ width: `${count}%` }}></div>
            </div>
          </div>
        </header>

        <section className="cards-grid">
          <Card qno={23} no={"12"} name="Array and String" />
          <Card qno={5} no={"1"} name="Greedy" />
          <Card qno={13} no={"2"} name="Dp" />
          <Card qno={7} no={"3"} name="Binary search" />
          <Card qno={5} no={"4"} name="Heaps" />
          <Card qno={6} no={"5"} name="Recursion" />
          <Card qno={8} no={"6"} name="Linked List" />
          <Card qno={8} no={"7"} name="Binary Tree" />
          <Card qno={6} no={"8"} name="Binary Search Tree" />
          <Card qno={7} no={"9"} name="Stack and Queue" />
          <Card qno={6} no={"10"} name="Backtracking" />
          <Card qno={6} no={"11"} name="Graphs" />
        </section>

        <footer className="dashboard-footer">
          <div className="footer-links">
            {/* Replace with your actual URLs */}
            <Link target="_blank" className="social-link" to="https://www.linkedin.com/in/YOUR_PROFILE">
              LinkedIn: Your Name
            </Link>
            <Link target="_blank" className="social-link" to="https://github.com/YOUR_GITHUB">
              GitHub: YourHandle
            </Link>
          </div>
          <div className="footer-signature">
            Made with Love | Updated 2026
          </div>
        </footer>
      </div>
    </div>
  );
}