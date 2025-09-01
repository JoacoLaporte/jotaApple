<template>
  
<!-- NAVBAR -->

  <Navbar />

  <router-view />

  <Footer />

   
</template>

<script setup>

import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';


</script>


<style scoped>

.video-container {
  width: 100%;
  max-height: 500px;
  overflow: hidden;
  margin-bottom: 2rem;
}
video {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.carrito {
  position: fixed;
  right: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: white;
  box-shadow: -2px 0 5px rgba(0,0,0,0.3);
  padding: 1rem;
  display: none;
  flex-direction: column;
  z-index: 1050;
}

</style>
