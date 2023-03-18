<template>
    <!-- MODAL AND  FORM -->
    <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
      <i class="fa-solid fa-pen-to-square"></i>
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h1 class="modal-title fs-5" id="exampleModalLabel">Edit user</h1>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
<form  @submit.prevent="edit">

  <input type="number" placeholder="id" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userID">
  <input type="text" placeholder="Firstname" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.firstName">
  <input type="text" placeholder="Lastname" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.lastName">  
  <input type="text" placeholder="gender" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.gender">
  <input type="email" placeholder="Email" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.emailAdd">
  <input type="text" placeholder="image" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userProfile">
  <input type="text" placeholder="Enter Password" class="form-control text-center w-75 mx-auto mb-2" v-model="payload.userPass">
</form>
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary"  v-on:click="edit">Save changes</button>
</div>
</div>
</div>
</div>
      

</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
  const payload={
     userID:'',
     firstName:'',
     lastName:'',
     gender:'',
     emailAdd:'',
     userPass:'',
     userProfile:''
    };
  
    const store = useStore();
    store.dispatch("fetchUsers");
    const Users = computed(() => store.state.users);
    const edit = () => {
            store.dispatch("updateUser", payload)
            store.dispatch("fetchUsers");
            console.log(payload);
        }
    return {
      Users,
      edit,
      payload
    };
  },

};
</script>

<style scoped>

</style>