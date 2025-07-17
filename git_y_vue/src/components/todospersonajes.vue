<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'
import {useRouter} from 'vue-router' 
const arrayDatos = ref([]);

onMounted (()=> {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
        arrayDatos.value = response.data.results
    })
    .catch(error => {
        console.log('error al tomar los datos', error)
    })
    
})

const router = useRouter();
const irPersonaje = (id) => {
    router.push('/personaje/'+id)
}
</script>

<template>
    <div id="app" class="mt-4">
       <nav >
         <router-link to="/">Home</router-link> |
         <router-link to="/personajes"  class="bg-indigo-400">Personajes</router-link> |
         <router-link to="/episodios">Episodios</router-link>
       </nav>
       <router-view />
     </div>

    <div class="grid grid-cols-3 gap-3 m-3">
      <div v-for="(dato,index) in arrayDatos" v-bind:key="index" class="card hover:outline-2" style="width: 18rem;">
        <img :src="dato.image" alt="Imagen del personaje" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title"> {{ dato.name  }}</h5>
            <button v-on:click="irPersonaje(dato.id)" class="bg-indigo-400/50 p-2 rounded hover:bg-indigo-400"> Saber más </button>
        </div>
      </div>
    </div>

    

</template>


<style>

</style>