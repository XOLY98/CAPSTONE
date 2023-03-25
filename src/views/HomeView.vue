<template>
  <div class="homepage">
    <div class="textt">
      <h2 class="advert">20% OFF</h2>
      <h1 class="heading">THE TRIBE</h1>
      <p>For the love of my culture,heritage and beauty!!</p>
    </div>
    
  

<div class="social">
  <a href=""><i class="fa-brands fa-facebook-f fa-beat-fade"></i></a>
  <a href=""><i class="fa-brands fa-twitter fa-beat-fade"></i></a>
  <a href=""><i class="fa-brands fa-linkedin-in fa-beat-fade"></i></a>
  <a href=""><i class="fa-brands fa-instagram fa-beat-fade"></i></a>
</div>
</div>
  

</template>

<script>
export default{

}
</script>

<style scoped>
img .image{
  height: 50vh;
  width:3px;
  margin-top: 70px;
}
#carouselExampleInterval{
  padding-top: 100px;
}
.homepage{
  height:100vh;
  background-image: url(https://i.postimg.cc/4y7n8z2f/117e020da6fdc318febf9c6d09a8360f927cdd18.jpg);
  background-repeat:no-repeat ;
  background-size: cover;

}
.textt{
  
  padding-top: 200px;
  animation: 2s anim-lineUp ease-out infinite;
color:whitesmoke;
font-size:1rem;
font-family:"Copperplate","Lucida Handwriting";
transform: translateX(-25rem) !important;

}
@keyframes anim-lineUp {
0% {
  opacity: 0;
  transform: translateY(80%);
}
20% {
  opacity: 0;
}
50% {
  opacity: 1;
  transform: translateY(50%);
}
100% {
  opacity: 1;
  transform: translateY(50%);
}
}
@media screen and (min-width: 300px) and (max-width:719px){
.lineUp{
  font-size:1rem;
}
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

.textt .heading{
  font-size: 65px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.textt .advert{
  font-size:80px ;
}

.textt p{
  font-size: 23px;
}
</style>
