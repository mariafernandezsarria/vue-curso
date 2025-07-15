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
    <h1> HOME </h1>

    <div v-for="(dato,index) in arrayDatos" v-bind:key="index" class="card" style="width: 18rem;">
        <img :src="dato.image" alt="Imagen del personaje" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title"> {{ dato.name  }}</h5>
            <button v-on:click="irPersonaje(dato.id)" class="btn btn-success"> Saber más </button>
        </div>
    </div>

    

</template>


<style>
</style>