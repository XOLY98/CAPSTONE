<template>
  <!-- ADD PRODUCTS -->
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
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
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
            placeholder="Id"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.id"
          />
          <input
            type="text"
            placeholder="Name"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.prodName"
          />
          <input
            type="text"
            placeholder="Description"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.prodDescription"
          />
          <input
            type="text"
            placeholder="Category"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.catetory"
          />
          <input
            type="email"
            placeholder="Price"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.price"
          />
          <input
            type="text"
            placeholder="Quantity"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.prodQuantity"
          />
          <input
            type="text"
            placeholder="URL"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.imgURL"
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
    const add= () => {
            store.dispatch("addProduct", payload)
            store.dispatch("fetchProduct");
            console.log(payload);
        }
    return {
      Products,
      add,
      payload
    };
  },
 
};
</script>

<style scoped>

</style>