<template>
  <div>
    <h1>Страница с постами</h1>
    <ui-input-with-model-value v-focus v-model="searchQuery" placeholder="Поиск..."/>
    <div class="app__buttons">
      <ui-select v-model="selectedSort" :options="sortOptions"/>
    </div>

    <ui-modal v-model:show="dialogVisible"></ui-modal>
    <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts"/>
    <div v-else>Идёт загрузка ...</div>
  </div>
</template>

<script>
import PostList from "@/components/PostList";
import usePosts from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";


export default {
  components: {PostList},
  data() {
    return {
      dialogVisible: false,
      sortOptions: [{id: "title", title: "По названию"}, {id: "body", title: "По содержимому"}],
    }
  },
  setup() {
    const {posts, totalPages, isPostLoading} = usePosts(10); // в {} указывается что должен вернуть этот хук, а через равно можем что то передать ему
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
    return {
      posts, totalPages, isPostLoading, sortedPosts, selectedSort, searchQuery, sortedAndSearchedPosts
    }
  }
}
</script>

<style>

.app__buttons {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.observer {
  height: 10px;
  background-color: #2c3e50;
}

</style>
