import React from 'react';

import { connect } from 'react-redux';

// import { dispatch } from '../../store';

import style from './style.module.css';

const Home = (props = {}) => {
  const { user = {}, notes = {} } = props;
  const { list } = notes;

  return (
    <div>
      <div className={style.topbar}>
        {/* <i className={`icon-jiantou-px iconfont ${style.iconBack}`} /> */}
        {/* <div className={style.avatar}></div> */}
        <img src={user.avatar} className={style.avatar} alt={user.name} />
      </div>
      <p className={style.userName}>Hello, {user.name}</p>
      <p className={style.userGreet}>welcome to reditor</p>
      <div className={style.listContainer}>
        <p className={style.listContainerName}>Notes</p>
        {
          list && list.length ? list.map(i => (
            <div className={style.listItem} >
              <div className={style.listItemCover} />
              <div className={style.listItemMain}>
                <p className={style.listItemTime}>FEB 19, 2018</p>
                <p className={style.listItemTitle}>{i.title}</p>
                <div className={style.listItemPlaceholder} />
                <p className={style.listItemSummay}>{i.summary}</p>
              </div>
            </div>
          )) : null
        }
        {
          !list || !list.length ? (
            <p className={style.listTipsEmpty}>暂时没有记录哦~</p>
          ) : null
        }
      </div>
    </div>
  );
};

const mapState = state => ({
  ...state,
});

export default connect(mapState)(Home);
