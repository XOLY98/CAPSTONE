<template>
    <div  class="logout">
    <button @click="logout" class="btn btn-dark">Logout</button>
    </div>
    <div  v-if="SpinnerComp">
      <SpinnerComp/>
    </div>
</template>

<script>

import { computed} from '@vue/runtime-core';
import { useStore } from "vuex";
export default {
  setup(){
    const store = useStore()
    const SpinnerComp = computed(() => store.state.showSpinner);
    return{
    SpinnerComp,
    
}
  },
    methods: {
        logout() {
            localStorage.removeItem("user"); // remove the 'user'  from local storage
            location.reload();
            this.$router.push({ name: "home", path: "/" }).then(() => location.reload());
        }
    },
    
 
}
</script>
<style scoped>
    
</style>