import React from "react";
import Card from "./Card.js";
import { useEffect } from "react";
import "./Lister.css";

export default function Lister({
  Checked1, Checked2, Checked3, Checked4, Checked5, Checked6,
  Checked7, Checked8, Checked9, Checked10, Checked11, Checked12,
  count, setcount, mode
}) {

  let counter = 0;
  for (let no = 0; no <= 12; no++) {
    let op = JSON.parse(localStorage.getItem(`Checked${no}`));
    if (op != null) {
      op = [...new Set(op)];
      for (let i = 0; i < op.length; i++) {
        if ((op[i] !== ',' && op[i] !== '/' && op[i] !== '"' && op[i] !== '[' && op[i] !== ']' && (op[i] < 'a' || op[i] > 'z') && op[i] !== "\\" && op[i] !== '+') || op.length === 3) {
          counter++;
        }
      }
    }
  }

  useEffect(() => {
    setcount(counter);
  }, [counter, setcount]);

  return (
    <div className="lister-main-wrapper">
      {/* Header Section */}
      <header className="lister-header">
        <h1 className="lister-title">100 DSA Questions</h1>
        <h3 className="lister-subtitle">Crack Product Based Companies Today</h3>
        
        <div className="quotes-container glass-effect">
          <p className="quote-text">"Logic will get you from A to B. Algorithms will take you everywhere."</p>
        </div>

        <div className="global-progress-section">
          <div className="progress-text">
            <span>Global Progress</span>
            <span>{count}%</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${count}%` }}></div>
          </div>
        </div>
      </header>

      {/* Cards Grid Section */}
      <section className="cards-grid-layout">
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

      {/* Bottom Spacer to prevent components from touching the bottom */}
      <div className="bottom-spacer"></div>
    </div>
  );
}