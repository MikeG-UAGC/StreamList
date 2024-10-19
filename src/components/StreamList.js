import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [submittedStreams, setSubmittedStreams] = useState([]); // Store submitted streams

  // Add a new stream to the list
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    if (!input.trim()) {
      setError('Stream name cannot be empty!');
      return;
    }

    const newStream = {
      id: submittedStreams.length + 1,
      text: input
    };

    setSubmittedStreams([...submittedStreams, newStream]);
    setInput(''); // Clear input after submission
  };

  // Delete a stream from the list
  const handleDeleteStream = (id) => {
    setSubmittedStreams(submittedStreams.filter((stream) => stream.id !== id));
  };

  return (
    <div>
      <h1>StreamList Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter stream name"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display the submitted streams */}
      <h2>Submitted Streams: {submittedStreams.length}</h2>
      <ul>
        {submittedStreams.map((stream) => (
          <li key={stream.id}>
            <span>{stream.text}</span>
            {/* Delete button */}
            <button onClick={() => handleDeleteStream(stream.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
