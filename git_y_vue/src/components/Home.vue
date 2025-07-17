<script>
</script>

<template>
    <h1 class="font-mono"> HOME </h1>

     <div id="app">
       <nav  class="bg-indigo-300 p-8">
         <router-link to="/" class="active: bg-indigo-400">Home</router-link> |
         <router-link to="/personajes">Personajes</router-link> |
         <router-link to="/episodios">Episodios</router-link>
       </nav>
       <router-view />
     </div>

</template> 

<style>
h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: oklch(58.5% 0.233 277.117) ;

}
</style>