<script setup>
import { onMounted, ref } from 'vue';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const mapElement = ref(null);
const map = ref(null);

onMounted(() => {

  const customIcon = L.icon({
    iconUrl: 'https://toppng.com/uploads/preview/alphabet-logo-11530965262mcvcbhaafb.png',
    iconSize: [38, 38], 
    iconAnchor: [19, 38], 
    popupAnchor: [0, -38] 
  });


  map.value = L.map(mapElement.value).setView([37.42253315403577, -122.084444], 13);


  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
  }).addTo(map.value);

  L.marker([37.42253315403577, -122.084444], { icon: customIcon })
    .addTo(map.value)
    .openPopup();
});
</script>

<template>
  <div ref="mapElement" style="height: 400px; width: 100%; z-index: 1;"></div>
</template>

<style>
.leaflet-container {
  width: 100%;
  height: 100%;
  background: #f8f9fa;
}


.leaflet-control { 
  z-index: 2 !important;
}

.leaflet-pane {
  z-index: 1 !important;
}

.leaflet-top,
.leaflet-bottom {
  z-index: 1000 !important;
}
</style>