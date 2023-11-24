<template>
    <section class="hero">
        <div class="container pt-5">
            <h6>{{ trending }}</h6>
            <h3>{{ free }}</h3>
            <h1 class="text-dark title">{{ title }}</h1>
            <p>{{ caption }}</p>
            <div class="button mt-3 pt-2">
                <a href="https://youtu.be/7CZC4gXVuKc?si=XCp9DGdcDKVFtcZ8" target="_blank" class="btn-fortnite text-decoration-none py-3" style="font-size: 30px;">
                    Watch Video
                </a>
            </div>
            <div class="icons">
                <a href="https://www.youtube.com/@fortnite">
                    <i class="fa fa-youtube"></i>
                </a> 
                <a href="https://www.instagram.com/fortnite/">
                    <i class="fa fa-instagram"></i>
                </a> 
                <a href="https://twitter.com/FortniteGame">
                    <i class="fa fa-twitter"></i>
                </a> 
                <a href="https://www.twitch.tv/fortnite">
                    <i class="fa fa-twitch"></i>
                </a> 
                <a href="https://vk.com/fortnite">
                    <i class="fa fa-vk"></i>
                </a> 
                <a href="https://www.facebook.com/FortniteGame">
                    <i class="fa fa-facebook"></i>
                </a> 
            
            </div>
        </div>
  
    </section>
</template>

<script>


    export default {
        name: 'Home',
        data (){
            return{
                title :'Fortnite',
                trending : '#1 Trending in Epic Games',
                free :'Play for Free',
                caption :'All the games, all the times. No additional  Purchases or revolving monthly catalogs. Play whatever you want'
            }

        },
    }
</script>

<style scoped>

</style>