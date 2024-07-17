import React from 'react';

import style from './../../Components/MainWorkspaces/SelectAreas/style.module.scss';

const Arrow = ({ isActive }) => {
  return (
    <svg className={`${style.arrow} ${isActive ? style.active : ''}`} width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.91262 0H12.782C12.8886 0.0330847 12.9625 0.107525 12.9953 0.215051L12.9625 11.133C12.9953 11.2405 12.8886 11.3481 12.7492 11.3481H11.3874L11.3464 2.73776L1.43683 12.7376C1.11691 13.0602 0.575487 13.1015 0.255559 12.7707C-0.105386 12.4068 -0.0643697 11.8691 0.255559 11.5466L10.0585 1.65424L1.73215 1.62115L1.69934 0.215051C1.73215 0.107525 1.8388 0 1.91262 0Z"/>
    </svg>
  );
}

export default Arrow;
