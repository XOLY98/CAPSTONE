<template>
    <div>
        <img :src="user.userProfile" :alt="user.firstName + ' ' + user.lastName" width="300" height="300" class="mb-4">
        <p class="fs-3 
        fw-bold">Name</p>
        <p class="lead">{{ user.firstName + ' ' + user.lastName }}</p>
        <p class="fs-3 fw-bold">Email Address</p>
        <p class="lead">{{ user.emailAdd }}</p>
        <p class="fs-3 fw-bold">User Role</p>
        <p class="lead">{{ user.gender }}</p>
        <p class="fs-3 fw-bold">Gender</p>
        <p class="lead">{{ splitgender[0] }}</p>
    </div>
</template>
<script>
export default{
    setup(){
    const userLoggedIn =JSON.parse(localStorage.getItem('user'));
    let user = LoggedUser == null || userLoggedIn == undefined ? null: LoggedUser;
    const {gender} = user;
    let splitgender = gender.split('T');
    return{
      user,
      splitgender
    }
    },
}
</script>
<style>
    
</style>