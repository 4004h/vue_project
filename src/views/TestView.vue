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
<!-- 
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
      agree : false,
      agree2 : "비동의",
      piza : [],
      tang : "",

</template> -->

<!-- <template>
  <div class="">
    속성연결
    <img src='https://borgssam.github.io/MySite/img/album_01.jpg' title="가방듬"> <br>
    <img :src='img' :title="imgtit"> <br>
    v-bind == : 같은 역활
  </div>
  <div>
    <button :disabled="but_1" :style="red" > 버튼 </button>
    <button :disabled="but_2" :style="blue" > 버튼 </button>
  </div>
      img : "https://borgssam.github.io/MySite/img/album_01.jpg",
      imgtit : '가방듬',
      but_1 : true,
      but_2 : false,
      red  : {color:"red", fontSize : "24px" } ,
      blue : {color:"blue", fontSize : "24px"  } ,
</template> -->
<!-- 
<template>
  <div class="br"></div>
  <table style="border: 1px solid black; border-collapse: collapse;">
    <thead >
      <tr>
        <th>제품명</th>
        <th>가격</th>
        <th>품명</th>
        <th>배송료</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, index) in goods" :key="index">
        <td> {{ value.name }} </td>
        <td> {{ value.price }} </td>
        <td> {{ value.category }} </td>
        <td> {{ value.delivery }} </td>
      </tr>
    </tbody>
  </table>
  <div>

    <p v-if="true">호랑이</p>
    <p v-if="false">사자</p>
    <p v-else-if="true">호랑이</p>
    <p v-show="true">사자</p>

    <div>
      <label> 점수입력 : 
        <input type="number" v-model="score">
      </label>
      <p v-if="score>=90" >A학점</p>
      <p v-else-if="score>=80">B학점</p>
      <p v-else-if="score>=70">C학점</p>
      <p v-else-if="score>=60">D학점</p>
      <p v-else>E학점</p>
    </div>
    <div>
      <label> 국어 점수입력 : 
        <input type="number" v-model="kor">
      </label>
      <br>
      <label> 영어 점수입력 : 
        <input type="number" v-model="eng">
      </label>
      <br>
      <label> 수학 점수입력 : 
        <input type="number" v-model="mat">
      </label>
      <p v-if="avg>=90" >A학점 ({{ avg }})</p>
      <p v-else-if="avg>=80">B학점 ({{ avg }})</p>
      <p v-else-if="avg>=70">C학점 ({{ avg }})</p>
      <p v-else-if="avg>=60">D학점 ({{ avg }})</p>
      <p v-else>E학점 ({{ avg }})</p>
    </div>
    <div>
      <button v-on:click="avgCal">계산</button> 
    </div>
  </div>
  <br>
  <div>
    <label> <input type="number" v-model="gugudan"> 단</label>
    <br>
    <p> {{ gugudan }}단 </p>
    <p v-for="(v,i) in 8" :key="i">
      {{ gugudan }} * {{ i+2 }} = {{ gugudan * (i+2) }}
    </p>
  </div>

  <div class="br"></div>
</template>
<script>
export default {
  name: 'TestView',
  data() {
    return {
      goods : [
        {"name":"마우스", "price":12500, "category":"PC 용품", "delivery":1000},
        {"name":"키보드", "price":22500, "category":"PC 용품", "delivery":2000},
        {"name":"모니터", "price":32500, "category":"PC 용품", "delivery":3000},
      ],
      score : 0,
      kor : 0 ,
      eng : 0 ,
      mat : 0 ,
      avg : 0 ,
      gugudan : 2,
    };
  },
  computed:{
    // avg() {
    //   return Math.round( (this.kor + this.eng + this.mat) / 3 )
    // }
    
  },
  methods:{
    avgCal() {
      this.avg = Math.round( (this.kor + this.eng + this.mat) / 3 )
    }
  }

};
</script>

<style scoped>
  table{
    width: 100%;
  }

  td, th{
    border : 1px solid black
  }
  .br
  {
    height: 15vh;
  }
</style> -->

<template>
  <div class="">
    <select v-model="cityValue" @change="changeCity" >
      <option value="서울" >서울</option>
      <option value="부산" >부산</option>
      <option value="대구" >대구</option>
      <option value="수원" >수원</option>
      <option value="광주" >수원</option>
    </select>
    <p> {{ mes }} </p>
  </div>

  <div>
    <label>
      이메일 : 
      <input type="text" v-model="emailValue" @input="changeEmail" placeholder="이메일 입력">
    </label>
    <p v-if="errEmail" >{{errEmail}}</p>
  </div>
  <div>
    <label>
      비번 : 
      <input title="(숫자 영문 1개 이상 포함 @#제외)" type="text" v-model="pwdValue1" @input="changePwd" placeholder="비번 입력  "> <br>
    </label>
    <p v-if="errPwd" >{{errPwd}}</p>
    <label>
      비번 확인 : 
      <input type="text" v-model="pwdValue2" @input="changePwd" placeholder="비번 확인">
    </label>
    <p v-if="errPwd2" >{{errPwd2}}</p>

  </div>
</template>

<script>
export default {
  name: 'TestView',
  components: {
    
  },
  data() {
    return {
      cityValue : '수원',
      mes : '',
      emailValue : "",
      errEmail : '',
      pwdValue1 : "",
      pwdValue2 : "",
      errPwd : '',
      errPwd2 : '',
    };
  },
  methods: {
    changeCity() {
      
      switch (this.cityValue) {
        case '서울':
          this.mes = "안녕"
          break;
        case '부산':
          this.mes = "안늉"
          
          break;
        case '대구':
          this.mes = "안냥"
          
          break;
        case '수원':
          this.mes = "안뇽"
          
          break;
        case '광주':
          this.mes = "안눵"
          break;

        default:
          break;
      }
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
      // const pwdPattern = /^(?!.*[@#])(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]+$/; 
      const hasN = /[\d]/
      const hasW = /[a-zA-Z]/
      const hasG = /^(?!.*[@#]).*$/
      if(this.pwdValue1 === '') {
        this.errPwd = '비번 입력'
      }
      else if(this.pwdValue1.length < 8) {
        this.errPwd = '비번 8자리 이상 입력'
      }
      else if(!hasN.test(this.pwdValue1)) {
        this.errPwd = '비번 숫자를 입력'
      }
      else if(!hasW.test(this.pwdValue1)) {
        this.errPwd = '비번 영문를 입력'
      }
      else if(!hasG.test(this.pwdValue1)) {
        this.errPwd = '비번 @#제외'
      }
      else if(this.pwdValue2 === '') {
        this.errPwd = '비번 확인 입력'
      }
      else if(this.pwdValue2 === this.pwdValue1) {
        this.errPwd2 = '비번이 일치함'
      }
      else {
        this.errPwd2 = "비번이 일치하지 않음"
      }
    },
  }
};
</script>

<style scoped>

</style>