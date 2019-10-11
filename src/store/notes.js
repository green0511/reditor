// const mockData = [
//   {
//     create_at: new Date(2017, 8, 17).getTime(), title: '当我了解你只活在记忆里头当我了解你只活在记忆里头当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
//   },
//   {
//     create_at: new Date(2017, 8, 17).getTime(), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离如果你爱着我,而我也爱着你,结果还是有段跨不过的距离如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
//   },
//   {
//     create_at: new Date(2017, 8, 17).getTime(), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
//   },
//   {
//     create_at: new Date(2017, 8, 17).getTime(), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
//   },
//   {
//     create_at: new Date(2017, 8, 17).getTime(), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
//   },
//   {
//     create_at: new Date(2017, 8, 17).getTime(), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
//   },
//   {
//     create_at: new Date(2017, 8, 17).getTime(), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
//   },
//   {
//     create_at: new Date(2017, 8, 17).getTime(), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
//   },
//   {
//     create_at: new Date(2017, 10, 17).getTime(), title: '当你离开的时候',  summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
//   }
// ];

export default {
  state: {
    list: [],
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
    }
  },
  effects: (dispatch) => ({
    submit(payload) {
      const { title = '无标题', content = '' } = payload;
      dispatch.notes.addNote({
        create_at: Date.now(),
        title,
        content,
        summary: content.slice(0, 30),
      });
    }
  })
}
