import {ref, computed} from "vue";

export default function useSortedPosts(posts) {
  const selectedSort = ref('')
  const sortedPosts = computed(() => {
    return [...posts.value].sort((post1, post2) => { // берет 2 эелемента массива по порядку
      return post1[selectedSort.value]?.localeCompare(post2[selectedSort.value]) // функция, с помощью которой мы отсортировываем массив по алфавиту (по title или body)
    })
  })

  return {
    selectedSort, sortedPosts
  }
}