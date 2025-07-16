<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'; 
import { useRouter, useRoute } from 'vue-router';


const router = useRouter();
const route = useRoute();

const personajes = ref([]);

const volverEpisodios = () => {
  router.push('/episodios');
};

onMounted(async () => {
  const id = route.params.id;
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
    const urls = response.data.characters;

    // Obtener los datos de cada personaje con Promise.all
    const requests = urls.map(url => axios.get(url));
    const responses = await Promise.all(requests);
    personajes.value = responses.map(res => res.data); // ← Guardamos los objetos completos
  } catch (error) {
    console.error('Error al obtener personajes:', error);
  }
});
</script>

<template>
  <h1>Personajes capítulo</h1>

    <div v-if="personajes.length">
        <div v-for="(personaje, index) in personajes" v-bind:key="index" class="card mb-3" style="width: 18rem;">
            <img :src="personaje.image" class="card-img-top" :alt="personaje.name">
            <div class="card-body">
                <h5 class="card-title">{{ personaje.name }}</h5>
                <p class="card-text">Especie: {{ personaje.species }}</p>
                <p class="card-text">Estado: {{ personaje.status }}</p>
                <p class="card-text">Origen: {{ personaje.origin.name }}</p>
            </div>
        </div>
    </div>

    <div v-else>
        <p>Cargando personajes...</p>
    </div>

    <button @click="volverEpisodios" class="btn btn-success">Volver a los episodios</button>
</template>

<style>
</style>