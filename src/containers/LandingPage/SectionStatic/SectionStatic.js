import React from 'react';

import css from './SectionStatic.module.css';

const SectionStatic = () => {
  return (
    <div className={css.root}>
      <div>
        <span>1,218</span>
        <p>Lorem ipsum dolor</p>
      </div>
      <div>
        <span>74+</span>
        <p>Lorem ipsum dolor</p>
      </div>
      <div>
        <span>25K</span>
        <p>Lorem ipsum dolor</p>
      </div>
      <div>
        <span>50K+</span>
        <p>Lorem ipsum dolor</p>
      </div>
    </div>
  );
};

export default SectionStatic;
