import React from 'react';
import { Link } from 'react-router-dom';
import style from './style.module.scss';

const PresentationContent = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.titleContainer}>
          <h3 className={style.title}>
            ONE OF INDIA’S LEADING CO-WORKING & SHARED OFFICE NETWORK
          </h3>
        </div>
        <div className={style.textContainer}>
          <p className={style.text}>
            MyBranch is an office space solution provider in India, founded in
            2016 by Mr. Narayan Bhargava. It is one of the major players in
            delivering highly sophisticated co-working spaces that suit
            enterprises of all types. MyBranch has developed from a co-working
            office space network to a workspace solutions platform, that
            provides office space to wide business setups - from sole
            proprietors to start-ups, SMEs to large corporates, and MNCs....
          </p>
        </div>
        <div className={style.buttonContainer}>
          <Link to="/">
            <button className={style.button}>
              <span className={style.titleBtn}>Talk to an expert</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PresentationContent;
