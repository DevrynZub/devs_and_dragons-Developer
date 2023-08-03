<template>
  <div class="background">

    <div class="container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-5 col-11 home-card text-shadow p-3 m-3 rounded elevation-3">
          <h4>
            Devs and Dragons gives you the tools to become a superior Dungeon Master. Create and edit epic campaigns,
            seamlessly coordinate your adventure, and have access to shared knowledge across all the campaigns.
          </h4>
        </div>
        <div class="col-md-6 text-end col-12 m-auto">
          <button class=" btn btn-rounded">
            <img class="rounded start-button elevation-5"
              src="https://tse3.mm.bing.net/th?id=OIP.XK5GfaI4mfcNUIQh-yngSQHaDL&pid=Api&P=0&h=220">
          </button>
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

<style scoped lang="scss">
.background {
  background-image: url(https://wallpapercave.com/wp/wp2770331.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 92dvh;

}




.home {
  display: grid;
  place-content: center;
  text-align: center;
  user-select: none;
}

.start-button {
  height: 10vh;
  width: 30vh;
}

.home-card {
  background-color: rgba(0, 0, 0, 0.808);
  border-radius: 5px;
  box-shadow: 3px 3px rgb(219, 215, 219);
}



.text-shadow {
  color: rgb(228, 41, 41);
  text-shadow: 1px 1px 4px rgb(150, 109, 117);
}
</style>
