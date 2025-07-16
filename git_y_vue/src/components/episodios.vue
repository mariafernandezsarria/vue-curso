<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const arrayDatos = ref([])
const router = useRouter()

onMounted (()=> {
  axios.get('https://rickandmortyapi.com/api/episode')
  .then(response=>
    arrayDatos.value = response.data.results
  )
  .catch(error=>
    console.log('error al tomar los datos',error)
  )
})

const verPersonajes = (id) => {
  router.push(`/episodio/${id}`)
}

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

    <div v-for="(dato,index) in arrayDatos" v-bind:key="index" class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ dato.name }}</h5>
        <p class="card-text">{{ dato.episode }}</p>
        <p class="card-text">{{ dato.air_date }}</p>        
        <button v-on:click="verPersonajes(dato.id)" class="btn btn-primary">Ver personajes</button>
      </div>
    </div>

</template>

<style>
</style>