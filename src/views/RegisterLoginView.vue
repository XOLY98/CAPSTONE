<template>
<!-- REGISTER FORM -->
<div class="col">
  <div class="register-form text-center"> 
  <form class="row g-3" @submit.prevent="register">
    <h1>Register</h1>
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" name="name" required v-model="payload.firstName">
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" name="name" required v-model="payload.lastName">
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Gender</label>
    <input type="text" class="form-control" id="validationDefault02" name="name" required v-model="payload.gender">
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Email</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="name" required  v-model="payload.emailAdd">
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Password</label>
    <input type="password" class="form-control" id="validationDefault02" name="name" required v-model="payload.userPass">
  </div>
  
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">UserRole</label>
    <input type="text" class="form-control" id="validationDefault05" name="text" required v-model="payload.userRole">
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="text" required>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-outline-light" type="submit">Submit form</button>
  </div>
</form>
</div>
</div>

  <div class="forms">
    <button type="button" class="btn  btn-light">
     <router-link to="/login">Login</router-link>
    </button>
    
    <div class="regi">
    <RegisterComp/>
  </div>
</div>
<SpinnerComp/>
</template>
<script>
// import LoginComp from '@/components/LoginComp.vue'
import SpinnerComp from '@/components/SpinnerComp.vue';
import {computed} from '@vue/runtime-core';
  import {useStore  } from 'vuex';
export default {
  setup(){
    const payload ={
      firstName:'',
      lastName:'',
      gender:'',
      emailAdd:'',
      userPass:'',
      userRole:''
    };
    const store = useStore();
    const register =()=>{
      store.dispatch("register",payload);
      store.dispatch("fetchUsers");
      console.log(payload);
    }
    const userMessage =
    computed(()=>store.state.message)
    return{
      payload,
      userMessage,
      register
    }
  },
  components:{
    // LoginComp,
    SpinnerComp
}
}
</script>
<style>
  
  h1{
    color: white;
    text-transform: uppercase;
  }
  
  
      .register-form{
        background-color: transparent;
        opacity: 0.9;
        width: 50vw;
        margin-top: 7rem;
        transform: translateY(10%);
      }
      
      .form-check-label{
        color:whitesmoke;
        text-align: center;
      }
      label{
        color: whitesmoke;
      }
      .col{
        height: 90vh;
      }
      form.row{
        
        transform: translateX(50%);
      }
 
</style>