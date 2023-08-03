<template>
  <div>
    <p class="text-center mt-3">My Profile</p>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-around mt-2">
      <div class="col-3">
        <div class="card">
          <img class="card-img-top "
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f2abaa30-1464-49db-aff5-f8a38372adbf/dfjlfz3-62ebbef5-327b-4ca7-934a-c2f21c4cd74b.png/v1/fill/w_894,h_894,q_70,strp/sir_corgi_by_bravenor88_dfjlfz3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YyYWJhYTMwLTE0NjQtNDlkYi1hZmY1LWY4YTM4MzcyYWRiZlwvZGZqbGZ6My02MmViYmVmNS0zMjdiLTRjYTctOTM0YS1jMmYyMWM0Y2Q3NGIucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Dz70fMr_xV6XeGY6XeyG7Jz73H0xu7nfh9p3fS2vB6w"
            alt="profile">
          <div class="card-body">
            <p class="card-text">Name: Devryn</p>
            <p class="card-text">Email: DnD4life@codeworks.com</p>
          </div>
        </div>
      </div>
      <div class="col-6">
        <form>
          <div class="form-group card">
            <div class="mb-4">
              <input type="text" class="form-control" placeholder="First name">
            </div>
            <label for="exampleInputName"></label>
            <input type="email" class="form-control mb-2" id="exampleInputName" aria-describedby="emailHelp"
              placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted mb-2"></small>
            <div class="form-group mb-2">
              <label for="exampleFormControlFile1">Profile Image</label>
              <input type="file" class="form-control-file mb-2" id="exampleFormControlFile1">
            </div>
            <button type="submit" class="btn btn-danger">Submit</button>
          </div>
        </form>
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

.card-img-top {

  max-width: 500px;
  margin: 0;
  object-fit: cover;
  position: relative;

}
</style>
