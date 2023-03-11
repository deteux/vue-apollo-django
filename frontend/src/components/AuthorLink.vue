<template>
    <router-link class="text-link"
        :to="`/author/${author.user.username}`"
    >{{ displayName }}</router-link>
  </template>

  <script>
  import {  computed } from 'vue'

  export default {
    name: 'AuthorLink',
    props: {
      author: {
        type: Object,
        required: true,
      },
    },
    setup(){
      const displayName = computed(()=> {
        return (
          this.author.user.firstName &&
          this.author.user.lastName &&
          `${this.author.user.firstName} ${this.author.user.lastName}`
        ) || `${this.author.user.username}`
      })
      return displayName
    }
  }
  </script>