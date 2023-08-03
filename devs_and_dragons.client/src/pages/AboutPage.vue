<template>
  <div class="container-fluid about-page">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center text-light mb-5">Meet the team</h1>
        <img class="hero-img img-fluid" src="https://i.pinimg.com/originals/af/dc/f8/afdcf872dbb81f7354ab9f2b30cfdd26.jpg"
          alt="">
      </div>
      <div class="row">
        <div class="col-12">
          <h1 class="text-center text-light">“Never fear quarrels, but seek hazardous adventures.”― Alexandre Dumas, The
            Three Musketeers</h1>
        </div>
      </div>

      <div class="row">
        <div class="col6">Test</div>
        <div class="col6">Test</div>
        <div class="col6">Test</div>
        <div class="col6">Test</div>

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
.about-page {
  background-image: url('https://th.bing.com/th/id/R.b3f7eef14148eb23697fe1857c6995b9?rik=shhZE%2f0fBF2FyQ&pid=ImgRaw&r=0');
  background-color: #5f3f2485;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 95vh;
  opacity: 80%;
}

.hero-img {
  max-height: 75vh;
  max-width: 75vw;
  display: block;
  margin-left: auto;
  margin-right: auto;

}
</style>