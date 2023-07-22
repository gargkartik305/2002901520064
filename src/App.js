import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [urls, setUrls] = useState('');
  const [numbers, setNumbers] = useState([]);

  const handleInputChange = (event) => {
    setUrls(event.target.value);
  };

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(`http://localhost:8008/numbers?url=${urls}`);
      setNumbers(response.data.numbers);
    } catch (error) {
      console.error('Error fetching numbers:', error.message);
    }
  };

  return (
    <div>
      <h1>Number Management Service</h1>
      <div>
        <input
          type="text"
          value={urls}
          onChange={handleInputChange}
          placeholder="Enter URLs separated by comma"
        />
        <button onClick={fetchNumbers}>Fetch Numbers</button>
      </div>
      <div>
        <h2>Merged Unique Integers</h2>
        <ul>
          {numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
