<template>
  <div>
    <h1>This is my home page</h1>
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
