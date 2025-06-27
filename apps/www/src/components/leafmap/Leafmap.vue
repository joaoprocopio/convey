<script setup lang="ts">
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { onBeforeUnmount, onMounted, ref } from "vue";

const map = ref<L.Map>();

onMounted(() => {
  map.value = L.map("map", {
    zoomControl: false,
    maxBounds: L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180)),
    maxBoundsViscosity: 1.0,
    center: L.latLng(-10, -60),
    minZoom: 5,
    maxZoom: 17,
    zoom: 0,
  });

  const tileLayer = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      noWrap: true,
      attribution:
        'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer">ArcGIS</a>',
    },
  );

  tileLayer.addTo(map.value);
});

onBeforeUnmount(() => {
  if (map.value) {
    map.value.off();
    map.value.remove();
  }
});
</script>

<template>
  <div id="map">
    <slot />
  </div>
</template>

<style>
.leaflet-container {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
</style>
