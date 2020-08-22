import React from 'react';
import { Instagram } from 'react-content-loader';

const InstagramLoader = () => {
  return (
    <div>
      <h2>Instagram Loader</h2>
      <Instagram width={500} height={500} backgroundColor="#cebaba" speed={3} />
    </div>
  );
};

export default InstagramLoader;
