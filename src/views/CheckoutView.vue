<template>
    <div class="cart">
        <h1>this is checkout</h1>
    </div>
    <CartComp/>
</template>
<script>
import CartComp from '@/components/CartComp.vue';
export default {
  components: {
    CartComp
}
}
</script>
<style scoped>
   .cart{
    height: 100vh;
   } 
</style>