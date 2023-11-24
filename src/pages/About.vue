<template>
   <Navbar/>
   <section class="video-hero">
    <video autoplay loop muted plays-inline class="back-video">
            <source src="img/video.mp4" type="video/mp4">
     </video>
     <div class="container video-container">
        <div class="row gap-5 gap-lg-0 align-items-center">
            <div class="col-lg-6 mb-3 mb-lg-0">
                <h1 class="text-white title">{{ title }}</h1>
                <p>{{ caption }}</p>
                <a class="btn-fortnite text-decoration-none py-2" href="https://www.fortnite.com/download?lang=en-US">Play Now !</a>
            </div>
            <div class="col-lg-6">
                <div class="youtube-video">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/7CZC4gXVuKc?si=XQP7Gqheoy3uQMjn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
        </div>
   </section>
</template>

<script>

import Navbar from '../components/Navbar.vue'

    export default {
        name:'About',
        components: Navbar,
        data(){
            return{
                title : 'Fortnite',
                caption : 'Behind the luxurious exteriors of Sanguine Suites, Relentless Retreat, and Eclipsed Estate are strongly-defended bases complete with cameras, laser grids, and guards. Locked up in the depths of Thornes properties are Mythic items from Fortnites history, like The Foundations MK-Seven Assault Rifle, Midas Drum Gun, Zyg and Choppys Ray Gun, and more  Check out new weapons that will help you with your break-in. Boost to a base with the “Rocket Ram,” and once inside, break out the “Infiltrator Pump Shotgun,” the “Scoped Burst SMG,” or the quick reload “Twin Mag Assault Rifle.” Want a weapon thats a little more hands-off? Throw down a “Business Turret” that automatically fires at nearby enemies.  '
            }
        }
    }
</script>

<style scoped>
    nav ul a{
        color: white !important;
    }
</style>