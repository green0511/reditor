import React from 'react';

import { useHistory } from 'react-router-dom';

import style from './style.module.css';

export default () => {
  const history = useHistory();

  return (
    <div>
      <header className={style.topbar}>
        <i 
          onClick={() => history.goBack()}
          className={`iconfont icon-jiantou-px ${style.topbarBackIcon}`}
        />
        <span 
          onClick={() => history.push('/edit')}
          className={style.topbarEditIcon}
        >
          EDIT
        </span>
      </header>
      <div className={style.draftTip}>该笔记有暂未发布的草稿，点击编辑继续创作~</div>
      <div className={style.articleContainer}>
        <h1 className={style.title}>This is the title</h1>
        <p className={style.time}>FEB 19, 2019</p>
        <div className={style.splitLine}></div>
        <article className={style.article}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt eligendi sit possimus blanditiis totam dolorem quod animi assumenda ea labore soluta itaque ex, aperiam veritatis eos ad commodi nobis.</p>
          <p><strong>Lorem</strong> ipsum dolor sit amet consectetur adipisicing elit. Amet incidunt eligendi sit possimus blanditiis totam dolorem quod animi assumenda ea labore soluta itaque ex, aperiam veritatis eos ad commodi nobis.</p>
        </article>
      </div>
    </div>
  );
};
