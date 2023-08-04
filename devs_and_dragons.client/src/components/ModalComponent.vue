<template>
    <div class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content background">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                        <slot name="header"></slot>

                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <slot name="body"></slot>

                </div>

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

<style lang="scss" scoped>
.background {
    background-image: url(https://i.pinimg.com/736x/b0/63/61/b06361056990d87e6832245a8c4f3d55.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;

}
</style>