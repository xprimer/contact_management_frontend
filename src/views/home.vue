<template>
    <div class="container-fluid main">
        <div class="bg-overlay"></div>
        <h1 class="text-center title d-absolute">CONATCT MANAGEMENT PROJECT</h1>
        <h2 class="sec-title text-white text-center">Easy to manage your conatcts, numbers, meetings in just ONE PLACE.</h2> 
        <router-link to="login" tag="a" class="get-btn btn btn-lg btn-primary shadow">
            GETTING STARTED
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {
    }
}
</script>

<style scoped>
.main {
    position: relative;
    min-height: 100vh;
    background-image: url('/bg.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
}
.bg-overlay{
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #000;
    opacity: .2;
}
.title {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    color: rgb(0, 168, 132);
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: rgb(255, 255, 255);
    text-shadow:5px 5px 10px rgba(0, 0, 0, .7);
    margin: 0 auto;
    z-index: 3;
}

.sec-title{
    position: absolute;
    top: 40%;
    width: 100%;
    z-index: 3;
}

.get-btn {
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
}

@media only screen and (max-width: 1024px)  {

    .get-btn {
        position: absolute;
        z-index: 3;
        top: 70% !important;
        left: 50%;
        transform: translateX(-50%);
    }
    
}



</style>