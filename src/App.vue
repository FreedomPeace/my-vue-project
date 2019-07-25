<template>
  <div id="app">
    <div class="header">
      <mt-navbar
        v-model="selected"
        style="background-color: #fff0;padding-top: 15px">

        <mt-tab-item id="1">
          <img slot="icon" src="./assets/nom_apply.png"/>
          基本信息
        </mt-tab-item>

        <mt-tab-item id="2">
          <img slot="icon" src="./assets/person.png"/>
          个人信息
        </mt-tab-item>

        <mt-tab-item id="3">
          <img slot="icon" src="./assets/mail.png"/>
          邮寄地址
        </mt-tab-item>

        <mt-tab-item id="4">
          <img slot="icon" src="./assets/picture.png"/>
          附件拍摄
        </mt-tab-item>

      </mt-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        selected: "1"

      }
    },
    watch: {
      selected: function (newValue, oldValue) {
        let vm = this;
        switch (newValue) {
          case '1':
            vm.$router.replace('basic');
            break;
          case '2':
            vm.$router.replace('detail');
            break;
          case '3':
            vm.$router.replace('mail');
            break;
          case '4':
            vm.$router.replace('picture');
            break;
        }
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .header {
    background: -webkit-gradient(linear, left top, right top, from(#6d99ff), to(#3c6cde));
    height: 125px;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 999;
  }

</style>
