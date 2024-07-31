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
    <button @:click="counterBtn(), showMsg()">증가알림</button>
    <button @:click="counterBtn2(),showMsg()">감소알림</button>
    <br>
    <input type="number" v-model="countValue">
    <button @:click="counterApply">적용</button>
  </div>

  <br><br>
  
  <div>
    <select v-model="cityValue" @change="changeCity" >
      <option value="서울" >서울</option>
      <option value="부산" >부산</option>
      <option value="대구" >대구</option>
      <option value="수원" >수원</option>
    </select>
  </div>

  <br><br>

  <div>
    <input type="text" v-model="emailValue" @input="changeEmail" placeholder="이메일 입력">
    <p v-if="errEmail" >{{errEmail}}</p>
  </div>
  <br>
  <div>
    <input type="text" v-model="pwdValue1" @input="changePwd" placeholder="비번 입력"> <br>
    <input type="text" v-model="pwdValue2" @input="changePwd" placeholder="비번 확인">
    <p v-if="errPwd" >{{errPwd}}</p>
  </div>

  <div>
    <p>{{hellow()}}</p>
    <p>{{hellow()}}</p>
    <p>{{hellow()}}</p>
    <p>{{hellow2}}</p>
    <p>{{hellow2}}</p>
    <p>{{hellow2}}</p>
  </div>

  <div>
    <input type="text" v-model="lastName" @change="changeLastName">
    <input type="text" v-model="firstName" @change="changeFirstName">
    <p> {{ computedName }} </p>
    <p> {{methodName()}} </p>
    <p> {{fullName}} </p> 
  </div>

  <!-- warch -->
  <h4> user : {{userInfo}} </h4>
  <input type="text" v-model="userName">
  <input type="text" v-model="userAge">

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
      cityValue : "수원",
      emailValue : "",
      errEmail : '',
      pwdValue1 : "",
      pwdValue2 : "",
      errPwd : '',
      lastName : '',
      firstName : '',
      fullName : '',
      userAge : 30,
      userName : '홍길동',
      userInfo : '',
    };
  },
  watch:{//userName가 변경될때 연산
    userName() {
      this.userInfo = this.userName + this.userAge
    },
    userAge() {
      this.userInfo = this.userName + this.userAge
    }
  },
  setup() {
    
  },
  created() {
    
  },
  mounted() {
    
  },
  unmounted() {
    
  },
  computed:{//값이 변경될때만 연산
    hellow2() {
      console.log("hi 호출2");
      return "안녕"
    },

    computedName() {//리턴 값이 변경될때 연산
      console.log("computedName");
      return this.lastName + this.firstName
    }
    
  },
  methods: {//호출 될때마다 연산
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
    },
    changeCity() {
      alert("선택한 도시 "+this.cityValue)
    },
    changeEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if(this.emailValue === '' || emailPattern.test(this.emailValue)) {
        this.errEmail = ''
      }
      else {
        this.errEmail = "이메일 형식에 어긋남"
      }
    },
    changePwd() {
      if(this.pwdValue1 === '') {
        this.errPwd = '비번 입력'
      }
      else if(this.pwdValue1.length < 8) {
        this.errPwd = '비번 8자리 이상 입력'
      }
      else if(this.pwdValue2 === '') {
        this.errPwd = '비번 확인 입력'

      }
      else if(this.pwdValue2 === this.pwdValue1) {
        this.errPwd = ''
      }
      else {
        this.errPwd = "비번이 일치하지 않음"
      }
    },
    hellow() {
      console.log("hi 호출");
      return "안녕"
    },
    changeLastName() {
      this.fullName = this.firstName + this.lastName
    },
    changeFirstName() {
      this.fullName = this.firstName + this.lastName
    },
    methodName() {
      console.log("methodName");
      return this.lastName + this.firstName
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