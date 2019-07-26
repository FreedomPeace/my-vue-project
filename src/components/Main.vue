<template>
  <div>
    <mt-cell title="基本信息" icon="back"  ></mt-cell>

    <div style="color: #387eff;" class="complete_tag" @click="_toast()">
      <mt-field  label="姓名" placeholder="Input username" v-model="personInfo.username" :state="nameState" ></mt-field>
      <mt-field  label="年龄" placeholder="请输入你的年龄" v-model="personInfo.age" type="number" ></mt-field>

    </div>
  </div>
</template>

<script>
  import MessageBox from 'mint-ui'

  export default {
    name: "Main",
    data() {
      return {
          "personInfo":{
            "username":'杨幂'
          }
      }
    },
    computed:{
      nameState(){
        let length = this.personInfo.username.length;
        if (length >= 2 && length<=4) {
          return 'success'
        } else {
          return 'error'
        }
      }
    },
    methods:{
       _toast() {
         // MessageBox('message','tt')
        console.log('click')
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>

  .home{
    padding-left: .14rem;
    padding-right: .14rem;
    width: 7.5rem;
    height: .74rem;
    background: linear-gradient(left, #6e99ff, #3f6adb);
    background: -webkit-gradient(linear, left top, right top, from(#6d99ff), to(#3c6cde));
    color: #fff;
    line-height: .74rem;
  }
</style>
