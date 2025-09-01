<template>
    <br><br>
    <div class="bg-light min-vh-100 py-4">
      <div class="container">
        <h1 class="mb-4 text-center">Finalizar compra</h1>
  
        <!-- HEADER DE PASOS -->
        <div class="row justify-content-center mb-4">
          <div v-for="(p, i) in pasos" :key="i" class="col-4 col-sm-2 text-center">
            <div class="rounded-circle d-flex justify-content-center align-items-center mx-auto"
              :class="pasoActual === i+1 ? 'bg-primary text-white' : 'bg-secondary text-white'"
              style="width:38px; height:38px;">
              {{ i+1 }}
            </div>
            <div class="small mt-2" :class="pasoActual === i+1 ? 'fw-bold' : ''">{{ p }}</div>
          </div>
        </div>
  
        <!-- PASO 1: Identificación -->
        <div v-if="pasoActual === 1" class="bg-white rounded-4 shadow-sm p-4 mx-auto" style="max-width: 900px;">
          <h5 class="fw-bold mb-4">Identificación</h5>
          <form @submit.prevent="validarIdentificacion">
            <div class="row g-3">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Nombre*" v-model="nombre" :class="{ 'is-invalid': errorsId.nombre }" />
                <div class="invalid-feedback" v-if="errorsId.nombre">{{ errorsId.nombre }}</div>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Apellido*" v-model="apellido" :class="{ 'is-invalid': errorsId.apellido }" />
                <div class="invalid-feedback" v-if="errorsId.apellido">{{ errorsId.apellido }}</div>
              </div>
              <div class="col-md-6">
                <input type="date" class="form-control" placeholder="Fecha de nacimiento*" v-model="fechaNac" :class="{ 'is-invalid': errorsId.fechaNac }" />
                <div class="invalid-feedback" v-if="errorsId.fechaNac">{{ errorsId.fechaNac }}</div>
              </div>
              <div class="col-md-6">
                <input type="email" class="form-control" placeholder="Email*" v-model="email" :class="{ 'is-invalid': errorsId.email }" />
                <div class="invalid-feedback" v-if="errorsId.email">{{ errorsId.email }}</div>
              </div>
            </div>
            <div class="mt-4 d-flex justify-content-between">
              <!-- <span class="text-secondary"><i class="bi bi-arrow-left"></i> Volver al carrito</span> -->
              <span><router-link to="/carrito" class="btn btn-link"><i class="fas fa-caret-left"></i> Volver al carrito</router-link></span>
              <button type="submit" class="btn btn-primary fw-bold">Continuar</button>
            </div>
          </form>
        </div>
  
        <!-- PASO 2: Envío -->
        <div v-if="pasoActual === 2" class="bg-white rounded-4 shadow-sm p-4 mx-auto" style="max-width: 900px;">
          <h5 class="fw-bold mb-4">Envío</h5>
          <form @submit.prevent="validarEnvio">
            <div class="row g-3">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Documento*" v-model="documento" :class="{ 'is-invalid': errorsEnvio.documento }" />
                <div class="invalid-feedback" v-if="errorsEnvio.documento">{{ errorsEnvio.documento }}</div>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Teléfono*" v-model="telefono" :class="{ 'is-invalid': errorsEnvio.telefono }" />
                <div class="invalid-feedback" v-if="errorsEnvio.telefono">{{ errorsEnvio.telefono }}</div>
              </div>
            </div>
            <div class="mt-4">
              <label class="fw-bold mb-2">Método de envío</label>
              <div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="domicilio" v-model="metodoEnvio" value="domicilio" />
                  <label class="form-check-label" for="domicilio">Envío a domicilio</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" id="retiro" v-model="metodoEnvio" value="retiro" />
                  <label class="form-check-label" for="retiro">Retiro en tienda</label>
                </div>
              </div>
            </div>
            <div v-if="metodoEnvio === 'domicilio'" class="mt-3 row g-3">
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Calle y número*" v-model="calle" :class="{ 'is-invalid': errorsEnvio.calle }" />
                <div class="invalid-feedback" v-if="errorsEnvio.calle">{{ errorsEnvio.calle }}</div>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Piso/Depto" v-model="piso" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Código postal*" v-model="cp" :class="{ 'is-invalid': errorsEnvio.cp }" />
                <div class="invalid-feedback" v-if="errorsEnvio.cp">{{ errorsEnvio.cp }}</div>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Ciudad*" v-model="ciudad" :class="{ 'is-invalid': errorsEnvio.ciudad }" />
                <div class="invalid-feedback" v-if="errorsEnvio.ciudad">{{ errorsEnvio.ciudad }}</div>
              </div>
              <div class="col-md-6">
                <select class="form-select" v-model="provincia">
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="CABA">CABA</option>
                </select>
              </div>
            </div>
            <div v-else class="mt-3 text-secondary">
              <div class="fw-bold"> Av. Calle 1234 - CABA</div>
              <div>De Lunes a Viernes de 10 a 18:30hs</div>
            </div>
            <div class="mt-4 d-flex justify-content-between">
              <button type="button" class="btn btn-link" @click="pasoActual--"><i class="fas fa-caret-left"></i> Volver al paso anterior</button>
              <button type="submit" class="btn btn-primary fw-bold">Continuar</button>
            </div>
          </form>
        </div>
  
        <!-- PASO 3: Facturación -->
        <div v-if="pasoActual === 3" class="bg-white rounded-4 shadow-sm p-4 mx-auto" style="max-width: 900px;">
          <h5 class="fw-bold mb-4">Facturación</h5>
          <form @submit.prevent="validarFacturacion">
            <div class="mb-3 fw-bold">Seleccionar tipo de factura</div>
            <div class="mb-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="consumidor" v-model="tipoFactura" value="consumidor" />
                <label class="form-check-label" for="consumidor">Consumidor final</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" id="facturaA" v-model="tipoFactura" value="a" />
                <label class="form-check-label" for="facturaA">Factura A</label>
              </div>
            </div>
            <div class="mb-3 fw-bold">Datos de la factura</div>
            <div v-if="tipoFactura === 'consumidor'" class="row g-3">
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Calle y número*" v-model="factCalle" :class="{ 'is-invalid': errorsFact.factCalle }" />
                    <div class="invalid-feedback" v-if="errorsFact.factCalle">{{ errorsFact.factCalle }}</div>
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Piso/Depto" v-model="factPiso" />
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Código postal*" v-model="factCP" :class="{ 'is-invalid': errorsFact.factCP }" />
                    <div class="invalid-feedback" v-if="errorsFact.factCP">{{ errorsFact.factCP }}</div>
                </div>
                <div class="col-md-6">
                    <input type="text" class="form-control" placeholder="Ciudad*" v-model="factCiudad" :class="{ 'is-invalid': errorsFact.factCiudad }" />
                    <div class="invalid-feedback" v-if="errorsFact.factCiudad">{{ errorsFact.factCiudad }}</div>
                </div>
                <div class="col-md-6">
                    <select class="form-select" v-model="factProvincia">
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="CABA">CABA</option>
                    </select>
                </div>
            </div>
            <div v-if="tipoFactura === 'a'" class="row g-3">
                <div class="col-md-6">
                <select class="form-select" v-model="factTipo">
                  <option value="inscripto">Responsable Inscripto</option>
                  <option value="monotributista">Responsable monotributista</option>
                  <option value="exento">Exento</option>
                  <option value="no_responsable">No responsable</option>
                </select>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Razón social*" v-model="razonSocial" :class="{ 'is-invalid': errorsFact.razonSocial }" />
                <div class="invalid-feedback" v-if="errorsFact.razonSocial">{{ errorsFact.razonSocial }}</div>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="CUIT*" v-model="cuit" :class="{ 'is-invalid': errorsFact.cuit }" />
                <div class="invalid-feedback" v-if="errorsFact.cuit">{{ errorsFact.cuit }}</div>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Calle y número*" v-model="factCalle" :class="{ 'is-invalid': errorsFact.factCalle }" />
                <div class="invalid-feedback" v-if="errorsFact.factCalle">{{ errorsFact.factCalle }}</div>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Piso/Depto" v-model="factPiso" />
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Código postal*" v-model="factCP" :class="{ 'is-invalid': errorsFact.factCP }" />
                <div class="invalid-feedback" v-if="errorsFact.factCP">{{ errorsFact.factCP }}</div>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control" placeholder="Ciudad*" v-model="factCiudad" :class="{ 'is-invalid': errorsFact.factCiudad }" />
                <div class="invalid-feedback" v-if="errorsFact.factCiudad">{{ errorsFact.factCiudad }}</div>
              </div>
              <div class="col-md-6">
                <select class="form-select" v-model="factProvincia">
                  <option value="Buenos Aires">Buenos Aires</option>
                  <option value="CABA">CABA</option>
                </select>
              </div>
            </div>
            <div class="mt-4 d-flex justify-content-between">
              <button type="button" class="btn btn-link" @click="pasoActual--"><i class="fas fa-caret-left"></i> Volver al paso anterior</button>
              <button type="submit" class="btn btn-primary fw-bold">Continuar</button>
            </div>
          </form>
        </div>
  
        <!-- PASO 4: Confirmación -->
        <div v-if="pasoActual === 4" class="bg-white rounded-4 shadow-sm p-4 mx-auto" style="max-width: 900px;">
          <h5 class="fw-bold mb-4">Confirmación</h5>
          <div>
            <div class="mb-3">
              <span class="fw-bold">Identificación:</span>
              <div>Nombre y apellido: {{ resumen.nombre }} {{ resumen.apellido }}</div>
              <div>Fecha de nacimiento: {{ resumen.fechaNac }}</div>
              <div>Email: {{ resumen.email }}</div>
            </div>
            <div class="mb-3">
              <span class="fw-bold">Envío:</span>
              <div>DNI: {{ resumen.documento }}</div>
              <div>Teléfono: {{ resumen.telefono }}</div>
              <div v-if="resumen.metodoEnvio === 'domicilio'">
                Envío a domicilio ({{ resumen.direccion }})
              </div>
              <div v-else>
                Retiro en tienda - Av. Calle 1234 - CABA, De Lunes a Viernes de 10 a 18:30hs
              </div>
            </div>
            <div class="mb-3">
              <span class="fw-bold">Facturación:</span>
              <div>Tipo de factura: {{ resumen.tipoFactura === 'a' ? 'Factura A' : 'Consumidor final' }}</div>
              <div v-if="resumen.tipoFactura === 'a'">
                Razón social: {{ resumen.razonSocial }}<br>
                CUIT: {{ resumen.cuit }}<br>
                Dirección: {{ resumen.factDireccion }}
              </div>
            </div>
          </div>
          <div class="mt-4 d-flex justify-content-between">
            <button type="button" class="btn btn-link" @click="pasoActual--"><i class="fas fa-caret-left"></i> Volver al paso anterior</button>
            <button type="button" class="btn btn-primary fw-bold" @click="pasoActual++">Continuar</button>
          </div>
        </div>
  
        <!-- PASO 5: Pago -->
        <div v-if="pasoActual === 5" class="bg-white rounded-4 shadow-sm p-4 mx-auto" style="max-width: 900px;">
          <h5 class="fw-bold mb-4">Métodos de pago</h5>
          <div class="mb-4">
            <div class="fw-bold fs-5">Pago único</div>
            <div>Producto de ejemplo (reemplazá con tu info)</div>
            <div class="fs-4 fw-bold text-end mt-2"> Total: {{ total }} USD</div>
          </div>
          <form @submit.prevent="finalizarCompra">
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="radio" id="mercadopago" v-model="metodoPago" value="mercadopago" />
                <label class="form-check-label fw-bold text-primary" for="mercadopago">
                  A través de MercadoPago
                </label>
              </div>
              <div class="ms-4 text-secondary small">Serás redirigido a MercadoPago para finalizar tu compra.</div>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input class="form-check-input" type="radio" id="modo" v-model="metodoPago" value="modo" />
                <label class="form-check-label fw-bold" style="color: #00b050;" for="modo">
                  Con QR desde MODO o tu app bancaria
                </label>
              </div>
            </div>
            <div class="mt-4 d-flex justify-content-between">
              <button type="button" class="btn btn-link" @click="pasoActual--"><i class="fas fa-caret-left"></i> Volver al paso anterior</button>
              <button type="submit" class="btn btn-success fw-bold">Finalizar compra</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

  import { ref, computed } from 'vue'
  import { useCartStore } from '../stores/cartStore'

  const store = useCartStore()

  const total = computed(() => store.totalCarrito)
  // Paso actual
  const pasoActual = ref(1)
  const pasos = ['Identificación', 'Envío', 'Facturación', 'Confirmación', 'Pago']
  
  // Identificación
  const nombre = ref('')
  const apellido = ref('')
  const fechaNac = ref('')
  const email = ref('')
  const errorsId = ref({
    nombre: '', apellido: '', fechaNac: '', email: ''
    })

  function validarIdentificacion() {

    errorsId.value = { nombre: '', apellido: '', fechaNac: '', email: '' }

    let ok = true

    if(!nombre.value){
        errorsId.value.nombre = 'Campo obligatorio'; 
        ok = false 
    }

    if(!apellido.value){
        errorsId.value.apellido = 'Campo obligatorio'; 
        ok = false
    }
    
    if(!fechaNac.value){
        errorsId.value.fechaNac = 'Campo obligatorio'; 
        ok = false 
    }

    if(!email.value){
        errorsId.value.email = 'Campo obligatorio'; 
        ok = false 
    }else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { 
        errorsId.value.email = 'Email inválido'; 
        ok = false 
    }

    if(ok) pasoActual.value++
  }
  
  // Envío
  const documento = ref('')
  const telefono = ref('')
  const metodoEnvio = ref('domicilio')
  const calle = ref('')
  const piso = ref('')
  const cp = ref('')
  const ciudad = ref('')
  const provincia = ref('Buenos Aires')
  const errorsEnvio = ref({
    documento: '', telefono: '', calle: '', cp: '', ciudad: '', provincia: ''
  })

  function validarEnvio() {

    errorsEnvio.value = { documento: '', telefono: '', calle: '', cp: '', ciudad: '', provincia: '' }

    let ok = true

    if(!documento.value){
        errorsEnvio.value.documento = 'Campo obligatorio'; 
        ok = false 
    }else if(documento.value.length !== 8){
        errorsEnvio.value.documento = 'Debe contener 8 dígitos';
        ok = false 
    }else if(documento.value.length === 8 && !/^\d+$/.test(documento.value)){
        errorsEnvio.value.documento = 'Debe contener solo números'  ;
        ok = false 
    }

    if(!telefono.value){
        errorsEnvio.value.telefono = 'Campo obligatorio'; 
        ok = false 
    }else if(!/^\d+$/.test(telefono.value)){
        errorsEnvio.value.telefono = 'Debe contener solo números'; 
        ok = false 
    }

    if(metodoEnvio.value === 'domicilio') {
        if(!calle.value){
            errorsEnvio.value.calle = 'Campo obligatorio';
            ok = false 
        }
        if(!cp.value){
            errorsEnvio.value.cp = 'Campo obligatorio'; 
            ok = false 
        }else if(!/^\d+$/.test(cp.value)){
            errorsEnvio.value.cp = 'Debe contener solo números';
            ok = false
        }
        if(!ciudad.value){
            errorsEnvio.value.ciudad = 'Campo obligatorio'; 
            ok = false 
        }
        if(!provincia.value){
            errorsEnvio.value.provincia = 'Campo obligatorio'; 
            ok = false 
        }
    }

    if (ok) pasoActual.value++
  }
  
  // Facturación
  const tipoFactura = ref('consumidor')
  const razonSocial = ref('')
  const cuit = ref('')
  const factCalle = ref('')
  const factPiso = ref('')
  const factCP = ref('')
  const factCiudad = ref('')
  const factTipo = ref('inscripto')
  const factProvincia = ref('Buenos Aires')
  const errorsFact = ref({
    razonSocial: '', cuit: '', factCalle: '', factCP: '', factCiudad: '', factProvincia: ''
  })

  function validarFacturacion() {

    errorsFact.value = { razonSocial: '', cuit: '', factCalle: '', factCP: '', factCiudad: '', factProvincia: '' }

    let ok = true

    if(tipoFactura.value === 'consumidor'){
        if(!factCalle.value){
            errorsFact.value.factCalle = 'Campo obligatorio';
            ok = false
        }
        if(!factCP.value){
            errorsFact.value.factCP = 'Campo obligatorio';
        }else if(!/^\d+$/.test(factCP.value)){
            errorsFact.value.factCP = 'Debe contener solo números';
            ok = false
        }
        if(!factCiudad.value){
            errorsFact.value.factCiudad = 'Campo obligatorio';
            ok = false
        }
        if(!factProvincia.value){
            errorsFact.value.factProvincia = 'Campo obligatorio';
            ok = false
        }
    }

    if (tipoFactura.value === 'a') {
        if(!factTipo.value){
            errorsFact.value.factTipo = 'Campo obligatorio';
            ok = false
        }
        if(!razonSocial.value){
            errorsFact.value.razonSocial = 'Campo obligatorio'; 
            ok = false 
        }
        if(!cuit.value){
            errorsFact.value.cuit = 'Campo obligatorio'; 
            ok = false 
        }
        if(!factCalle.value){
            errorsFact.value.factCalle = 'Campo obligatorio'; 
            ok = false 
        }
        if(!factCiudad.value){
            errorsFact.value.factCiudad = 'Campo obligatorio'; 
            ok = false
        }
        if(!factProvincia.value){
            errorsFact.value.factProvincia = 'Campo obligatorio'; 
            ok = false
        }
        if(!factCP.value){
            errorsFact.value.factCP = 'Campo obligatorio';
            ok = false
        }else if(!/^\d+$/.test(factCP.value)){
            errorsFact.value.factCP = 'Debe contener solo números';
            ok = false
        }
    }

    if (ok) pasoActual.value++
  }
  
  // Pago
  const metodoPago = ref('mercadopago')
  
  // Resumen para Confirmación
  const resumen = computed(() => ({
    nombre: nombre.value,
    apellido: apellido.value,
    fechaNac: fechaNac.value,
    email: email.value,
    documento: documento.value,
    telefono: telefono.value,
    metodoEnvio: metodoEnvio.value,
    direccion: `${calle.value} ${piso.value ? (' Piso: ' + piso.value) : ''}, ${ciudad.value}, ${cp.value}, ${provincia.value}`,
    tipoFactura: tipoFactura.value,
    razonSocial: razonSocial.value,
    cuit: cuit.value,
    factDireccion: `${factCalle.value} ${factPiso.value ? (' Piso: ' + factPiso.value) : ''}, ${factCiudad.value}, ${factCP.value}, ${factProvincia.value}`,
    metodoPago: metodoPago.value
  }))
  
  function finalizarCompra() {
    alert('Gracias por tu compra!')
  }
  </script>

  <style scoped>
    .bg-primary{
      background-color: rgb(18, 44, 83) !important;
    }
    
    .btn-primary{
        background-color: rgb(18, 44, 83) !important;
        border-color: rgb(18, 44, 83) !important;
    }

    .btn-primary:hover{
        color: rgb(18, 44, 83) !important;
        background-color: rgb(165, 179, 196) !important;
        border-color: rgb(165, 179, 196) !important;
    }

    .btn-link{
        text-decoration: none;
        color: #7c8594;
    }
  </style>
  