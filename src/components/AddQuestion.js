import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddQuestion.css';

function AddQuestion() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        topic: 'Array and string',
        title: '',
        link: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        alert(`Question added to ${formData.topic}! (Note: To persist this permanently, add it to your arrays in App.js)`);
        navigate('/');
    };

    return (
        <div className="add-question-wrapper">
            <div className="form-container glass-effect">
                <h2 className="form-title">Add Custom Problem</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Select Topic</label>
                        <select name="topic" value={formData.topic} onChange={handleChange}>
                            <option>Array and string</option>
                            <option>Greedy</option>
                            <option>Dp</option>
                            <option>Binary search</option>
                            <option>Heaps</option>
                            <option>Graphs</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Question Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            placeholder="e.g. Two Sum" 
                            value={formData.title} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Problem Link</label>
                        <input 
                            type="url" 
                            name="link" 
                            placeholder="https://leetcode.com/..." 
                            value={formData.link} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="submit-btn">Save Question</button>
                        <button type="button" className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddQuestion;