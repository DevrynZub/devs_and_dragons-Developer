<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-10 col-11" v-if="monster">
                <div>
                    <h3>
                        {{ monster.name }}
                    </h3>
                </div>
                <div>
                    <p>{{ monster.size }}</p>
                    <p>{{ monster.type }}</p>
                    <p>{{ monster.alignment }}</p>
                    <p>{{ monster.hit_points }}</p>
                    <p>{{ monster.desc }}</p>
                    <!-- <p>{{ monster.image }}</p> -->
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
            monster: computed(() => AppState.selectedResult)


        }
    }
}
</script>


<style lang="scss" scoped></style>