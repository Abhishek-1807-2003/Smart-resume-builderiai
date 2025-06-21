
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [resumeData, setResumeData] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleInputChange = (e) => {
    setResumeData(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await axios.post('http://localhost:5000/api/suggestions', { resumeData });
    setSuggestions(response.data.suggestions);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Smart Resume Builder</h1>
      <textarea className="w-full p-2 border" rows="10" onChange={handleInputChange}></textarea>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2" onClick={handleSubmit}>Get AI Suggestions</button>
      <h2 className="text-xl font-semibold mt-4">Suggestions:</h2>
      <p>{suggestions}</p>
    </div>
  );
}

export default App;
