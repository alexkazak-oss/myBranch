import React from 'react';
import style from './style.module.scss';
import { components } from './../components';

const TextAreas = ({ activeId }) => {
  const activeComponent = components.find(component => component.id === activeId);

  return (
    <div className={style.wrapper}>
      {activeComponent ? (
        <div className={style.container}>
          <img src={activeComponent.img} className={style.img} alt="" />
        </div>
      ) : (
        <div className={style.textContainer}>
          <p>Find an element</p>
        </div>
      )}
    </div>
  );
};

export default TextAreas;
