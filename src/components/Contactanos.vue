<template>
    <div>
        <img src="/public/imagenes/banner-home2.jpg" class="imagen-contactanos">
    </div>
    <br><br><br>

    <div class="titulo-formulario">
        <h3>
            Contactanos
        </h3>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem, dolorum vero aspernatur totam voluptate ducimus, architecto cum tenetur,  
            libero harum magni natus quis sunt sequi repellat debitis recusandae itaque autem? Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Sed distinctio, voluptates ipsa quis quae eos repellat debitis molestias minus optio nam sunt! Illo obcaecati possimus recusandae exercitationem?
        </p>
    </div>

    <div class="formulario-container">
        <form @submit.prevent="onSubmit" novalidate class="custom-form">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <input type="text" class="form-control custom-input" placeholder="Nombre*" v-model="nombre" :class="{'is-invalid': errors.nombre}" />
                    <div class="invalid-feedback" v-if="errors.nombre">{{ errors.nombre }}</div>
                </div>

                <div class="col-md-6 mb-3">
                    <input type="text" class="form-control custom-input" placeholder="Apellido*" v-model="apellido" :class="{'is-invalid': errors.apellido}" />
                    <div class="invalid-feedback" v-if="errors.apellido">{{ errors.apellido }}</div>
                </div>
                    
                <div class="col-md-6 mb-3">
                    <input type="email" class="form-control custom-input" placeholder="Email*" v-model="email" :class="{'is-invalid': errors.email}" />
                    <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
                </div>
                
                <div class="col-md-6 mb-3">
                    <input type="tel" class="form-control custom-input" placeholder="Teléfono*" v-model="telefono" :class="{'is-invalid': errors.telefono}" />
                    <div class="invalid-feedback" v-if="errors.telefono">{{ errors.telefono }}</div>
                </div>

                <div class="col-12 mb-3">
                    <textarea class="form-control custom-input" rows="4" placeholder="Mensaje*" v-model="mensaje" :class="{'is-invalid': errors.mensaje}"></textarea>
                    <div class="invalid-feedback" v-if="errors.mensaje">{{ errors.mensaje }}</div>
                </div>

                <div class="col-12 form-check mb-2">
                    <input class="form-check-input" type="checkbox" id="recibirInfo" v-model="recibirInfo" checked="true"/>
                    <label class="form-check-label" for="recibirInfo">
                    Acepto recibir comunicaciones de Marketing
                    </label>
                </div>

                <div class="col-12 form-check mb-3">
                    <input class="form-check-input" type="checkbox" id="terminos" v-model="terminos" :class="{'is-invalid': errors.terminos}" />
                    <label class="form-check-label" for="terminos">
                    Acepto los <a href="#">términos y condiciones</a>, <a href="#">Política de Privacidad</a> y <a href="#">Política de arrepentimiento</a>*
                    </label>
                    <div class="invalid-feedback" v-if="errors.terminos">{{ errors.terminos }}</div>
                </div>

                <div class="col-12 text-end">
                    <button type="submit" class="btn btn-orange">Enviar</button>
                </div>
            </div>
        </form>
    </div>
    <br><br><br>

    <div class="retiro-titulo">
       <h5>Retiro de pedidos</h5>
       <p>Av. Calle 1234 (CABA) 
        <br>
        Lunes a Viernes de 10 a 18:30hs
       </p>

       <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.451148615219!2d-58.390877212179454!3d-34.618037803200664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad888084e5b%3A0xffa2169c71184fec!2sSan%20Jos%C3%A9%20819%2C%20C1076%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1747249516934!5m2!1ses!2sar"
         width="1200" height="450" style="border-radius:12px; width: 100%;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
       </div>
    </div>
    <br><br><br>
</template>

  
  <script setup>

  import { ref } from 'vue';

    const nombre = ref('');
    const apellido = ref('');
    const email = ref('');
    const telefono = ref('');
    const mensaje = ref('');
    const recibirInfo = ref(true);
    const terminos = ref(false);  

    const errors = ref({
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      mensaje: '',
      terminos: ''
    });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const onSubmit = () => {

    errors.value = {
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        mensaje: '',
        recibirInfo: '',
        terminos: '',
      };
  
    if (!nombre.value) {
      errors.value.nombre = 'El nombre es obligatorio';
    }
    if (!apellido.value) {
      errors.value.apellido = 'El apellido es obligatorio';
    }
    if (!email.value) {
      errors.value.email = 'El email es obligatorio';
    }else if (!validateEmail(email.value)) {
      errors.value.email = 'Ingresá un email válido';
    }
    if (!telefono.value) {
      errors.value.telefono = 'El teléfono es obligatorio';
    }else if (!/^\d+$/.test(telefono.value)) {
      errors.value.telefono = 'El teléfono debe ser solo números';
    }
    if (!mensaje.value) {
      errors.value.mensaje = 'El mensaje es obligatorio';
    }
    if (!terminos.value) {
      errors.value.terminos = 'Debés aceptar los términos';
    }
  }

  </script>

  <style scoped>

.imagen-contactanos{
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: bottom;
}

.titulo-formulario{
  max-width: 1200px;
  margin: 0 auto;
}

.formulario-container {
  background-color: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 1200px;
  margin: 0 auto;
}

.custom-input {
  border-radius: 8px;
  padding: 12px;
  border: 1px solid #d3dce6;
}

.custom-input:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.btn-orange {
  background-color: rgb(205, 92, 92);
  border: none;
  color: white;
  padding: 10px 30px;
  border-radius: 20px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-orange:hover {
  background-color: rgb(151, 70, 70);
}

.retiro-titulo{
  max-width: 1200px;
  margin: 0 auto;
}

    </style>
  