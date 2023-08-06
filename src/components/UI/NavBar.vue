<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar-btns">
      <ui-button class="navbar-btn" @click="$router.push('/about')">О сайте</ui-button>
      <ui-button class="navbar-btn" @click="$router.push('/posts')">Посты</ui-button>
      <ui-button class="navbar-btn" @click="$router.push('/store')">Store</ui-button>
      <ui-button class="navbar-btn" @click="$router.push('/composition')">Composition</ui-button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: #019797;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 20px;
}

.navbar-btns {
  margin-left: auto;
}

.navbar-btn.navbar-btn {
  margin-left: 8px;
  background-color: #a0a0a0;
}

</style>