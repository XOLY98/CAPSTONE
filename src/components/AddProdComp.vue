<template>
  <!-- ADD PRODUCTS -->
    <div></div>

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
            store.dispatch("addProduct", payload)
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

</style>