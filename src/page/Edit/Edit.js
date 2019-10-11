import React, { useState, useEffect } from 'react';

import style from './style.module.css';

import { useHistory } from 'react-router-dom';

import { dispatch } from '../../store';

export default () => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const history = useHistory();

  useEffect(() => {
    document.body.classList.add(style.bodyExtraStyle);
    return () => {
      document.body.classList.remove(style.bodyExtraStyle);
    };
  });

  const submit = () => {
    dispatch.notes.submit({
      title: title || '无标题',
      content: content || '',
    });

    history.push('/');
  };

  return (
    <div className={style.editorContainer}>
      <div className={style.editorBar}>
        <i className={`iconfont icon-zitidaxiao`} />
        <i className={`iconfont icon-fuhao-jiacu`} />
        <i className={`iconfont icon-wenziyanse`} />
        <i className={`iconfont icon-qingxie`} />
        <i className={`iconfont icon-xiahuaxian`} />
        <i className={`iconfont icon-shanchuxian`} />
        <i className={`iconfont icon-yiwancheng`} onClick={() => submit()} />
      </div>
      <div className={style.titleInputContainer}>
        <input
          className={style.titleInput}
          onChange={(e) => setTitle(e.currentTarget.value)}
          value={title}
          placeholder={'无标题'}
        />
      </div>
      <textarea
        onChange={(e) => setContent(e.currentTarget.value)}
        value={content}
        className={style.contentInput}
      ></textarea>
    </div>
  );
}
