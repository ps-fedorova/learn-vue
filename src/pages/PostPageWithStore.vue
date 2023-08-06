<template>
  <div>

    <!--    <h2>{{$store.state.likes}}</h2>-->
    <!--    <h2>{{$store.getters.doubleLikes}}</h2>-->
    <!--    <div>-->
    <!--      <ui-button @click="$store.commit('incrementLikes')">Лайк</ui-button>-->
    <!--      <ui-button @click="$store.commit('decrementLikes')">Дизлайк</ui-button>-->
    <!--    </div>-->


    <h1>Страница с постами</h1>
        <ui-input-with-model-value v-focus :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск..."/>
    <div class="app__buttons">
      <ui-button @click="showModal">Создать пост</ui-button>
            <ui-select :options="sortOptions" :model-value="selectedSort" @update:model-value="setSelectedSort"/>
    </div>

    <ui-modal v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </ui-modal>
    <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost"/>
    <div v-else>Идёт загрузка ...</div>
    <div v-intersection="{page, totalPages, loadMorePosts}" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import {mapState, mapGetters, mapActions, mapMutations} from "vuex";

export default {
  components: {PostForm, PostList},
  data() {
    return {
      posts: [],
      dialogVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: "posts/setPage",
      setSearchQuery: "posts/setSearchQuery",
      setSelectedSort: "posts/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "posts/loadMorePosts",
      fetchPosts: "posts/fetchPosts",
    }),

    showModal() {
      this.dialogVisible = true;
    },
    createPost(newPost) {
      this.posts.push(newPost);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },

  },
  mounted() {
    this.fetchPosts();
  },

  computed: {
    ...mapState({
      posts: state => state.posts.posts,
      searchQuery: state => state.posts.searchQuery,
      selectedSort: state => state.posts.selectedSort,
      totalPages: state => state.posts.totalPages,
      page: state => state.posts.page,
      limit: state => state.posts.limit,
      sortOptions: state => state.posts.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: "posts/sortedPosts",
      sortedAndSearchedPosts: "posts/sortedAndSearchedPosts",
    })
  },

  watch: {}
}
</script>

<style>

.app__buttons {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}

.page_wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  margin: 5px;
  min-width: 40px;
  text-align: center;
}

.current_page {
  border: 2px solid teal;
}

.changePage-button.changePage-button {
  border: none;
}

.observer {
  height: 10px;
  background-color: #2c3e50;
}

</style>
