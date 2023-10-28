<template>
  <div class="userJoin">
    <h1>회원가입 페이지</h1>

      <label for="userId">Id: </label><input type="text" id="userId" name="userId" v-model="userId"/>
      <br/>
      <label for="userPwd">Password: </label><input type="password" id="userPwd" name="userPwd" v-model="userPwd"/>
      <br/>
      <button @click="join">Sign In</button>
  </div>
</template>

<script>
// import request from '@/utils/request'
import axios from 'axios'

export default {
  name: "UserJoin",
  data() {
    return {
      userId: "",
      userPwd: ""
    }
  },
  methods: {
    join() {
      let params = {
        userId: this.userId,
        userPwd: this.userPwd
      }

      axios.post("/user/join", params)
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(params);
            console.log(error);
          })
    }
  }
}
</script>

<style scoped>

</style>