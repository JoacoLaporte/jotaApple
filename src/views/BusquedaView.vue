<template>
      <!-- Mostrar productos si hay resultados -->
      <br>
      <h4 id="titulo-busqueda">Resultado de búsqueda para: "{{busqueda}}"</h4>
      <br><br>  
      <div id="contenedor-productos" v-if="resultados.length">
        <div class="col-md-4 mb-4" v-for="producto in resultados" :key="producto.id">
          <div class="card h-100">
            <!-- Carrusel individual por producto -->
            <div :id="'carousel-' + producto.id" class="carousel slide">
              <div class="carousel-inner">
                <div
                  class="carousel-item"
                  v-for="(img, index) in producto.imagenes"
                  :key="index"
                  :class="{ active: index === 0 }"
                >
                  <img :src="img" class="d-block w-100" :alt="'Imagen ' + (index + 1)">
                </div>
              </div>
  
              <!-- Botones solo si hay más de una imagen -->
              <button v-if="producto.imagenes.length > 1" class="carousel-control-prev" type="button" :data-bs-target="'#carousel-' + producto.id" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button v-if="producto.imagenes.length > 1" class="carousel-control-next" type="button" :data-bs-target="'#carousel-' + producto.id" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
  
            <!-- Info del producto -->
            <div class="card-body">
              <h5 class="card-title">{{ producto.nombre }} - {{ producto.color }}</h5>
              <p class="card-text">USD ${{ producto.precio }}</p>
              <button class="btn btn-primary" @click="agregarAlCarrito(producto)">Agregar al carrito</button>
            </div>
  
          </div>
        </div>
    </div>
    <!-- Mensaje si no hay resultados -->
    <div v-else class="contenedor-busqueda-sin-resultado">
        <p class="alert alert-warning text-center mt-4">
        No se encontró ningún producto que coincida con: {{ busqueda }}.
        </p>
    </div>
  
  </template>
  
  
  <script setup>
  import { ref, computed, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import productosData from '../../public/data/productos.json'
  import { useCartStore } from '../stores/cartStore'
  
  const productos = ref(productosData.productos)
  const route = useRoute()
  const busqueda = ref(route.query.q || '')
  const carrito = ref([])
  const store = useCartStore()
  
  const resultados = computed(() => {
    const texto = busqueda.value.toLowerCase()
    return productos.value.filter(p =>
      (p.nombre.toLowerCase().includes(texto) ||
       p.categoria.toLowerCase().includes(texto)) &&
      Array.isArray(p.imagenes)
    )
  })
  
  // Actualizar término y limpiar al cambiar query
  watch(
    () => route.query.q,
    (nuevoValor) => {
      busqueda.value = nuevoValor || ''
    }
  )

  function agregarAlCarrito(producto) {
      store.agregarProducto(producto)
    }
</script>
  
<style scoped>

#titulo-busqueda{
    margin-left: 5%;
}

.contenedor-busqueda-sin-resultado{
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 154px;
}

.alert.alert-warning.text-center.mt-4{
  width: 30%;
}


</style>