import React, { useState } from 'react';
import { filters } from '../../../marketplace-custom-config';

import CardItem from './components/CardItem';

import IconImage from './icon';

import css from './SectionService.module.css';

const SectionService = () => {
  const [keySelectCategory, setKeySelectCategory] = useState('hourseWork');
  const dataCategory = filters.find(e => e.id === 'category') || {};

  return (
    <div className={css.root}>
      <div className={css.labelContent}>
        <span>Our best services for you</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra non, pellentesque massa
          tellus. Sem quis sapien, at suspendisse aliquam auctor
        </p>
      </div>
      <div className={css.categoryContent}>
        <div className={css.content}>
          {dataCategory?.config?.options.map((e, i) => {
            if (e?.key === 'none') return;
            return (
              <div
                className={
                  keySelectCategory === e?.key
                    ? css.contentItem + ' ' + css.active
                    : css.contentItem
                }
                key={i}
                onClick={() => setKeySelectCategory(e?.key)}
              >
                <img src={IconImage[(e?.key)]} alt={e?.key} />
                <p>{e?.label}</p>
              </div>
            );
          })}
        </div>
        <img src={IconImage.IconFilter} alt={IconImage.IconFilter} className={css.btnFillter} />
      </div>
      <div>
        <CardItem />
      </div>
    </div>
  );
};

export default SectionService;
