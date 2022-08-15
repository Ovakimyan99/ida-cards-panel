<template>
  <div class="loading-wrapper">
    <div class="loading" />
  </div>
</template>

<script>
export default {
  name: 'AppLoader'
}
</script>

<style scoped>
.loading-wrapper {
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loading {
  display: inline-block;
  width: calc(100% - 8px);
  height: calc(100% - 8px);
  border: 4px solid rgba(9, 133, 81, 0.705);
  border-radius: 50%;
  border-top-color: #158876;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
