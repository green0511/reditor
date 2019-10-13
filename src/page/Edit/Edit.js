import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { dispatch } from '../../store';

import Quill from 'quill';

import 'quill/dist/quill.snow.css';

import style from './style.module.css';

const Edit = (props) => {
  const [editor, setEditor] = useState(null);
  const [title, setTitle] = useState('');
  const history = useHistory();
  const routeParams = useParams();
  let articleToEdit = null;

  if (routeParams.id) {
    const { list, searchMap } = props.notes || {};
    const articleIndex = searchMap[routeParams.id];
    const articleData = list[articleIndex];
    articleToEdit = articleData;
  }

  useEffect(() => {
    if (!editor) {
      const newEditor = new Quill('#editor', {
        modules: {
          toolbar: [
            [{ header: [1, 2, 3, 4, 5, false] }],
            [{ 'color': [] }, { 'background': [] }],  
            ['bold', 'italic', 'underline', 'strike', 'align'],
          ]
        },
        theme: 'snow'
      });
      setEditor(newEditor);
      if (articleToEdit) {
        if (!title) setTitle(articleToEdit.title);
        newEditor.root.innerHTML = articleToEdit.content;
      }
    }
  }, [editor, articleToEdit, title]);

  const submit = () => {
    const el = document.querySelector('.ql-editor');
    const content = el.innerHTML;
    const text = editor.getText() || '';
    dispatch.notes.submit({
      ...(articleToEdit || {}),
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

const mapState = (state) => ({ ...state });

export default connect(mapState)(Edit);
