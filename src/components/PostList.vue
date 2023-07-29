<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="post-list" tag="ul">
      <li class="post" v-for="post in posts" :key="post.id">
        <post-item :post="post" @click="$emit('remove', post)"/>
      </li>
    </transition-group>


  </div>
  <h3 v-else>Список постов пуст</h3>


  <!--  если нужно оставить DOM-дереве-->
  <!--  <div v-show="posts.length">-->
  <!--    <h3>Список постов</h3>-->
  <!--    <ul>-->
  <!--      <li class="post" v-for="post in posts" :key="post.id">-->
  <!--        <post-item :post="post" @click="$emit('remove', post)"/>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </div>-->
  <!--  <h3 v-show="posts.length === 0">Список постов пуст</h3>-->

</template>

<script>
import PostItem from "@/components/PostItem";

export default {
  emits: ["remove"],
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style scoped>
.post {
  border: 2px solid teal;
  margin-top: 16px;
  padding: 16px;
}

.post-list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all .5s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.post-list-move {
  transition: transform 0.5s ease;
}
</style>