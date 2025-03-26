<script setup>
  import Table from '@/components/Table.vue';
  import "bootstrap"
  import {ref} from 'vue'
  const headers = ref (['Nom', 'Cognoms', 'Adreça', 'Telefon'])
  const items   = ref ([
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Marc", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Casas", adreça: "Carrer Nou 1", telefon: "666666666"},
    {nom: "Anna", cognom: "Cussó", adreça: "Carrer Nou 1", telefon: "666666666"}
  ])
</script>

<template>
  
  <div class="about">
    <h1>This is an about page</h1>
    Hola taula de prova
    <Table :headers="headers" :items="items"></Table>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
