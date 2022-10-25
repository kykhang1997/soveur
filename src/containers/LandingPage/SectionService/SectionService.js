import React, { useEffect, useState } from 'react';
import { filters } from '../../../marketplace-custom-config';

import CardItem from './components/CardItem';

import IconImage from './icon';

import css from './SectionService.module.css';

const data = [
  {
    name: "Service's name goes here service's name here",
    salary: {
      discount: 20,
      origin: 65,
      now: 45,
    },
    time: '12 jours restants',
    user: {
      name: 'Julia K',
      location: 'Jardinier à 8km',
    },
    rate: {
      star: 4.8,
      totalComent: 24,
    },
    category: 'hourseWork',
  },
  {
    name: "Service's name goes here service's name here 1",
    salary: {
      discount: 21,
      origin: 100,
      now: 90,
    },
    time: '5 jours restants',
    user: {
      name: 'Julia A',
      location: 'Jardinier 12 à 8km',
    },
    rate: {
      star: 4.8,
      totalComent: 24,
    },
    category: 'hourseWork',
  },
  {
    name: "Service's name goes here service's name here 2",
    salary: {
      discount: 22,
      origin: 200,
      now: 99,
    },
    time: '10 jours restants',
    user: {
      name: 'Julia B',
      location: 'Jardinier 13 à 8km',
    },
    rate: {
      star: 4.8,
      totalComent: 24,
    },
    category: 'hourseWork',
  },
  {
    name: "Service's name goes here service's name here 3",
    salary: {
      discount: 20,
      origin: 100,
      now: 10,
    },
    time: '2 jours restants',
    user: {
      name: 'Julia G',
      location: 'Jardinier 44 à 8km',
    },
    rate: {
      star: 4.8,
      totalComent: 24,
    },
    category: 'hourseWork',
  },
  {
    name: "Service's name goes here service's name here 4",
    salary: {
      discount: 20,
      origin: 222,
      now: 111,
    },
    time: '3 jours restants',
    user: {
      name: 'Julia K',
      location: 'Jardinier à 8km',
    },
    rate: {
      star: 4.8,
      totalComent: 24,
    },
    category: 'fitness',
  },
  {
    name: "Service's name goes here service's name here 6",
    salary: {
      discount: 20,
      origin: 65,
      now: 45,
    },
    time: '12 jours restants',
    user: {
      name: 'Julia T',
      location: 'Jardinier à 8km',
    },
    rate: {
      star: 5,
      totalComent: 24,
    },
    category: 'fitness',
  },
  {
    name: "Service's name goes here service's name here 7",
    salary: {
      discount: 20,
      origin: 65,
      now: 45,
    },
    time: '10 jours restants',
    user: {
      name: 'Julia AWE',
      location: 'Jardinier à 8km',
    },
    rate: {
      star: 4.8,
      totalComent: 24,
    },
    category: 'animals',
  },
  {
    name: "Service's name goes here service's name here 8",
    salary: {
      discount: 20,
      origin: 65,
      now: 45,
    },
    time: '3 jours restants',
    user: {
      name: 'Julia AKWE',
      location: 'Jardinier à 8km',
    },
    rate: {
      star: 4.8,
      totalComent: 24,
    },
    category: 'healthcare',
  },
  {
    name: "Service's name goes here service's name here 9",
    salary: {
      discount: 20,
      origin: 50,
      now: 20,
    },
    time: '3 jours restants',
    user: {
      name: 'Julia KDIWDW',
      location: 'Jardinier à 8km',
    },
    rate: {
      star: 4.8,
      totalComent: 24,
    },
    category: 'healthcare',
  },
  {
    name: "Service's name goes here service's name here 10",
    salary: {
      discount: 20,
      origin: 65,
      now: 45,
    },
    time: '12 jours restants',
    user: {
      name: 'Julia K',
      location: 'Jardinier à 8km',
    },
    rate: {
      star: 4.8,
      totalComent: 24,
    },
    category: 'it',
  },
];

const SectionService = () => {
  const [keySelectCategory, setKeySelectCategory] = useState('hourseWork');
  const dataCategory = filters.find(e => e.id === 'category') || {};
  const [dataShow, setDataShow] = useState([]);

  useEffect(() => {
    const dataFilter = [];
    data.map(e => {
      if (e.category === keySelectCategory) dataFilter.push(e);
    });
    setDataShow(dataFilter);
  }, [keySelectCategory]);

  return (
    <div className={css.root}>
      <div className={css.body}>
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
        <div className={css.items}>
          {dataShow.map((e, i) => (
            <CardItem key={i} data={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionService;
