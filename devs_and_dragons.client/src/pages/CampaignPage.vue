<template>
    <div class="background">

        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-md-5 col-12 p-3 text-center">
                    <div class="elevation-3 rounded fs-5 bg-black text-light p-1">
                        <label for="site-campaigns">Search for Campaigns: </label>
                        <input class="m-2" type="search" id="site-campaigns" name="q" />
                        <button class="btn btn-outline-danger">Search</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3 col-12">
                    <h1>Hello</h1>
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
    background-position: center;
    background-image: url(https://wallpaperset.com/w/full/4/1/4/237716.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    height: 92dvh;
    background-attachment: fixed;
}
</style>