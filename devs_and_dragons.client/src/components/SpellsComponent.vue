<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-11 col-md-9">
                <div>
                    <h3> {{ spells?.name }}</h3>
                </div>
                <div>
                    <p>{{ }}</p>
                </div>





            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState.js';

export default {
    setup() {
        return {
            spells: computed(() => AppState.selectedResult)


        }
    }
}
</script>


<style lang="scss" scoped></style>