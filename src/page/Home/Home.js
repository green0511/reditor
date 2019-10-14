import React, { useState } from 'react';

import { connect } from 'react-redux';

// import { dispatch } from '../../store';

import { Link, useHistory } from 'react-router-dom';

import style from './style.module.css';

import SortPannel from './SortPannel/SortPannel';

import { getFormtedDate } from '../../utils/util';

const sortTypes = [
  { text: '最近更新', sortFn: (a, b) => b.updated_at - a.updated_at},
  { text: '最近创建', sortFn: (a, b) => b.created_at - a.created_at},
  { text: '文件名(A-Z)', sortFn: (a, b) => b.title > a.title ? -1 : 1},
  { text: '文件名(Z-A)', sortFn: (a, b) => b.title > a.title ? 1 : -1},
  { text: '最早更新', sortFn: (a, b) => a.updated_at - b.updated_at},
  { text: '最早创建', sortFn: (a, b) => a.created_at - b.created_at},
];

const Home = (props = {}) => {
  const { user = {}, notes = {} } = props;
  const { list } = notes;
  const [ selectedSortTypeIndex, setSortTypeIndex ] = useState(0);
  const [ isOpenSort, setOpenSort ] = useState(false);

  const history = useHistory();
  const { sortFn } = (sortTypes[selectedSortTypeIndex] || sortTypes[0]);

  return (
    <div>
      <div className={style.topbar}>
        <img src={user.avatar} className={style.avatar} alt={user.name} />
      </div>
      <p className={style.userName}>Hello, {user.name}</p>
      <p className={style.userGreet}>welcome to reditor</p>
      <div className={style.searchBar} onClick={() => history.push('/search')}>
        <span>搜索</span>
        <i className="iconfont icon-sousuo" />
      </div>
      <div className={style.listContainer}>
        <div className={style.listContainerTitle}>
          <p className={style.listContainerName}>Notes</p>
          <i
            className={`iconfont icon-zhankai ${style.listContainerSpandIcon} ${isOpenSort ? style.listContainerSpandIconActive : ''}`}
            onClick={() => setOpenSort(!isOpenSort)}
          />
        </div>
        {/* 排序 */}
        <SortPannel
          sortTypes={sortTypes}
          selectedSortTypeIndex={selectedSortTypeIndex}
          onSelect={i => setSortTypeIndex(i)}
          isOpen={isOpenSort}
        />
        {
          list && list.length ? list.sort(sortFn).map(i => (
            <div className={style.listItem} key={i._id} >
              <Link className={style.listItemInner} to={`/article/${i._id}`}>
                <img className={style.listItemCover} src={i.cover} alt={i.title} />
                <div className={style.listItemMain}>
                  <p className={style.listItemTime}>{getFormtedDate(new Date(i.created_at))}</p>
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
