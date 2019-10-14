import React, { useState, useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import { debounce } from '../../utils/util';

import style from './style.module.css';

const Search = (props) => {
  const history = useHistory();
  const [keyword = '', setKeyword] = useState(undefined);
  const callback = useCallback(debounce(setKeyword, 500), []);

  const filterdList = useMemo(() => {
    if (!keyword) return [];

    const { list = [] } = props.notes;
    return list.filter(item => item.title.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
  }, [keyword, props.notes]);

  return (
    <div className={style.container}>
      <div className={style.topbar}>
        <div className={style.topbarInputContianer}>
          <i className={'iconfont icon-sousuo'} />
          <input placeholder="搜索笔记标题" onChange={(e) => callback(e.currentTarget.value)} />
        </div>
        <button
          onClick={() => history.goBack()}
          className={style.topbarCancelIcon}
        >取消</button>
      </div>
      {
        keyword ? (
          <div className={style.searchResultCounts}>共{filterdList.length}条搜索结果</div>
        ) : null
      }
      <ul className={style.searchResult}>
        {
          filterdList.map(item => (
            <li
              key={item._id}
              className={style.searchResultItem}
              onClick={() => history.push(`/article/${item._id}`)}
            >
              <p className={style.searchResultTitle}>{item.title}</p>
              { item.summary ? <p className={style.searchResultSummary}>{item.summary}</p> : null }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const mapState = (state) => ({ ...state });

export default connect(mapState)(Search);
