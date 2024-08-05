<template>
  <div class="">
    <mix-comp-1/>
    <mix-comp-2/>
  </div>
</template>

<script>
import MixComp1 from '@/components/MixComp1';
import MixComp2 from '@/components/MixComp2';
export default {
  name: 'MixView',
  components: {
    MixComp1,
    MixComp2
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
  },
};
</script>

<style scoped>
/* 스타일을 추가하세요 */
</style>