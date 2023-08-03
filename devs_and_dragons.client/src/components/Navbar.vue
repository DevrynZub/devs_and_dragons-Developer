<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
    <p>Devs and Dragons</p>
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center m-2">

        <img alt="logo"
          src="https://www.underconsideration.com/brandnew/archives/dungeons_and_dragons_40_ampersand_detail_black.jpg"
          height="60" />
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'About' }" class="btn lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Account' }" class="btn lighten-30 selectable text-uppercase">
            Account
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Account' }" class="btn lighten-30 selectable text-uppercase">
            Campaign
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Account' }" class="btn lighten-30 selectable text-uppercase">
            Search?
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue';
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
.navbar {
  background-image: linear-gradient(rgba(255, 0, 0, 0.5), white);
}



a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
