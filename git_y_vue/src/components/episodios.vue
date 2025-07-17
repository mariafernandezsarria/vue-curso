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
    <div id="app" class="mt-4">
       <nav>
         <router-link to="/">Home</router-link> |
         <router-link to="/personajes">Personajes</router-link> |
         <router-link to="/episodios" class="bg-indigo-400">Episodios</router-link>
       </nav>
       <router-view />
     </div>

    <div class="grid grid-cols-3 gap-1 m-1">
      <div v-for="(dato,index) in arrayDatos" v-bind:key="index" class="card m-3 hover:outline-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ dato.name }}</h5>
          <p class="card-text">{{ dato.episode }}</p>
          <p class="card-text">{{ dato.air_date }}</p>        
          <button v-on:click="verPersonajes(dato.id)" class="bg-indigo-300 p-2 rounded hover:bg-indigo-400">Ver personajes</button>
        </div>
      </div>
    </div>

</template>

<style>
</style>