<template>
  <!-- v-model value = data 연동-->
  <div class="Basic">
    <h3>------------v-model : value 값 연결------------</h3>
    <h1>hellow, {{ title }}</h1>
    <h1>{{ title }}는 수운 장안구에 있습니다.</h1>
    <p>{{message}}</p>
    <p v-html="message"></p>
  </div>
  <div>
    <input type="number" v-model="nickname">
    <p v-html="nickname"></p>

    <input type="text" v-model="age">
    <p v-html="age"></p>
  </div>
  <div>
    <textarea v-model="message" cols="30" rows="10"></textarea>
  </div>
  <div>
    <select name="city" v-model="city">
      <option value="0" >서울</option>
      <option value="1" >부산</option>
      <option value="2" >대구</option>
      <option value="3" >수원</option>
    </select>
  </div>
  <div>
    <label>
      <input type="checkbox" v-model="cbox">
      호강이
      {{cbox}}
    </label>
    <br>
    <label>
      <input type="checkbox" true-value="동의" false-value="비동의" v-model="cbox2">
      {{cbox2}}
    </label>
  </div>
  <div>
    <p>좋아하는 음식</p>
      <label><input type="checkbox" v-model="gfood" value="마라탕">마라탕</label>
      <label><input type="checkbox" v-model="gfood" value="민초">민초</label>
      <label><input type="checkbox" v-model="gfood" value="홍어">홍어</label>

    <p>싫어하는 음식</p>
      <label><input type="checkbox" v-model="bfood" value="마라탕">마라탕</label>
      <label><input type="checkbox" v-model="bfood" value="민초">민초</label>
      <label><input type="checkbox" v-model="bfood" value="홍어">홍어</label>
    <br>
    <p>당신이 좋아하는 음식 {{gfood}} 입니다</p>
    <p>당신이 싫어하는 음식 {{bfood}} 입니다</p>
  </div>
  <div>
    <p> 당신의 성별은? </p>
    <label> <input type="radio" v-model="gender" value="남자"> 남자 </label>
    <label> <input type="radio" v-model="gender" value="여자"> 여자 </label>
    <label> <input type="radio" v-model="gender" value="무언가"> 남자도 여자도 아닌 무언가 </label>
    <label> <input type="radio" v-model="gender" value="크루아상"> 크루아상 </label>
    <p> 당신의 성별은 {{gender}}입니다</p>
  </div>

  <h3>------------ v-bind : 속성 연결 ------------</h3>
  <div>
    <img v-bind:src="img" alt="" srcset="" v-bind:title="tooltip">
  </div>
  <div>
    <button v-bind:disabled="show" >눌러</button>
    <button v-bind:disabled="show2" >눌러</button>
  </div>
  <div>
    <button v-bind:style="btn" >눌러</button>
    <button v-bind:style="btn2" >눌러</button>
  </div>

  <h3>------------ v-if v-show 제어문 처리 ------------</h3>
  <div>
    <table style="border:1px solid gray">
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="index" v-for="(itme, index) in products">
          <td>{{ itme.name }}</td>
          <td>{{ itme.price }}</td>
          <td>{{ itme.category }}</td>
          <td>{{ itme.delivery }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div>
    <!-- v-if 만드느냐 아니냐 -->
    <p v-if="true">if 참일때</p>
    <p v-if="false">if 거짓일때</p>
    <!-- v-show 보이느냐 마느냐 -->
    <p v-show="true">show 참일때</p>
    <p v-show="false">show 거짓일때</p>
  </div>

  <h3>------------ v-on 제어문 처리 ------------</h3>
  
  <div>
    <button @:click="counterBtn">증가</button>
    <button @:click="counterBtn2">감소</button>
    <p> counter : {{counter}} </p>

    <input type="number" v-model="countValue">
    <button @:click="counterApply">적용</button>
    <br>
    <button @:click="counterBtn(), showMsg()">증가알림</button>
    <button @:click="counterBtn2(),showMsg()">감소알림</button>

  </div>



  <div class="br"></div>
</template>

<script>
export default {
  name: 'BasicView',
  components: {
    
  },
  data() {
    return {
      title : "연세IT",//머스케치 : 데이터 바인딩
      message : "<b>연세IT</b>는 <b><span style='color:red'> 5년 </span></b>우수직업학교입니다.",
      nickname : "돌쇠",
      age : 22,
      city : '3',
      cbox : true,
      cbox2 : "비동의",
      gfood : [],
      bfood : [],
      gender : '남자',
      img : "https://lh3.googleusercontent.com/p/AF1QipM_BzBUi8MvcJRfo1ueA4s1cNvOhI7U3tFFnR25=s680-w680-h510",      
      tooltip : "툴팁메시지",
      show : true,
      show2 : false,
      btn : {
        backgroundColor : "blue",
        color : 'yellow',
        fontSize : "32px"
      },
      btn2 : {
        backgroundColor : "red",
        color : 'white',
        fontSize : "32px"
      },
      products : [
        {"name":"마우스1", "price":12500, "category":"PC 용품1", "delivery":1000},
        {"name":"마우스2", "price":22500, "category":"PC 용품2", "delivery":2000},
        {"name":"마우스3", "price":32500, "category":"PC 용품3", "delivery":3000},
      ],
      counter : 0,
      countValue : 10,
      
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
    counterBtn() {
      this.counter++
      // counter 는 안됨 
    },
    counterBtn2() {
      this.counter--
      // counter 는 안됨 
    },
    counterApply() {
      this.counter = this.countValue
    },
    showMsg() {
      alert(this.counter+"현제값")
    }
  }
};
</script>

<style scoped>
  table{
    border-collapse: collapse;
    width: 100%;
  }
  td,th{
    border: 1px solid gray;
    text-align: left;
    padding: 8px;
  }
  th{
    text-align: center;
    font-weight: 600;
  }
  .br
  {
    height: 50vh;
  }
</style>