<template>
<br>
 <h4 id="titulo-productos"> {{ nombre }}</h4>
 <!-- <p v-for="producto in filteredProducts" > {{ producto.nombre }}</p> -->
  <br><br>
        <!-- Contenedor de productos -->
  <div id="contenedor-productos">
    <div class="col-md-4 mb-4" v-for="producto in filteredProducts" :key="producto.id">
      <div class="card h-100">
      <!-- Carrusel individual por producto -->
      <div :id="'carousel-' + producto.id" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item" v-for="(img, index) in producto.imagenes" :key="index" :class="{ active: index === 0 }">
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
        <button class="btn" @click="agregarAlCarrito(producto)">Agregar al carrito</button>
      </div>
    </div>
  </div>
</div>
<br><br><br><br>
    <!-- <div v-else>
      <p>No hay productos disponibles para esta categoría.</p>
    </div> -->

    <!-- <div>
    <h1>Productos: {{ categoria }}</h1>

    <div v-if="filteredProducts.length">
      <div v-for="producto in filteredProducts" :key="producto.id" class="producto">
        <img :src="producto.imagen" alt="Imagen del producto" width="200" />
        <h2>{{ producto.nombre }}</h2>
        <p>Precio: ${{ producto.precio }}</p>
      </div>
    </div>
    <div v-else>
      <p>No hay productos disponibles para esta categoría.</p>
    </div>
  </div> -->
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import productosData from '../../public/data/productos.json'
import { useCartStore } from '../stores/cartStore'


export default {
  setup() {
    const route = useRoute()
    const carrito = ref([])
    // Usamos categorias en vez de categoria
    const categorias = ref(route.params.categoria ? route.params.categoria.split(',') : [])
    const productos = ref(productosData.productos) // carga los productos desde el JSON
    const nombre = ref(route.query.nombre || 'Productos')

// Actualizar si cambia el valor en la query
watch(() => route.query.nombre, (nuevo) => {
  nombre.value = nuevo || 'Productos'
})

    // Filtrar los productos según las categorías pasadas
    const filteredProducts = computed(() => {
      if (categorias.value.length === 0) {
        return productos.value // Si no hay categorías, mostramos todos los productos
      }
      return productos.value.filter(producto => categorias.value.includes(producto.categoria))
    })
    // Para cambiar la categoría sin recargar la página
    watch(() => route.params.categoria, (nuevasCategorias) => {
      categorias.value = nuevasCategorias ? nuevasCategorias.split(',') : []
    })


    const store = useCartStore()

    function agregarAlCarrito(producto) {
      store.agregarProducto(producto)
    }
//     function agregarAlCarrito(producto) {
//       const index = carrito.value.findIndex(item => item.id === producto.id)
//       if (index !== -1) {
//         carrito.value[index].cantidad += 1
//       } else {
//         carrito.value.push({ ...producto, cantidad: 1 })
//       }
//       // contador.value = carrito.value.reduce((acc, item) => acc + item.cantidad, 0)
//       localStorage.setItem('carrito', JSON.stringify(carrito.value))
  
// }

    return {
      categorias, 
      filteredProducts,
      agregarAlCarrito,
      nombre
    }
  }
}

</script>


<style>

#titulo-productos{
  margin-left: 5%;
}

@media (max-width: 600px) {
  #contenedor-productos{
    margin-left: 0px;
    justify-content: center;
  }

  .col-md-4.mb-4{
    width: 65%;
  }

}
</style>