<template>
  <input :value="value" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: "UiInputWithValue",
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit("update:value", event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  margin-top: 16px;
  padding: 16px;
}
</style>