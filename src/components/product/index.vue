<template>
  <div class="cart-container" v-b-modal="`modal-scrollable-${product.id}`">
    <div v-if="product.is_on_discount" class="ribbon-wrapper">
      <div class="ribbon">Oferta</div>
    </div>
    <div class="cart-container__image">
      <img :src="product.image_url" alt="" />
    </div>
    <div class="cart-container__title">{{ product.name }}</div>
    <div class="cart-container__description">{{ product.description }}</div>
    <div class="cart-container__price">
      <span :class="product.is_on_discount && 'discount'"
        >${{ product.original_price }}</span
      >
      <span v-if="product.is_on_discount">${{ product.discounted_price }}</span>
    </div>
    <span class="cart-container__action">
      <button @click.stop="addToCart" class="btn" v-if="!isIncart">
        <b-icon icon="cart-plus" style="width: 24px; height: 24px"></b-icon>
      </button>
      <router-link v-else :to="PATH.CART">
        <button class="btn">Ver en Carrito</button>
      </router-link>
    </span>
    <b-modal
      :id="`modal-scrollable-${product.id}`"
      scrollable
      centered
      size="lg"
      :title="product.name"
    >
      <div class="product-detail-wrapper">
        <div class="left-content">
          <img :src="product.image_url" alt="" />
        </div>
        <div class="right-content">
          <div class="cart-container__description">
            {{ product.description }}
          </div>
          <div class="cart-container__price">
            <span :class="product.is_on_discount && 'discount'"
              >${{ product.original_price }}</span
            >
            <span v-if="product.is_on_discount"
              >${{ product.discounted_price }}</span
            >
          </div>
          <div class="cart-container__stock">
            {{ product.stock_count }} en stock
          </div>
        </div>
      </div>
      <template #modal-footer>
        <div class="footer__action">
          <b-button
            @click.stop="addToCart"
            variant=""
            class="btn"
            v-if="!isIncart"
          >
            <span class="mr-2">Añadir al Carrito</span
            ><b-icon
              icon="cart-plus"
              style="width: 24px; height: 24px"
            ></b-icon>
          </b-button>
          <router-link v-else :to="PATH.CART">
            <b-button class="btn">Ver en Carrito</b-button>
          </router-link>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
