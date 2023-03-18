<template>
  <div class="forms">
 
  <div class="log">
    <LoginComp/>
    </div>

    <div class="regi">
    <RegisterComp/>
  </div>
</div>
</template>
<script>
import LoginComp from '@/components/LoginComp.vue'
import RegisterComp from '@/components/RegisterComp.vue'
export default {
  components:{
    LoginComp,
    RegisterComp
  }
}
</script>
<style>
  .forms{
    display: flex;
    height: 100vh;
    box-shadow: #E3BC94 5px 5px 5px;
  }

 
</style>