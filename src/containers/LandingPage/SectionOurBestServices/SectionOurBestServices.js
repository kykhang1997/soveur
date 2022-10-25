import React from 'react';
import CartItemOurBestServices from './components/CartItemOurBestServices';

import ImageLocal from './Rectangle_2719.png';

import css from './SectionOurBestServices.module.css';

const data = [
  {
    img: ImageLocal,
    label: 'Category’s name goes here',
    saleOf: '25% off',
  },
  {
    img: ImageLocal,
    label: 'Category’s name goes here',
    saleOf: '25% off',
  },
  {
    img: ImageLocal,
    label: 'Category’s name goes here',
    saleOf: '25% off',
  },
];

const SectionOurBestServices = () => {
  return (
    <div className={css.root}>
      <div className={css.titleLabel}>
        <p className={css.title}>Our best promotional services</p>
        <p className={css.label}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra non, pellentesque massa
          tellus. Sem quis sapien, at suspendisse aliquam auctor
        </p>
      </div>
      <div className={css.content}>
        {data.map((e, i) => (
          <CartItemOurBestServices data={e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SectionOurBestServices;
