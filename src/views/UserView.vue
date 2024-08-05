<template>
  <div class="">
    <h1> 사용자 정보 </h1>
    <div >
      <p> <b> 이름 : </b> {{ user.name }} </p>
      <p> <b> 메일 : </b> {{ user.email }} </p>
    </div>
    <button @click="saveUserData1"> 사용자정보저장 </button>
    <button @click="saveUserData2"> 사용자정보저장 </button>

    <br>
    <input type="text" v-model="editName"  >
    <input type="text" v-model="editEmail" >
    <button @click="saveUser"> 저장 </button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'UserView',
  setup() {
    const store = useStore()
    const user = computed(()=>store.state.user)

    const editName  = ref('')
    const editEmail = ref('')

    const saveUserData1 = ()=>{
      const data = {name : "이순신", email : "ceo@sea.com"}
      store.commit("setUser", data)
    }
    const saveUserData2 = ()=>{
      const data = {name : "장발장", email : "thief@france.com"}
      store.commit("setUser", data)
    }

    const saveUser = ()=>{
      console.log(editName);
      
      const data = {name : editName.value, email : editEmail.value}
      store.commit("setUser", data)
    }

    return{
      user, editName, editEmail, saveUserData1, saveUserData2, saveUser
    }
  },
  created() {
    // 컴포넌트가 생성될 때 실행될 로직을 작성합니다.
  },
  mounted() {
    // 컴포넌트가 DOM에 마운트된 직후 실행될 로직을 작성합니다.
  },
  unmounted() {
    // 컴포넌트가 파괴되기 전 실행될 로직을 작성합니다.
  }
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>