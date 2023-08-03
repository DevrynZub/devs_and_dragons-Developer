<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class=" col-md-5 col-12 p-5 home flex-grow-1 d-flex flex-column justify-content-start">
          <div class="home-card text-shadow p-5 rounded elevation-3">
            <h4>
              Devs and Dragons gives you the tools to become a superior Dungeon Master. Create and edit epic campaigns,
              seamlessly coordinate your adventure, and have access to shared knowledge across all the campaigns.
            </h4>
          </div>
        </div>
        <div class="col-md-2 col-6 flex-column justify-content-start m-5">
          <button class=" btn btn-rounded">
            <img class="rounded start-button elevation-5"
              src="https://tse3.mm.bing.net/th?id=OIP.XK5GfaI4mfcNUIQh-yngSQHaDL&pid=Api&P=0&h=220">
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
main {
  background-image: url(https://wallpapercave.com/wp/wp2770331.jpg);
  background-size: cover;
  background-attachment: fixed;
}




.home {
  display: grid;
  height: 92dvh;
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

  width: 40dvw;
}

>img {
  height: 200px;
  max-width: 200px;
  width: 100%;
  object-fit: contain;
  object-position: center;
}

.text-shadow {
  color: rgb(228, 41, 41);
  text-shadow: 1px 1px 4px rgb(150, 109, 117);
}
</style>
