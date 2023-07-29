<template>
  <div class="post-item">
    <div>
      <div><strong>Номер:</strong> {{ post.id }}</div>
      <div><strong>Название:</strong> {{ post.title }}</div>
      <div><strong>Описание:</strong> {{ post.body }}</div>
<!--      <div><strong>Автор:</strong> {{ post.auth }}</div>-->
    </div>
    <div class="post_buttons">
      <ui-button @click="$router.push(`/posts/${post.id}`)" class="button">Открыть</ui-button>
      <ui-button @click="$emit('remove', post)" class="button">Удалить</ui-button>
    </div>
  </div>

</template>

<script>

export default {
  emits: ["remove"],
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.post-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post_buttons {
  display: flex;
}

.button {
  color: #a70000;
  border-color: #a70000;
  margin-left: 12px;
}


</style>