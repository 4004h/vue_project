<template>
  <div class="">
    <Son01 ref="son01"/>
    <Son02 ref="son02"/>
    {{ grlend }}
    <button @click="textClick" value="text버튼">버튼 00</button>
    
  </div>
</template>

<script>
import Son01 from '@/components/Son01.vue';
import Son02 from '@/components/Son02.vue';

export default {
  name: 'DeepView2',
  props: {
    // 문자열 타입의 prop 예시
    //sampleString: {
    //  type: String,
    //  default: ''
    //},
    // 숫자 타입의 prop 예시
    //sampleNumber: {
    //  type: Number,
    //  default: 0
    //},
    // 배열 타입의 prop 예시
    //sampleArray: {
    //  type: Array,
    //  default: () => []
    //},
    // 객체 타입의 prop 예시
    //sampleObject: {
    //  type: Object,
    //  default: () => ({})
    //}
  },
  components: {
    // 추가적으로 사용할 컴포넌트들을 등록합니다.
    Son01, Son02
  },
  provide() {
    return { grlend : this.grlend.length, grlendMin : Math.min(...this.grlend) }
  },
  data() {
    return {
      grlend : [10,2,3,4,5,]
      // 컴포넌트의 데이터를 초기화합니다.
    };
  },
  watch: {
    // sample1() {
    //   console.log('');
    // }
    // 데이터를 감시하고 처리할 로직을 작성합니다.
  },
  computed: {
    // sample2() {
    //   return '';
    // }
    // 필요한 계산된 속성을 정의합니다.
  },
  methods: {
    textClick() {
      this.$refs.son01.testOrder(2,"blue")
      this.$refs.son02.testOrder(2,"blue")
    }
    // sample3() {
    //   return '';
    // }
    // 컴포넌트에서 사용할 메서드를 정의합니다.
  },
  setup() {
    // Vue 3 Composition API의 setup 함수에서 추가적인 로직을 처리할 수 있습니다.
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

<style >
.son{
  background-color: greenyellow;
  padding: 10px;
  margin: 20px;
}
.gson{
  background-color: yellow;
  margin: 20px;
}
.br
{
  height: 20vh;
}
</style>