import React from 'react';
import style from './style.module.scss';
import { components } from './../components';

const TextAreas = ({ activeId }) => {
  const activeComponent = components.find(component => component.id === activeId);

  return (
    <div className={style.wrapper}>
      {activeComponent ? (
        <div className={style.textContainer}>
          <p>{activeComponent.text1}</p>
          <p>{activeComponent.text2}</p>
        </div>
      ) : (
        <div className={style.textContainer}>
          <p>Выберите элемент</p>
        </div>
      )}
    </div>
  );
};

export default TextAreas;
