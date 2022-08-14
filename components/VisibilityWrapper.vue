<template>
  <div @click="$emit('click')">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'VisibilityWrapper',
  showController: {
    resolve: null
  },
  methods: {
    open() {
      const promise = new Promise(resolve => {
        this.$options.showController.resolve = resolve
      })

      return promise
    },
    success() {
      this.$emit('visible', true)
      this.$options.showController.resolve(true)
    },
    close() {
      this.$emit('visible', false)
      this.$options.showController.resolve(false)
    }
  }
}
</script>

<style scoped>

</style>
