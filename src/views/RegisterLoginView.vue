<template>
  <div class="myForms">
    <div class="row">
      <div class="col">
  <div class="register-form text-center"> 
   <h1>Register</h1>
  <form action="https://formspree.io/f/xoqzwqgn" method="POST" class="row g-3" @submit.prevent="register">
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
    <input type="text" class="form-control" id="validationDefault02" name="name" required v-model="payload.userPass">
  </div>
  
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" name="number" required>
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
    <button class="btn btn-outline-success" type="submit">Submit form</button>
  </div>
</form>
</div>
</div>
<div class="col">
  <div class="login-form text-center">
    <h1>Login</h1>
    <form action="https://formspree.io/f/xoqzwqgn" method="POST" class="row g-3 container fluid">
      <div class="col-md-4">
        <label for="validationDefault02" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="validationDefault02" name="name" required>
      </div>
      <div class="col-md-4">
        <label for="validationDefaultPassword" class="form-label">Password</label>
        <div class="input-group">
          <span class="input-group-text" id="inputGroupPrepend2">@</span>
          <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="name" required>
        </div>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="text" required>
          <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <div class="row col-md-4">
        <button class="btn btn-outline-success" type="submit">Submit form</button>
      </div>
    </form>
   </div>
</div>
 </div>
</div>
   
</template>

<script>
import {computed} from '@vue/runtime-core';
import {useStore  } from 'vuex';
export default{
setup(){
  const payload ={
    firstName:'',
    lastName:'',
    gender:'',
    emailAdd:'',
    userPass:'',
  };
  const store = useStore();
  const register =()=>{
    store.dispatch("register",payload);
    store.dispatch("fetchUsers");
  }
  const userMessage =
  computed(()=>store.state.message)
  return{
    payload,
    userMessage,
    register
  }
}

}


</script>

<style scoped>

h1{
  color: white;
  text-transform: uppercase;
}
    .register-form{
      background-color: #08172E;
      opacity: 0.9;
      width: 30vw; 
      padding: 2%;
    margin-top: 155px;
    transform: translateX(55%);
    box-shadow: #08172E 5px 5px 5px 5px;
    }
    .register-form :hover{
      opacity: 0.3;
    }
    .form-check-label{
      color:whitesmoke;
      text-align: center;
    }
    label{
      color: whitesmoke;
    }
    .myForms{
      display:grid;
    }
    
    .login-form{
      background-color: #08172E;
      width: 30vw; 
      padding: 2%;
    margin-top: 155px;
    transform: translateX(30%);
    box-shadow: #08172E 5px 5px 5px 5px;
    
    }
    .login-form :hover{
      opacity: 0.3;
    }
</style>
