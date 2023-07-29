<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
  name: "UiInputWithModelValue",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value)
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

<!--<template>-->
<!--  <input :value="myValue" @input="updateInput" class="input" type="text">-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "UiInputWithCustomValue",-->
<!--  props: {-->
<!--    myValue: [String, Number]-->
<!--  },-->
<!--  methods: {-->
<!--    updateInput(event) {-->
<!--      this.$emit("update:myValue", event.target.value)-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->
