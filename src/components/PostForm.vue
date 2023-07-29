<template>
  <form class="form" @submit.prevent>
    <h4>Создание поста</h4>
    <ui-input-with-model-value v-focus v-model="post.title" placeholder="Название"/>
    <ui-input-with-value v-model:value="post.body" placeholder="Описание"/>
    <!--    <ui-input-with-custom-value v-model:myValue="post.auth" placeholder="Автор"/>-->
    <ui-button @click="createPost" class="button-send">Отправить</ui-button>
  </form>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      post: {
        title: "",
        body: "",

      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post)
      this.post = {
        title: "",
        body: "",
        // auth: this.post.auth
      }
    },
  },
  watch: {
    // post(newValue) {
    //   // сработает только при создании поста
    //   console.log(newValue)
    // },
    // post: {
    //   handler(newValue) {
    //     // стаботает с массивами и объектами
    //     console.log(newValue)
    //   },
    //   deep: true
    // }
  }

}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.button-send {
  margin-top: 16px;
  align-self: flex-end;
  color: teal;
  border-color: teal;
}

</style>