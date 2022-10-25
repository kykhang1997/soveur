import React from 'react';

import ImageLocal from './Rectangle_2670.png';
import AvatarImage from './avatar.png';
import StarIcon from './Vector.png';
import css from './CardItem.module.css';

const CardItem = ({ data }) => {
  return (
    <div className={css.root}>
      <img src={ImageLocal} alt={ImageLocal} className={css.image} />
      <div className={css.content}>
        <div className={css.salaryAndTime}>
          <div className={css.salary}>
            <p className={css.salaryOrigin}>{data.salary.origin}€</p>
            <p className={css.salary}>{data.salary.now}€</p>
            <div className={css.disscount}>
              <p>-{data.salary.discount}%</p>
            </div>
          </div>
          <p className={css.time}>{data.time}</p>
        </div>
        <span className={css.titleName}>{data.name}</span>
        <div className={css.line}></div>
        <div className={css.user}>
          <div className={css.info}>
            <img src={AvatarImage} alt={AvatarImage} />
            <div className={css.userNameAndLocation}>
              <p className={css.name}>{data.user.name}</p>
              <p className={css.location}>{data.user.location}</p>
            </div>
          </div>
          <div className={css.rate}>
            <p>{data.rate.star}</p>
            <img src={StarIcon} alt={StarIcon} />
            <p> ({data.rate.totalComent}) </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
