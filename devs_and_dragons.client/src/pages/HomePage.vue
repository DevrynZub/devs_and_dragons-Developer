<template>
    <div class="container-fluid background">
      <div class="row justify-content-center pt-5 pe-5 p-2">

        <div class="text-center py-4">
          <!-- <img class="img-fluid logo-card" src="../assets/img/DnD_Logo2-removebg-preview.png" alt="Title"> -->
        </div>

        <div class="col-md-6 col-12 home-card text-shadow p-4 mt-5 rounded elevation-3">
          <h4>
            Devs and Dragons gives you the tools to become a superior Dungeon Master. Create and edit epic campaigns,
            seamlessly coordinate your adventure, and have access to shared knowledge across all the campaigns.
          </h4>
        </div>
      </div>

      <div class="row justify-content-end pt-5 pe-5 p-2">
        <div class="col-md-6 col-12 home-card text-shadow p-4 mt-5 rounded elevation-3">
          <h4 class="text-center">
            Foucs On The Adventure</h4>
            <p>
              Devs and Dragons' campaign management system gives you control over your campaigns. Search from a list of campaigns created by other DM's, or add your own. Important details like the party size and session dates are available to help in finding the experience best suited for you, so players and DM's alike can spend less time seeking quests and more time exploring their worlds.
            </p>
        </div>
      </div>

      <div class="row justify-content-start pt-5 ps-5 p-2">
        <div class="col-md-6 col-12 home-card text-shadow p-4 mt-5 rounded elevation-3">
          <h4 class="text-center">Share The Knowledge</h4>
          <p>
              In a game where keeping track of information, entities, and abiltites can be the difference between victory and defeat, note taking becomes a critical task of the party. The team at Devs and Dragons knows this, and provides each player within a campaign a note space. Quickly jot down important locations or the name of a prominent character that can be easily referenced at any time by all the party members. Coordinate and share information across the party like never before.
          </p>
        </div>
      </div>

      <div class="row justify-content-end pt-5 pe-5 p-2">
        <div class="col-md-6 col-12 home-card text-shadow p-4 mt-5 rounded elevation-3">
          <h4 class="text-center">Retell Your Tales</h4>
          <p>No longer will your adventures be preceded by a retelling of last session's feats. With a dedicated RECAP tab, a DM can create and share notes detailing the players' previous antics. Highlight the story points you deem most valuable, and allow your party to access them at any time with the click of a button. </p>
        </div>
      </div>

      <div class="row justify-content-start pt-5 ps-5 p-2">
        <div class="col-md-6 col-12 home-card text-shadow p-4 mt-5 rounded elevation-3">
          <h4 class="text-center">Build Your World</h4>
          <p>
              A world is only as interesting as the objects that exist within it. To aid in populating your journey, Devs and Dragons allows you to create and save ENTITIES. Create, detail, save, and reference any object you envision within your world. Make them public and share them with the party or quickly reference the custom objects that stand in their path as the DM during a session. View and track the entities you have designed or browse all of the communities creations while searching for inspiration on your next great adventure.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center py-4">
          <router-link :to="{ name: 'Campaign' }">
            <button class=" btn btn-rounded" title="To Campaign Page">
              <img class="rounded start-button elevation-5"
                src="https://tse3.mm.bing.net/th?id=OIP.XK5GfaI4mfcNUIQh-yngSQHaDL&pid=Api&P=0&h=220">
            </button>
          </router-link>
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

p{
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 4px rgb(150, 109, 117);
}
</style>
