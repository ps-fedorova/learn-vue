<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "UiButton"
}
</script>

<style scoped>
.button {
  padding: 8px 16px;
  background: none;
  border: 1px solid;
}
</style>