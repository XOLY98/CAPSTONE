<template>
  <!-- ADD PRODUCTS -->
  <div class="admin">
    <h1>PRODUCTS</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">IMAGE</th>
          <th scope="col">PRODUCT NAME</th>
          <th scope="col">PRICE</th>
          <th scope="col">PRODUCT DESCRIPTION</th>
          <th scope="col">PRODUCT QUANTITY</th>
          <th scope="col">
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
          </th>
          <th scope="col"><i class="fa-sharp fa-solid fa-trash"></i></th>
        </tr>
      </thead>
      <tbody v-for="item in Products" :key="item.id">
        <img :src="item.imgURL" class="card-img-top" alt="..." />
        <tr>
          <th scope="row"></th>
          <td>{{ item.prodName }}</td>
          <td>R{{ item.price }}</td>
          <td>{{ item.prodDescription }}</td>
          <td>{{ item.prodQuantity }}</td>
          <td>
            <button type="button" class="btn btn-outline-light">
              <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            </button>
          </td>
          <!-- DELETE button -->
          <td>
            <button type="button" class="btn btn-outline-light">
              <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- ADD user Product -->
    <h1>USERS</h1>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">PICTURE</th>
          <th scope="col">NAME</th>
          <th scope="col">SURNAME</th>
          <th scope="col">GENDER</th>
          <th scope="col">EMAIL ADDRESS</th>
          <th scope="col">
            <i class="fa-sharp fa-solid fa-pen-to-square"></i>
          </th>
          <th scope="col"><i class="fa-sharp fa-solid fa-trash"></i></th>
        </tr>
      </thead>
      <tbody v-for="item in Users" :key="item.userID">
        <img :src="item.userProfile" class="card-img-top" alt="..." />
        <tr>
          <th scope="row"></th>
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.gender }}</td>
          <td>{{ item.emailAdd }}</td>
          <td>
            <button type="button" class="btn btn-outline-light">
              <i class="fa-sharp fa-solid fa-pen-to-square"></i>
            </button>
          </td>

          <td>
            <button type="button" class="btn btn-outline-light">
              <i class="fa-sharp fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Call a modal -->
    <button
      type="button"
      class="btn btn-outline-light"
      data-bs-toggle="modal"
      data-bs-target="#addUserModal"
    >
      ADD USER
    </button>

    <AddUserComp modalID="addUserModal" />
    
    <button
      type="button"
      class="btn btn-outline-light"
      data-bs-toggle="modal"
      data-bs-target="#addProductModal"
    >
     ADD PRODUCT
    </button>

    <AddProdComp modalID="addProductModal"  />
  </div>

  
</template>
<script>
import AddUserComp from "@/components/AddUserComp.vue";
import AddProdComp from "@/components/AddProdComp.vue";
// import SpinnerComp from "@/components/SpinnerComp.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    const Products = computed(() => store.state.products);

    // const SpinnerComp = computed(() => store.state.showSpinner);

    store.dispatch("fetchUsers");
    const Users = computed(() => store.state.users);

    return {
      Products,
      Users,
    }
  },
    methods: {
      deleteUser(id){
        this.$store.dispatch("deleteUser",id)
      }
  },
  components: { AddProdComp, AddUserComp },
};
</script>

<style scoped>
.modal.fade {
  z-index: 10000000 !important;
}
.admin {
  padding-top: 7rem;
}
.table thead th {
  color: whitesmoke;
  font-size: larger;
  text-align: center;
}
h1 {
  color: #e3bc94;
  font-size: 30px;
  text-decoration: underline;
  text-shadow: #e3bc94 5px 5px 5px;
}
.table {
  background-color: transparent;
  color: whitesmoke;
  width: 80%;
  margin-left: 9%;
  transform: translateX("30%");
}
.table :hover {
  opacity: 0.9;
  color: pink;
  background-color: transparent;
}

button {
  transform: translateX("50%");
}

img {
  width: 3.5rem;
  height: 4rem;
  border: solid whitesmoke 3px;
}
</style>
