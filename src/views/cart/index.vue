<template>
  <div class="cart-wrapper">
    <div class="cart-wrapper__title-main"><b></b><span>CARRITO</span><b></b></div>
    <template v-if="products.length">
      <Table :items="products" :fields="fields">
        <template #cell(item)="{ item }">
          <div class="product">
            <img style="width: 100px" :src="item.image_url" alt="" />
            <div class="product__detail">
              <div class="d-flex justify-content-between">
                <div>
                  <div class="product__detail--name">{{ item.name }}</div>
                </div>
                <b-icon-trash
                  class="d-sm-none"
                  role="button"
                  @click="handleDeleteProduct(item.id)"
                ></b-icon-trash>
              </div>
              <div class="product__detail--mobile">
                <div>{{ formatValue(item.price) }}</div>
                <div>
                  <NumberInput
                    :value="item.quantity"
                    :max="item.stock_count"
                    @onChange="(val) => handleChangeQuantity(item.id, val)"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>
        <template #cell(quantity)="{ item }">
          <div>
            <NumberInput
              :value="item.quantity"
              showRemainCharacter
              :max="item.stock_count"
              @onChange="(val) => handleChangeQuantity(item.id, val)"
            />
          </div>
        </template>
        <template #cell(price)="{ item }">
          <div>{{ formatValue(item.price) }}</div>
        </template>
        <template #cell(subtotal)="{ item }">
          <div>{{ formatValue(item.quantity * item.price) }}</div>
        </template>
        <template #cell(action)="{ item }">
          <div>
            <b-icon-trash
              role="button"
              @click="handleDeleteProduct(item.id)"
            ></b-icon-trash>
          </div>
        </template>
      </Table>

      <div class="cart-wrapper__action">
        <router-link :to="PATH.PRODUCTS">
          <b-button variant="outline-secondary" class="btn btn-lg w-100"
            ><b-icon icon="arrow-left" style="margin-right: 8px"></b-icon
            >Pedido</b-button
          >
        </router-link>
        <router-link :to="PATH.CHECKOUT">
          <b-button class="btn text-capitalize btn btn-lg w-100"
            >Confirmación</b-button
          >
        </router-link>
      </div>
    </template>
    <div v-else>
      Su carro esta vacío
      <router-link :to="PATH.PRODUCTS">
        <b-button variant="outline-dark" class="btn mr-4"
          ><b-icon icon="arrow-left" style="margin-right: 8px"></b-icon>Continuar Pedido</b-button>
      </router-link>
    </div>
  </div>
</template>

<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
