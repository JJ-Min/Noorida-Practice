<template>
  <div>
    <div class="head-title flex-container flex-center-sort">
      <div class="icon-home flex-container flex-center-sort">
        <vs-button color="pink" type="border" @click="icon_home()" icon="home"></vs-button>
      </div>
      <div class="title-FindId ">
       <h1 class=" text-center flex-container " >아이디 찾기</h1>
      </div>
    </div>
    <div class="margin--40">
      <div class="flex-container flex-center-sort">
        <vs-input class="inputx" placeholder="이름" v-model="name_value"/>
      </div>
      <div class="flex-container flex-center-sort ">
        <vs-input class="inputx" placeholder="이메일" v-model="email_value"/>
      </div>
    </div>
    <div class="flex-container flex-center-sort margin--30">
      <vs-button color="primary" type="border" @click="FindId()">아이디 찾기</vs-button>
    </div>
    <div class="link-move flex-container flex-center-sort margin--bottom-10">
      <router-link :tag="span" class="id-password-link" :to="{name: 'LoginPage'}">로그인</router-link>
      <br>
      <router-link :tag="span" class= "id-password-link" :to="{name:'FindPasswordPage'}">
        비밀번호 찾기</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'FindIdPage.vue',

  updated() {
    console.log(this.name_value);
    console.log(this.email_value);
  },

  data() {
    return {
      name_value: '',
      email_value: '',
    };
  },
  methods: {
    FindId() {

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
    margin : 10px;
  }
  .icon-home{
    width: 20%;
  }
  .head-title{
    height: 100px;
    background: #5d7f8e;
    color: white;
  }
  .title-FindId{
    width: 80%;
    text-align: left;
    padding-left:25px ;
  }

</style>
