// Frontend code (App.js)
import React, { useState } from 'react';
import axios from 'axios';

const DummyText = () => {
  const [textLength, setTextLength] = useState('');
  const [dummyText, setDummyText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8070/DMT/getDummyText', { textLength });
      setDummyText(response.data);
    } catch (error) {
      console.error('Error fetching dummy text:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={textLength}
          onChange={(e) => setTextLength(e.target.value)}
          placeholder="Enter the length of dummy text"
        />
        <button type="submit">Submit</button>
      </form>
      {dummyText && <p>{dummyText}</p>}
    </div>
  );
};

export default DummyText;
