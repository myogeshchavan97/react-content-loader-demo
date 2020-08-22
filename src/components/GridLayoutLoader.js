import React from 'react';
import ContentLoader from 'react-content-loader';

const GridLayoutLoader = (props) => {
  return (
    <div>
      <h2>Grid Layout Loader</h2>
      <ContentLoader
        viewBox="0 0 820 450"
        height={450}
        width={820}
        speed={2}
        {...props}
      >
        <rect x="10" y="10" rx="5" ry="5" width="260" height="140" />
        <rect x="280" y="10" rx="5" ry="5" width="260" height="280" />
        <rect x="550" y="10" rx="5" ry="5" width="260" height="140" />
        <rect x="10" y="160" rx="5" ry="5" width="260" height="280" />
        <rect x="280" y="300" rx="5" ry="5" width="260" height="140" />
        <rect x="550" y="160" rx="5" ry="5" width="260" height="280" />
      </ContentLoader>
    </div>
  );
};

export default GridLayoutLoader;
