import React from 'react';
import Arrow from './../../svg/Arrow';
import { components } from './../components';
import style from './style.module.scss';

const SelectAreas = ({ onMouseEnter, onMouseLeave, onClick, activeId, fixedId }) => {

  const handleClick = (id) => {
    onClick(id);
  };

  return (
    <div className={style.wrapper}>
      <div className={style.list}>
        {components.map((component, index) => (
          <React.Fragment key={component.id}>
            <div
              id={component.id}
              className={`${style.row} ${activeId === component.id || fixedId === component.id ? style.active : ''}`}
              onMouseEnter={() => onMouseEnter(component.id)}
              onMouseLeave={onMouseLeave}
              onClick={() => handleClick(component.id)}
            >
              <div className={style.title}>
                <h3>{component.title}</h3>
              </div>
              <div className={style.arrowContainer}>
                <Arrow isActive={activeId === component.id || fixedId === component.id} />
              </div>
            </div>
            {index < components.length - 1 && (
              <span className={style.separator}></span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SelectAreas;
