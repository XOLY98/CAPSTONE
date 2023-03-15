<template>
    <div class="admin">
      <h1>PRODUCTS</h1>
<table class="table">
    <thead>
      <tr>
        <th scope="col">IMAGE</th>
        <th scope="col">PRODUCT NAME</th>
        <th scope="col">PRICE</th>
        <th scope="col">PRODUCT DESCRIPTION</th>
        <th scope="col"><i class="fa-sharp fa-solid fa-pen-to-square"></i></th>
        <th scope="col"><i class="fa-sharp fa-solid fa-trash"></i></th>
      </tr>
    </thead>
    <tbody v-for="item in Products" :key="item.prodID">
      <img :src="item.imgURL" class="card-img-top" alt="...">
      <tr>
        <th scope="row"></th>
        <td> {{item.prodName}}</td>
        <td>R{{item.price}}</td>
        <td>{{item.prodDescription}}</td>
        <td>

          <button
          type="button"
          class="btn btn-outline-light"
        >
        <i class="fa-sharp fa-solid fa-pen-to-square"></i>
        </button></td>
        <td><button
          type="button"
          class="btn btn-outline-light"
          
        >
        <i class="fa-sharp fa-solid fa-trash"></i>
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
.table thead th{
  color:whitesmoke;
  font-size: larger;
  text-align: center;
}
h1{
  color:#E3BC94;
  font-size:30px;
  text-decoration: underline;
  text-shadow: #E3BC94 5px 5px 5px ;
}
    .table{
      background-color:transparent;
      color:whitesmoke;
      width: 80%;
      margin-left: 9%;
      transform: translateX('30%') ;
    }
    .table :hover{
      opacity: 0.9;
      color:pink;
      background-color: transparent;
    }

    button{
      transform: translateX('50%') ;
    }

    img{
      width: 3.5rem;
      height:4rem;
      border:solid whitesmoke 3px;
    }
</style>