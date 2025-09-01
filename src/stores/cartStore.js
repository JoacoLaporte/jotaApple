import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const carrito = ref([])

  function agregarProducto(producto) {
    const item = carrito.value.find(p => p.id === producto.id)
    if (item) {
      item.cantidad += 1
    } else {
      carrito.value.push({ ...producto, cantidad: 1 })
    }
  }

  function quitarProducto(id) {
    carrito.value = carrito.value.filter(p => p.id !== id)
  }

  function incrementarCantidad(id) {
    const item = carrito.value.find(p => p.id === id)
    if (item) item.cantidad += 1
  }

  function decrementarCantidad(id) {
    const item = carrito.value.find(p => p.id === id)
    if (item && item.cantidad > 1) item.cantidad -= 1
  }

  const totalItems = computed(() =>
    carrito.value.reduce((acc, item) => acc + item.cantidad, 0)
  )

  const totalCarrito = computed(() =>
    carrito.value.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
  )

  return {
    carrito,
    agregarProducto,
    quitarProducto,
    incrementarCantidad,
    decrementarCantidad,
    totalItems,
    totalCarrito
  }
})
