<template>
  <div class="homepage">
    <div class="row">
      <img src="https://i.postimg.cc/tgLdYJ0w/hist.jpg">
    </div>
<div class="social">
  <a href=""><i class="fa-brands fa-facebook-f fa-beat-fade"></i></a>
</div>
</div>
  

</template>

<script>
export default{

}
</script>

<style scoped>
img{
  height: 50vh;
  width:30vw;
  margin-top: 70px;
}
* {
  box-sizing: border-box;
}

div{
  align-items: center;
  justify-content: center;
  
  
}
#carouselExampleInterval{
  padding-top: 100px;
}
.homepage{
  height:100vh;
}
.social a{
  display:grid;
  text-align: center;
  margin-top: 40px;
  font-size: 30px;
  color: #a7d2cb;
  border-radius: 35%;
  color: whitesmoke;
}
.social a:hover{
  outline-color: rgb(1, 0, 0);
}
.social{
  display:inline;
  flex-direction: column;
  bottom: 45%;
  right: 3%;
  position: fixed;
  transform: translateY(50%);
}

</style>
