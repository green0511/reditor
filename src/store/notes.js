import { getRandomId, getRandomCover, getFirstNote } from '../utils/util';
import storage from '../utils/storage';

const LS_KEY_NOTES = 'LS_KEY_NOTES';
const cacheList = storage.getItem(LS_KEY_NOTES);

const initList = cacheList || [ getFirstNote() ];

// 生成 id => index 的映射，便于根据 id 查找对应的 item 数据
const generateSearchMapFromList = (list) => {
  const result = {};
  list.forEach((item, index) => {
    result[item._id] = index;
  });
  return result;
};

storage.setItem(LS_KEY_NOTES, initList);

export default {
  state: {
    list: initList,
    searchMap: generateSearchMapFromList(initList),
  },
  reducers: {
    addNote(state, payload) {
      return {
        ...state,
        list: [
          ...state.list,
          payload,
        ],
      }
    },
    setSearchMap(state, payload = {}) {
      return {
        ...state,
        searchMap: payload,
      };
    }
  },
  effects: (dispatch) => ({
    submit(payload) {
      const { title = '无标题', content = '', summary = '' } = payload;
      dispatch.notes.addNote({
        _id: getRandomId(32, 16),
        created_at: Date.now(),
        updated_at: Date.now(),
        title,
        content,
        summary: summary,
        cover: getRandomCover(),
        status: 1,
        last_edited_content: '',
      });
      dispatch.notes.refreshSearchMap();
      dispatch.notes.saveToLs();
    },
    refreshSearchMap(payload, rootState) {
      const searchMap = generateSearchMapFromList(rootState.notes.list);
      console.log(searchMap);
      dispatch.notes.setSearchMap(searchMap);
    },
    saveToLs(payload, rootState) {
      storage.setItem(LS_KEY_NOTES, rootState.notes.list);
    }
  })
}
