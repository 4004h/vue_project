<template>
  <div class="son">
    <!-- 내용을 추가하세요 -->
    <p>Son02</p>
    <Gson21 ref="gson21"/>
    <Gson22 ref="gson22" @event_report="receiveEvent"/>
    
    <input type="text" v-model="sonmag" >
    <button value="버튼02" @click="clickBut">버튼</button>
  </div>
</template>

<script>
import Gson21 from './Gson21';
import Gson22 from './Gson22';

export default {
  name: 'Son-02',
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
    Gson21, Gson22
  },
  data() {
    return {
      sonmag : '',
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
    testOrder(i,v) {
      this.$refs.gson21.sonOrder(i,v)
      this.$refs.gson22.sonOrder(i,v)
    },
    clickBut() {
      this.$refs.gson21.msg = this.sonmag
      this.$refs.gson22.msg = this.sonmag
    },
    receiveEvent(data) {
      alert(data)
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

<style scoped>
.son{
  background-color: greenyellow;
}
.gson{
  background-color: yellow;
}
</style>