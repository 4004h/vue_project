export const commonMixin = {
  data() {
    return {
      sharedData:'공유데이터'
    }
  },
  methods: {
    shareMethod(){
      this.sharedData = '공유데이터 변경' 
    }
  },
  mounted() {
    console.log("믹스인 mounted")
  },
  unmounted() {
    console.log("믹스인 unmounted")
  },
}