<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

const arrayDatos = ref([])

onMounted (()=> {
  axios.get('https://rickandmortyapi.com/api/episode')
  .then(response=>
    arrayDatos.value = response.data
  )
  .catch(error=>
    console.log('error al tomar los datos',error)
  )
})

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

    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

</template>

<style>
</style>