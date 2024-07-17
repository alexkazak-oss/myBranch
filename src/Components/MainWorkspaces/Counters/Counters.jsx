import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import style from './style.module.scss';

const Counters = () => {
  const items = [
    {
      value: 25,
      title: 'States',
    },
    {
      value: 70,
      title: 'Cities',
    },
    {
      value: 80,
      title: 'Locations',
    },
    {
      value: 200,
      title: 'Clients',
    },
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.items}>
          {items.map((item, index) => (
            <CounterItem key={index} value={item.value} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

const CounterItem = ({ value, title }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref} className={style.item}>
      {inView && (
        <CountUp start={0} end={value} duration={2} suffix="+" delay={0.3}>
          {({ countUpRef }) => (
            <p className={style.value} ref={countUpRef}></p>
          )}
        </CountUp>
      )}
      <p className={style.title}>{title}</p>
    </div>
  );
};

export default Counters;
