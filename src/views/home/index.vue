<template>
  <div class="home-wrapper">
    <div class="main-content">
      <h1>Tu Farmacia en todo momento, no importa el lugar.</h1>
      <router-link :to="PATH.PRODUCTS">
        <b-button class="btn">¡¡Hace tu Pedido Ahora!!</b-button>
      </router-link>
      <div class="video">
        <p>Para más Información:</p>
        <iframe src="https://www.youtube.com/embed/fon3LpNFSwU?si=g6pxMIJf8PE-f1rt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.764957371012!2d-58.65011379444423!3d-34.837001695351574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcdc9e3c8b50cb%3A0xf814ed0ae172d826!2sFarmacia%20Wast%20Perfumeria!5e0!3m2!1ses!2sar!4v1719616269037!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
