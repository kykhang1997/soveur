import React from 'react';

import GroupImage from './Group_42.png';
import BecomeProviderImage from './become_provider.png';
import Group95Image from './Group_18495.png';
import Group96Image from './Group_18496.png';
import Frame39Image from './Frame_427318639.png';
import Frame40Image from './Frame_427318640.png';
import Group33Image from './Group_33.png';
import Group83Image from './Group_18483.png';
import Group92Image from './Group_18492.png';

import css from './SectionBanner.module.css';

const SectionBanner = () => {
  return (
    <div className={css.root}>
      <div className={css.content}>
        <div className={css.flexCenter}>
          <div className={css.labelTitle}>
            <img src={GroupImage} />
            <p>Amazing experience are what power us</p>
          </div>
        </div>

        <div className={css.contentBanner}>
          <div className={css.downloadApp}>
            <button>Download App</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className={css.becomeProvider}>
            <img src={BecomeProviderImage} />
          </div>
        </div>
        <div className={css.positionRelative}>
          <div className={css.contentImage}>
            <div>
              <img src={Group95Image} />
            </div>
            <div>
              <img src={Frame39Image} />
            </div>
            <div className={css.bannerBetWeen}>
              <img src={Group92Image} className={css.imgBetWeen} />
              <img src={Group33Image} className={css.hi} />
              <img src={Group83Image} className={css.sound} />
            </div>
            <div>
              <img src={Frame40Image} />
            </div>
            <div>
              <img src={Group96Image} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
