import React, { useState } from 'react';
import ImageAreas from './ImageAreas/ImageAreas';
import SelectAreas from './SelectAreas/SelectAreas';
import TextAreas from './TextAreas/TextAreas';
import Counters from './Counters/Counters';
import { components } from './components';
import style from './style.module.scss';

const Workspaces = () => {
  const [activeId, setActiveId] = useState(components[0].id);
  const [fixedId, setFixedId] = useState(components[0].id);

  const text = 'WORKSPACES THAT FIT YOUR BUSINESS NEEDS';
  const words = text.split(' ');
  const lastThreeWords = words.slice(-3).join(' ');
  const firstPart = words.slice(0, -3).join(' ');

  const handleMouseEnter = (id) => {
    if (!fixedId) {
      setActiveId(id);
    }
  };

  const handleMouseLeave = () => {
    if (!fixedId) {
      setActiveId(null);
    }
  };

  const handleClick = (id) => {
    setFixedId(id);
  };

  return (
    <div className={style.wrapper}>
      <h2>
        {firstPart} <strong>{lastThreeWords}</strong>
      </h2>
      <div className={style.container}>
        <SelectAreas 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
          onClick={handleClick}
          activeId={!activeId} 
          fixedId={fixedId}
        />
        <TextAreas activeId={fixedId || activeId} />
				<ImageAreas activeId={fixedId || activeId} />
      </div>
				<Counters/>
    </div>
  );
};

export default Workspaces;
