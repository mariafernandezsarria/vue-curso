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

onMounted(() => {
  const id = route.params.id;
  console.log(id);
  axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
    .then((response) => {
      personajes.value = response.data.characters;
    })
    .catch((error) => {
      console.error('Error al obtener personajes:', error);
    });
});
</script>

<template>
  <h1>HOLA</h1>

  <ul>
    <li v-for="(personaje, index) in personajes" :key="index">
      {{ personaje }}
    </li>
  </ul>

  <button @click="volverEpisodios" class="btn btn-success">
    Volver a los episodios
  </button>
</template>

<style>
</style>