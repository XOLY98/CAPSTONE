<template>
  <div>
    <img src="https://i.postimg.cc/tJFmf2J2/bbbkkll-h-removebg-preview.png" alt="bbblkk">
    
</div>
  
  <HomeComp/>
</template>

<script>
// @ is an alias to /src
import HomeComp from '@/components/HomeComp.vue'
export default {
  components: {
    HomeComp
  }
}
</script>

<style scoped>
img{
  height: 95vh;
  width:50vw;
  margin-top: 70px;
}
* {
  box-sizing: border-box;
}

div{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}

</style>
