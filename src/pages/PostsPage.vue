<template>
  <div>
    <!--    <input type="text" v-model.trim.number="modifierValue">-->
    <h1>Страница с постами</h1>
    <ui-input-with-model-value v-focus v-model="searchQuery" placeholder="Поиск..."/>
    <div class="app__buttons">
      <ui-button @click="showModal">Создать пост</ui-button>
      <ui-select v-model="selectedSort" :options="sortOptions"/>
    </div>

    <ui-modal v-model:show="dialogVisible">
      <post-form @create="createPost"/>
    </ui-modal>
    <post-list v-if="!isPostLoading" :posts="sortedAndSearchedPosts" @remove="removePost"/>
    <div v-else>Идёт загрузка ...</div>
<!--    <div ref="observerRef" class="observer"></div>-->
    <div v-intersection="{page, totalPages, loadMorePosts}" class="observer"></div>
    <!--    <ul class="page_wrapper">-->
    <!--      <li-->
    <!--          v-for="pageNumber in totalPages"-->
    <!--          :key="pageNumber"-->
    <!--          class="page"-->
    <!--          :class="{-->
    <!--            'current_page': page === pageNumber-->
    <!--          }"-->
    <!--      >-->
    <!--        <ui-button @click="changePage(pageNumber)" class="changePage-button">-->
    <!--          {{ pageNumber }}-->
    <!--        </ui-button>-->
    <!--      </li>-->
    <!--    </ul>-->
  </div>
</template>

<script>
import axios from "axios";
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {PostForm, PostList},
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,

      modifierValue: "",
      selectedSort: "",
      searchQuery: "",

      totalPages: 0,
      page: 1,
      limit: 10,

      sortOptions: [{id: "title", title: "По названию"}, {id: "body", title: "По содержимому"}],
    }
  },
  methods: {
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
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit);
        this.posts = response.data;
      } catch (error) {
        console.log(error)
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: this.page,
            _limit: this.limit,
          }
        });
        this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit);
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        console.log(error)
      }
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // }

  },
  mounted() {
    this.fetchPosts();

    // const options = {
    //   rootMargin: '0px',
    //   threshold: 1.0
    // }
    // const callback = (entries) => {
    //   if (entries[0].isIntersecting && this.page < this.totalPages) {
    //     this.loadMorePosts();
    //   }
    // };
    // const observer = new IntersectionObserver(callback, options);
    // observer.observe(this.$refs.observerRef)
  },

  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]);
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => {
        const title = post.title?.toLowerCase().includes(this.searchQuery.toLowerCase());
        const body = post.body?.toLowerCase().includes(this.searchQuery.toLowerCase());
        return title || body;
      })
    }
  },

  watch: {
    // selectedSort(id) {
    //   this.posts.sort((post1, post2) => {  // в данном случае функция sort мутирует исходный массив
    //     return post1[id]?.localeCompare(post2[id]);
    //   });
    // },
    // page() {
    //   this.fetchPosts();
    // }
  }
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
