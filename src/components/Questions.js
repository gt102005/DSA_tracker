import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Questions.css';

export default function Questions({ no, name, qlist, Checked, setChecked }) {
  
  useEffect(() => {
    let strs = localStorage.getItem('Checked' + `${no}`);
    if (strs == null) return;
    
    let item2 = [];
    for (let i = 0; i < strs.length; i++) {
      if (strs[i] === '+') { 
        item2.push((strs[i] + strs[i+1] + strs[i+2])); 
        i += 3;
      } else if (strs[i] !== ',' && strs[i] !== '/' && strs[i] !== '"' && strs[i] !== '[' && strs[i] !== ']' && (strs[i] < 'a' || strs[i] > 'z') && strs[i] !== "\\" && strs[i] !== '+' && strs[i] !== '0') {
        item2.push(strs[i]);
      }
    }
    setChecked(item2);
  }, [no, setChecked]);

  const handlechange = (id) => {
    if (checkID(id)) {
      const newList = Checked.filter((idt) => idt !== id);
      setChecked(newList);
      localStorage.setItem('Checked' + `${no}`, JSON.stringify(newList));
    } else {
      const newList = [...Checked, id];
      setChecked(newList);
      localStorage.setItem('Checked' + `${no}`, JSON.stringify(newList));
    }
  };

  const checkID = (ele) => {
    if (Checked == null) return false;
    return Checked.includes(ele);
  };

  const formatID = (id) => {
    return id.startsWith('+') ? id.substring(1) : id;
  };

  return (
    <div className="questions-container">
      <div className="questions-header">
        <Link className="back-link" to="/">← Back to Topics</Link>
        <h1 className="topic-heading">{name} Problems</h1>
      </div>

      <div className="table-wrapper glass-effect">
        <table className="questions-table">
          <thead>
            <tr>
              <th className="col-id">ID</th>
              <th className="col-question">Question(s)</th>
              <th className="col-status">Status</th>
              <th className="col-done">Done</th>
            </tr>
          </thead>
          <tbody>
            {qlist.map((ele) => (
              <tr key={ele.ID} className={checkID(ele.ID) ? "row-completed" : ""}>
                <td className="td-id">{formatID(ele.ID)}</td>
                <td className="td-question">
                  <Link target="_blank" to={ele.link}>{ele.Q}</Link>
                </td>
                <td className="td-status">
                  <div className={`status-indicator ${checkID(ele.ID) ? "status-done" : "status-todo"}`}></div>
                </td>
                <td className="td-done">
                  <input 
                    type="checkbox" 
                    onChange={() => handlechange(ele.ID)} 
                    checked={checkID(ele.ID)}
                    className="custom-checkbox"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}