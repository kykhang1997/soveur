import React, { useEffect, useState } from 'react';
import CartItemOurBestServices from './components/CartItemOurBestServices';

import ImageLocal from './Rectangle_2719.png';
import IconArrow from './ArrowDown.svg';

import css from './SectionOurBestServices.module.css';
import SwiperCard from './components/SwiperCard';
import { Col, Row } from 'react-bootstrap';

const SectionOurBestServices = () => {
  const [swiper, setSwiper] = useState();
  useEffect(() => {
    setSwiper(document.querySelector('.swiper')?.swiper);
  }, []);
  return (
    <div className={css.root}>
      <div className={css.body}>
        <Row>
          <Col xs={10} md={3}>
            <div className={'position-relative ' + css.titleLabel}>
              <label className={css.label}>Best services for you</label>
              <div className={'d-flex position-absolute ' + css.btnContainer}>
                <div className={css.btnPrev} onClick={() => swiper?.slidePrev()}>
                  <img src={IconArrow} alt="btnPrev" />
                </div>
                <div className={css.btnNext} onClick={() => swiper?.slideNext()}>
                  <img src={IconArrow} alt="btnNext" />
                </div>
              </div>
            </div>
          </Col>
          <Col xs={10} md={9}>
            {' '}
            <SwiperCard />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SectionOurBestServices;
