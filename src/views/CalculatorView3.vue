<template>
  <div class="">
    <!-- 내용을 추가하세요 -->
    <h3>CalculatorView2</h3>
    <input type="text" v-model="num1" @keyup="plusNum"> <span> + </span>
    <input type="text" v-model="num2" @keyup="plusNum"> <span> = </span>
    <span> {{ result }} </span>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from 'vue';
function plusNum() {
  //반응형 상태객체 : 속성이변경될때마다 자동으로 돔업데이트
  let state = reactive({
    num1 : 0, //바인딩될 숫자 상태
    num2 : 0, //바인딩될 숫자 상태
    result : computed(() => Number(state.num1) + Number(state.num2)),
    //결과를 저장할 상태
  });
  //toRefs : 방응형 상태객체 -> 일반 자바스크립트 객체 
  //방응형 상태객체를 일반 자바스크립트 객체로 변환
  return toRefs(state)
}
export default {
  name: 'CalculatorView3',
  setup(){
    //구조분해할당으로 num1,num2,result값을 얻기
    let {num1,num2,result} = plusNum()

    //구조분해된 변수값을 반환
    return{ num1,num2,result }
  }
}
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>