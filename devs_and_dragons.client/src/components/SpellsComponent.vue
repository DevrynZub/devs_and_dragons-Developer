<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-11 col-md-9" v-if="spells?.url.includes('spell')">
                <div>
                    <h3> {{ spells.name }}</h3>
                </div>
                <div>
                    <p>{{ spells.range }}</p>
                    <p>{{ spells.components }}</p>
                    <p>{{ spells.material }}</p>
                    <p>{{ spells.ritual }}</p>
                    <p>{{ spells.duration }}</p>
                    <p>{{ spells.concentration }}</p>
                    <p>{{ spells.casting_time }}</p>
                    <!-- <p>{{ spells.classes }}</p> -->
                    <p>{{ spells.desc }}</p>
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