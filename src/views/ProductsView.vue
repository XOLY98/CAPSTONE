<template>
    <div class="products">
        <div class="row gap-3 col-12 center">
            <div v-if="SpinnerComp">
                <SpinnerComp/>
            </div>

            <div class="card" style="width: 18rem  ;" v-else  v-for="item in Products" :key="item.prodID" >
                <h5 class="card-title">{{item.prodName}}</h5>
                 <img :src="item.imgURL" class="card-img-top" alt="...">
                 <div class="row card-body">
                   
                   <p class="card-text">R{{item.price}}</p>
                   <p class="card-text">{{item.prodDescription}}</p>
                   <router-link to="/"><a class="btn" >See more</a></router-link>
                   <router-link to="/cart"><a class="btn" >Add to Cart</a></router-link>
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

.products{
margin-top: 50px;
margin-bottom: 50px;
margin-right: 20px;

}
.card{
    background-color: transparent;
    height: 30rem;
    margin-bottom:25px;
    margin-top: 25px;
    display:inline-block;
    
}
.card-text{
    color:white;

}
.card-title{
    color: white;
    font-size: x-large;
}

img{
    height: 46%;
}

h1{
    color: #08172E;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
}


.btn{
    border: solid 1px #E3BC94;
    color: #E3BC94;
    border-radius: none;
} .btn  :hover{
    color:#E3BC94;
}
#carouselExampleInterval{
    padding-top: 100px;
}

</style>