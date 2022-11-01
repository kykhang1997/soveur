import React, { useState } from 'react';

import ImageLocal from '../Rectangle_2722.png';
import css from './CartItemOurBestServices.module.css';

const CartItemOurBestServices = ({ data, ...reset }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={css.root} {...reset}>
      <img src={data.ig} />
      <label>{data.label}</label>
      <p>{data.description}</p>
      {isShow && <p>{data.description}</p>}
      <p className={css.seeMore} onClick={() => setIsShow(!isShow)}>
        See more
      </p>
    </div>
  );
};

export default CartItemOurBestServices;
