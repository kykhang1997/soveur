import React, { useState } from 'react';

import ImageLocation from './image';

import css from './SectionAboutUs.module.css';

const data = [
  {
    img: ImageLocation.Image180,
    content:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida varius viverra tincidunt pellentesque eu. Cras pharetra, malesuada sed posuere non. Augue nulla est sociis arcu arcu. Condimentum pharetra, tristique facilisis tortor.”',
    name: 'Sofia Vergara - Director of IKEA',
  },
  {
    img: ImageLocation.Image181,
    content: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. ”',
    name: 'Sofia Vergara LLLL',
  },
  {
    img: ImageLocation.Image182,
    content: '“Gravida varius viverra tincidunt pellentesque eu.”',
    name: 'Sofia Vergara eee',
  },
  {
    img: ImageLocation.Image183,
    content: '“Cras pharetra, malesuada sed posuere non. Augue nulla est sociis arcu arcu. ”',
    name: 'Sofia Vergara ABC',
  },
  {
    img: ImageLocation.Image184,
    content: '“Condimentum pharetra, tristique facilisis tortor.”',
  },
  {
    img: ImageLocation.Image185,
    content:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida varius viverra tincidunt pellentesque eu.”',
    name: 'Sofia Vergara 123',
  },
  {
    img: ImageLocation.Image186,
    content:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida varius viverra tincidunt pellentesque eu. Cras pharetra, malesuada sed posuere non. Augue nulla est sociis arcu arcu. Condimentum pharetra, tristique facilisis tortor.”',
    name: 'Sofia Vergara - Director of IKEA',
  },
  {
    img: ImageLocation.Image187,
    content:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida varius viverra tincidunt pellentesque eu. Cras pharetra, malesuada sed posuere non. Augue nulla est sociis arcu arcu. Condimentum pharetra, tristique facilisis tortor.”',
    name: 'Sofia Vergara - Director of IKEA',
  },
];

const SectionAboutUs = props => {
  const [numSelect, setNumSelect] = useState(0);

  return (
    <div className={css.root}>
      <div className={css.content}>
        <p className={css.title}>What people say about us</p>
        <div className={css.images}>
          {data.map((e, i) => (
            <img
              src={e?.img}
              key={i}
              alt={i}
              onClick={() => {
                if (i === numSelect) return;
                setNumSelect(i);
              }}
              className={i === numSelect ? css.active : ''}
            />
          ))}
        </div>
        <p className={css.label}>{data?.[numSelect]?.content}</p>
        <p className={css.name}>{data?.[numSelect]?.name}</p>
      </div>
    </div>
  );
};

export default SectionAboutUs;
