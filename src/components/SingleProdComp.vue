<template>
<div class="container">
    <div class="row">
      <div class="col">
        <img :src="item?.imgURL" class="card-img-top" alt="item"  style="height:25rem; width:20rem;">
    </div>
        <div class="col" >
          <h2>{{item?.prodName }}</h2>
          <p><i class="fa-sharp fa-solid fa-tags"></i>  Price: R{{ item?.price }}</p>
          <p><i class="fa-sharp fa-solid fa-barcode"></i> Description: {{ item?.prodDescription }}</p>
          <p> Category: {{ item?.category }}</p>
          <p><em><i class="fa-sharp fa-solid fa-bag-shopping"></i> {{ item?.prodQuantity }} left in stock</em></p>
          <!-- <router-link to="/singleProd"></router-link> -->
          <button @click="addToCart" class="btn btn-outline-light">Add to Cart</button>
        </div>
     
    </div>
  </div>
</template>
  <script>
  export default {
    computed: {
        item() {
          return this.$store.state.product
        }
    },
    // methods: {
    //   addToCart() {
    //   this.$store.dispatch('addToCart', this.$route.params.prodID)
    // }
    // },
    created() {
      this.$store.dispatch('fetchSingleProduct', this.$route.params.id)
    }
  }
</script>
<style scoped>
.container{
    height:90vh
}
.row{
    padding-top: 120px;
    
}
img{
    background-color: antiquewhite;
    transform:translateY(10%);
    box-shadow: antiquewhite 5px 5px ;
}
h2{
    padding-top: 150px;
    color:whitesmoke;
    font-size:50px; 
}
p{
    color:whitesmoke;
    font-size: 20px;
}
</style> 