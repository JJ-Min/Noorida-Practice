<template>
  <div>
    <div class="head-title flex-container flex-center-sort">
      <div class="icon-home flex-container flex-center-sort">
        <vs-button color="pink" type="border" @click="icon_home()" icon="home"></vs-button>
      </div>
      <div class="title-FindPassword ">
        <h1 class=" text-container">비밀번호 찾기</h1>
      </div>
    </div>
    <div class="margin--40">
    <div class="flex-container flex-center-sort ">
      <vs-input class="inputx" placeholder="이름" v-model="value_name"/>
    </div>
    <div class ="flex-container flex-center-sort ">
      <vs-input class="inputx" placeholder="ID" v-model="value_id"/>
    </div>
    <div class="flex-container flex-center-sort ">
      <vs-input class="inputx" placeholder="이메일" v-model="value_email"/>
    </div>
    </div>
    <div class="flex-container flex-center-sort margin--30">
      <vs-button color="primary" type="border"  @click="FindPassword()">비밀번호 찾기</vs-button>
      <router-link v-if="flag" :to="{name :'LoginPage'}"></router-link>
    </div>

    <div class="flex-container flex-center-sort margin--30">
      <router-link :tag="span" class="id-password-link" :to="{name: 'LoginPage'}">로그인</router-link>
      <router-link :tag="span" class="id-password-link" :to="{ name: 'FindIdPage' }">
        아이디 찾기</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FindPasswordPage.vue',
  data() {
    return {
      value_name: '',
      value_email: '',
      value_id: '',
      flag: false,
    };
  },
  methods: {
    FindPassword() {
      if (1) {
        alert('해당이메일로 새 비밀번호를 전송했습니다.');
        this.flag = true;
        console.log(this.flag);
      } else {
        alert('해당 정보가 없습니다.');
      }
    },
    icon_home() {
      window.history.go(-1);
    },
  },
};
</script>

<style scoped>
  .id-password-link{
    font-size: 12px;
    text-decoration: underline blue;
    margin: 10px;
    color: blue;
    align-text: right;
  }
  .inputx{
    margin: 10px;
  }
  .icon-home{
    width: 20%;
  }
  .head-title{
    height: 100px;
    background: #5d7f8e;
    color: white;
  }
  .title-FindPassword{
    width: 80%;
    text-align: left;
    padding-left:25px ;
  }
</style>
