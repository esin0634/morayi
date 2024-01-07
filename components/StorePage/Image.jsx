import React from 'react';

const Image = () => {
  return (
    <div
      className='w-screen h-screen'
      style={{
        backgroundImage: `url("/bt-wide.jpg")`,
        backgroundSize: 'cover', /* Make the image cover the entire div */
      }}
    />
  );
};

export default Image;
