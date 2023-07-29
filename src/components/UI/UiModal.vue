<template>
  <div class="ui-modal" v-if="show" @click="hideModal">
    <div @click.stop class="ui-modal__content">
      <slot/>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "UiModal",
  mixins: [toggleMixin],
}
</script>

<style scoped>
.ui-modal {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.ui-modal__content {
  margin: auto;
  background-color: white;
  border-radius: 12px;
  min-width: 300px;
  min-height: 50px;
  padding: 20px;
}

</style>