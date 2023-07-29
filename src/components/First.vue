<template>
  <div>Количество лайков {{ likes }}
    <button v-on:click="addLike">like</button>
  </div>
  <div>Количество дизлайков {{ dislikes }}
    <button @click="addDislike">dislike</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0
    }
  },
  methods: {
    addLike() {
      this.likes += 1
    },
    addDislike() {
      this.dislikes += 1
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 20px;
}
</style>
