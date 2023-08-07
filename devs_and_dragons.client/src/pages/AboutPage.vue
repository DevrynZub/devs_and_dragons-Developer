<template>
  <div class="container-fluid about-page">
    <div class="row justify-content-around ">
      <div class="col-12 col-md-4 pt-md-5 pb-3 d-flex justify-content-center ">
        <img class="hero-img card img-fluid" src="src\assets\img\DnD About Page.png" alt="">
      </div>

      <div class="col-12 col-md-3 card project-tools text-light  px-3">
        <div>
          <p>Languages and Tools
            used on this project:</p>
          <p>•JavaScript</p>
          <p>•HTML</p>
          <p>•CSS</p>
          <p>•Vue</p>
          <p>•Git</p>
          <p>•MongoDB</p>
          <p>•node.js</p>
          <p>•Bootstrap</p>
          <p>•Auth0</p>
        </div>
      </div>
    </div>



    <div class="row mt-3 justify-content-center">
      <div class="col-11 col-md-10 card align-items-center justify-content-center">
        <h1 class="d-flex text-light quote-img ">
          “Never fear quarrels, but seek hazardous adventures.”― Alexandre Dumas, The Three Musketeers
        </h1>
      </div>
    </div>


    <div class="container card-names">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="card mt-4">Devryn Zub</div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card mt-4">Andrew Allison</div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-6">
          <div class="card mt-4">Jeremy Olds</div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card mt-4">Riley Thomas</div>
        </div>
        <div class="col-12 col-md-6">
          <div class="card mt-4">Brandon Riggs</div>
        </div>
      </div>
    </div>




  </div>
</template>












<script>
export default {
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");


h1 {
  font-family: "Montserrat Medium";
  text-align: center;
  transform: scale(.9);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  // padding-left: 15%;
}

@keyframes scale {
  100% {
    transform: scale(1);
  }
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(13) {
  animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(14) {
  animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(15) {
  animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(16) {
  animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(17) {
  animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(18) {
  animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}


.card-names {
  margin-top: 5%;
}


.card {
  background-color: rgba(30, 20, 20, 0.879);
  border: 1px double rgba(0, 255, 191, 0.578);
  box-shadow: 2px 0px 4px rgb(0, 255, 191, 0.578);
  border-radius: 16px;

}

.project-tools {

  font-size: 25px;
  margin-top: 2.5%;
  border-radius: 16px;
  box-shadow: 2px 0px 4px rgb(0, 255, 191, 0.578);
  border: 1px solid rgba(0, 255, 191, 0.578);
  margin-left: -1.5%
}


.quote-img {
  font-size: 30px;
  padding-top: 5%;
}


.about-page {
  background-image: url('https://i.redd.it/ifw1keannjw41.jpg');
  background-color: #5f3f2485;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 95vh;
  // opacity: ;

}

.hero-img {
  // max-height: 95vh;
  max-width: 75vh;
  // margin-left: 15%;
  // padding-top: 5%;
}




@media(max-width: 767px) {
  .hero-img {
    max-width: 100%;
    margin-left: 0;
    padding-top: 3%;
  }

  .project-tools {
    margin-top: 5%;
    margin-right: 5%;
    margin-left: 5%;
    padding: 3%;
    max-width: 89%;

  }

  .quote-img {
    font-size: 20px;
    padding-top: 3%;
    margin-left: -14%;
  }


}
</style>







