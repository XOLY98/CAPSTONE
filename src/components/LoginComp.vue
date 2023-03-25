<template>
  <div>
    <!-- Login form -->
    <div class="login-form ">
      <form @submit.prevent="logins" class="row g-3 container fluid text-center">
        <h1>Login</h1>
        <div class="col-md-4">
          <label for="validationDefaultPassword" class="form-label"
            >EMAIL ADDRESS</label
          >
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input
              type="email"
              class="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              name="name"
              required
              v-model="payload.emailAdd"
            />
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">PASSWORD</label>
          <input
            type="password"
            class="form-control"
            name="name"
            required
            v-model="payload.userPass"
          />
        </div>

        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              name="text"
              required
            />
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div v-if="user !== null && !spinner" class="loggedIn">
          <h1>you're logged in<i class="fa-solid fa-face-smile"></i></h1>
          <Logout />
        </div>
        <button class="btn btn-outline-light center" type="submit">
          LOGIN
        </button>
        <button type="submit" class="btn btn-outline-light center">
          <router-link to="/register&login">Register</router-link>
        </button>
        <button type="button" class="btn btn-outline-light center">
          <LogOutComp />
        </button>
      </form>
      <div>
      </div>
    </div>
  </div>

</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";
import { computed } from "@vue/runtime-core";
import LogOutComp from "@/components/LogOutComp.vue";
export default {
  setup() {
    const store = useStore();
    let login = ref(true);
    const userMessage = computed(() => store.state.message);
    
    const LoggedUser = JSON.parse(localStorage.getItem("user"));
    let user =
      LoggedUser == null || LoggedUser == undefined ? null : LoggedUser;

    const payload = {
      emailAdd: "",
      userPass: "",
    };
   
      

    function logins() {
      store.dispatch("login", this.payload);
      localStorage.setItem("user", JSON.stringify(store.state.user));
      // location.reload();
      // this.$router.push({name:'home', path:'/'}).then(() => location.reload())
      console.log(payload);
    }

    return {
      user,
      logins,
      userMessage,
      login,
      payload,
    
     
    };
  },
  components: {
    LogOutComp,
  },
};
</script>
<style scoped>
.login-form {
  height: 100vh;
  color:whitesmoke;
  background-image: url(https://i.postimg.cc/tgQmsY5c/1392648048498543991simple-black-background.jpg);
  background-repeat:no-repeat ;
  background-size: cover;
}
.row {
  padding-top: 10rem;
  transform: translateX(10%);
  padding-bottom: 7rem;
  
}
.router-link{
  color: black;
}
.btn{
  width:20rem;
}
.btn :hover{
  background-color: whitesmoke;
}
h1{
  font-size: 25px;
  text-decoration: underline solid white;
}

</style>
