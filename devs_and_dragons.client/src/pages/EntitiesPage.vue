<template>
  <div class="text-light">
    this is the entities Page

  </div>
</template>


<script>
import { watchEffect } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {

    const route = useRoute()

    watchEffect(() => {

    })

    return {


    }
  }
}
</script>


<style lang="scss" scoped></style>