<template>
  <div class="w-full h-screen bg-night">
    <ProfileView />
  </div>
</template>
<script setup>
import ProfileView from "./ProfileView.vue";
</script>
<style lang="css">
body {
  font-family: "Inter", sans-serif;
}
.background-animate {
  background-size: 400%;
  -webkit-animation: AnimationName 3s ease-in-out infinite;
  -moz-animation: AnimationName 3s ease infinite;
  animation: AnimationName 3s ease infinite;
}
@keyframes AnimationName {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}
</style>
