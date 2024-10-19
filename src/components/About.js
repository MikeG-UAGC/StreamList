import React, { useState } from 'react';

function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about our platform and services.</p>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'Show Less' : 'Show More'}
      </button>

      {showMore && (
        <div>
          <h2>More Information</h2>
          <p>
          At EZTech Movie, based in sunny San Diego, we are committed to delivering a world-class streaming experience that seamlessly integrates entertainment, shopping, and the latest features. 
          Our mission is to provide viewers with the ultimate platform for immersive and engaging content.
          Stay connected for exciting updates and innovations!
          </p>
        </div>
      )}
    </div>
  );
}

export default About;
