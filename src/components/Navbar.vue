 <template>
 <!-- NAV BAR-->
 <nav class="navbar navbar-light bg-light">
    <div class="container-fluid d-flex justify-content-around">
        <div>
          <router-link to="/" id="navbar-logo"><img src="/public/imagenes/logo.png" alt="logo" width="70px" id="img-logo"></router-link>
          <!-- <a id="navbar-logo" href="index.html">JotApple <i class="fa-brands fa-apple"></i></a> -->
        </div>

        <div id="soporte">
          <li><router-link to="/nosotros">Nosotros</router-link> </li> 
          <li><router-link to="/contactanos">Contactanos</router-link> </li>

          <form class="d-flex" @submit.prevent="buscar" id="form-buscar">
            <input  v-model="busqueda" placeholder="Buscar" aria-label="buscar">
            <button type="submit"><i class="fas fa-search"></i></button>
          </form>

          <ul v-if="resultados.length">
            <li v-for="producto in resultados" :key="producto.id">
              {{ producto.nombre }}
            </li>
          </ul>
          <router-link to="/carrito">
            <!-- <div id="icono-carrito" @click="alternarCarrito"> -->
              <i class="fas fa-shopping-cart"></i> <span id="contador-carrito">{{ store.totalItems }}</span>
            <!-- </div> -->
          </router-link>
        </div>

        </div>
  </nav>

  <div id="nav-productos">
    <!-- iPhone Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">iPhone</a>
      <div class="dropdown-menu start-100 translate-middle-x" id="desplegable-iphone">
        <div class="row">
          <div class="col">
            <h6 class="dropdown-header">iPhone 16</h6>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone16ProMax'}, query: { nombre: 'iPhone 16 Pro Max' } }" class="dropdown-item">iPhone 16 Pro Max</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone16Pro' }, query: { nombre: 'iPhone 16 Pro' }  }" class="dropdown-item">iPhone 16 Pro </router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone16Plus' }, query: { nombre: 'iPhone 16 Plus' } }" class="dropdown-item">iPhone 16 Plus</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone16' }, query: { nombre: 'iPhone 16' } }" class="dropdown-item">iPhone 16</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone16,iphone16ProMax,iphone16Pro,iphone16Plus' }, query: { nombre: 'iPhone 16' } }" class="dropdown-item">Ver todos</router-link>
          </div>
          
          <div class="col">
            <h6 class="dropdown-header">iPhone 15</h6>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone15ProMax' }, query: { nombre: 'iPhone 15 Pro Max' } }" class="dropdown-item">iPhone 15 Pro Max</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone15Pro' }, query: { nombre: 'iPhone 15 Pro' } }" class="dropdown-item">iPhone 15 Pro</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone15ProMax,iphone15Pro' }, query: { nombre: 'iPhone 15' } }" class="dropdown-item">Ver todos</router-link>
          </div>

          <div class="col">
            <h6 class="dropdown-header">iPhone 14</h6>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone14ProMax' }, query: { nombre: 'iPhone 14 Pro Max' } }" class="dropdown-item">iPhone 14 Pro Max</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone14' }, query: { nombre: 'iPhone 14' } }" class="dropdown-item">iPhone 14</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone14,iphone14ProMax' }, query: { nombre: 'iPhone 14' } }" class="dropdown-item">Ver todos</router-link>
          </div>
        </div>
      </div>
    </li>

    <!-- Mac Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">Mac</a>
      <div class="dropdown-menu start-50 translate-middle-x" id="desplegable-mac">
        <div class="row">
          <div class="col">
            <h6 class="dropdown-header">Mac book Pro</h6>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'macbookProM4-16' }, query: { nombre: 'Mac book Pro 16 M4' } }" class="dropdown-item">Mac book Pro 16" M4</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'macbookProM4-14' }, query: { nombre: 'Mac book Pro 14 M4' } }" class="dropdown-item">Mac book Pro 14" M4</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'macbookProM2-13' }, query: { nombre: 'Mac book Pro 13 M2' } }" class="dropdown-item">Mac book Pro 13" M2</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'macbookProM4-16,macbookProM4-14,macbookProM2-13' }, query: { nombre: 'Mac book Pro' } }" class="dropdown-item">Ver todos</router-link>
          </div>
          <div class="col">
            <h6 class="dropdown-header">Mac book Air</h6>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'macbookAirM4-15' }, query: { nombre: 'Mac book Air 15 M4' } }" class="dropdown-item">Mac book Air 15" M4</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'macbookAirM3-15' }, query: { nombre: 'Mac book Air 15 M3' } }" class="dropdown-item">Mac book Air 15" M3</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'macbookAirM4-15,macbookAirM3-15' }, query: { nombre: 'Mac book Air' } }" class="dropdown-item">Ver todos</router-link>
          </div>

          <div class="col">
            <h6 class="dropdown-header">Imac</h6>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'imacM4-24' }, query: { nombre: 'iMac 24 M4' } }" class="dropdown-item">iMac 24" M4</router-link>
          </div>
        </div>
      </div>
    </li>

    <!-- Watch Dropdown --> 
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" aria-expanded="false">Watch</a>
      <div class="dropdown-menu start-100 translate-middle-x" id="desplegable-watch">
        <div class="row">
          <div class="col">
            <h6 class="dropdown-header">Ultra 2</h6>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'watchUltra' }, query: { nombre: 'Ultra 2: 49mm' } }" class="dropdown-item">49 mm</router-link>
          </div>

          <div class="col">
            <h6 class="dropdown-header">Serie 10</h6>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'watchSerie10-46' }, query: { nombre: 'Serie 10: 46mm' } }" class="dropdown-item">46 mm</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'watchSerie10-42' }, query: { nombre: 'Serie 10: 42mm' } }" class="dropdown-item">42 mm</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'watchSerie10-46,watchSerie10-42' }, query: { nombre: 'Serie 10' } }" class="dropdown-item">Ver todos</router-link>
          </div>

          <div class="col">
            <h6 class="dropdown-header">SE</h6>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'watchSE-44' }, query: { nombre: 'SE: 44mm' } }" class="dropdown-item">44 mm</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'watchSE-40' }, query: { nombre: 'SE: 40mm' } }" class="dropdown-item">40 mm</router-link>
              <router-link :to="{ name: 'ProductsView', params: { categoria: 'watchSE-44,watchSE-40' }, query: { nombre: 'SE' } }" class="dropdown-item">Ver todos</router-link>
          </div>
        </div>
      </div>
    </li>
  </div>

</template>

<script setup>

import { ref } from 'vue'
import { useCartStore } from '../stores/cartStore'
import { useRouter } from 'vue-router'

const store = useCartStore()
const router = useRouter()

const busqueda = ref('')
const resultados = ref([])

function buscar() {
  if (!busqueda.value.trim()) return
  // Redirigís con query param
  router.push({ name: 'busqueda', query: { q: busqueda.value.trim() } })
}

</script>


<style scoped>

#desplegable-iphone{
    width: 750px;
    left: 150% !important;
  }

#desplegable-mac{
    width: 750px;
    left: 50% !important;
  }

#desplegable-watch{
    width: 750px;
    left: 100% !important;
  }


@media (max-width: 900px) {
  #desplegable-iphone{
    width: 250px;
    left: 150% !important;
  }

  #desplegable-mac{
      width: 250px;
      left: 50% !important;
    }

  #desplegable-watch{
      width: 200px;
      left: 130% !important;
    }
}

@media (max-width: 600px) {
  #soporte{
    display: flex;
    flex-direction: column;
  }

  #desplegable-iphone{
    width: 300px;
    left: 270% !important;
  }

  #desplegable-mac{
      width: 300px;
      left: 50% !important;
    }

  #desplegable-watch{
      width: 200px;
      left: 0% !important;
    }

  
}


</style>
