<template>
  <div class="products">
    <div v-if="Products == undefined">
        <SpinnerComp />
      </div>
    <div class="row gap-3 col-12 center">
      

      <div
        class="card"
        style="width: 18rem"
        v-for="item in Products"
        :key="item.id"
      >
        <h5 class="card-title">{{ item.prodName }}</h5>
        <img :src="item.imgURL" class="card-img-top" alt="..." />
        <div class="row card-body">
          <p class="card-text">R{{ item.price }}</p>
          <p class="card-text">{{ item.prodDescription }}</p>
          <router-link :to="{ name: 'singleprod', params: { id: item.id } }"
            >See more</router-link
          >

          <router-link to="/cart"><a class="btn">Add to Cart</a></router-link>
        </div>
      </div>
    </div>
  </div>

  <SingleProdComp />
</template>
<script>
import SingleProdComp from "@/components/SingleProdComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchProducts");
    const Products = computed(() => store.state.products);
    const SpinnerComp = computed(() => store.state.showSpinner);
    return {
      Products,
      SpinnerComp,
    };
  },
  components: { SpinnerComp, SingleProdComp },
};
</script>
<style scoped>
.products {
  padding-top: 80px;
  margin-bottom: 50px;
  margin-right: 20px;
  transform: translateX(11%);
}

.card:hover {
    scale: 1.2;
    transition: 0.6s ;
}
.card {
  background-color: transparent;
  height: 30rem;
  margin-bottom: 25px;
  margin-top: 25px;
  display: inline-block;

}
.card-text {
  color: white;
}
.card-title {
  color: white;
  font-size: x-large;
}

img {
  height: 46%;
}

h1 {
  color: #08172e;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
}

.btn {
  border: solid 1px #e3bc94;
  color: #e3bc94;
  border-radius: none;
}
.btn :hover {
  color: #e3bc94;

}
#carouselExampleInterval {
  padding-top: 100px;
}

@keyframes Pop {
    0%{
        scale: 1;
    }
    100%{
        scale: 1.2;
    }
}
</style>
