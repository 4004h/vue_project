<template>
  <div class="">
    <!-- 내용을 추가하세요 -->
    <h3>CalculatorView2</h3>
    <input type="text" v-model="state.num1" @keyup="plusNum"> <span> + </span>
    <input type="text" v-model="state.num2" @keyup="plusNum"> <span> = </span>
    <span> {{ state.result }} </span>
  </div>
</template>

<script>
import { reactive } from 'vue';
export default {
  name: 'CalculatorView2',
  setup(){
    //반응형 상태객체 : 속성이변경될때마다 자동으로 돔업데이트
    let state = reactive({
      num1 : 0,
      num2 : 0,
      result : 0,
    });
    function plusNum() {
      state.result = Number(state.num1) + Number(state.num2)
    }
    return{ state, plusNum }
  }
}
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>