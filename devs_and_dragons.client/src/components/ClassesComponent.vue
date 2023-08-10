<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-9 col-11" v-if="classes?.url.includes('class')">
                <div>
                    <h3>{{ classes.name }}</h3>
                </div>
                <div>

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
            classes: computed(() => AppState.selectedResult)
        }
    }
}
</script>


<style lang="scss" scoped></style>