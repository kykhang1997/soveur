import React from 'react';

import ImageLocal from '../Rectangle_2719.png';
import css from './CartItemOurBestServices.module.css';

const CartItemOurBestServices = ({ data, ...reset }) => {
  return (
    <div className={css.root} {...reset}>
      <img src={data.img} alt={data.img?.name} className={css.image} />
      <p className={css.content}>{data.label}</p>
      <div className={css.saleOf}>
        <p>{data.saleOf}</p>
      </div>
    </div>
  );
};

export default CartItemOurBestServices;
