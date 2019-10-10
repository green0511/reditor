const mockData = [
  {
    create_at: new Date(2017, 8, 17), title: '当我了解你只活在记忆里头当我了解你只活在记忆里头当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
  },
  {
    create_at: new Date(2017, 8, 17), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离如果你爱着我,而我也爱着你,结果还是有段跨不过的距离如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
  },
  {
    create_at: new Date(2017, 8, 17), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
  },
  {
    create_at: new Date(2017, 8, 17), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
  },
  {
    create_at: new Date(2017, 8, 17), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
  },
  {
    create_at: new Date(2017, 8, 17), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
  },
  {
    create_at: new Date(2017, 8, 17), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
  },
  {
    create_at: new Date(2017, 8, 17), title: '当我了解你只活在记忆里头', summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
  },
  {
    create_at: new Date(2017, 10, 17), title: '当你离开的时候',  summary: '如果你爱着我,而我也爱着你,结果还是有段跨不过的距离',
  }
];

export default {
  state: {
    list: mockData,
  },
  reducers: {
    // // handle state changes with pure functions
    // increment(state, payload) {
    //   return state + payload
    // }
  },
  effects: (dispatch) => ({
    // // handle state changes with impure functions.
    // // use async/await for async actions
    // async incrementAsync(payload, rootState) {
    //   await new Promise(resolve => setTimeout(resolve, 1000))
    //   dispatch.count.increment(payload)
    // }
  })
}
