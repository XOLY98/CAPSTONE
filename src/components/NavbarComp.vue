<template>
  <div> 
    <nav class="navbar navbar-expand-lg fixed-top ">
      <div class="container-fluid ">
        <img alt="logo" src="https://i.postimg.cc/XY69DLQJ/looooooooooooooooooooooooooooooo.png" height="125" width="100">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item mx-3">
              <router-link to="/"><i class="fa-sharp fa-solid fa-house"></i></router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="/admin"><i class="fa-sharp fa-solid fa-unlock"></i> Admin</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="/about"><i class="fa-solid fa-info"></i> About</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="/products"><i class="fa-sharp fa-solid fa-bag-shopping"></i>  Products</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="/contact" class="contact"><i class="fa-sharp fa-solid fa-phone"></i> Contact</router-link>
            </li>
            <li class="nav-item mx-3">
              <router-link to="/register&login" class="register"><i class="fa-sharp fa-solid fa-right-to-bracket"></i> Register&Login</router-link>
            </li>
          
            <li class="nav-item mx-3">
              <router-link to="/cart"><i class="fa-sharp fa-solid fa-cart-shopping"></i></router-link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-E3BC94" type="submit"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default{
  
}
</script>

<style scoped>
.navbar{
  position: fixed !important;
  background-color:black;
  letter-spacing: 0.2rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
opacity: 0.8;
box-shadow:#E3BC94 10px 10px 10px ;
}
.navbar-toggler{
  background-color: #E3BC94;
}

.container-fluid .router-link {
  padding: 1px;
}

.navbar a {
  font-weight: bold;
  color: whitesmoke;
  text-decoration: none;
}

.navbar a.router-link-exact-active {
  color: E3BC94;
  word-spacing: 0.5rem;
  text-decoration: none;

}
.btn{
  border:solid 3px #E3BC94 ;
  color:#E3BC94;
}
</style>