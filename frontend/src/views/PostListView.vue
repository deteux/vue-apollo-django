<template>
  <div
    class="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 gap-5"
  >
    <div
      v-for="post in publishedPosts"
      :key="post.title"
      class="border border-gray-800 rounded-lg shadow-md bg-slate-700"
    >
      <a :to="`/blog/post/${post.id}`">
        <img class="rounded-t-lg" :src="`/dmedia/${post.avatar}`" alt="" />
      </a>
      <div class="p-5">
        <router-link :to="`/blog/post/${post.id}`">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            {{ post.title }}: {{ post.subtitle }}
          </h5>
        </router-link>
        <p class="mb-3 font-normal text-gray-300">
          {{ post.summary }}
        </p>
        <a
          :to="`/blog/post/${post.id}`"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-rose-700 rounded-lg hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-800"
        >
          Read more
          <svg
            aria-hidden="true"
            class="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "vue";

export default {
  name: "PostListView",
  components: {},
  props: {
    posts: {
      type: Array,
      required: true,
    },
    showAuthor: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const publishedPosts = computed(() => {
      return props.posts.filter((post) => post.published);
    });
    function displayableDate(date) {
      return new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        new Date(date)
      );
    }
    return { publishedPosts, displayableDate };
  },
};
</script>
<style lang="css">
.post-list {
  list-style: none;
}

.post {
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
}

.post__title {
  font-size: 1.25rem;
}

.post__description {
  color: #777;
  font-style: italic;
}

.post__tags {
  list-style: none;
  font-weight: bold;
  font-size: 0.8125rem;
}
</style>
