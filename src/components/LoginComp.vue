<template>
    <div>
        <!-- Login form -->
<div class="col">
    <div class="login-form text-center">
      <h1>Login</h1>
      <form  class="row g-3 container fluid" @submit.prevent="login" >
        <div class="col-md-4">
          <label for="validationDefaultPassword" class="form-label">EMAIL ADDRESS</label>
           {{ this.loggedUser?.firstName }}
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="email" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="name" required v-model="payload.emailAdd">
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">PASSWORD</label>
          <input type="password" class="form-control"  name="name" required payload.userPass>
        </div>
      
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="text" required>
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="forgotPass">
          <a hre="">Forgot Password</a>
          <br/>
          <a href=""><router-link to="/register&login">Register</router-link></a>
        </div>
        <div class="row col-md-4">
          <button class="btn btn-outline-light" type="submit">Submit form</button>
        </div>
      </form>
     
     </div>
  </div>
   </div>


</template>
<script>
export default {
    data(){
      return{
        payload:{
          emailAdd:"",
          userPass:""
        },
      };
    },
   computed:{
    loggedUser(){
      return this.$store.state.loggedUser
    }
   },
   methods:{
    login(){
      this.$store.dispatch('login',this.payload)
    }
   }
}
</script>
<style scoped>
.login-form{
  background-color: transparent;
  width: 50vw; 
  padding: 2%;
box-shadow: #E3BC94 5px 5px ;
transform: translateX(90%);
padding-top: 50px;

}
</style>