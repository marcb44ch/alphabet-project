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
  import Chart from '@/components/Chart.vue'
  const options = ref({
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  })
</script>

<template>
  
  <div class="about" style="height: 400px;">
    <h1>This is an about page</h1>
    Hola taula de prova
    <Table :headers="headers" :items="items"></Table>
    <chart :options="options">
    </chart>
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
