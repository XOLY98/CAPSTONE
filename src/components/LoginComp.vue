<template>
  <div>
    <!-- Login form -->
    <!-- v-if="login && user == null && !spinner" -->
    <div class="login-form text-center">
      <h1>Login</h1>
      <form @submit.prevent="logins" class="row g-3 container fluid">
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
        <div class="row col-md-4">
          <button class="btn btn-outline-light center" type="submit">
            Submit form
          </button>
        </div>
      </form>
      <button type="button" class="btn btn-dark">
        <router-link to="/register&login">Register</router-link>
      </button>
      <div v-if="user !== null && !spinner" class="loggedIn">
        <h1>you're logged in<i class="fa-solid fa-face-smile"></i></h1>
        <Logout />
      </div>
      <div>
        <button type="button" class="btn btn-dark">
          <LogOutComp />
        </button>
      </div>
    </div>
  </div>

  <SpinnerComp />
</template>
<script>
import { useStore } from "vuex";
import { ref } from "vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
import { useRouter } from "vue-router";
import { computed } from "@vue/runtime-core";
import LogOutComp from "@/components/LogOutComp.vue";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    let spinner = ref(false);
    let login = ref(true);
    const userMessage = computed(() => store.state.msg);
    const LoggedUser = JSON.parse(localStorage.getItem("user"));
    let user =
      LoggedUser == null || LoggedUser == undefined ? null : LoggedUser;

    const payload = {
      emailAdd: "",
      userPass: "",
    };

    function logins() {
      spinner.value = !spinner.value;
      store.dispatch("login", this.payload);
      localStorage.setItem("user", JSON.stringify(store.state.user));
      // location.reload();
      spinner.value = !spinner.value;
      // this.$router.push({name:'home', path:'/'}).then(() => location.reload())
      console.log(payload);
    }

    return {
      user,
      router,
      logins,
      userMessage,
      login,
      payload,
      spinner,
    };
  },
  components: {
    SpinnerComp,
    LogOutComp,
  },
};
</script>
<style scoped>
.login-form {
  background-color: transparent;
  width: 50vw;
}
.row {
  margin-top: 8rem;
}
</style>
