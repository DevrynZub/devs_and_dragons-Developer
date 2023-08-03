<template>
  <div>
    <p class="text-center mt-3">My Profile</p>
  </div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6">
        <div class="card" style="width: 18rem;">
          <img class=" card-img-top "
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2abaa30-1464-49db-aff5-f8a38372adbf/dfjlfz3-62ebbef5-327b-4ca7-934a-c2f21c4cd74b.png/v1/fill/w_894,h_894,q_70,strp/sir_corgi_by_bravenor88_dfjlfz3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YyYWJhYTMwLTE0NjQtNDlkYi1hZmY1LWY4YTM4MzcyYWRiZlwvZGZqbGZ6My02MmViYmVmNS0zMjdiLTRjYTctOTM0YS1jMmYyMWM0Y2Q3NGIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Dz70fMr_xV6XeGY6XeyG7Jz73H0xu7nfh9p3fS2vB6w"
            alt="profile">
          <div class="card-body">
            <p class="card-text">Name: Devryn</p>
            <p class="card-text">Email: DnD4life@codeworks.com</p>
          </div>
        </div>
      </div>
      <div class="col-6">

      </div>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}



.profile-picture {
  width: 100px;
  height: 100px;
}
</style>
