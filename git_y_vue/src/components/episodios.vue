<script setup>

</script>

<template>
    <div id="app">
       <nav>
         <router-link to="/">Home</router-link> |
         <router-link to="/personajes">Personajes</router-link> |
         <router-link to="/episodios">Episodios</router-link>
       </nav>
       <router-view />
     </div>

    <h1>Aquí voy a hacer lo de los episodios porque por qué no me voy a complicar la vida</h1>

</template>

<style>
</style>