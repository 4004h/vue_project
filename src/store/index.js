import { createStore } from 'vuex'
import persistedstate from 'vuex-persistedstate'

const store = createStore(
  {
    state() {
      return {
        user:{}
      }
    },
    getters : {

    },
    //변의정의
    mutations : {
      //함수값을 넣는 함수
      setUser(state,data) {
        state.user = data
      }
    },
    actions : {

    },
    //상태를 지속적으로 저장하는 역활
    plugins : [
      persistedstate({
        paths:['user'],
      }),

    ]

  }
)

export default store