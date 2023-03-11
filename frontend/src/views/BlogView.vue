<template>
  <div class="flex flex-row py-10 bg-slate-800">
    <div class="flex flex-col md:mx-auto" v-if="!loading">
      <h2 class="relative text-white text-2xl font-bold uppercase">
        Recent posts
      </h2>
      <PostListView v-if="!loading && result" :posts="result.allPosts" />
    </div>
    <div class="">You might also be interested in...</div>
    <!-- Add code here -->
  </div>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { watch } from "vue";
import PostListView from "./PostListView.vue";
// GraphQL query example
export default {
  name: "BlogView",
  components: {
    PostListView,
  },
  setup() {
    const query = gql`
      query {
        allPosts {
          id
          avatar
          summary
          title
          subtitle
          publishDate
          published
          metaDescription
          slug
          author {
            user {
              username
              firstName
              lastName
            }
          }
          tags {
            name
          }
        }
      }
    `;
    const { result, loading, error } = useQuery(query);

    watch(result, (value) => {
      console.log(value);
    });
    return {
      result,
      loading,
      error,
    };
  },
};
</script>
