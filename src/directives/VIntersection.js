export default {
    name: "intersection",
    mounted(el, binding) {
        // console.log(el, binding);
        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }
        const callback = (entries) => {
            // TODO binding.value.page < binding.value.totalPages
            if (entries[0].isIntersecting) {
                binding.value.loadMorePosts();
            }
        };
        const observer = new IntersectionObserver(callback, options);
        observer.observe(el)
    }
}