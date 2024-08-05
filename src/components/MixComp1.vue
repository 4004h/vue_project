<template>
  <div class="">
    <h2> 콤포넌트 1 </h2>
    <p> {{ sharedData }} </p>
    <button @click="shareMethod"> 공유메서드 </button>
  </div>
</template>

<script>
import { commonMixin } from '@/mixins/commonMixIn';
export default {
  name: 'MixComp1',
  mixins : [commonMixin],
  mounted() {
    console.log("컴포넌트1 mounted")
  },
  unmounted() {
    console.log("컴포넌트1 unmounted")
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>