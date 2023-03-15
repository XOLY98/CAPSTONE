<template>
    <div>
        <!-- Login form -->
<div class="col">
    <div class="login-form text-center">
      <h1>Login</h1>
      <form  class="row g-3 container fluid" @submit.prevent="login" >
        <div class="col-md-4">
          <label for="validationDefaultPassword" class="form-label">EMAIL ADDRESS</label>
          <div class="input-group">
            <span class="input-group-text" id="inputGroupPrepend2">@</span>
            <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" name="name" required v-model="payload.emailAdd">
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationDefault02" class="form-label">PASSWORD</label>
          <input type="email" class="form-control" id="validationDefault02" name="name" required payload.userPass>
        </div>
      
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" name="text" required>
            <label class="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div class="row col-md-4">
          <button class="btn btn-outline-light" type="submit">Submit form</button>
        </div>
      </form>
     </div>
  </div>
   </div>


</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>