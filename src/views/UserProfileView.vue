<template>
    <button type="button" class="btn  btn-dark">
        <router-link to="/login">Login</router-link>
       </button>
       
        <div class="my_account" v-if="loggedUser">
            <div class="deleteBOX">
              <div class="delete_modal">
                <h4>Are you sure you want to delete your account?</h4>
                <div class="del_buttons">
                  <button @click="hideDelete()">Cancel</button>
                  <button @click="deleteUser()">Delete</button>
                </div>
              </div>
            </div>
            <div class="editBOX">
              <div class="edit_modal">
                <form @submit.prevent="update()">
                  <div class="initials">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingText"
                        placeholder="name@example.com"
                        required
                        v-model="this.updatingUser.firstName"
                      />
                      <label for="floatingText">First name</label>
                    </div>
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="floatingText"
                        placeholder="name@example.com"
                        required
                        v-model="this.updatingUser.lastName"
                      />
                      <label for="floatingText">Surname</label>
                    </div>
                  </div>
                  <div class="form-floating">
                    <input
                      type="email"
                      class="form-control"
                      id="floatingInput"
                      placeholder="name@example.com"
                      required
                      v-model="this.updatingUser.emailAdd"
                    />
                    <label for="floatingInput">Email address</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingPassword"
                      placeholder="number"
                      required
                      v-model="this.updatingUser.cellphoneNo"
                    />
                    <label for="floatingText">Phone number</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingInput"
                      placeholder="Male"
                      required
                      v-model="updatingUser.gender"
                    />
                    <label for="floatingPassword">Gender</label>
                  </div>
                  <div class="form-floating">
                    <input
                      type="text"
                      class="form-control"
                      id="floatingText"
                      placeholder="url"
                      required
                      v-model="updatingUser.userProfile"
                    />
                    <label for="floatingText">Image URL</label>
                  </div>
                  <div class="form-buttons">
                    <button @click="hideEdit()">Cancel</button>
                    <button type="submit">Update</button>
                  </div>
                </form>
              </div>
            </div>
            <div class="left">
              <div class="logged_user">
                <div
                  class="img"
                  :style="{ backgroundImage: `url(${loggedUser.userProfile})` }"
                ></div>
                <h2 class="name">
                  {{ loggedUser.firstName }} {{ loggedUser.lastName }}
                </h2>
                <div class="details">
                  <h3>E-mail Address :</h3>
                  <h3>{{ loggedUser.emailAdd }}</h3>
                </div>
                
                <div class="details">
                  <h3>Gender :</h3>
                  <h3>{{ loggedUser.gender }}</h3>
                </div>
                <div class="details">
                  <h3>Role :</h3>
                  <h3>{{ loggedUser.userRole }}</h3>
                </div>
                <div class="buttons">
                  <button class="btn_edit" @click="showEdit()">
                    <i class="fa-solid fa-pen-to-square" ></i> Edit account
                  </button>
                  <button class="btn_delete" @click="showDelete()">
                    <i class="fa-solid fa-trash" ></i> Delete
                    account
                  </button>
                </div>
              </div>
            </div>
            <div class="right">
            </div>
          </div>
</template>
<script>
export default {
  name: "userProfile",
  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    },
  },
  data() {
    return {
      updatingUser: {
        firstName: this.$store.state.loggedUser?.firstName,
        lastName: this.$store.state.loggedUser?.lastName,
        emailAdd: this.$store.state.loggedUser?.emailAdd,
        gender: this.$store.state.loggedUser?.gender,
        userProfile: this.$store.state.loggedUser?.userProfile
      }
    };
  },
  methods: {
    showDelete() {
      document.querySelector(".deleteBOX").id = "showModal";
    },
    hideDelete() {
      document.querySelector(".deleteBOX").id = "hideModal";
    },
    update() {
      this.$store.dispatch('updateUser', this.loggedUser?.userID, this.updatingUser);
      this.hideEdit();
    },
    deleteUser() {
      this.$store.dispatch('deleteUser', this.loggedUser?.userID);
    //   hide.hideDelete();
    },
    showEdit() {
      document.querySelector(".editBOX").id = "showModal";
      console.log(this.updatingUser)
    },
    hideEdit() {
      document.querySelector(".editBOX").id = "hideModal";
    }
  },
}
</script>
<style scoped>
    .deleteBOX{
        display: none;
    }
    .editBOX{
        display: none;
    }
    .left{
        color:antiquewhite;
    }
    .my_account{
        height:10vh;
    }
</style>