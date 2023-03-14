<template>
    <div class="admin">

<table class="table">
    <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">Product Name</th>
        <th scope="col">Price</th>
        <th scope="col">Product Description</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
      </tr>
    </thead>
    <tbody v-for="item in Products" :key="item.prodID">
      <img :src="item.imgURL" class="card-img-top" alt="...">
      <tr>
        <th scope="row"></th>
        <td> {{item.prodName}}</td>
        <td>{{item.price}}</td>
        <td>{{item.prodDescription}}</td>
        <td><button
          type="button"
          class="btn btn-outline-success"
          data-bs-toggle="modal"
          data-bs-target="#hair-products"
        >
          Edit
        </button></td>
        <td><button
          type="button"
          class="btn btn-outline-success"
          data-bs-toggle="modal"
          data-bs-target="#hair-products"
        >
          Delete
        </button></td>
     </tr>
    </tbody>
  </table>


</div>

</template>
<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    const Products = computed(() => store.state.products);
    return {
      Products,
    };
  },

};
</script>

<style scoped>
.admin{
    padding-top: 7rem;
}
    .table{
      background-color: #08172E;
      color:whitesmoke;
      width: 80%;
      margin-left: 9%;
    
    }

    button{
      transform: translateX('50%') ;
    }

    img{
      width: 3vw;
      height:3vh;
    }
</style>