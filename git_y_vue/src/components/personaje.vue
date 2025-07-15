<script setup>
import {ref,onMounted} from 'vue'
import axios from 'axios'
import {useRoute} from 'vue-router' 

const personaje = ref(null);
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


</script>

<template>
    <h1>PERSONAJES</h1>
    

    <div v-if="personaje" class="card" style="width: 18rem;">
        <img :src="personaje.image" alt="imagen personaje" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title"> {{ personaje.name }}</h5>
            <p class="card-text"> Status: {{ personaje.status }}</p>
            <p class="card-text"> Specie: {{ personaje.species }}</p>
            <p class="card-text"> Type: {{ personaje.type }}</p>
            <p class="card-text"> Gender: {{ personaje.gender }}</p>
            <p class="card-text"> Origin: {{ personaje.origin.name }}</p>
        
        </div>
    </div> 
</template>

<style>
</style>