import React, { FC } from 'react';

const Preloader: FC = () => {
  return (
    <div className="preloader">
      <div className="sk-folding-cube">
        <div className="sk-cube sk-cube-1"></div>
        <div className="sk-cube sk-cube-2"></div>
        <div className="sk-cube sk-cube-4"></div>
        <div className="sk-cube sk-cube-3"></div>
      </div>
    </div>
  );
};

export default Preloader;
