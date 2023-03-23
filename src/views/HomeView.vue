<template>
  <div class="homepage">
    <div class="row">
    <div class="col">
    </div>0

  <div class="col">
    <div id="carouselExampleCrossfade" class="carousel slide carousel-fade" data-mdb-ride="carousel">
      <div class="carousel-indicators">
        <button
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-mdb-target="#carouselExampleCrossfade"
          data-mdb-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.postimg.cc/WbCxNYZW/shoe_xho__1_-removebg-preview.png" class="d-block w-100" alt="Wild Landscape"/>
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/ZYf1g55h/diff_color__1_-removebg-preview.png" class="d-block w-100" alt="Camera"/>
        </div>
        <div class="carousel-item">
          <img src="https://i.postimg.cc/sDvtRCMG/beaded-sandal-xho__1_-removebg-preview.png" class="d-block w-100" alt="Exotic Fruits"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleCrossfade" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</div>
</div>
  

</template>

<script>
export default{

}
</script>

<style scoped>
img{
  height: 95vh;
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
img{
  height: 46%;
}

</style>
