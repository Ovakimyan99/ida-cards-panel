<template>
  <div v-show="showModal">
    <slot />
  </div>
</template>

<script>
import { disableScroll, enablesScroll } from '@/core/windowScroll'

export default {
  name: 'VisibilityWrapper',
  showController: {
    resolve: null
  },
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    open() {
      disableScroll()
      this.showModal = true
      let res
      const promise = new Promise(resolve => {
        res = resolve
      })

      this.$options.showController.resolve = res
      return promise
    },
    success() {
      if (!this.$options.showController.resolve) return

      this.hideModal()
      this.$options.showController.resolve(true)
    },
    close() {
      if (!this.$options.showController.resolve) return

      this.hideModal()
      this.$options.showController.resolve(false)
    },
    hideModal() {
      this.showModal = false
      enablesScroll()
    }
  }
}
</script>

<style scoped>

</style>
