<template>
  <div id="app">
    <div style="height: 100%;">
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
            <img slot="icon" src="./assets/main.png"/>
            主页
          </mt-tab-item>

          <mt-tab-item id="4">
            <img slot="icon" src="./assets/picture.png"/>
            附件拍摄
          </mt-tab-item>

        </mt-navbar>
      </div>
      <router-view/>
    </div>
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
            vm.$router.replace('Main');
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
    color: #2c3e50;
  }
  .header {
    background: -webkit-gradient(linear, left top, right top, from(#6d99ff), to(#3c6cde));
    height: 125px;
    position: relative;
    top: 0;
    width: 100%;
    z-index: 999;
  }
  /*复写原有的样式，控制选中item的指示器的样式*/
  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 0 solid #3c6cde;
  }

  /*复写原有的样式，控制未选中item的图片的样式*/
  .mint-navbar .mint-tab-item img {
    margin-top: 10px;
    height: 35px;
    width: 35px;
    margin-left: -20%;
  }

  /*复写原有的样式，控制选中item的图片的样式*/
  .mint-navbar .mint-tab-item.is-selected img {
    width: 45px;
    height: 45px;
    margin-top: 0;
    margin-left: -30%;

  }
  /*复写原有的样式，控制选中item的label样式*/
  .mint-navbar .mint-tab-item.is-selected .mint-tab-item-label {
    margin-top: 30px;
    color: #fff;
    font-size: medium;
  }
  /*复写原有的样式，控制未选中的item的样式*/
  .mint-tab-item-label {
    margin-top: 20px;
    color: #ddd;
  }
  .mint-navbar .mint-tab-item {
    z-index: 999;
  }


</style>
