import React from 'react';

import { connect } from 'react-redux';

// import { dispatch } from '../../store';

import { Link, useHistory } from 'react-router-dom';

import style from './style.module.css';

const MonthMap = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const getFormtedDate = (date) => {
  const month = date.getMonth();
  const monStr = (MonthMap[month]).toUpperCase();
  return `${monStr} ${date.getDate()}, ${date.getFullYear()}`;
};

const Home = (props = {}) => {
  const { user = {}, notes = {} } = props;
  const { list } = notes;

  const history = useHistory();

  return (
    <div>
      <div className={style.topbar}>
        <img src={user.avatar} className={style.avatar} alt={user.name} />
      </div>
      <p className={style.userName}>Hello, {user.name}</p>
      <p className={style.userGreet}>welcome to reditor</p>
      <div className={style.listContainer}>
        <p className={style.listContainerName}>Notes</p>
        {
          list && list.length ? list.map(i => (
            <div className={style.listItem} >
              <Link className={style.listItemInner} to='/article'>
                <div className={style.listItemCover} />
                <div className={style.listItemMain}>
                  <p className={style.listItemTime}>{getFormtedDate(new Date(i.create_at))}</p>
                  <p className={style.listItemTitle}>{i.title}</p>
                  <div className={style.listItemPlaceholder} />
                  <p className={style.listItemSummay}>{i.summary}</p>
                </div>
              </Link>
            </div>
          )) : null
        }
        {
          !list || !list.length ? (
            <p className={style.listTipsEmpty}>暂时没有记录哦~</p>
          ) : null
        }
      </div>
      <div className={style.newBtn} onClick={() => history.push('/edit')}>
        <i className={`iconfont icon-plus-creat ${style.newBtnIcon}`} />
      </div>
    </div>
  );
};

const mapState = state => ({
  ...state,
});

export default connect(mapState)(Home);
