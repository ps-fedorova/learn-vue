import axios from "axios";

export const postModule = {
  state: () => ({
    posts: [],

    isPostLoading: false,

    modifierValue: "",
    selectedSort: "",
    searchQuery: "",

    totalPages: 0,
    page: 1,
    limit: 10,

    sortOptions: [{id: "title", title: "По названию"}, {id: "body", title: "По содержимому"}],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]);
      });
    },
    sortedAndSearchedPosts(state, getters) {
      return getters.sortedPosts.filter(post => {
        const title = post.title?.toLowerCase().includes(state.searchQuery.toLowerCase());
        const body = post.body?.toLowerCase().includes(state.searchQuery.toLowerCase());
        return title || body;
      })
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool
    },
    setPage(state, page) {
      state.page = page
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSort = selectedSort
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery
    },
  },
  actions: {
    async fetchPosts({commit, state}) {
      try {
        commit("setLoading", true);
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: state.page,
            _limit: state.limit,
          }
        });
        commit("setTotalPages", Math.ceil(response.headers["x-total-count"] / state.limit));
        commit("setPosts", response.data)
      } catch (error) {
        console.log(error)
      } finally {
        commit("setLoading", false);
      }
    },
    async loadMorePosts({commit, state}) {
      try {
        commit("setPage", state.page + 1);
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _page: state.page,
            _limit: state.limit,
          }
        });
        commit("setTotalPages", Math.ceil(response.headers["x-total-count"] / state.limit));
        commit("setPosts", [...state.posts, ...response.data]);
      } catch (error) {
        console.log(error)
      }
    },
  },
  namespaced: true
}