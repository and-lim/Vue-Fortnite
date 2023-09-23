<template>

      <nav class="navbar navbar-expand-lg ">
       <div class="container-xl">
         <h1 class="logo px-lg-3">Fortnite</h1>
         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav ms-lg-auto gap-lg-5 mb-2 mb-lg-0">
             <li class="nav-item">
               <a class="nav-link" href="/">Home</a>
             </li>
             <li class="nav-item">
               <a class="nav-link" href="/about">About</a>
             </li>
           </ul>
           <a href="https://www.fortnite.com/download?lang=en-US" class="btn-fortnite text-decoration-none ms-lg-auto">
              Try now
           </a>
         </div>
       </div>
     </nav>


   <!-- <nav>
        <h1 class="logo">Fornite</h1>
        <ul class="navbar-list">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/about">
            <li>Games</li>
          </a>
        </ul>
        <button class="btn-right">Button</button>
   </nav> -->
   <router-view></router-view>
</template>

<script>
    export default {
        name: 'Navbar',
  props: {
    msg: String
  }
    }
</script>

<style scoped>

</style>