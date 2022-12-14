import React from 'react';

import ImageLocation from './Ellipse_1192.png';

import css from './SectionSales.module.css';

const SectionSales = props => {
  return (
    <div className={css.root}>
      <div className={css.body}>
        <div className={css.content}>
          <p className={css.nameSale}>Christmas Sales</p>
          <div className={css.numSale}>
            <p className={css.num}>50</p>
            <div>
              <p>
                %<br />
                OFF
              </p>
            </div>
          </div>
          <p className={css.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida varius viverra
            tincidunt pellentesque eu. Cras pharetra,
          </p>
          <button className={css.btnExplore}>Explore now</button>
        </div>
        <div className={css.img}>
          <img src={ImageLocation} alt="ImageLocation" />
        </div>
      </div>
    </div>
  );
};

export default SectionSales;
