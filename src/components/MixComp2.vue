<template>
  <div class="">
    <h2> 콤포넌트 2 </h2>
    <p> {{ sharedData }} </p>
    <button @click="shareMethod"> 공유메서드 </button>
  </div>
</template>

<script>
import { commonMixin } from '@/mixins/commonMixIn';
export default {
  name: 'MixComp2',
  mixins : [commonMixin],
  //훅 useEffect 같은거
  //mounted 들어갈때
  mounted() {
    console.log("컴포넌트2 mounted")
  },
  //unmounted 나갈때
  unmounted() {
    console.log("컴포넌트2 unmounted")
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>