<template>
  <!-- MODAL AND  FORM -->

  <div
    class="modal fade"
    :id="this.modalID"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add user</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <input
            type="number"
            placeholder="id"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.userID"
          />
          <input
            type="text"
            placeholder="Firstname"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.firstName"
          />
          <input
            type="text"
            placeholder="Lastname"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.lastName"
          />
          <input
            type="text"
            placeholder="gender"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.gender"
          />
          <input
            type="email"
            placeholder="Email"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.emailAdd"
          />
          <input
            type="text"
            placeholder="image"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.userProfile"
          />
          <input
            type="text"
            placeholder="Enter Password"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.userPass"
          />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" v-on:click="add">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  props: ["modalID"],
  setup() {
    const payload = {
      userID: "",
      firstName: "",
      lastName: "",
      gender: "",
      emailAdd: "",
      userPass: "",
      userProfile: "",
    };

    const store = useStore();
    store.dispatch("fetchUsers");
    const Users = computed(() => store.state.users);
    const add = () => {
      store.dispatch("createUser", payload);
      store.dispatch("createUser");
      console.log(payload);
    };
    return {
      Users,
      add,
      payload,
    };
  },
};
</script>

<style scoped>

</style>
