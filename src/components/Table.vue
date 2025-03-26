/*
* Exemple Classe 26/03/2025
*/
<script setup>
import { ref } from 'vue'

const props = defineProps({
    headers: { type: Array, required: true },
    items: { type: Array, required: true }
})

const show = ref(false)
</script>

<template>
  <div>
    <button @click="show = !show">
      <p v-if="show">Amaga</p>
      <p v-else>Mostra</p>
    </button>
    <table v-if="show">
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td v-if="item.nom === 'Marc'">{{ item.nom }}</td>
          <td v-else>{{ item.nom }}</td>
          <td :style="{ color: item.cognom === 'Casas' ? 'red' : '' }">{{ item.cognom }}</td>
          <td>{{ item.adreça }}</td>
          <td>{{ item.telefon }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style>
    table, td, th{
        border: 1px solid black;
        border-collapse: collapse;
    }
</style>