<template>
  <div class="wholething">
  <div class="products" v-if="loggedUser">
    <h1>PRODUCTS</h1>
    <button  @click="sortingItems()" class="btn btn-outline-light ">Price Sorting</button>
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
          <p class="card-text">{{ item.category}}</p>
          <button class="btn btn-outline-light"><router-link :to="{ name: 'singleprod', params: { id: item.id } }"
            >See more</router-link
          ></button>

          <button class="btn btn-outline-light"><router-link :to="{ name: 'cart', params: { id: item.id } }">Add to Cart</router-link></button>
        </div>
      </div>
    </div>
  </div>
  </div>

</template>
<script>
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
  computed: {
    loggedUser() {
      return this.$store.state.loggedUser;
    },
  },
  methods:{
      sortingItems(){
        this.$store.commit("sorting");
      }
    },
  components: { SpinnerComp },
};
</script>
<style scoped>
.products {
  padding-top: 80px;
  padding-bottom: 50px;
  margin-right: 20px;
  transform: translateX(11%);
    height:280vh;
}
.wholething{
  background-image: url(https://i.postimg.cc/B6NMJRYM/brown_water_light_1872294820.webp);
  background-repeat: no-repeat;
  background-size: cover;

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
  box-shadow: #e3bc94 3px;

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
  color: whitesmoke;
  text-align: center;
  font-size:25px;
  text-decoration:solid underline white;
  text-transform:  uppercase;
}

.btn {
  border: solid 1px white;
  color: white;
  padding-top: 10px;
  
}
.btn :hover {
  color: whitesmoke;

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
