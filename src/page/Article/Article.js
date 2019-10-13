import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import style from './style.module.css';

import { getFormtedDate } from '../../utils/util';

const Article = (props) => {
  const history = useHistory();
  const routeParams = useParams();
  const articleId = routeParams.id;
  const { list, searchMap } = props.notes || {};
  const articleIndex = searchMap[articleId];
  const articleData = list[articleIndex];

  return (
    <div>
      <header className={style.topbar} style={{ backgroundImage: `url(${articleData.cover})` }}>
        <div className={style.topbarMask} />
        <i 
          onClick={() => history.goBack()}
          className={`iconfont icon-jiantou-px ${style.topbarBackIcon}`}
        />
        <span 
          onClick={() => history.push(`/edit/${articleData._id}`)}
          className={style.topbarEditIcon}
        >
          EDIT
        </span>
      </header>
      {
        articleData.last_edited_content ? (
          <div className={style.draftTip}>该笔记有暂未发布的草稿，点击编辑继续创作~</div>
        ) : null
      }
      <div className={style.articleContainer}>
        <h1 className={style.title}>{articleData.title}</h1>
        <p className={style.time}>{getFormtedDate(new Date(articleData.created_at))}</p>
        <div className={style.splitLine}></div>
        <article className={style.article} dangerouslySetInnerHTML={{ __html: articleData.content }}></article>
      </div>
    </div>
  );
};


const mapState = state => ({
  ...state,
});

export default connect(mapState)(Article);
