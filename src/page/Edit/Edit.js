import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { dispatch } from '../../store';

import Quill from 'quill';

import 'quill/dist/quill.snow.css';

import style from './style.module.css';

export default () => {
  const [editor, setEditor] = useState(null);
  const [ title, setTitle ] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (!editor) {
      setEditor(new Quill('#editor', {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }],
            [{ 'color': [] }, { 'background': [] }],  
            ['bold', 'italic', 'underline', 'strike', 'align'],
          ]
        },
        theme: 'snow'
      }));
    }
  }, [editor]);

  const submit = () => {
    const el = document.querySelector('.ql-editor');
    const content = el.innerHTML;
    const text = editor.getText() || '';
    dispatch.notes.submit({
      title: title || '无标题',
      content: content || '',
      summary: text.slice(0, 30),
    });

    history.push('/');
  };

  return (
    <div className={style.editorContainer}>
      {/* 标题输入框 */}
      <div className={style.titleInputContainer}>
        <input
          className={style.titleInput}
          onChange={(e) => setTitle(e.currentTarget.value)}
          value={title}
          placeholder={'点此设置标题'}
        />
      </div>
      {/* 编辑器 */}
      <div
         className={style.contentInput}
        id="editor"
      >
      </div>
      <div className={style.iconDone} onClick={() => submit()}>
        <i className="iconfont icon-jurassic_complete" />
      </div>
    </div>
  );
}
