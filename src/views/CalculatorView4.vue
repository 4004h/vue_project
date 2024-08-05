<template>
  <div class="">
    <!-- 내용을 추가하세요 -->
    <h3>CalculatorView2</h3>
    <input type="text" v-model="state.num1" > <span> + </span>
    <input type="text" v-model="state.num2" > <span> = </span>
    <span> {{ state.result }} </span>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'CalculatorView4',
  setup(){
    let state = reactive({
        num1 : 0, //바인딩될 숫자 상태
        num2 : 0, //바인딩될 숫자 상태
        result : computed(() => Number(state.num1) + Number(state.num2)),
        //결과를 저장할 상태
    });
    return{ state }
  }
}
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>