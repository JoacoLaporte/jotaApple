<template>

  <!-- CARRUSEL -->
   <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
         <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
         <div class="carousel-item active">
            <!-- <a href="#" @click="getProductos('iphone16')" style="background-image: url('/public/imagenes/iphone16.jpg'); background-size: cover; display: flex; width: 100%; height: 500px; text-decoration: none; color: white;"> -->
            <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone16,iphone16ProMax,iphone16Pro,iphone16Plus' }, query: { nombre: 'iPhone 16'} }" class="dropdown-item" id="primer-enlace-carrusel">
               <div id="contenedor-info-carrusel">
                  <h1>iPhone 16</h1>
                  <p>
                     iPhone 16 <br>
                     iPhone 16 Plus <br>
                     iPhone 16 Pro <br>
                     iPhone 16 Pro Max <br>
                  </p>
                  <p id="p-ver-mas"> Ver mas</p>
               </div>
            </router-link>
         </div>

         <div class="carousel-item">
            <!-- <a href="#" @click="getProductos('macbookPro')" style="background-image: url('/public/imagenes/macbook2.jpg'); background-size: cover; display: flex; width: 100%; height: 500px; text-decoration: none; color: white;"> -->
            <router-link :to="{ name: 'ProductsView', params: { categoria: 'macbookProM4-16,macbookProM4-14' }, query:{ nombre: 'Macbook Pro'} }" class="dropdown-item" id="segundo-enlace-carrusel">
               <div id="contenedor-info-carrusel">
                  <h1>
                     MacBook Pro 16" / 14" <br>
                     M4 - M4 Pro - M4 Max
                  </h1>
                  <p>Con los superpoderes del Chip M4.</p>
                  <p id="p-ver-mas"> Ver mas</p>
               </div>
            </router-link>
         </div>

         <div class="carousel-item">
            <!-- <a href="#" @click="getProductos('watch')"style="background-image: url('/public/imagenes/watchSerie104.jpg'); background-size: cover; display: flex; width: 100%; height: 500px; text-decoration: none;"> -->
            <router-link :to="{ name: 'ProductsView', params: { categoria: 'watchUltra' }, query: { nombre: 'Watch Ultra 2'} }" class="dropdown-item" id="tercer-enlace-carrusel">
               <div id="contenedor-info-carrusel">
                  <h1> Apple Watch</h1>
                  <p>ULTRA 2</p>
                  <p id="p-ver-mas"> Ver mas</p>
               </div>
            </router-link>
         </div>
      </div>
   

   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
   </button>

   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
   </button>
</div>
<br><br><br><br>


<!-- PRODUCTOS IMAGENES -->
<div id="contenedor-imagenes-cuerpo" style="display: flex; justify-content: space-around; text-align: center; align-items: center;">
  <div class="img-wrapper">
    <router-link :to="{ name: 'ProductsView', params: { categoria: 'iphone14ProMax,iphone14Pro,iphone15ProMax,iphone15Pro,iphone16ProMax,iphone16Pro,iphone16Plus,iphone16' }, query: {nombre: 'iPhones'} }">
      <img src="/public/imagenes/iphoneNegro.png" alt="" />
    </router-link>
  </div>
  <div class="img-wrapper">
    <router-link :to="{ name: 'ProductsView', params: { categoria: 'macbookProM4-16,macbookProM4-14,macbookProM2-13,macbookAirM4-15,macbookAirM3-15' }, query:{ nombre: 'Macbooks'}}">
      <img src="/public/imagenes/macbookNegra.png" alt="" />
    </router-link>
  </div>

  <div class="img-wrapper">
    <router-link :to="{ name: 'ProductsView', params: { categoria: 'watchUltra,watchSerie10-46,watchSerie10-42,watchSE-44,watchSE-40' }, query:{ nombre: 'Watches'} }">
      <img src="/public/imagenes/watchNegro.png" alt="" />
    </router-link>
  </div>
</div>
<br><br><br>


<!-- DATOS -->
<div class="container py-5">
  <div class="row g-4">
    <!-- Redes -->
    <div class="col-md-6 col-lg-3">
      <div class="info-card text-start">
        <i class="fa-solid fa-hashtag info-icon"></i>
        <h5>Seguinos en <br> nuestras redes</h5>
        <div class="social-icons mt-2">
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""> <i class="fa-brands fa-youtube"></i></a> 
        </div>
      </div>
    </div>

    <!-- Pagos -->
    <div class="col-md-6 col-lg-3">
      <div class="info-card text-start">
        <i class="fa-solid fa-wallet info-icon"></i>
        <h5>Pagá con</h5>
        <div class="payment-methods mt-2">
          <span>Mercado Pago</span>
          <span>MODO</span>
          <i class="fa-solid fa-university"></i>
        </div>
        <div class="card-icons mt-2">
          <i class="fa-brands fa-cc-visa"></i>
          <i class="fa-brands fa-cc-mastercard"></i>
          <i class="fa-brands fa-cc-amex"></i>
          <i class="fa-brands fa-cc-discover"></i>
          <i class="fa-solid fa-credit-card"></i>
        </div>
      </div>
    </div>

    <!-- Envíos -->
    <div class="col-md-6 col-lg-3">
      <div class="info-card text-start">
        <i class="fa-solid fa-box info-icon"></i>
        <h5>Envíos a todo el <br> país</h5>
        <div class="shipping-company mt-2">ANDREANI</div>
      </div>
    </div>

    <!-- Retiro en tienda -->
    <div class="col-md-6 col-lg-3">
      <div class="info-card text-start">
        <i class="fa-solid fa-store info-icon"></i>
        <h5>Retiro en nuestra <br> tienda</h5>
        <p class="store-address mt-2">Av. Calle 1234 </p>
      </div>
    </div>
  </div>
</div>
<br><br>


<!-- VIDEO -->
<div id="contenedor-video">
  <h2>Nuevo iPhone 16!</h2>
  <video autoplay loop muted playsinline class="video">
    <source src="../../public/videos/lanzamientoIphone16.mp4" type="video/mp4">
  </video>
</div>
<br><br>


<!--CONTENIDO EXTRA-->
<div class="beneficios-contenedor">
  <div class="beneficio">
    <img src="/imagenes/enviosApple.jpg" alt="Envíos">
    <h3>Envíos a domicilio</h3>
    <p>Recibí tus productos sin complicaciones.</p>
  </div>

  <div class="beneficio">
    <img src="/imagenes/AtencionApple.jpg" alt="Atención">
    <h3>Atención personalizada</h3>
    <p>Te guiamos en tu compra para elegir lo mejor.</p>
  </div>

  <div class="beneficio">
    <img src="/imagenes/productosEscritorio.jpg" alt="Productos">
    <h3>El precio más conveniente</h3>
    <p>Los mejores productos Apple al mejor precio del mercado.</p>
  </div>
</div>

</template>

<script>

</script>

<style scoped>

#primer-enlace-carrusel{
  background-image: url('/imagenes/iphone16.jpg'); 
  background-size: cover; 
  display: flex; 
  width: 100%; 
  height: 500px; 
  text-decoration: none; 
  color: black;
}


#segundo-enlace-carrusel{
  background-image: url('/imagenes/macbookpint.jpg'); 
  display: flex;
  width: 100%;
  height: 500px;
  text-decoration: none;
  background-position: right center;
  background-size: contain;
  background-repeat: no-repeat;
  color: white;
  background-color: black;
}

#tercer-enlace-carrusel{
  background-image: url('/imagenes/ultrawatch2.jpg'); 
  display: flex;
  width: 100%;
  height: 500px;
  text-decoration: none;
  background-position: 70%;
  background-size: contain;
  background-repeat: no-repeat;
  color: white;
  background-color: black;
}

#contenedor-info-carrusel{
  display: flex; 
  flex-direction: column;  
  align-items: center;  
  justify-content: center;  
  text-align: center;  
  margin-left: 20%;
}

#p-ver-mas{
  border: 2px solid rgb(165, 179, 196);
  border-radius: 15px;
  width: 80px;
}

#p-ver-mas:hover{
  background-color: rgb(165, 179, 196);
  transition: 0.5s;
  width: 80px;  
  border-radius: 10px;
}

.img-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  /* overflow: hidden; */

}

.img-wrapper img {
  width: 55%;
  transition: transform 1s ease;
  /* display: block; */
}

.img-wrapper:hover img {
  transform: scale(1.1);
}

.img-wrapper::after {
  content: "¡Comprar!";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgb(165, 179, 196);
  font-size: 18px;
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none;
  z-index: 1;
  color: #F4F7FB;
  background-color: rgb(165, 179, 196, 0.3);
  border-radius: 8px;
  width: 95px;
  height: 30px;
}

.img-wrapper:hover::after {
  opacity: 1;
}

#contenedor-video{
  text-align: center;
}

.video{
  width: 83%;
  border-radius: 40px;
}

.beneficios-contenedor {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 40px 20px;
  border-radius: 12px;
  max-width: 1200px;
  margin: auto;
}

.beneficio {
  flex: 1 1 30%;
  text-align: center;
  padding: 15px;
  border-radius: 12px;
}

.beneficio img {
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}

.beneficio h3 {
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #000000;
}

.beneficio p {
  font-size: 0.95rem;
  color: #555;
}


.info-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.05);
  height: 100%;
}

.info-icon {
  font-size: 1.8rem;
  color: #6c757d;
  margin-bottom: 0.5rem;
}

.social-icons i,
.card-icons i {
  font-size: 1.4rem;
  margin-right: 0.6rem;
  color: #333;
}

.payment-methods span {
  font-weight: bold;
  margin-right: 0.8rem;
}

.shipping-company {
  color: #d40000;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0.5rem;
}

.store-address {
  color: #6c757d;
  font-size: 0.95rem;
}

</style>