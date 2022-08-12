<template>
  <li class="card">
    <picture class="card-img-wrapper">
      <img class="card-img" :src="imgUrl" :alt="name" :title="name">
    </picture>
    <span class="card-info">
      <span class="card-info__title">{{ name }}</span>
      <p v-if="description" class="card-info__description">{{ description }}</p>
      <span class="card-info__price">{{ formattedPrice(price) }} руб.</span>
    </span>
  </li>
</template>

<script>
export default {
  name: 'PanelCard',
  props: {
    name: {
      type: String,
      required: true
    },
    imgUrl: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    price: {
      type: Number,
      required: true
    }
  },
  methods: {
    formattedPrice(val) {
      return val
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_params.scss";
@use "@/assets/styles/_colors.scss";

.card {
  box-shadow: colors.$substrate-shadow;
  border-radius: params.$substrate-border-radius;
  overflow: hidden;
  height: max-content;

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &-wrapper {
      height: 200px;
      display: block;
      overflow: hidden;
      position: relative;
    }
  }

  &-info {
    padding: 16px 16px 24px;
    color: colors.$text;
    display: flex;
    flex-direction: column;
    background-color: colors.$substrate-fon;

    &__title {
      font-weight: 600;
      font-size: 20px;
      line-height: 1.2;
    }

    &__description {
      margin-top: 16px;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.1;
      margin-bottom: 0;
    }

    &__price {
      margin-top: 32px;
      font-weight: 600;
      font-size: 24px;
      line-height: 1.2;
    }
  }
}
</style>
