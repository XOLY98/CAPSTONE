<template>
    <section>
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="1000">
                <img src="https://i.postimg.cc/Y9M5c4Ft/sandals__1_-removebg-preview.png" class="d-block rounded mx-auto d-block w-10 h-80%" alt="">
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src="https://i.postimg.cc/sDvtRCMG/beaded-sandal-xho__1_-removebg-preview.png" class="d-block rounded mx-auto d-block w-10 h-80%" alt="...">
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src="https://i.postimg.cc/ZYf1g55h/diff_color__1_-removebg-preview.png" class="d-block rounded mx-auto d-block w-10 h-80%" alt="...">
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src="https://i.postimg.cc/wMbZs0GB/Beaded-Takkies-traditional-Zulu-Foot-Wear-by-Retail-Bliss-removebg-preview.png" class="d-block rounded mx-auto d-block w-10 h-80%" alt="...">
              </div>
              <div class="carousel-item" data-bs-interval="1000">
                <img src="https://i.postimg.cc/WbCxNYZW/shoe_xho__1_-removebg-preview.png" class="d-block rounded mx-auto d-block w-10 h-80%" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
       <button class="btnn" type="button">View more</button>
        </section>
    <section>
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
</section>
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
    background-color:none;
     box-shadow:  #2F1500 5px 5px 5px;
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
    border: solid #E3BC94;
    color: #E3BC94;
} .btn a :hover{
    color:#E3BC94;
}
#carouselExampleInterval{
    margin-top: 100px;
}

</style>