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
    <div id="app">
       <nav>
         <router-link to="/">Home</router-link> |
         <router-link to="/personajes">Personajes</router-link> |
         <router-link to="/episodios">Episodios</router-link>
       </nav>
       <router-view />
     </div>

    <div v-for="(dato,index) in arrayDatos" v-bind:key="index" class="card" style="width: 18rem;">
        <img :src="dato.image" alt="Imagen del personaje" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title"> {{ dato.name  }}</h5>
            <button v-on:click="irPersonaje(dato.id)" class="btn btn-success"> Saber más </button>
        </div>
    </div>

    

</template>


<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f4;
  margin: 0;
  padding: 2rem;
  display: flex;
  justify-content: center;
}


.card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-block;
  vertical-align: top;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

.card-img-top {
  width: 100%;
  height: 270px;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  color: #2c3e50;
}

.btn {
  width: 100%;
  padding: 0.5rem;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #27ae60;
  color: white;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background-color: #219150;
}

/* Para centrar las cards en filas si hago esto tengo que crear el card container */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


</style>