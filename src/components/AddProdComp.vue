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
            placeholder="id"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.id"
          />
          <input
            type="text"
            placeholder="Product Name"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.prodName"
          />
          <input
            type="number"
            placeholder="Price"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.price"
          />
          <input
            type="text"
            placeholder="Product Description"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.prodDescription"
          />
          <input
            type="number"
            placeholder="Product Quantity"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.prodQuantity"
          />
          <input
            type="text"
            placeholder="Category"
            class="form-control text-center w-75 mx-auto mb-2"
            v-model="payload.category"
          />
          <input
            type="url"
            placeholder="Picture"
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
            Save
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
      id: "",
      proName: "",
      prodDescription: "",
      price: "",
      category: "",
      prodQuantity: "",
      imgURL: "",
    };

    const store = useStore();
    store.dispatch("fetchProducts");
    const Products = computed(() => store.state.products);
    const add = () => {
      store.dispatch("addProduct", payload);
      store.dispatch("addProduct");
      console.log(payload);
    };
    return {
      Products,
      add,
      payload,
    };
  },
};
</script>


<style scoped>

</style>