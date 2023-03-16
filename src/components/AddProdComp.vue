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
        <th scope="col"><i class="fa-sharp fa-solid fa-pen-to-square"></i></th>
        <th scope="col"><i class="fa-sharp fa-solid fa-trash"></i></th>
      </tr>
    </thead>
    <tbody v-for="item in Products" :key="item.id">
      <img :src="item.imgURL" class="card-img-top" alt="...">
      <tr>
        <th scope="row"></th>
        <td> {{item.prodName}}</td>
        <td>R{{item.price}}</td>
        <td>{{item.prodDescription}}</td>
        <td>{{item.prodQuantity}}</td>

        <!-- EDIT -->
        <button type="button" class="btn btn-outline-light " data-bs-toggle="modal" data-bs-target="#exampleModal">
          <i class="fa-solid fa-pen-to-square"></i>
</button>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
 
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>


<!-- DELETE button -->
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
    const payload={
     id:'',
     prodName:'',
     prodDescription:'',
     catetory:'',
     price:'',
     prodQuantity:'',
     imgURL:''
    };
    const store = useStore();
    store.dispatch("fetchProducts");
    const Products = computed(() => store.state.products);
    const edit = () => {
            store.dispatch("updateProduct", payload)
            store.dispatch("fetchProduct");
            console.log(payload);
        }
    return {
      Products,
      edit,
      payload
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