<template>
    <div class="products">

        <h1>Products</h1>
    
        <div class="row gap-3">
    
            <div v-if="SpinnerComp">
                <SpinnerComp/>
            </div>
    
                
            <div class="card" style="width: 18rem ;" v-else  v-for="item in Products" :key="item.prodID" >
                 <img :src="item.imgURL" class="card-img-top" alt="...">
                 <div class="row card-body">
                   <h5 class="card-title">{{item.prodName}}</h5>
                   <p class="card-text"> {{item.price}}</p>
                   <p class="card-text">{{item.prodDescription}}</p>
                   <router-link to="/SingleProd"><a class="btn btn-outline-success" >See more</a></router-link>
                   <router-link to="/cart"><a class="btn btn-outline-success" >Add to Cart</a></router-link>
                 </div>
               
            </div>
    
        </div>
    
    </div>
    <SpinnerComp/>
</template>
<script>
import SpinnerComp from "@/components/SpinnerComp.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
    setup() {
        const store = useStore();
        store.dispatch("fetchProducts");
        const Products= computed(() => store.state.products);
        const SpinnerComp = computed(() => store.getters.showSpinner);
        return {
            Products,
            SpinnerComp
        };
    },
    components: SpinnerComp
};
</script>
<style scoped>
.card-text{
    color:white;

}
.card-title{
    color: white;
    font-size: x-large;
}

img{
    height: 50%;
}

h1{
    color: #08172E;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
}

@media (max-with: 768px) {
    div.row {
        transform: translateX(60%);
    }
}

</style>