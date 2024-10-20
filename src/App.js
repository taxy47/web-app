// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim()) {
      setNotes([...notes, inputValue]);
      setInputValue(''); // 清空输入框
    }
  };

  // 返回的是一个网页模块
  return (
    <div className="App">
      <h1>我的笔记应用</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="输入笔记..."
      />
      <button onClick={handleAddNote}>添加笔记</button>
      <h2>笔记列表</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
