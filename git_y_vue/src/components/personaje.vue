<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'
import {useRoute,useRouter} from 'vue-router' 

const personaje = ref(null);
const router = useRouter()
const route = useRoute()

onMounted (()=> {
    const id = route.params.id
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => {
        personaje.value = response.data
    })
    .catch(error => {
        console.log('error al tomar los datos', error)
    }) 
}) 

const volverPagina = () => {
    router.push('/personajes')
}

</script>

<template>
    <h1>PERSONAJES</h1>
    

    <div v-if="personaje" class="card shadow-xl/30" style="width: 18rem;">
        <img :src="personaje.image" alt="imagen personaje" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title"> {{ personaje.name }}</h5>
            <p class="card-text"> Status: {{ personaje.status }}</p>
            <p class="card-text"> Specie: {{ personaje.species }}</p>
            <p class="card-text"> Type: {{ personaje.type }} </p>
            <p class="card-text"> Gender: {{ personaje.gender }}</p>
            <p class="card-text"> Origin: {{ personaje.origin.name }}</p>
            
            
            <button v-on:click="volverPagina" class="bg-indigo-300 p-2 rounded hover:bg-indigo-400"> Volver a todos los personajes</button>
            
            
        </div>
    </div> 
</template>

<style>
</style>