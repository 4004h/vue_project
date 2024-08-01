<!-- <template lang="Test">
  <div>
    <p> 연세IT <b>미래</b>교육원 </p>
    <p> {{ title }} </p>
    <p v-text="title"></p>
    <p v-html="title"></p>
  </div>
</template>
<script>
export default {
  name : 'TestView',
  components : {},
  data() {
    return{
      title : "연세IT<b>미래</b>교육원",
    }
  },
  methods : {},
}
</script>
<style scoped>
  
</style> -->

<!-- <template>
  <div class="">
    <input type="text"  value="ss" > <br>
    <input type="text" v-bind:value="nick"> <br>
    model 양방향?
    <input type="text" v-model="nick"> <br>
    <input type="number" v-model="age"> <br>
    <textarea cols="30" rows="10"  >동해물과 백두산이</textarea>
    <textarea cols="30" rows="10" v-model="mes" >  </textarea>
  </div>
</template> -->

<template>
  <div class="">
    <input type="checkbox" id="but"> <label for="but"> 동의 </label> <br>

    <label > <input type="checkbox" v-model="agree">  동의 </label> <br>
    <label > <input type="checkbox" v-model="agree2" 
    true-value="동의" false-value="비동의"> {{ agree2 }} </label> <br>
  </div>

  <div class="">
    <p> 피자 토핑 </p>
    <label > <input type="checkbox" v-model="piza" value="베이컨"> 베이컨 </label> <br>
    <label > <input type="checkbox" v-model="piza" value="치즈"> 치즈 </label> <br>
    <label > <input type="checkbox" v-model="piza" value="파인애플"> 파인애플 </label> <br>
    <p> 피자 토핑 {{ piza }}</p>
  </div>

  <div class="">
    <p> 탕수육파 </p>
    <label > <input type="radio" v-model="tang" value="부먹"> 부먹 </label> <br>
    <label > <input type="radio" v-model="tang" value="찍먹"> 찍먹 </label> <br>
    <p> 탕수육 <span style="color: red; font-weight: bold;"> {{ tang }}파 </span></p>
  </div>
</template>

<script>
export default {
  name: 'TestView',
  data() {
    return {
      agree : false,
      agree2 : "비동의",
      piza : [],
      tang : "",
    };
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
  methods: {
    
  }
};
</script>

<style scoped>

</style>