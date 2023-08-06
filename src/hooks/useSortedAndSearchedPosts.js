import {ref, computed} from "vue";

export default function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref('')

  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter(post => {
      const title = post.title?.toLowerCase().includes(searchQuery.value.toLowerCase());
      const body = post.body?.toLowerCase().includes(searchQuery.value.toLowerCase());
      return title || body;
    })

  })

  return {
    sortedAndSearchedPosts, searchQuery
  }
}