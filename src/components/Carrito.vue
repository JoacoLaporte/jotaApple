<template>
  <br>
  <div id="carrito-bg">
    <div id="carrito-contenedor-dos-columnas">
      <!-- Columna productos -->
      <div id="carrito-col-productos">
        <div id="carrito-contenedor-titulo">
          <h2>Carrito</h2>
          <div v-if="store.carrito.length == 0" id="carrito-contenedor-vacio">
            <div id="carrito-contenedor-vacio-img">
              <!-- Usamos baseUrl -->
              <img :src="baseUrl + 'imagenes/carrito-vacio.png'" width="400" height="400">
            </div>
            <div id="carrito-contenedor-vacio-p-boton">
              <p>Tu carrito se encuentra vacío.</p>
              <router-link to="/">
                <button id="boton-volver">
                  Volver a la tienda
                </button>
              </router-link>
            </div>
          </div>
        </div>

        <div v-if="store.carrito.length > 0" id="carrito-contenedor-items">
          <br><br>
          <div id="carrito-items" v-for="item in store.carrito" :key="item.id">
            <div class="contenedor-items-img">
              <!-- Para las imágenes de los productos -->
              <img :src="baseUrl + item.imagenes[0]" width="100" height="45">
            </div>
            <div class="contenedor-items-texto">
              <div>
                <p>
                  {{ item.nombre }} - {{ item.color }} <br>
                  USD $ {{ item.precio }} <br>  
                </p>
              </div>
              <div class="contenedor-items-btn-cantidad">
                <button @click="store.decrementarCantidad(item.id)" class="cantidad-btn-menos">-</button>
                <div>{{ item.cantidad }}</div>
                <button @click="store.incrementarCantidad(item.id)" class="cantidad-btn-mas">+</button>
              </div>
            </div>
            <div class="contenedor-items-btn-eliminar">
              <button class="boton-eliminar" @click="store.quitarProducto(item.id)" title="Eliminar">
                <i class="fa fa-trash"></i>
              </button>
            </div>
          </div>
          <router-link to="/" class="seguir-comprando-link">
            <span>&#8592; Continuar comprando</span>
          </router-link>
        </div>
      </div>

      <!-- Columna resumen -->
      <div id="carrito-col-resumen" v-if="store.carrito.length > 0">
        <h4>Tu pedido</h4>
        <hr>
        <div v-for="item in store.carrito" :key="item.id" class="carrito-resumen-item">
          <span>{{ item.nombre }} (x{{ item.cantidad }})</span>
          <span>USD ${{ item.precio * item.cantidad }}</span>
        </div>
        <hr>
        <div class="carrito-resumen-total">
          <span>TOTAL:</span>
          <span>USD ${{ store.totalCarrito }}</span>
        </div>
        <router-link to="/finalizarCompra">
          <button id="finalizar-compra" class="boton-finalizar">
            Finalizar Compra
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>



<script setup>

import { useCartStore } from '../stores/cartStore'

// Base URL para imágenes
const baseUrl = import.meta.env.BASE_URL

const store = useCartStore()

</script>

<style scoped>

#carrito-bg {
  background: #F4F7FB;
  min-height: 100vh;
  padding: 30px 0;
}

#carrito-contenedor-dos-columnas {
  display: flex;
  justify-content: center;
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: flex-start;
}


#carrito-col-productos {
  flex: 2;
  min-width: 350px;
}

#carrito-contenedor-titulo h2 {
  margin-left: 10px;
  color: #122c53;
  font-size: 28px;
}

#carrito-contenedor-vacio{
  text-align: center;
  padding: 40px 0 60px 0;
  box-shadow: 0 2px 16px rgba(18, 44, 83, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}

#carrito-contenedor-vacio-p-boton button{
  background-color: rgb(18, 44, 83);
  color: #ffffff;
  border: none;
  padding: 3px 18px;
  border-radius: 5px;
  margin-top: 10px;
}

#carrito-contenedor-vacio-p-boton button:hover{
  background-color: rgb(165, 179, 196);
  border: none;
  color: #000;
}



#carrito-contenedor-items{
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 15px;
  margin-top: 5px;
}

#carrito-items{
  background-color: #fff;
  border-radius: 18px;
  box-shadow: 0 1px 8px rgba(18, 44, 83, 0.07);
  border: none;
  display: flex;
  align-items: center;
  padding: 25px 24px;
  gap: 20px;
  position: relative;
}

.contenedor-items-img img {
  border-radius: 10px;
  box-shadow: 0 1px 4px #dbeafe66;
  background: #f4f7fb;
}

.contenedor-items-texto {
  flex: 2;
}
.contenedor-items-texto p {
  font-size: 1.15rem;
  color: #222;
  margin: 0 0 10px 0;
}

.contenedor-items-btn-cantidad {
  display: flex;
  align-items: center;
  gap: 12px;
}

.cantidad-btn-menos, .cantidad-btn-mas {
  border: 1px solid #c7cfe6;
  background: none;
  color: #122c53;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background 0.14s;
}
.cantidad-btn-menos:hover, .cantidad-btn-mas:hover {
  background: #f4f7fb;
}

.contenedor-items-btn-eliminar {
  position: absolute;
  top: 16px;
  right: 16px;
}

.boton-eliminar {
  background: none;
  border: none;
  color: rgb(18, 44, 83);
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.15s;
}

.boton-eliminar:hover {
  color: rgb(165, 179, 196);
}

#carrito-col-resumen {
  flex: 1;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 16px rgba(18, 44, 83, 0.08);
  padding: 30px 32px 24px 32px;
  min-width: 320px;
  height: fit-content;
  margin-top: 57px;
}
#carrito-col-resumen h4 {
  font-size: 1.3rem;
  margin-bottom: 14px;
  color: #222;
}
.carrito-resumen-item {
  display: flex;
  justify-content: space-between;
  color: #5c6684;
  margin-bottom: 7px;
}
.carrito-resumen-total {
  display: flex;
  justify-content: space-between;
  font-size: 1.22rem;
  font-weight: bold;
  margin: 12px 0;
  color: rgb(18, 44, 83);
}

#finalizar-compra, .boton-finalizar {
  background: rgb(18, 44, 83);
  color: #fff;
  border: none;
  width: 100%;
  font-size: 1.15rem;
  padding: 14px 0;
  margin-top: 12px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s;
}
#finalizar-compra:hover, .boton-finalizar:hover {
  color: rgb(18, 44, 83);
  background: rgb(165, 179, 196);
}

.seguir-comprando-link {
  color: #7c8594;
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
  margin: 16px 0 0 7px;
}


@media (max-width: 900px) {
  #carrito-contenedor-dos-columnas {
    flex-direction: column;
    gap: 18px;
    padding: 0 10px;
    max-width: 100vw;
  }

  #carrito-col-productos,
  #carrito-col-resumen {
    min-width: unset;
    width: 100%;
    margin-top: 0;
    padding: 0;
  }

  #carrito-contenedor-items {
    align-items: center;
    gap: 10px;
  }

  #carrito-items {
    /* flex-direction: column; */
    align-items: flex-start;
    gap: 12px;
    padding: 16px 8px;
    width: 90%;
  }

  .contenedor-items-btn-eliminar {
    top: 43%;
    right: 10px;
  }

  #carrito-col-resumen {
    margin-bottom: 28px;
    padding: 18px 8px 12px 8px;
  }
}

/* MOBILE CHICO (menos de 600px) */
@media (max-width: 600px) {
  
  #carrito-bg {
    padding: 8px 0;
  }

  #carrito-contenedor-dos-columnas {
    gap: 7px;
    padding: 0 2px;
  }

  #carrito-contenedor-vacio-img img {
    width: 90vw;
    max-width: 220px;
    height: auto;
  }

  #carrito-contenedor-titulo h2 {
    font-size: 1.3rem;
    margin-left: 4px;
  }

  #carrito-items {
    padding: 9px 2px;
    font-size: 0.98rem;
  }

  .carrito-resumen-total {
    font-size: 1rem;
  }

  #finalizar-compra {
    padding: 10px 0;
    font-size: 1rem;
    border-radius: 8px;
  }

  .seguir-comprando-link {
    font-size: 0.98rem;
    margin: 10px 0 0 2px;
  }

  
}


</style>

