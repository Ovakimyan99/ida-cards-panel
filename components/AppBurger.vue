<template>
  <div class="app-burger-wrapper" @click="$emit('click')">
    <div class="app-burger" :class="{ active }">
      <span class="app-burger-line app-burger__top" />
      <span class="app-burger-line app-burger__middle" />
      <span class="app-burger-line app-burger__bottom" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppBurger',
  data() {
    return {
      active: false
    }
  },
  methods: {
    changeState() {
      this.active = !this.active
    }
  }
}
</script>

<style scoped lang="scss">
@use "@/assets/styles/_colors.scss";
@use "@/assets/styles/_params.scss";

.app-burger {
  position: relative;
  transition: all .3s ease;
  cursor: pointer;
  height: 100%;

  &-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 13px;
    padding: 10px 8px;
    box-shadow: colors.$input-shadow;
    border-radius: params.$substrate-border-radius;
  }

  &-line {
    transition: transform .3s ease,background .3s ease,opacity .3s ease,top .3s ease;
    background-color: colors.$text;
    position: absolute;
    display: block;
    height: 2px;
    border-radius: 10px;
    top: 0;
    right: 0;
    left: 0;
    margin: auto;
  }

  &__top {
    top: 0;
  }

  &.active &__top {
    top: 50%;
    transform: rotate(45deg);
  }

  &__middle {
    top: 50%;
    transform: translateY(-50%);
  }

  &.active &__middle {
    opacity: 0;
  }

  &__bottom {
    top: 100%;
    transform: translateY(-100%);
  }

  &.active &__bottom {
    top: 50%;
    transform: rotate(-45deg);
  }
}
</style>
