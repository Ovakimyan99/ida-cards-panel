<template>
  <li class="card">
    <button class="card-del">
      <img class="card-del__img" src="@/assets/images/delete.svg" alt="delete card" title="delete card">
    </button>
    <picture class="card-img-wrapper">
      <img class="card-img" :src="imgUrl" :alt="name" :title="name">
    </picture>
    <span class="card-info">
      <span class="card-info__title">{{ name }}</span>
      <p
        v-if="description"
        class="card-info__description"
      >
        {{ description }}
      </p>
      <span class="card-info__price">{{ $number.crushing(price) }} руб.</span>
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
  }
}
</script>

<style scoped lang="scss">
@use "sass:color";
@use "@/assets/styles/_params.scss";
@use "@/assets/styles/_colors.scss";
@use "@/assets/styles/_mixins.scss";

.card {
  position: relative;
  box-shadow: colors.$substrate-shadow;
  border-radius: params.$substrate-border-radius;
  overflow: visible;
  height: max-content;

  &-del {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(9px, -8px);
    border-radius: 10px;
    background-color: colors.$important;
    padding: 9px;
    cursor: pointer;
    border: none;
    z-index: 2;
    transition: 0.3s ease-out;

    @include mixins.events-btn-bg(colors.$important, 10%, 5%);

    &__img {
      height: 16px;
    }
  }

  &:hover &-del {
    display: flex;
  }

  &-img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &-wrapper {
      height: 200px;
      display: block;
      overflow: hidden;
      position: relative;
      border-radius: params.$substrate-border-radius params.$substrate-border-radius 0 0;
    }
  }

  &-info {
    padding: 16px 16px 24px;
    color: colors.$text;
    display: flex;
    flex-direction: column;
    background-color: colors.$substrate-fon;
    border-radius: 0 0 params.$substrate-border-radius params.$substrate-border-radius;

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
