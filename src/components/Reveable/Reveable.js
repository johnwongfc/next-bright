'use client';

import React from 'react';

function Reveable({ children }) {
  const [isReveable, setisReveable] = React.useState(false);

  return isReveable ? (
    children
  ) : (
    <div className='reveal'>
      <button onClick={() => setisReveable(true)}>Reveal Content</button>
    </div>
  );
}

export default Reveable;
